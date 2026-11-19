// app/pesanan/page.tsx - FULL MISI 22
import Link from "next/link";
import { cookies } from "next/headers";
import { ambilPesanan } from "@/data/ambil";
import { batalkanPesanan } from "@/app/actions";

export default async function PesananPage() {
  const list = await ambilPesanan();
  const cookieStore = await cookies();
  const emailSaya = cookieStore.get("email")?.value ?? "";

  if (list.length === 0) {
    return (
      <main className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-black">Belum Ada Pesanan</h1>
          <p className="mt-2 text-slate-300">Yuk pesan event dulu.</p>
          <Link
            href="/event"
            className="mt-5 inline-block rounded-xl bg-[#FBBF24] px-5 py-3 font-black text-black"
          >
            Lihat Event
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-3xl font-black">Pesanan Kamu</h1>
        {list.map((p) => {
          const punyaSaya = p.email === emailSaya;
          return (
            <div
              key={p.nomor}
              className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            >
              <h2 className="font-bold text-lg">
                {p.events?.judul ?? `Event #${p.event_id}`}
              </h2>
              <p className="text-sm text-slate-300">
                Nama: {p.nama} • {p.jumlah} tiket • {p.email}
              </p>
              <p className="font-black text-[#FBBF24]">
                Rp {p.total.toLocaleString("id-ID")}
              </p>
              <div className="mt-3 flex gap-3">
                <Link
                  href={`/event/${p.event_id}`}
                  className="text-sm text-[#14B8A6] underline"
                >
                  Lihat Event Lagi
                </Link>
                {punyaSaya && (
                  <form action={batalkanPesanan}>
                    <input type="hidden" name="nomor" value={p.nomor} />
                    <input type="hidden" name="email" value={emailSaya} />
                    <button
                      type="submit"
                      className="text-sm font-bold text-red-400 underline"
                    >
                      Batalkan
                    </button>
                  </form>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
