import { Suspense } from "react";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { rupiah } from "@/data/events";
import { ambilEvent } from "@/data/ambil";
import FormPesan from "@/components/FormPesan";
import TombolFavorit from "@/components/TombolFavorit";
import EventTerkait from "@/components/EventTerkait";
import Link from "next/link";

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await ambilEvent(Number(id));
  if (!event) notFound();

  const sisa = event.kuota - event.terisi;
  const namaAwal = (await cookies()).get("nama")?.value ?? "";

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Tombol Kembali */}
      <div>
        <Link
          href="/event"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
        >
          <span>←</span> Kembali ke Katalog
        </Link>
      </div>

      {/* Grid Utama: Kombinasi Kartu Warna-Warni & Elegan */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        {/* Kolom Kiri: Detail Event dengan Gradasi & Warna Menarik */}
        <div className="lg:col-span-7 relative bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/40 rounded-3xl border border-blue-100/80 p-8 shadow-xl shadow-indigo-500/5 overflow-hidden space-y-6">
          {/* Garis Aksen Gradasi Terang di Atas Kartu */}
          <div className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-black tracking-wider uppercase bg-blue-600 text-white shadow-md shadow-blue-500/20">
              {event.kategori}
            </span>
            <TombolFavorit id={event.id} />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {event.judul}
            </h1>
            <p className="text-sm font-semibold text-slate-600 flex items-center gap-2">
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                📅 {event.tanggal}
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                📍 {event.lokasi}
              </span>
            </p>
          </div>

          {/* Kotak Harga & Ketersediaan Bergaya Kontras */}
          <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Harga Tiket
              </p>
              <p className="text-2xl font-black text-blue-600 mt-0.5">
                {event.harga === 0 ? "Gratis" : rupiah(event.harga)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Ketersediaan
              </p>
              <p
                className={`text-xs font-black px-3 py-1.5 rounded-xl mt-1 inline-block ${sisa > 0 ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30" : "bg-rose-500 text-white shadow-sm shadow-rose-500/30"}`}
              >
                {sisa > 0
                  ? `Sisa ${sisa} dari ${event.kuota} tiket`
                  : "Tiket Habis"}
              </p>
            </div>
          </div>

          {/* Bagian Event Terkait */}
          <div className="pt-4 border-t border-slate-200/60">
            <h2 className="text-sm font-black text-slate-900 mb-3">
              Rekomendasi Event Terkait
            </h2>
            <Suspense
              fallback={
                <p className="text-xs text-blue-600 font-bold animate-pulse">
                  Memuat event terkait...
                </p>
              }
            >
              <EventTerkait event={event} />
            </Suspense>
          </div>
        </div>

        {/* Kolom Kanan: Form Pemesanan dengan Tampilan Berwarna & Menarik */}
        <div className="lg:col-span-5 relative bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30 rounded-3xl border border-indigo-100/80 p-8 shadow-xl shadow-purple-500/5 overflow-hidden">
          {/* Garis Aksen Gradasi Terang di Atas Form */}
          <div className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600" />

          <div className="mb-6">
            <h2 className="text-xl font-black text-slate-900">
              Formulir Pemesanan
            </h2>
            <p className="text-xs font-semibold text-slate-600 mt-1">
              Amankan tiketmu sekarang sebelum kehabisan.
            </p>
          </div>

          <FormPesan event={event} namaAwal={namaAwal} />
        </div>
      </div>
    </div>
  );
}
