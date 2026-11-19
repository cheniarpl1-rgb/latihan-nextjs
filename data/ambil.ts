// data/ambil.ts - FULL, UDAH DIBENERIN IMPORT-NYA
import { cache } from "react";
import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Pesanan } from "@/data/pesanan";
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

export async function hitungPesanan(eventId: number) {
  const { data } = await supabaseAdmin
    .from("pesanan")
    .select("jumlah")
    .eq("event_id", eventId);
  const list = data ?? [];
  return {
    jumlahPesanan: list.length,
    // INI YANG TADI ERROR - UDAH DIKASIH TIPE BIAR GAK ANY LAGI
    jumlahTiket: list.reduce(
      (total: number, p: { jumlah: number | null }) => total + (p.jumlah ?? 0),
      0,
    ),
  };
}

export async function ambilPesanan(): Promise<Pesanan[]> {
  const { data, error } = await supabaseAdmin
    .from("pesanan")
    .select("*, events(judul)")
    .order("nomor", { ascending: false });
  if (error) throw new Error("Gagal memuat pesanan: " + error.message);
  return data as Pesanan[];
}
