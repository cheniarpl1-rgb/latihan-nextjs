"use client";

import { useActionState } from "react";
import { pesanTiket, HasilPesanan } from "../../actions";

const initialState: HasilPesanan = {
  berhasil: false,
  pesan: "",
  galat: {},
  isian: { nama: "", email: "" },
};

export default function FormPemesanan({ eventId }: { eventId: number }) {
  const [state, formAction, isPending] = useActionState(
    pesanTiket,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="space-y-4 pt-4 border-t border-gray-100"
    >
      <input type="hidden" name="eventId" value={eventId} />

      {/* Pesan Status Berhasil/Gagal */}
      {state.pesan && (
        <div
          className={`p-3 rounded-xl text-xs font-bold ${state.berhasil ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}
        >
          {state.pesan}
        </div>
      )}

      {/* Input Nama */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-700">Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          defaultValue={state.isian.nama}
          placeholder="Masukkan nama lengkap"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
        />
        {state.galat.nama && (
          <p className="text-[11px] text-rose-500 font-bold">
            {state.galat.nama}
          </p>
        )}
      </div>

      {/* Input Email */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-700">Email Sekolah</label>
        <input
          type="email"
          name="email"
          defaultValue={state.isian.email}
          placeholder="nama@sekolah.sch.id"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
        />
        {state.galat.email && (
          <p className="text-[11px] text-rose-500 font-bold">
            {state.galat.email}
          </p>
        )}
      </div>

      {/* Input Jumlah Tiket */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-700">Jumlah Tiket</label>
        <input
          type="number"
          name="jumlah"
          defaultValue={1}
          min={1}
          max={5}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-900"
        />
        {state.galat.jumlah && (
          <p className="text-[11px] text-rose-500 font-bold">
            {state.galat.jumlah}
          </p>
        )}
      </div>

      {/* Tombol Kirim dengan status Memproses... */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-extrabold py-3 rounded-xl text-xs transition shadow-md"
      >
        {isPending ? "Memproses..." : "Pesan Tiket Sekarang 🎟️"}
      </button>
    </form>
  );
}
