// components/FormPesan.tsx - FULL LANGKAH 4, UDAH PAKE pesanTiket
"use client";

import { useActionState } from "react";
import { pesanTiket, type HasilPesan } from "@/app/actions";
import type { Event } from "@/data/events";

const AWAL: HasilPesan = {
  berhasil: false,
  pesan: "",
  galat: {},
  isian: { nama: "", email: "" },
};

export default function FormPesan({
  event,
  namaAwal,
  emailAwal,
}: {
  event: Event;
  namaAwal: string;
  emailAwal: string;
}) {
  const [hasil, aksi, pending] = useActionState(pesanTiket, {
    ...AWAL,
    isian: { nama: namaAwal, email: emailAwal },
  });

  const sisa = (event.kuota ?? 0) - (event.terisi ?? 0);

  return (
    <form
      action={aksi}
      className="mt-6 space-y-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
    >
      <h2 className="text-lg font-bold">Pesan Tiket</h2>
      <p className="text-sm text-slate-300">Sisa {sisa} tiket</p>

      {/* INI PENTING: namanya harus eventId, I-nya gede, sesuai actions.ts yang baru */}
      <input type="hidden" name="eventId" value={event.id} />

      <div>
        <label className="text-sm text-slate-300">Nama</label>
        <input
          name="nama"
          defaultValue={hasil.isian.nama}
          className="mt-1 w-full rounded-lg bg-black/40 px-3 py-2 text-white ring-1 ring-white/20"
          placeholder="Nama kamu"
        />
        {hasil.galat.nama && (
          <p className="mt-1 text-sm text-red-400">{hasil.galat.nama}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-slate-300">Email</label>
        <input
          name="email"
          defaultValue={hasil.isian.email}
          className="mt-1 w-full rounded-lg bg-black/40 px-3 py-2 text-white ring-1 ring-white/20"
          placeholder="email@kamu.com"
        />
        {hasil.galat.email && (
          <p className="mt-1 text-sm text-red-400">{hasil.galat.email}</p>
        )}
      </div>

      <div>
        <label className="text-sm text-slate-300">Jumlah Tiket</label>
        <input
          name="jumlah"
          type="number"
          defaultValue={1}
          min={1}
          max={5}
          className="mt-1 w-full rounded-lg bg-black/40 px-3 py-2 text-white ring-1 ring-white/20"
        />
        {hasil.galat.jumlah && (
          <p className="mt-1 text-sm text-red-400">{hasil.galat.jumlah}</p>
        )}
      </div>

      {hasil.pesan && (
        <p
          className={`rounded-lg px-3 py-2 text-sm ${
            hasil.berhasil
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
          {hasil.pesan}
        </p>
      )}

      <button
        disabled={pending}
        className="w-full rounded-xl bg-[#FBBF24] py-3 font-black text-black disabled:opacity-50"
      >
        {pending ? "Menyimpan..." : "Pesan Sekarang"}
      </button>
    </form>
  );
}
