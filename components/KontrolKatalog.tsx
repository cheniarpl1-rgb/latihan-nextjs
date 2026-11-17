import Form from "next/form";
import type { Saringan } from "@/data/saring";

export default function KontrolKatalog({
  s,
  daftarKategori,
}: {
  s: Saringan;
  daftarKategori: string[];
}) {
  return (
    <Form action="/event" className="relative z-10 mx-auto max-w-3xl">
      <div className="flex items-center gap-2 rounded-full bg-black/30 p-1.5 shadow-xl ring-1 ring-white/30 backdrop-blur-xl">
        <input
          name="cari"
          defaultValue={s.cari}
          placeholder="🔍 Cari event..."
          className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm font-bold text-white placeholder:text-white/70 outline-none"
        />
        <button className="shrink-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-5 py-2.5 text-sm font-black text-black shadow-md">
          Cari →
        </button>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <select
          name="kategori"
          defaultValue={s.kategori}
          className="rounded-full bg-[#4A3FA0] px-4 py-2 text-sm font-bold text-white shadow-md outline-none ring-1 ring-white/40 [&>option]:text-black"
        >
          {daftarKategori.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
        <select
          name="urut"
          defaultValue={s.urut}
          className="rounded-full bg-[#4A3FA0] px-4 py-2 text-sm font-bold text-white shadow-md outline-none ring-1 ring-white/40 [&>option]:text-black"
        >
          <option value="tanggal">📅 Terdekat</option>
          <option value="murah">💸 Termurah</option>
          <option value="mahal">💰 Termahal</option>
          <option value="nama">🔤 Nama A-Z</option>
        </select>
        <input
          type="number"
          name="max"
          min={0}
          defaultValue={s.max ?? ""}
          placeholder="Harga maks"
          className="w-28 rounded-full bg-[#4A3FA0] px-4 py-2 text-sm font-bold text-white placeholder:text-white/70 shadow-md outline-none ring-1 ring-white/40"
        />
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#4A3FA0] px-4 py-2 text-sm font-bold text-white shadow-md ring-1 ring-white/40">
          <input
            type="checkbox"
            name="sisa"
            value="1"
            defaultChecked={s.sisa}
            className="h-4 w-4 accent-yellow-300"
          />
          Ada tiket
        </label>
      </div>
    </Form>
  );
}
