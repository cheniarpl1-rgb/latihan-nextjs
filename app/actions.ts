// app/actions.ts - FULL
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Pesanan = {
  eventId: number;
  nama: string;
  jumlah: number;
  tanggalPesan: string;
};

export async function simpanPesanan(formData: FormData) {
  const eventId = Number(formData.get("eventId"));
  const nama = String(formData.get("nama") ?? "").trim();
  const jumlah = Number(formData.get("jumlah") ?? 1);

  if (!eventId || !nama || jumlah < 1) {
    return;
  }

  const cookieStore = await cookies();
  const lama = cookieStore.get("pesanan")?.value ?? "[]";
  let list: Pesanan[] = [];
  try {
    list = JSON.parse(lama);
  } catch {
    list = [];
  }

  list.push({
    eventId,
    nama,
    jumlah,
    tanggalPesan: new Date().toISOString(),
  });

  // Simpen nama juga biar di halaman detail keisi otomatis kayak punyamu
  cookieStore.set("nama", nama, { path: "/" });
  // INI KUNCINYA - nyimpen ke cookies dengan nama "pesanan"
  cookieStore.set("pesanan", JSON.stringify(list), { path: "/" });

  redirect("/pesanan");
}
