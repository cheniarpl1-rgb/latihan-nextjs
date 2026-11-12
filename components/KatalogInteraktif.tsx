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
      {/* Bagian Header Filter & Pencarian Elegan */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative w-full lg:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 text-xs">
            🔍
          </span>
          <input
            type="text"
            placeholder="Cari event impianmu..."
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-xs font-medium transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {["Semua", "Workshop", "Musik", "Olahraga", "Pameran", "Seminar"].map(
            (kat) => (
              <button
                key={kat}
                onClick={() => setKategori(kat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  kategori === kat
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {kat}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Grid Kartu Event yang Lebih Menonjol & Elegan */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => {
          const sisa = event.sisaTiket ?? event.kuota ?? 0;
          return (
            <div
              key={event.id}
              className="group relative bg-white rounded-2xl border border-slate-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Garis Gradasi Mewah di Bagian Atas Kartu */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

              <div className="p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-extrabold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                    {event.kategori}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    📅 {event.tanggal}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {event.judul}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                    📍 {event.lokasi}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Harga Tiket
                    </p>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      {event.harga === 0
                        ? "Gratis"
                        : `Rp ${event.harga.toLocaleString("id-ID")}`}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${sisa > 0 ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-100"}`}
                  >
                    {sisa > 0 ? `Sisa ${sisa} tiket` : "Tiket habis"}
                  </span>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <Link
                  href={`/event/${event.id}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md group-hover:shadow-lg"
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
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
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
