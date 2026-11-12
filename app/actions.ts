"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { pesanan } from "@/data/pesanan";
import { events } from "@/data/events";

export type HasilPesanan = {
  berhasil: boolean;
  pesan: string;
  galat: {
    nama?: string;
    email?: string;
    jumlah?: string;
  };
  isian: {
    nama: string;
    email: string;
  };
};

export async function pesanTiket(
  prevState: HasilPesanan,
  formData: FormData,
): Promise<HasilPesanan> {
  const eventId = Number(formData.get("eventId"));
  const nama = String(formData.get("nama") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const jumlah = Number(formData.get("jumlah") || 1);

  let galat: HasilPesanan["galat"] = {};

  if (nama.length < 3) {
    galat.nama = "Nama minimal 3 huruf.";
  }

  if (!email.includes("@")) {
    galat.email = "Email harus memuat tanda @.";
  }

  if (jumlah < 1 || jumlah > 5) {
    galat.jumlah = "Maksimal 5 tiket per pesanan.";
  }

  if (Object.keys(galat).length > 0) {
    return {
      berhasil: false,
      pesan: "Periksa lagi isian yang merah.",
      galat,
      isian: { nama, email },
    };
  }

  console.log("Pesanan masuk:", nama, jumlah);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simpan nama ke cookie selama 30 hari
  const toples = await cookies();
  toples.set("nama", nama, { maxAge: 60 * 60 * 24 * 30 });

  revalidatePath("/event");
  revalidatePath(`/event/${eventId}`);
  revalidatePath("/pesanan");

  return {
    berhasil: true,
    pesan: `Pesanan #1 tersimpan: ${jumlah} tiket untuk ${nama}.`,
    galat: {},
    isian: { nama: "", email: "" },
  };
}

export async function batalkanPesanan(formData: FormData) {
  const nomor = Number(formData.get("nomor"));
  const namaSaya = (await cookies()).get("nama")?.value;
  const i = pesanan.findIndex((p) => p.nomor === nomor);

  if (i === -1 || pesanan[i].nama !== namaSaya) return;

  const [batal] = pesanan.splice(i, 1);
  const event = events.find((e) => e.id === batal.eventId);
  if (event) event.terisi -= batal.jumlah;

  revalidatePath("/event");
  revalidatePath(`/event/${batal.eventId}`);
  revalidatePath("/pesanan");
}
