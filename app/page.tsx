"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900 pb-16 space-y-12">
      {/* Hero Section Berwarna Terang / Modern */}
      <section className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-16 px-4 text-center rounded-b-3xl shadow-md">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Temukan event seru di sekolahmu
          </h1>
          <p className="text-blue-100 text-sm sm:text-base">
            Workshop, lomba, musik, dan bazar. Pesan tiketnya di sini.
          </p>
          <div className="pt-2">
            <Link
              href="/event"
              className="inline-block bg-white text-blue-600 font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm hover:bg-blue-50 transition shadow"
            >
              Lihat semua event &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Event Terdekat */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Event Terdekat</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartu 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                Workshop
              </span>
              <p className="text-xs text-gray-500 font-medium pt-2">
                2026-11-14 &bull; Lab RPL
              </p>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-bold text-emerald-600">
                Sisa 18 tiket
              </span>
              <Link
                href="/event/1"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition"
              >
                Lihat detail
              </Link>
            </div>
          </div>

          {/* Kartu 2 (Habis) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                Olahraga
              </span>
              <p className="text-xs text-gray-500 font-medium pt-2">
                2026-11-20 &bull; Lapangan Sekolah
              </p>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-bold text-rose-500">
                Tiket habis
              </span>
              <Link
                href="/event/2"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition"
              >
                Lihat detail
              </Link>
            </div>
          </div>

          {/* Kartu 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  Musik
                </span>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  Laris
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium pt-2">
                2026-11-27 &bull; Aula
              </p>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-bold text-emerald-600">
                Sisa 54 tiket
              </span>
              <Link
                href="/event/3"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition"
              >
                Lihat detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 pt-8 border-t border-gray-200">
        EventKu &bull; dibuat di kelas XII RPL 1
      </footer>
    </main>
  );
}
