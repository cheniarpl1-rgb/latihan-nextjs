import { Suspense } from "react";
import { ambilEvents } from "@/data/ambil";
import KatalogInteraktif from "@/components/KatalogInteraktif";

async function KontenKatalog() {
  const events = await ambilEvents();
  return <KatalogInteraktif events={events} />;
}

export default function Katalog() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Katalog Event</h1>
      <Suspense
        fallback={<div className="p-8 text-gray-500">Memuat data event...</div>}
      >
        <KontenKatalog />
      </Suspense>
    </div>
  );
}
