import Link from "next/link";
import { rupiah, type Event } from "@/data/events";

const WARNA: Record<
  string,
  { bg: string; chip: string; btn: string; emoji: string }
> = {
  Workshop: {
    bg: "from-blue-500 via-indigo-500 to-violet-600",
    chip: "bg-cyan-300 text-black",
    btn: "bg-white text-blue-700",
    emoji: "💻",
  },
  Musik: {
    bg: "from-pink-500 via-rose-500 to-orange-400",
    chip: "bg-yellow-300 text-black",
    btn: "bg-white text-pink-700",
    emoji: "🎵",
  },
  Olahraga: {
    bg: "from-emerald-400 via-teal-500 to-cyan-600",
    chip: "bg-lime-300 text-black",
    btn: "bg-white text-emerald-700",
    emoji: "⚽",
  },
  Pameran: {
    bg: "from-amber-400 via-orange-500 to-red-500",
    chip: "bg-white text-orange-700",
    btn: "bg-white text-orange-700",
    emoji: "🎨",
  },
  Seminar: {
    bg: "from-violet-500 via-purple-600 to-fuchsia-600",
    chip: "bg-fuchsia-200 text-black",
    btn: "bg-white text-violet-700",
    emoji: "🎤",
  },
};

export default function KartuEvent({ event: e }: { event: Event }) {
  const sisa = e.kuota - e.terisi;
  const habis = sisa <= 0;
  const persen = Math.round((e.terisi / e.kuota) * 100);
  const w = WARNA[e.kategori] ?? WARNA.Seminar;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden bg-gradient-to-br ${w.bg} shadow-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02]`}
      style={{ borderRadius: "48px 48px 36px 36px" }}
    >
      {/* Lingkaran emoji - bukan kotak */}
      <div className="relative flex items-start justify-between p-5 pb-0">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-3xl backdrop-blur-md ring-2 ring-white/40">
          {w.emoji}
        </div>
        <span
          className={`rounded-full px-3 py-1.5 text-xs font-bold ${habis ? "bg-black text-white" : "bg-black/30 text-white backdrop-blur"}`}
        >
          {habis ? "Habis 🔴" : `Sisa ${sisa} 🎟️`}
        </span>
      </div>

      <span
        className={`mx-5 mt-4 w-fit rounded-full px-3 py-1 text- font-black uppercase tracking-wider ${w.chip}`}
      >
        {e.kategori}
      </span>

      <h3 className="px-5 pt-3 text- font-black leading-[1.05] text-white drop-shadow-lg">
        {e.judul}
      </h3>
      <p className="px-5 pt-1.5 text- font-medium text-white/85">
        📅 {e.tanggal} • 📍 {e.lokasi}
      </p>

      {/* Bagian bawah melengkung ke dalam - bukan kotak */}
      <div className="mt-5 flex-1 rounded-t- bg-black/25 p-5 backdrop-blur-md">
        <div className="flex items-end justify-between">
          <div>
            <p className="text- font-bold uppercase tracking-wider text-white/70">
              Harga
            </p>
            <p className="text- font-black leading-none text-white">
              {e.harga === 0 ? "GRATIS 🎉" : rupiah(e.harga)}
            </p>
          </div>
          <p className="rounded-full bg-white/20 px-3 py-1.5 text-center text-xs font-bold text-white">
            {persen}%<br />
            terisi
          </p>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-black/30">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${persen}%` }}
          />
        </div>
        <Link
          href={`/event/${e.id}`}
          className={`mt-4 block rounded-full py-3 text-center text-sm font-black shadow-lg transition group-hover:scale-[1.03] ${w.btn}`}
        >
          Lihat Detail →
        </Link>
      </div>
    </article>
  );
}
