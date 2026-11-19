"use client";

import { useState } from "react";
import type { Event } from "@/data/events";
import { buatPesanan } from "@/data/ambil";

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
  const [pesan, setPesan] = useState("");

  async function handlePesan(e: React.FormEvent) {
    e.preventDefault();
    setPesan("Memesan...");

    const hasil = await buatPesanan({
      event,
      nama,
      email,
      jumlah,
    });

    setPesan(hasil.pesan);
    if (hasil.ok) {
      // kalau mau langsung refresh biar sisa tiket ke-update
      window.location.reload();
    }
  }

  return (
    <form onSubmit={handlePesan} className="mt-6 space-y-3">
      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama"
        required
        className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
        className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none"
      />
      <input
        value={jumlah}
        onChange={(e) => setJumlah(Number(e.target.value))}
        type="number"
        min={1}
        className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none"
      />
      <button className="w-full rounded-xl bg-yellow-400 py-3 font-black text-black">
        Pesan Tiket
      </button>
      {pesan && <p className="text-sm text-yellow-300">{pesan}</p>}
    </form>
  );
}
