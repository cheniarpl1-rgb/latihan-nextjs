import { events } from "@/data/events";
import KatalogInteraktif from "@/components/KatalogInteraktif";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-white">Katalog Event</h1>
      <KatalogInteraktif events={events} />
    </main>
  );
}
