import type { Metadata } from "next";
import Link from "next/link";
import { ambilEvents } from "@/data/ambil";
import { rupiah } from "@/data/events";
import {
  PER_HALAMAN,
  bacaSaringan,
  saringEvents,
  alamatHalaman,
  type Saringan,
} from "@/data/saring";
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-violet-50 text-slate-900">
      {/* Hero tetap warna-warni tapi latar bawahnya terang */}
      <div className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-5 py-4 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-black sm:text-3xl">
            Temukan Event Serumu<span className="text-yellow-300">.</span>{" "}
            <span className="hidden text-sm font-bold text-white/85 sm:inline">
              — Workshop, konser, turnamen
            </span>
          </h1>
          <p className="text-sm font-bold">
            <span className="rounded-full bg-black/25 px-3 py-1">
              {tersusun.length} Event
            </span>{" "}
            <span className="rounded-full bg-black/25 px-3 py-1">
              {totalSisa} Tiket
            </span>{" "}
            <span className="rounded-full bg-black/25 px-3 py-1">
              {rupiah(rataHarga)}
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-5">
        <KontrolKatalog
          key={JSON.stringify(s)}
          s={s}
          daftarKategori={daftarKategori}
        />
        {tersusun.length === 0 ? (
          <div className="mt-6 rounded- bg-white p-10 text-center shadow-sm">
            <p className="text-2xl font-bold">Gak ketemu 😢</p>
            <Link
              href="/event"
              className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2 font-bold text-white"
            >
              Reset
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {terlihat.map((e) => (
                <KartuEvent key={e.id} event={e} />
              ))}
            </div>
            <Halaman s={s} hal={hal} jumlah={jumlahHalaman} />
          </>
        )}
      </div>
    </div>
  );
}

function Halaman({
  s,
  hal,
  jumlah,
}: {
  s: Saringan;
  hal: number;
  jumlah: number;
}) {
  if (jumlah <= 1) return null;
  const nomor = Array.from({ length: jumlah }, (_, i) => i + 1);
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {hal > 1 && (
        <Link
          href={alamatHalaman(s, hal - 1)}
          className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-slate-200"
        >
          « Sebelumnya
        </Link>
      )}
      {nomor.map((n) => (
        <Link
          key={n}
          href={alamatHalaman(s, n)}
          className={`rounded-full px-4 py-2 text-sm font-bold ${n === hal ? "bg-gradient-to-r from-fuchsia-500 to-orange-500 text-white shadow-md" : "bg-white shadow-sm ring-1 ring-slate-200"}`}
        >
          {n}
        </Link>
      ))}
      {hal < jumlah && (
        <Link
          href={alamatHalaman(s, hal + 1)}
          className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-slate-200"
        >
          Berikutnya »
        </Link>
      )}
    </div>
  );
}
