import Link from "next/link";
import { supabase } from "@/lib/supabase";

const tema: Record<
  string,
  { kartu: string; badge: string; harga: string; tombol: string }
> = {
  Workshop: {
    kartu: "from-[#042F2E] to-[#0F172A] ring-[#14B8A6]/50",
    badge: "bg-[#14B8A6] text-[#042F2E]",
    harga: "text-[#5EEAD4]",
    tombol: "bg-[#14B8A6] text-[#042F2E]",
  },
  Olahraga: {
    kartu: "from-[#431307] to-[#0F172A] ring-[#FB7185]/50",
    badge: "bg-[#FB7185] text-[#431307]",
    harga: "text-[#FDA4AF]",
    tombol: "bg-[#FB7185] text-[#431307]",
  },
  Musik: {
    kartu: "from-[#422006] to-[#0F172A] ring-[#FBBF24]/50",
    badge: "bg-[#FBBF24] text-[#422006]",
    harga: "text-[#FDE68A]",
    tombol: "bg-[#FBBF24] text-[#422006]",
  },
  Bazar: {
    kartu: "from-[#082F49] to-[#0F172A] ring-[#38BDF8]/50",
    badge: "bg-[#38BDF8] text-[#082F49]",
    harga: "text-[#7DD3FC]",
    tombol: "bg-[#38BDF8] text-[#082F49]",
  },
  Lomba: {
    kartu: "from-[#1A2E05] to-[#0F172A] ring-[#A3E635]/50",
    badge: "bg-[#A3E635] text-[#1A2E05]",
    harga: "text-[#BEF264]",
    tombol: "bg-[#A3E635] text-[#1A2E05]",
  },
};

export default async function EventPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("tanggal");

  return (
    <div className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
      <h1 className="mx-auto max-w-6xl text-4xl font-black">
        Semua <span className="text-[#FBBF24]">Event</span>
      </h1>
      <p className="mx-auto mt-2 max-w-6xl text-slate-400">
        Pilih event favoritmu, klik kartu untuk detail.
      </p>

      <div className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-3">
        {events?.map((e: any) => {
          const t = tema[e.kategori] || tema.Workshop;
          return (
            <Link
              key={e.id}
              href={`/event/${e.id}`}
              className={`group rounded-3xl bg-gradient-to-b p-6 ring-1 transition hover:-translate-y-1 hover:shadow-2xl ${t.kartu}`}
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-black ${t.badge}`}
              >
                {e.kategori}
              </span>
              <h2 className="mt-4 min-h-[3.5rem] text-2xl font-black leading-tight">
                {e.nama}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {e.tanggal} • {e.lokasi}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <p className={`text-xl font-black ${t.harga}`}>
                  Rp {e.harga?.toLocaleString("id-ID")}
                </p>
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-black ${t.tombol}`}
                >
                  Lihat →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
