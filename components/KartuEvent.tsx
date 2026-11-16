import Link from "next/link";
import { rupiah, type Event } from "@/data/events";

export default function KartuEvent({ event: e }: { event: Event }) {
  const sisa = e.kuota - e.terisi;
  const habis = sisa <= 0;
  const persen = Math.round((e.terisi / e.kuota) * 100);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      {/* Gambar atas - kalem, bukan pelangi */}
      <div className="relative flex h-48 flex-col justify-between bg-stone-900 p-5">
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text- font-bold uppercase tracking-wider text-stone-800">
            {e.kategori}
          </span>
          <span
            className={`rounded-full px-3 py-1 text- font-semibold ${habis ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-800"}`}
          >
            {habis ? "Tiket habis" : `Sisa ${sisa} tiket`}
          </span>
        </div>
        <h3 className="font-serif text- leading-tight font-medium text-white">
          {e.judul}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text- text-stone-500">
          {e.tanggal} · {e.lokasi}
        </p>

        <div className="mt-5 flex items-end justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="text- uppercase tracking-wider text-stone-400">
              Harga
            </p>
            <p className="text-xl font-bold text-stone-900">
              {e.harga === 0 ? "Gratis" : rupiah(e.harga)}
            </p>
          </div>
          <p className="text-right text-xs leading-tight text-stone-500">
            {e.terisi}/{e.kuota} terisi
            <br />
            <span className="font-bold text-stone-800">{persen}%</span>
          </p>
        </div>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-stone-900"
            style={{ width: `${persen}%` }}
          />
        </div>

        <Link
          href={`/event/${e.id}`}
          className="mt-5 rounded-full border border-stone-900 py-2.5 text-center text-sm font-medium text-stone-900 transition group-hover:bg-stone-900 group-hover:text-white"
        >
          Lihat detail
        </Link>
      </div>
    </article>
  );
}
