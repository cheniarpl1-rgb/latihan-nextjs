// data/ambil.ts - FULL LANGKAH 10 SELESAI
import { cache } from "react";
import { cookies } from "next/headers";
import { events } from "./events";

export const ambilEvent = cache(async (id: number) => {
  const event = events.find((e) => e.id === id);
  return event ?? null;
});

export async function ambilSemuaEvent() {
  return events;
}

export async function ambilTerkait(
  kategoriAtauEvent: string | { kategori: string; id: number },
  id?: number,
) {
  let kategori: string;
  let idEvent: number;
  if (typeof kategoriAtauEvent === "object") {
    kategori = kategoriAtauEvent.kategori;
    idEvent = kategoriAtauEvent.id;
  } else {
    kategori = kategoriAtauEvent;
    idEvent = id ?? -1;
  }
  return events
    .filter((e) => e.kategori === kategori && e.id !== idEvent)
    .slice(0, 3);
}

export const ambilEventTerkait = ambilTerkait;

// INI YANG BENER-BENER NGITUNG DARI DATA PESANAN
export async function hitungPesanan(eventId: number) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("pesanan")?.value ?? "[]";
  let list: { eventId: number; jumlah: number }[] = [];
  try {
    list = JSON.parse(decodeURIComponent(raw));
  } catch {
    list = [];
  }
  const untukEventIni = list.filter((p) => p.eventId === eventId);
  return {
    // jumlahPesanan = berapa baris pesanan
    jumlahPesanan: untukEventIni.length,
    // jumlahTiket = jumlahkan semua kolom jumlah
    jumlahTiket: untukEventIni.reduce((total, p) => total + (p.jumlah ?? 0), 0),
  };
}
