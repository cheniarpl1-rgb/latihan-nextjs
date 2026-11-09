"use client";

import { useActionState } from "react";
import { pesanTiket, HasilPesanan } from "@/app/actions";
import { Event } from "@/data/events";

export default function FormPesan({
  event,
  namaAwal,
}: {
  event: Event;
  namaAwal: string;
}) {
  const awal: HasilPesanan = {
    berhasil: false,
    pesan: "",
    galat: {},
    isian: { nama: namaAwal, email: "" },
  };

  const [state, formAction, isPending] = useActionState(pesanTiket, awal);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input type="hidden" name="eventId" value={event.id} />

      <div>
        <label className="block text-sm font-medium">Nama</label>
        <input
          type="text"
          name="nama"
          defaultValue={state.isian.nama}
          className="w-full border rounded p-2"
        />
        {state.galat.nama && (
          <p className="text-red-500 text-xs">{state.galat.nama}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={state.isian.email}
          className="w-full border rounded p-2"
        />
        {state.galat.email && (
          <p className="text-red-500 text-xs">{state.galat.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Jumlah Tiket</label>
        <input
          type="number"
          name="jumlah"
          defaultValue={1}
          min={1}
          max={5}
          className="w-full border rounded p-2"
        />
        {state.galat.jumlah && (
          <p className="text-red-500 text-xs">{state.galat.jumlah}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Memproses..." : "Pesan Tiket"}
      </button>

      {state.pesan && (
        <p className={state.berhasil ? "text-green-600" : "text-red-600"}>
          {state.pesan}
        </p>
      )}
    </form>
  );
}
