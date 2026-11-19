// app/pesanan/page.tsx - FULL
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Pesanan = {
  id: number;
  eventId: number;
  judul: string;
  tanggal: string;
  lokasi: string;
  nama: string;
  jumlah: number;
  total: number;
};

export default function PesananPage() {
  const [list, setList] = useState<Pesanan[]>([]);
  const [sudahCek, setSudahCek] = useState(false);

  useEffect(() => {
    // BACA DARI TEMPAT YANG SAMA PERSIS: localStorage key "pesanan"
    const data = JSON.parse(localStorage.getItem("pesanan") ?? "[]");
    setList(data);
    setSudahCek(true);
  }, []);

  if (!sudahCek) return null;

  if (list.length === 0) {
    return (
      <main className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-black">Belum Ada Pesanan</h1>
          <p className="mt-2 text-slate-300">Yuk pesan event dulu.</p>
          <Link
            href="/event"
            className="mt-5 inline-block rounded-xl bg-[#FBBF24] px-5 py-3 font-black text-black"
          >
            Lihat Event
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-3xl font-black">Pesanan Kamu</h1>
        {/* INI BLOKNYA - AKAN MUNCUL SATU-SATU TIAP KAMU PESAN */}
        {list.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <h2 className="font-bold text-lg">{p.judul}</h2>
            <p className="text-sm text-slate-300">
              {p.tanggal} • {p.lokasi}
            </p>
            <p className="mt-1 text-sm">
              Nama: {p.nama} • {p.jumlah} tiket
            </p>
            <p className="font-black text-[#FBBF24]">
              Rp {p.total.toLocaleString("id-ID")}
            </p>
            <Link
              href={`/event/${p.eventId}`}
              className="mt-2 inline-block text-sm text-[#14B8A6] underline"
            >
              Lihat Event Lagi
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
