import { ambilEvents } from "@/data/ambil";
import KartuEvent from "@/components/KartuEvent";

export default async function Event() {
  const semua = await ambilEvents();
  return (
    <div className="min-h-screen bg-[#EDE6D6] px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-black text-[#1A1A1A]">
          Semua Event ({semua.length})
        </h1>
        <p className="mt-1 text-[#555555]">
          Semua event dari database Supabase.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {semua.map((e) => (
            <KartuEvent key={e.id} event={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
