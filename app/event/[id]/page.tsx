import { getEvent } from "@/data/events";
import { notFound } from "next/navigation";
import FormPesan from "./form-pemesanan";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEvent(id);

  if (!event) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-1 rounded font-medium">
        {event.kategori}
      </span>
      <h1 className="text-3xl font-bold mt-2">{event.judul}</h1>
      <p className="text-slate-600 text-sm mt-1">
        {event.tanggal} • {event.lokasi}
      </p>

      <div className="mt-4">
        <p className="text-xl font-bold">
          {event.harga === 0
            ? "Gratis"
            : `Rp ${event.harga.toLocaleString("id-ID")}`}
        </p>
        <p className="text-sm text-slate-600">
          Sisa {event.kuota - event.terisi} dari {event.kuota} tiket
        </p>
      </div>

      <FormPesan event={event} />
    </main>
  );
}
