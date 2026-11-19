import Link from "next/link";

export default function Beranda() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2e2763] via-[#24365e] to-[#3d2158] text-white">
      {/* BACKGROUND - SAMA PERSIS KAYAK HALAMAN EVENT */}
      <div className="absolute top-0 left-0 w-full h- bg-gradient-to-b from-fuchsia-500/25 via-violet-500/15 to-transparent" />
      <div className="absolute -top-20 -left-20 w- h- bg-fuchsia-400/30 rounded-full blur-" />
      <div className="absolute top-[30%] -right-24 w- h- bg-amber-400/25 rounded-full blur-" />
      <div className="absolute bottom-[-100px] left-[30%] w- h- bg-cyan-400/25 rounded-full blur-" />
      <div className="absolute bottom-[20%] left-[5%] w- h- bg-pink-400/20 rounded-full blur-" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:26px_26px]" />

      {/* ISI BERANDA - GAK DIRUBAH */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-widest border border-teal-400/30">
          PORTAL RESMI TIKET & EVENT SEKOLAH
        </p>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mt-6">
          Temukan event seru di
          <br />
          <span className="text-rose-400">sekolahmu</span>
        </h1>
        <p className="text-slate-300 mt-4">
          Workshop, lomba, musik, dan bazar. Pesan tiketnya di sini.
        </p>

        <Link
          href="/event"
          className="inline-block mt-8 bg-amber-400 text-black px-7 py-3.5 rounded-full font-bold hover:bg-amber-300 transition"
        >
          Lihat semua event →
        </Link>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-12">
          <div className="rounded-2xl bg-teal-500/20 border border-teal-400/20 py-4">
            <p className="text-2xl font-black text-teal-300">6+</p>
            <p className="text-sm text-slate-300">Event Aktif</p>
          </div>
          <div className="rounded-2xl bg-pink-500/20 border border-pink-400/20 py-4">
            <p className="text-2xl font-black text-pink-300">4</p>
            <p className="text-sm text-slate-300">Kategori</p>
          </div>
          <div className="rounded-2xl bg-amber-500/20 border border-amber-400/20 py-4">
            <p className="text-2xl font-black text-amber-300">100%</p>
            <p className="text-sm text-slate-300">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
