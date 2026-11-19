// components/FormPesan.tsx - FULL MISI 22
"use client";

import { useState } from "react";
import { simpanPesanan } from "@/app/actions";
import type { Event } from "@/data/events";

export default function FormPesan({
  event,
  namaAwal,
  emailAwal,
}: {
  event: Event;
  namaAwal: string;
  emailAwal: string;
}) {
  const [nama, setNama] = useState(namaAwal);
  const [email, setEmail] = useState(emailAwal);
  const [jumlah, setJumlah] = useState(1);
  const sisa = (event.kuota ?? 0) - (event.terisi ?? 0);

  return (
    <form
      action={simpanPesanan}
      className="mt-6 space-y-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
    >
      <h3 className="font-bold">Pesan Tiket</h3>
      <input type="hidden" name="event_id" value={event.id} />
      <input
        name="nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
        placeholder="Nama kamu"
        className="w-full rounded-lg bg-[#0F172A] px-3 py-2 text-white ring-1 ring-white/20 outline-none"
      />
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email kamu (buat batalin nanti)"
        className="w-full rounded-lg bg-[#0F172A] px-3 py-2 text-white ring-1 ring-white/20 outline-none"
      />
      <input
        name="jumlah"
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
        disabled={sisa <= 0}
        className="w-full rounded-xl bg-[#FBBF24] py-3 font-black text-black disabled:opacity-50"
      >
        {sisa <= 0 ? "Tiket Habis" : "Pesan Sekarang"}
      </button>
    </form>
  );
}
