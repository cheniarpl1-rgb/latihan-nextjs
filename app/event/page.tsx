import { ambilEvents } from "@/data/ambil";
import KartuEvent from "@/components/KartuEvent";

export default async function Event() {
  const semua = await ambilEvents();
  return (
    <div className="min-h-screen bg-[#FAF7F2] px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-black">Semua Event ({semua.length})</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {semua.map((e) => (
            <KartuEvent key={e.id} event={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
