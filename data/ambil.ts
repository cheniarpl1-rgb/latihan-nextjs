// data/ambil.ts - FULL, UDAH ADA buatPesanan BUAT LANGKAH 10
import { cache } from "react";
import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Pesanan } from "@/data/pesanan";
import type { Event } from "@/data/events";

export const ambilEvent = cache(async (id: number): Promise<Event | null> => {
  const { data } = await supabaseAdmin
    .from("events")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return data as Event | null;
});

export async function ambilSemuaEvent(): Promise<Event[]> {
  const { data } = await supabaseAdmin
    .from("events")
    .select("*")
    .order("id", { ascending: true });
  return (data ?? []) as Event[];
}

export async function ambilTerkait(
  kategoriAtauEvent: string | { kategori: string; id: number },
  id?: number,
): Promise<Event[]> {
  let kategori: string;
  let idEvent: number | undefined;

  if (typeof kategoriAtauEvent === "object") {
    kategori = kategoriAtauEvent.kategori;
    idEvent = kategoriAtauEvent.id;
  } else {
    kategori = kategoriAtauEvent;
    idEvent = id;
  }

  let query = supabaseAdmin.from("events").select("*").eq("kategori", kategori);
  if (idEvent) query = query.neq("id", idEvent);

  const { data } = await query.limit(3);
  return (data ?? []) as Event[];
}

export async function ambilPesanan(): Promise<Pesanan[]> {
  const { data } = await supabaseAdmin
    .from("pesanan")
    .select("*, events(judul)")
    .order("nomor", { ascending: false });
  return (data ?? []) as Pesanan[];
}

export async function hitungPesanan(eventId: number) {
  const { data } = await supabaseAdmin
    .from("pesanan")
    .select("jumlah")
    .eq("event_id", eventId);

  const list = data ?? [];
  return {
    jumlahPesanan: list.length,
    jumlahTiket: list.reduce((total, p) => total + (p.jumlah ?? 0), 0),
  };
}

// ===== LANGKAH 10 - NOMOR 1: PERKECIL CELAH =====
export async function buatPesanan(opts: {
  event: Event;
  nama: string;
  email: string;
  jumlah: number;
}): Promise<{ ok: boolean; pesan: string }> {
  const { event, nama, email, jumlah } = opts;

  // 1. Update terisi, TAPI cuma kalau terisi-nya masih sama kayak awal
  const { data: updateData, error: updateError } = await supabaseAdmin
    .from("events")
    .update({ terisi: (event.terisi ?? 0) + jumlah })
    .eq("id", event.id)
    .eq("terisi", event.terisi ?? 0)
    .select();

  // 2. Kalau gak ada baris yang ke-update, berarti udah direbut orang lain
  if (updateError || !updateData || updateData.length === 0) {
    return { ok: false, pesan: "Tiket baru saja berubah, coba lagi." };
  }

  // 3. Baru simpan pesanannya kalau update-nya berhasil
  const { error: pesanError } = await supabaseAdmin.from("pesanan").insert({
    event_id: event.id,
    nama,
    email,
    jumlah,
  });

  if (pesanError) {
    return { ok: false, pesan: "Gagal menyimpan pesanan, coba lagi." };
  }

  return { ok: true, pesan: "Pesanan berhasil!" };
}
