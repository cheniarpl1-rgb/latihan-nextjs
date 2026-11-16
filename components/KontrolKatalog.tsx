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
    <Form
      action="/event"
      className="relative z-10 -mt-2 mb-6 rounded- bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-slate-100"
    >
      <div className="flex flex-wrap items-center gap-2.5">
        <input
          name="cari"
          defaultValue={s.cari}
          placeholder="🔍 Cari event..."
          className="min-w- flex-1 rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 font-medium outline-none focus:border-blue-500 focus:bg-white"
        />
        <select
          name="kategori"
          defaultValue={s.kategori}
          className="rounded-2xl border-2 border-slate-100 bg-slate-50 px-3 py-3 font-bold"
        >
          {daftarKategori.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
        <select
          name="urut"
          defaultValue={s.urut}
          className="rounded-2xl border-2 border-slate-100 bg-slate-50 px-3 py-3 font-bold"
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
          placeholder="Harga max"
          className="w-32 rounded-2xl border-2 border-slate-100 bg-slate-50 px-3 py-3"
        />
        <button className="rounded-2xl bg-slate-900 px-6 py-3 font-black text-white shadow-lg hover:bg-blue-600">
          Cari →
        </button>
      </div>
      <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700">
        <input
          type="checkbox"
          name="sisa"
          value="1"
          defaultChecked={s.sisa}
          className="h-4 w-4 accent-emerald-600"
        />
        ✅ Hanya yang masih ada tiket
      </label>
    </Form>
  );
}
