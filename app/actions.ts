// app/actions.ts - FULL MISI 22
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function simpanPesanan(formData: FormData) {
  const event_id = Number(formData.get("event_id"));
  const nama = String(formData.get("nama") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const jumlah = Number(formData.get("jumlah") ?? 1);

  if (!event_id || !nama || !email || jumlah < 1) return;

  // 1. Ambil event buat tau harga & sisa kuota
  const { data: event } = await supabaseAdmin
    .from("events")
    .select("harga, kuota, terisi")
    .eq("id", event_id)
    .single();
  if (!event) return;
  if ((event.terisi ?? 0) + jumlah > (event.kuota ?? 0)) return;

  // 2. Simpan ke tabel pesanan
  const { error } = await supabaseAdmin.from("pesanan").insert({
    event_id,
    nama,
    email,
    jumlah,
    total: event.harga * jumlah,
  });
  if (error) throw new Error("Gagal simpan pesanan: " + error.message);

  // 3. Tambah terisi di tabel events
  await supabaseAdmin
    .from("events")
    .update({ terisi: (event.terisi ?? 0) + jumlah })
    .eq("id", event_id);

  // 4. Simpan email ke cookie biar tombol Batalkan tau ini pesanan milik siapa
  const cookieStore = await cookies();
  cookieStore.set("email", email, { path: "/" });
  cookieStore.set("nama", nama, { path: "/" });

  revalidatePath("/pesanan");
  revalidatePath(`/event/${event_id}`);
  redirect("/pesanan");
}

export async function batalkanPesanan(formData: FormData) {
  const nomor = Number(formData.get("nomor"));
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  if (!nomor || !email) return;

  // 1. Ambil pesanan-nya dulu, cuma boleh batalin punya sendiri (email sama)
  const { data: pesanan } = await supabaseAdmin
    .from("pesanan")
    .select("event_id, jumlah")
    .eq("nomor", nomor)
    .eq("email", email)
    .single();
  if (!pesanan) return;

  // 2. Hapus dari tabel pesanan
  await supabaseAdmin.from("pesanan").delete().eq("nomor", nomor);

  // 3. Kembalikan kuota: kurangi terisi di events
  const { data: event } = await supabaseAdmin
    .from("events")
    .select("terisi")
    .eq("id", pesanan.event_id)
    .single();
  if (event) {
    await supabaseAdmin
      .from("events")
      .update({ terisi: Math.max(0, (event.terisi ?? 0) - pesanan.jumlah) })
      .eq("id", pesanan.event_id);
  }

  revalidatePath("/pesanan");
  revalidatePath(`/event/${pesanan.event_id}`);
}
