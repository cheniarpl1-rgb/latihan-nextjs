"use client";

import Link from "next/link";
import { events, rupiah } from "@/data/events";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section yang Lebih Elegan & Modern */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-20 px-4 mb-12">
        {/* Efek Gradasi Latar Belakang Lembut */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-100/60 to-indigo-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Portal Resmi Tiket & Event Sekolah
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Jelajahi Pengalaman <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Seru di Sekolahmu
            </span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Temukan workshop inspiratif, konser musik, kompetisi olahraga,
            hingga bazar kreatif. Amankan tiketmu sekarang sebelum kehabisan.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/event"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
            >
              Lihat Semua Event &rarr;
            </Link>
            <Link
              href="/tentang"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Daftar Event Terdekat */}
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-slate-200/60 pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Event Unggulan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Pilihan aktivitas populer yang sedang berlangsung minggu ini.
            </p>
          </div>
          <Link
            href="/event"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 transition flex items-center gap-1"
          >
            Eksplor Katalog &rarr;
          </Link>
        </div>

        {/* Grid Kartu Event */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => {
            const sisaTiket = event.kuota - event.terisi;
            const isHabis = sisaTiket <= 0;

            return (
              <div
                key={event.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wide group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {event.kategori}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900">
                      {rupiah(event.harga)}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    {event.judul}
                  </h3>

                  <div className="text-xs text-slate-500 space-y-1 font-medium">
                    <p>📅 {event.tanggal}</p>
                    <p>📍 {event.lokasi}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  {isHabis ? (
                    <span className="text-xs font-bold text-rose-500 bg-rose-50 px-2.5 py-1 rounded-md">
                      Tiket habis
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Sisa {sisaTiket} tiket
                    </span>
                  )}

                  <Link
                    href={`/event/${event.id}`}
                    className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
