"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type HasilEvent = {
  pesan: string;
  galat: Record<string, string>;
  isian: Record<string, string>;
};

// Sesuaiin sama data kamu - ini yang dipake Admin page juga
import { EVENTS } from "@/data/events";

function ambilIsian(form: FormData): Record<string, string> {
  const o: Record<string, string> = {};
  form.forEach((v, k) => (o[k] = String(v)));
  return o;
}

export async function simpanEvent(
  _prev: HasilEvent,
  form: FormData,
): Promise<HasilEvent> {
  const isian = ambilIsian(form);
  const galat: Record<string, string> = {};

  if (!isian.judul) galat.judul = "Judul wajib diisi";
  if (!isian.kategori) galat.kategori = "Kategori wajib diisi";
  if (!isian.tanggal) galat.tanggal = "Tanggal wajib diisi";
  if (!isian.lokasi) galat.lokasi = "Lokasi wajib diisi";
  if (!isian.kuota) galat.kuota = "Kuota wajib diisi";
  if (isian.harga && Number(isian.harga) < 0)
    galat.harga = "Harga tidak boleh minus";

  // B: kuota tidak boleh di bawah tiket terisi
  const lama = EVENTS.find((e: any) => String(e.id) === isian.id);
  if (lama && isian.kuota && Number(isian.kuota) < Number(lama.terisi || 0)) {
    galat.kuota = `Kuota tidak boleh kurang dari tiket terisi (${lama.terisi})`;
  }

  // Kalau ada galat, isian balik lagi, gak hilang
  if (Object.keys(galat).length > 0) {
    return { pesan: "", galat, isian };
  }

  if (lama) {
    // UBAH
    lama.judul = isian.judul;
    lama.kategori = isian.kategori;
    lama.tanggal = isian.tanggal;
    lama.lokasi = isian.lokasi;
    lama.harga = Number(isian.harga || 0);
    lama.kuota = Number(isian.kuota);
    lama.gambar = isian.gambar || lama.gambar || "";
  } else {
    // TAMBAH
    EVENTS.push({
      id: String(Date.now()),
      judul: isian.judul,
      kategori: isian.kategori,
      tanggal: isian.tanggal,
      lokasi: isian.lokasi,
      harga: Number(isian.harga || 0),
      kuota: Number(isian.kuota),
      terisi: 0,
      gambar: isian.gambar || "",
    } as any);
  }

  revalidatePath("/");
  revalidatePath("/event");
  revalidatePath("/admin");
  redirect("/admin?info=Event berhasil disimpan");
}

export async function hapusEvent(form: FormData) {
  const id = String(form.get("id") || "");
  const event = EVENTS.find((e: any) => String(e.id) === id);

  // C: event berpesanan tidak bisa dihapus (di Supabase ini error 23503)
  if (event && Number((event as any).terisi || 0) > 0) {
    redirect("/admin?galat=Event tidak bisa dihapus karena sudah ada pesanan");
  }

  const i = EVENTS.findIndex((e: any) => String(e.id) === id);
  if (i >= 0) EVENTS.splice(i, 1);

  revalidatePath("/");
  revalidatePath("/event");
  revalidatePath("/admin");
  redirect("/admin?info=Event berhasil dihapus");
}
