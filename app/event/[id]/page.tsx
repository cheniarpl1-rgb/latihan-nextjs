import { Suspense } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { rupiah } from "@/data/events";
import { ambilEvent, hitungPesanan } from "@/data/ambil";
import FormPesan from "@/components/FormPesan";
import TombolFavorit from "@/components/TombolFavorit";
import EventTerkait from "@/components/EventTerkait";

export async function generateMetadata({
  params,
}: PageProps<"/event/[id]">): Promise<Metadata> {
  const { id } = await params;
  const event = await ambilEvent(Number(id));
  if (!event) return { title: "Event tidak ditemukan" };
  return {
    title: event.judul,
    description: `${event.kategori} di ${event.lokasi}, ${event.tanggal}. ${rupiah(event.harga)}.`,
  };
}

export default async function Detail({ params }: PageProps<"/event/[id]">) {
  const { id } = await params;
  const event = await ambilEvent(Number(id));
  if (!event) notFound();

  const jumlahPesanan = await hitungPesanan(event.id);
  const sisa = event.kuota - event.terisi;
  const namaAwal = (await cookies()).get("nama")?.value ?? "";
  return (
    <article className="min-h-screen bg-[#0F172A] px-5 py-10 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] p-6 ring-1 ring-white/10">
        <div className="relative mb-4 aspect-[40/21] w-full overflow-hidden rounded-2xl">
          <Image
            src={event.gambar ?? "/img/default.png"}
            alt={event.judul}
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            preload
            className="rounded-lg object-cover"
          />
        </div>
        <span className="rounded-full bg-[#14B8A6] px-3 py-1 text-xs font-black text-[#042F2E]">
          {event.kategori}
        </span>
        <h1 className="mt-3 text-3xl font-black">{event.judul}</h1>
        <p className="mt-1 text-slate-300">
          {event.tanggal} • {event.lokasi}
        </p>
        <p className="mt-4 text-xl font-black text-[#FBBF24]">
          {rupiah(event.harga)}
        </p>
        <p className="text-slate-300">
          Sisa {sisa} dari {event.kuota} tiket
        </p>
        <p className="text-sm text-slate-400">
          {jumlahPesanan} pesanan masuk lewat EventKu
        </p>
        <TombolFavorit id={event.id} />
        <FormPesan event={event} namaAwal={namaAwal} />
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
