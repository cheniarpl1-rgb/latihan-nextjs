import type { Metadata } from "next";
import Link from "next/link";
import { ambilEvents } from "@/data/ambil";
import { rupiah } from "@/data/events";
import { PER_HALAMAN, bacaSaringan, saringEvents } from "@/data/saring";
import KontrolKatalog from "@/components/KontrolKatalog";
import KartuEvent from "@/components/KartuEvent";

export const metadata: Metadata = { title: "Katalog Event" };

export default async function Katalog({ searchParams }: PageProps<"/event">) {
  const s = bacaSaringan(await searchParams);
  const events = await ambilEvents();
  const tersusun = saringEvents(events, s);
  const jumlahHalaman = Math.max(1, Math.ceil(tersusun.length / PER_HALAMAN));
  const hal = Math.min(s.hal, jumlahHalaman);
  const terlihat = tersusun.slice((hal - 1) * PER_HALAMAN, hal * PER_HALAMAN);
  const daftarKategori = ["Semua", ...new Set(events.map((e) => e.kategori))];
  const totalSisa = tersusun.reduce((t, e) => t + (e.kuota - e.terisi), 0);
  const rataHarga =
    tersusun.length === 0
      ? 0
      : Math.round(tersusun.reduce((t, e) => t + e.harga, 0) / tersusun.length);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* HERO ELEGAN */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text- font-bold uppercase tracking-[0.3em] text-stone-400">
            EventKu — Katalog
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.1] font-medium text-stone-900 sm:text-5xl">
            Acara pilihan,
            <br />
            dikurasi untuk kamu.
          </h1>
          <p className="mt-4 max-w-xl text- leading-relaxed text-stone-500">
            Jelajahi workshop, pertunjukan, dan kompetisi terbaik di kampus.
            Pilih yang paling sesuai dengan minatmu.
          </p>
          <div className="mt-7 flex gap-8 border-t border-stone-100 pt-5">
            <div>
              <p className="text-xl font-bold text-stone-900">
                {tersusun.length}{" "}
                <span className="text-sm font-normal text-stone-400">
                  Event
                </span>
              </p>
            </div>
            <div>
              <p className="text-xl font-bold text-stone-900">
                {totalSisa}{" "}
                <span className="text-sm font-normal text-stone-400">
                  Tiket tersisa
                </span>
              </p>
            </div>
            <div>
              <p className="text-xl font-bold text-stone-900">
                {rupiah(rataHarga)}{" "}
                <span className="text-sm font-normal text-stone-400">
                  Rata-rata
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8">
        <KontrolKatalog
          key={JSON.stringify(s)}
          s={s}
          daftarKategori={daftarKategori}
        />

        {tersusun.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center">
            <p className="font-serif text-2xl text-stone-800">
              Tidak ada event yang cocok.
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Coba ubah kata kunci atau atur ulang filter.
            </p>
            <Link
              href="/event"
              className="mt-5 inline-block rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white"
            >
              Atur ulang filter
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {terlihat.map((e) => (
              <KartuEvent key={e.id} event={e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
