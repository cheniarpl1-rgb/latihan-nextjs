import Link from "next/link";
import { ambilSemuaEvent } from "@/data/ambil";

const warna: Record<string, string> = {
  Workshop: "from-teal-400 via-emerald-500 to-cyan-600",
  Olahraga: "from-rose-400 via-pink-500 to-red-500",
  Musik: "from-amber-300 via-orange-500 to-yellow-600",
  Bazar: "from-sky-400 via-blue-500 to-indigo-600",
  Lomba: "from-lime-300 via-green-500 to-emerald-600",
};

const badge: Record<string, string> = {
  Workshop: "bg-teal-400 text-black",
  Olahraga: "bg-rose-400 text-black",
  Musik: "bg-amber-400 text-black",
  Bazar: "bg-sky-400 text-black",
  Lomba: "bg-lime-400 text-black",
};

export default async function EventPage() {
  const events = await ambilSemuaEvent();

  return (
    <div className="min-h-screen bg-[#0b0b1e] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-fuchsia-400 font-bold tracking-widest text-sm mb-2">
            ✨ JELAJAHI • PILIH • PESAN
          </p>
          <h1 className="text-5xl font-black leading-none">
            Semua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-violet-400">
              Event
            </span>
          </h1>
          <p className="text-zinc-400 mt-3">
            Pilih event favoritmu, klik kartu untuk detail.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <Link
              key={e.id}
              href={`/event/${e.id}`}
              className={`group relative overflow-hidden rounded- p-6 min-h- flex flex-col justify-between bg-gradient-to-br ${warna[e.kategori] ?? "from-violet-500 to-fuchsia-600"} shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.03] hover:-rotate-1 transition-all duration-300`}
            >
              {/* Lingkaran hiasan */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition" />
              <div className="absolute bottom-10 -left-8 w-28 h-28 bg-black/20 rounded-full blur-xl" />

              <div className="relative">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-lg ${badge[e.kategori] ?? "bg-white text-black"}`}
                >
                  {e.kategori}
                </span>
                <h2 className="text-2xl font-black leading-tight mt-5 drop-shadow-lg">
                  {e.judul}
                </h2>
                <p className="text-white/90 text-sm mt-2 font-medium">
                  📅 {e.tanggal} • 📍 {e.lokasi}
                </p>
              </div>

              <div className="relative flex items-center justify-between mt-6 pt-4 border-t border-white/30">
                <span className="text-2xl font-black drop-shadow">
                  {e.harga === 0
                    ? "GRATIS 🎉"
                    : `Rp ${e.harga.toLocaleString("id-ID")}`}
                </span>
                <span className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold group-hover:bg-white group-hover:text-black transition">
                  Lihat →
                </span>
              </div>

              <span className="absolute top-4 right-4 text-3xl opacity-80 group-hover:rotate-12 transition">
                {e.kategori === "Musik"
                  ? "🎵"
                  : e.kategori === "Olahraga"
                    ? "⚽"
                    : e.kategori === "Workshop"
                      ? "💻"
                      : e.kategori === "Bazar"
                        ? "🛍️"
                        : "🏆"}
              </span>
            </Link>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded- border border-white/10">
            <p className="text-4xl mb-3">😢</p>
            <p className="text-zinc-400">Belum ada event nih</p>
          </div>
        )}
      </div>
    </div>
  );
}
