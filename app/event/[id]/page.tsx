// app/event/[id]/page.tsx - FULL, UDAH HAPUS deskripsi-NYA
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { ambilEvent, hitungPesanan } from "@/data/ambil";
import FormPesan from "@/components/FormPesan";
import TombolFavorit from "@/components/TombolFavorit";
import EventTerkait from "@/components/EventTerkait";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await ambilEvent(Number(id));
  if (!event) return { title: "Event tidak ditemukan | EventKu" };
  return {
    title: `${event.judul} | EventKu`,
    // TADI: description: event.deskripsi, <- INI YANG ERROR, UDAH DIHAPUS
    description: `${event.judul} di ${event.lokasi} pada ${event.tanggal}`,
  };
}

export default async function Detail({ params }: Props) {
  const { id } = await params;
  const event = await ambilEvent(Number(id));
  if (!event) notFound();

  const { jumlahPesanan, jumlahTiket } = await hitungPesanan(event.id);
  const sisa = (event.kuota ?? 0) - (event.terisi ?? 0);

  const cookieStore = await cookies();
  const namaAwal = cookieStore.get("nama")?.value
    ? decodeURIComponent(cookieStore.get("nama")!.value)
    : "";
  const emailAwal = cookieStore.get("email")?.value
    ? decodeURIComponent(cookieStore.get("email")!.value)
    : "";

  return (
    <article className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-black">{event.judul}</h1>
        {/* TADI DI SINI ADA <p>{event.deskripsi}</p> <- UDAH DIHAPUS JUGA */}
        <p className="mt-2 text-slate-300">
          {event.tanggal} • {event.lokasi} • {event.kategori}
        </p>
        <p className="text-slate-300">
          Harga: Rp {event.harga.toLocaleString("id-ID")}
        </p>
        <p className="text-slate-300">
          Sisa {sisa} dari {event.kuota} tiket
        </p>
        <p className="text-sm text-slate-400">
          {jumlahPesanan} pesanan masuk lewat EventKu • {jumlahTiket} tiket
          dipesan
        </p>
        <TombolFavorit id={event.id} />
        <FormPesan event={event} namaAwal={namaAwal} emailAwal={emailAwal} />
        <section className="mt-6">
          <h2 className="font-bold">Event terkait</h2>
          <Suspense
            fallback={<p className="text-slate-400">Memuat event terkait...</p>}
          >
            <EventTerkait event={event} />
          </Suspense>
        </section>
      </div>
    </article>
  );
}
