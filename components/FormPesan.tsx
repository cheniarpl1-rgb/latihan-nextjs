// components/FormPesan.tsx - FULL
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Event } from "@/data/events";

export default function FormPesan({
  event,
  namaAwal,
}: {
  event: Event;
  namaAwal: string;
}) {
  const router = useRouter();
  const [nama, setNama] = useState(namaAwal);
  const [jumlah, setJumlah] = useState(1);

  function handlePesan(e: React.FormEvent) {
    e.preventDefault();
    const lama = JSON.parse(localStorage.getItem("pesanan") ?? "[]");
    const blokBaru = {
      id: Date.now(),
      eventId: event.id,
      judul: event.judul,
      tanggal: event.tanggal,
      lokasi: event.lokasi,
      nama,
      jumlah,
      total: event.harga * jumlah,
    };
    lama.push(blokBaru);

    // Simpan ke 2 tempat biar dua-duanya bisa baca
    localStorage.setItem("pesanan", JSON.stringify(lama));
    // INI KUNCINYA - simpan juga ke cookies biar hitungPesanan di server bisa baca
    document.cookie = `pesanan=${encodeURIComponent(JSON.stringify(lama))}; path=/; max-age=86400`;
    document.cookie = `nama=${encodeURIComponent(nama)}; path=/; max-age=86400`;

    router.push("/pesanan");
    router.refresh();
  }

  const sisa = (event.kuota ?? 0) - (event.terisi ?? 0);
  return (
    <form
      onSubmit={handlePesan}
      className="mt-6 space-y-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
    >
      <h3 className="font-bold">Pesan Tiket</h3>
      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
        placeholder="Nama kamu"
        className="w-full rounded-lg bg-[#0F172A] px-3 py-2 text-white ring-1 ring-white/20 outline-none"
      />
      <input
        type="number"
        min={1}
        max={Math.max(1, sisa)}
        value={jumlah}
        onChange={(e) => setJumlah(Number(e.target.value))}
        className="w-full rounded-lg bg-[#0F172A] px-3 py-2 text-white ring-1 ring-white/20 outline-none"
      />
      <p className="text-sm text-slate-300">
        Total: Rp {(event.harga * jumlah).toLocaleString("id-ID")} • Sisa {sisa}{" "}
        tiket
      </p>
      <button
        type="submit"
        className="w-full rounded-xl bg-[#FBBF24] py-3 font-black text-black"
      >
        Pesan Sekarang
      </button>
    </form>
  );
}
