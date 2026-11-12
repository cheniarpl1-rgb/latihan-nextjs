"use server";

import { pesanan } from "@/data/pesanan";
import { events } from "@/data/events";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function pesanTiket(formData: FormData) {
  // Ambil nilai dari formData dengan aman
  const eventId = Number(formData?.get ? formData.get("eventId") : 1);
  const nama =
    (formData?.get ? (formData.get("nama") as string) : "Anonim") || "Anonim";
  const jumlah = Number(formData?.get ? formData.get("jumlah") : 1) || 1;

  const eventDipilih = events.find((e) => e.id === eventId);
  const judulEvent = eventDipilih ? eventDipilih.judul : "Event Sekolah";
  const hargaEvent = eventDipilih ? eventDipilih.harga : 0;
  const totalHarga = hargaEvent * jumlah;

  const nomorPesanan =
    pesanan.length > 0 ? pesanan[pesanan.length - 1].nomor + 1 : 1;

  pesanan.push({
    nomor: nomorPesanan,
    eventId: eventId,
    judul: judulEvent,
    nama: nama,
    jumlah: jumlah,
    total: totalHarga,
  } as any);

  const cookieStore = await cookies();
  cookieStore.set("nama", nama, {
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  revalidatePath("/pesanan");
  revalidatePath("/event");
  revalidatePath(`/event/${eventId}`);

  redirect("/pesanan");
}

export async function batalkanPesanan(formData: FormData) {
  const nomor = Number(formData?.get ? formData.get("nomor") : 0);
  const index = pesanan.findIndex((p) => p.nomor === nomor);

  if (index !== -1) {
    pesanan.splice(index, 1);
  }

  revalidatePath("/pesanan");
  revalidatePath("/event");
}
