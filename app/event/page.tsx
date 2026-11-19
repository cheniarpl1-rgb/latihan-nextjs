import Link from "next/link";
import { ambilSemuaEvent } from "@/data/ambil";

// WARNA KARTU - TETEP, GAK DIRUBAH, UDAH BAGUS
const warna: Record<string, string> = {
  Workshop: "from-[#4a9e94] to-[#2f6b62]",
  Olahraga: "from-[#c96a7e] to-[#9e4458]",
  Musik: "from-[#d9a441] to-[#b97a1f]",
  Bazar: "from-[#5b8fd6] to-[#3a5f9e]",
  Lomba: "from-[#6aaa5e] to-[#41793a]",
};

const badge: Record<string, string> = {
  Workshop: "bg-white/25 text-white",
  Olahraga: "bg-white/25 text-white",
  Musik: "bg-white/25 text-white",
  Bazar: "bg-white/25 text-white",
  Lomba: "bg-white/25 text-white",
};

export default async function EventPage() {
  const events = await ambilSemuaEvent();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2e2763] via-[#24365e] to-[#3d2158] text-white px-6 py-10">
      {/* BACKGROUND BARU - LEBIH TERANG & HIDUP */}
      <div className="absolute top-0 left-0 w-full h- bg-gradient-to-b from-fuchsia-500/25 via-violet-500/15 to-transparent" />
      <div className="absolute -top-20 -left-20 w- h- bg-fuchsia-400/30 rounded-full blur-" />
      <div className="absolute top-[30%] -right-24 w- h- bg-amber-400/25 rounded-full blur-" />
      <div className="absolute bottom-[-100px] left-[30%] w- h- bg-cyan-400/25 rounded-full blur-" />
      <div className="absolute bottom-[20%] left-[5%] w- h- bg-pink-400/20 rounded-full blur-" />
      {/* Pola titik biar gak polos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:26px_26px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-10">
          <p className="text-fuchsia-300 font-bold tracking-widest text-sm mb-2">
            ✨ JELAJAHI • PILIH • PESAN
          </p>
          <h1 className="text-5xl font-black leading-none drop-shadow-lg">
            Semua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-violet-300">
              Event
            </span>
          </h1>
          <p className="text-white/70 mt-3">
            Pilih event favoritmu, klik kartu untuk detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <Link
              key={e.id}
              href={`/event/${e.id}`}
              className={`group relative overflow-hidden rounded-3xl p-6 min-h- flex flex-col justify-between bg-gradient-to-br ${warna[e.kategori] ?? "from-violet-500 to-fuchsia-600"} shadow-[0_20px_40px_rgba(0,0,0,0.35)] border border-white/20 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="relative">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${badge[e.kategori]}`}
                >
                  {e.kategori}
                </span>
                <h2 className="text-2xl font-black leading-tight mt-5">
                  {e.judul}
                </h2>
                <p className="text-white/90 text-sm mt-2 font-medium">
                  📅 {e.tanggal} • 📍 {e.lokasi}
                </p>
              </div>

              <div className="relative flex items-center justify-between mt-6 pt-4 border-t border-white/25">
                <span className="text-2xl font-black">
                  {e.harga === 0
                    ? "GRATIS 🎉"
                    : `Rp ${e.harga.toLocaleString("id-ID")}`}
                </span>
                <span className="bg-black/70 text-white px-5 py-2.5 rounded-full text-sm font-bold group-hover:bg-white group-hover:text-black transition">
                  Lihat →
                </span>
              </div>

              <span className="absolute top-4 right-4 text-3xl opacity-80">
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
      </div>
    </div>
  );
}
