"use client";

import { useState } from "react";
import Link from "next/link";

export default function KatalogInteraktif({ events }: { events: any[] }) {
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("Semua");

  const filteredEvents = events.filter((e) => {
    const matchCari = e.judul.toLowerCase().includes(cari.toLowerCase());
    const matchKategori = kategori === "Semua" || e.kategori === kategori;
    return matchCari && matchKategori;
  });

  return (
    <div className="space-y-6">
      {/* Header Filter & Pencarian dengan Aksen Gradasi */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-gradient-to-r from-white via-indigo-50/30 to-blue-50/30 p-5 rounded-3xl shadow-sm border border-indigo-100/60">
        <div className="relative w-full lg:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 text-xs">
            🔍
          </span>
          <input
            type="text"
            placeholder="Cari event impianmu..."
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200/80 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-600 text-xs font-semibold transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {["Semua", "Workshop", "Musik", "Olahraga", "Pameran", "Seminar"].map(
            (kat) => (
              <button
                key={kat}
                onClick={() => setKategori(kat)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  kategori === kat
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                }`}
              >
                {kat}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Grid Kartu Event Berwarna & Dinamis */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => {
          const sisa = event.sisaTiket ?? event.kuota ?? 0;
          return (
            <div
              key={event.id}
              className="group relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Garis Gradasi Mewah di Atas Kartu */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-xl text-[10px] font-black tracking-wider uppercase bg-blue-600 text-white shadow-md shadow-blue-500/20">
                    {event.kategori}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 bg-white px-3 py-1 rounded-xl border border-slate-200/60 shadow-sm">
                    📅 {event.tanggal}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {event.judul}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 font-semibold">
                    📍 {event.lokasi}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-200/60">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Harga Tiket
                    </p>
                    <p className="text-base font-black text-blue-600 mt-0.5">
                      {event.harga === 0
                        ? "Gratis"
                        : `Rp ${event.harga.toLocaleString("id-ID")}`}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-black px-3 py-1.5 rounded-xl ${sisa > 0 ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30" : "bg-rose-500 text-white shadow-sm shadow-rose-500/30"}`}
                  >
                    {sisa > 0 ? `Sisa ${sisa} tiket` : "Tiket habis"}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/event/${event.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold text-xs hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md shadow-slate-900/10 group-hover:shadow-blue-500/30 group-hover:scale-[1.02]"
                >
                  <span>Lihat Detail Event</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-3xl mb-2">🔍</div>
          <p className="text-slate-800 font-bold text-sm">
            Event yang kamu cari tidak ditemukan
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Coba gunakan kata kunci atau pilih kategori lain.
          </p>
        </div>
      )}
    </div>
  );
}
