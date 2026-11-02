import Link from "next/link";
import { notFound } from "next/navigation";
import { events, rupiah } from "@/data/events";

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === Number(id));

  if (!event) notFound();

  const sisa = event.kuota - event.terisi;
  return (
    <div className="mx-auto max-w-2xl p-6">
      <Link href="/event" className="text-blue-600 hover:underline">
        ← Kembali ke katalog
      </Link>

      <article className="mt-4 rounded-xl border bg-white p-6">
        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
          {event.kategori}
        </span>
        <h1 className="mt-2 text-3xl font-bold">{event.judul}</h1>
        <p className="mt-1 text-slate-500">
          {event.tanggal} · {event.lokasi}
        </p>
        <div className="mt-6 border-t pt-4">
          <p className="font-semibold">Harga: {rupiah(event.harga)}</p>
          <p className="text-sm text-slate-500">Sisa kuota: {sisa} tiket</p>
        </div>
      </article>
    </div>
  );
}
