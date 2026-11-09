"use client";

import { useActionState, useState } from "react";
import { pesanTiket, type HasilPesanan } from "../../actions";
import { rupiah, type Event } from "@/data/events";

export default function FormPesan({
  event: { id, kuota, terisi, harga },
}: {
  event: Event;
}) {
  const awal: HasilPesanan = {
    berhasil: false,
    pesan: "",
    galat: {},
    isian: { nama: "", email: "" },
  };
  const [hasil, kirim, sedangKirim] = useActionState(pesanTiket, awal);
  const [jumlah, setJumlah] = useState(1);
  const sisa = kuota - terisi;

  if (sisa === 0) {
    return <p className="mt-6 font-medium text-red-600">Tiket sudah habis.</p>;
  }

  return (
    <form action={kirim} className="mt-6 space-y-3 border-t pt-4">
      <h2 className="text-lg font-semibold">Pesan tiket</h2>
      <input type="hidden" name="eventId" value={id} />

      <div>
        <input
          name="nama"
          defaultValue={hasil.isian.nama}
          placeholder="Nama pemesan"
          className="block w-full rounded border px-3 py-2 bg-white text-slate-900"
        />
        {hasil.galat.nama && (
          <p className="text-sm text-red-600">{hasil.galat.nama}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          defaultValue={hasil.isian.email}
          placeholder="Email"
          className="block w-full rounded border px-3 py-2 bg-white text-slate-900"
        />
        {hasil.galat.email && (
          <p className="text-sm text-red-600">{hasil.galat.email}</p>
        )}
      </div>

      <div>
        <input
          name="jumlah"
          type="number"
          value={jumlah}
          onChange={(e) => setJumlah(Number(e.target.value))}
          className="block w-32 rounded border px-3 py-2 bg-white text-slate-900"
        />
        {hasil.galat.jumlah && (
          <p className="text-sm text-red-600">{hasil.galat.jumlah}</p>
        )}
      </div>

      <p className="text-slate-900">
        Total: <b>{rupiah(harga * jumlah)}</b>
      </p>

      {hasil.pesan && (
        <p
          className={
            hasil.berhasil ? "text-green-700 font-bold" : "text-red-600"
          }
        >
          {hasil.pesan}
        </p>
      )}

      <button
        disabled={sedangKirim}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50 font-bold"
      >
        {sedangKirim ? "Memproses..." : "Pesan"}
      </button>
    </form>
  );
}
