import Link from "next/link";

export default function Beranda() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <span className="inline-block rounded-full bg-[#14B8A6]/20 px-4 py-1.5 text-xs font-bold tracking-widest text-[#5EEAD4] ring-1 ring-[#14B8A6]/40">
          PORTAL RESMI TIKET & EVENT SEKOLAH
        </span>
        <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
          Temukan event seru di{" "}
          <span className="text-[#FB7185]">sekolahmu</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Workshop, lomba, musik, dan bazar. Pesan tiketnya di sini.
        </p>
        <Link
          href="/event"
          className="mt-8 inline-block rounded-full bg-[#FBBF24] px-7 py-3.5 font-bold text-[#0F172A]"
        >
          Lihat semua event →
        </Link>
        <div className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-3">
          <div className="rounded-2xl bg-[#14B8A6]/15 p-4 ring-1 ring-[#14B8A6]/30">
            <p className="text-2xl font-black text-[#5EEAD4]">6+</p>
            <p className="text-xs text-slate-300">Event Aktif</p>
          </div>
          <div className="rounded-2xl bg-[#FB7185]/15 p-4 ring-1 ring-[#FB7185]/30">
            <p className="text-2xl font-black text-[#FDA4AF]">4</p>
            <p className="text-xs text-slate-300">Kategori</p>
          </div>
          <div className="rounded-2xl bg-[#FBBF24]/15 p-4 ring-1 ring-[#FBBF24]/30">
            <p className="text-2xl font-black text-[#FDE68A]">100%</p>
            <p className="text-xs text-slate-300">Online</p>
          </div>
        </div>
      </section>
    </div>
  );
}
