import Link from "next/link";
import { ambilEvents } from "@/data/ambil";
import KartuEvent from "@/components/KartuEvent";

export default async function Beranda() {
  const semua = await ambilEvents();
  const terdekat = semua.slice(0, 3);
  return (
    <div className="min-h-screen bg-[#EDE6D6] text-[#1A1A1A]">
      <section className="px-5 py-16 text-center">
        <span className="inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#8A6D1B]">
          PORTAL RESMI TIKET & EVENT SEKOLAH
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
          Temukan event seru di sekolahmu
        </h1>
        <p className="mt-3 text-[#555555]">
          Workshop, lomba, musik, dan bazar. Pesan tiketnya di sini.
        </p>
        <Link
          href="/event"
          className="mt-6 inline-block rounded-full bg-[#1A1A1A] px-6 py-3 font-bold text-white shadow-lg"
        >
          Lihat semua event
        </Link>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="mb-3 text-xl font-semibold">Event terdekat</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {terdekat.map((e) => (
            <KartuEvent key={e.id} event={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
