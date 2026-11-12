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
    <div className="space-y-8">
      {/* Bagian Header Filter & Search Modern */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="relative w-full lg:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Cari event impianmu..."
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-sm font-medium transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {["Semua", "Workshop", "Musik", "Olahraga", "Pameran", "Seminar"].map(
            (kat) => (
              <button
                key={kat}
                onClick={() => setKategori(kat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  kategori === kat
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {kat}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Grid Kartu Event Bergaya Premium */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="group relative bg-white rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Hiasan Aksen Gradasi di Atas Kartu */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide uppercase bg-blue-50 text-blue-600 border border-blue-100/50">
                  {event.kategori}
                </span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-xl">
                  📅 {event.tanggal}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {event.judul}
                </h3>
                <p className="text-sm text-slate-500 flex items-center gap-1.5 font-medium">
                  📍 {event.lokasi}
                </p>
              </div>

              <div className="pt-4 flex items-baseline justify-between border-t border-slate-100/80">
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                    Harga Tiket
                  </p>
                  <p className="text-lg font-extrabold text-slate-900 mt-0.5">
                    {event.harga === 0
                      ? "Gratis"
                      : `Rp ${event.harga.toLocaleString("id-ID")}`}
                  </p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl ${event.sisaTiket > 0 ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50" : "bg-rose-50 text-rose-600 border border-rose-100/50"}`}
                >
                  {event.sisaTiket > 0
                    ? `Sisa ${event.sisaTiket} tiket`
                    : "Tiket habis"}
                </span>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                href={`/event/${event.id}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-slate-900 text-white font-semibold text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md shadow-slate-900/10 group-hover:shadow-blue-500/25"
              >
                <span>Lihat Detail Event</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-slate-600 font-semibold text-base">
            Event yang kamu cari tidak ditemukan
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Coba gunakan kata kunci atau kategori lain.
          </p>
        </div>
      )}
    </div>
  );
}
