"use server";

import { redirect } from "next/navigation";
import { EVENTS } from "@/data/events";

export type HasilEvent = {
  pesan: string;
  galat: { [k: string]: string };
  isian: { [k: string]: string };
};

export async function simpanEvent(
  _: HasilEvent,
  form: FormData,
): Promise<HasilEvent> {
  const isian: { [k: string]: string } = {
    id: String(form.get("id") ?? ""),
    judul: String(form.get("judul") ?? ""),
    kategori: String(form.get("kategori") ?? ""),
    tanggal: String(form.get("tanggal") ?? ""),
    lokasi: String(form.get("lokasi") ?? ""),
    harga: String(form.get("harga") ?? "0"),
    kuota: String(form.get("kuota") ?? ""),
    gambar: String(form.get("gambar") ?? ""),
  };

  const galat: { [k: string]: string } = {};
  if (!isian.judul) galat.judul = "Judul wajib diisi";
  if (!isian.kategori) galat.kategori = "Kategori wajib diisi";
  if (!isian.tanggal) galat.tanggal = "Tanggal wajib diisi";
  if (!isian.lokasi) galat.lokasi = "Lokasi wajib diisi";
  if (!isian.kuota) galat.kuota = "Kuota wajib diisi";

  if (Object.keys(galat).length > 0) {
    return { pesan: "Masih ada yang salah", galat, isian };
  }

  if (isian.id) {
    const e = EVENTS.find((x) => x.id === Number(isian.id));
    if (e) {
      e.judul = isian.judul;
      e.kategori = isian.kategori;
      e.tanggal = isian.tanggal;
      e.lokasi = isian.lokasi;
      e.harga = Number(isian.harga);
      e.kuota = Number(isian.kuota);
      e.gambar = isian.gambar;
    }
    redirect("/admin?info=Event berhasil diubah");
  } else {
    const idBaru = Math.max(...EVENTS.map((x) => x.id)) + 1;
    EVENTS.push({
      id: idBaru,
      judul: isian.judul,
      kategori: isian.kategori,
      tanggal: isian.tanggal,
      lokasi: isian.lokasi,
      harga: Number(isian.harga),
      kuota: Number(isian.kuota),
      terisi: 0,
      gambar: isian.gambar,
    });
    redirect("/admin?info=Event berhasil ditambah");
  }
}

export async function hapusEvent(form: FormData) {
  const id = Number(form.get("id"));
  const index = EVENTS.findIndex((x) => x.id === id);
  if (index !== -1) EVENTS.splice(index, 1);
  redirect("/admin?info=Event berhasil dihapus");
}
