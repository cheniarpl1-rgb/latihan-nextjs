"use client";

import Link from "next/link";
import { events, rupiah } from "@/data/events"; // Sesuaikan jalur impor file data kamu jika berbeda (misal "@/data/event" atau "../data/events")

export default function EventListPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Katalog */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Katalog Event Sekolah
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Pilih event seru dan pesan tiketmu sekarang.
          </p>
        </div>

        {/* Daftar Kartu Event (Dirender Otomatis dari Array Data) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => {
            const sisaTiket = event.kuota - event.terisi;
            const isHabis = sisaTiket <= 0;

            return (
              <div
                key={event.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex gap-2 items-center">
                    <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                      {event.kategori}
                    </span>
                    {event.terisi >= event.kuota * 0.8 && !isHabis && (
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                        Laris
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg leading-snug">
                    {event.judul}
                  </h3>

                  <p className="text-xs text-gray-500 font-medium">
                    {event.tanggal} &bull; {event.lokasi}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  {isHabis ? (
                    <span className="text-xs font-bold text-rose-500">
                      Tiket habis
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-emerald-600">
                      Sisa {sisaTiket} tiket
                    </span>
                  )}

                  <Link
                    href={`/event/${event.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition shadow-sm"
                  >
                    Lihat Detail
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
