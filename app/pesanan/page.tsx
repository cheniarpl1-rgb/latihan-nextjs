import { supabase } from "@/lib/supabase";
import Link from "next/link";
export default async function Pesanan() {
  const { data } = await supabase
    .from("orders")
    .select("*, events(judul,tanggal,lokasi)")
    .order("id", { ascending: false });
  const list = data ?? [];
  return (
    <>
      <h1 className="text-4xl font-black mt-10 text-slate-900">
        Pesanan Saya 🎟️
      </h1>
      {list.length === 0 && (
        <div className="card p-8 text-center mt-6">
          <p className="text-6xl">🎫</p>
          <p className="font-bold mt-3 text-slate-900">Belum ada pesanan.</p>
          <Link href="/event" className="btn-kuning mt-4 inline-block">
            Pesan Sekarang →
          </Link>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-5 mt-6">
        {list.map((o: any) => (
          <div key={o.id} className="card">
            <div className="p-5 bg-pink-100">
              <p className="font-bold text-xl text-slate-900">
                {o.events?.judul}
              </p>
              <p className="text-sm text-slate-500">
                {o.events?.tanggal} • {o.events?.lokasi} • {o.jumlah} Tiket
              </p>
            </div>
            <div className="p-5 flex justify-between items-center border-t-2 border-dashed border-orange-200">
              <div>
                <p className="text-xs text-slate-400">KODE TIKET</p>
                <p className="font-mono font-black">
                  EVT-2026-{String(o.id).padStart(3, "0")}
                </p>
              </div>
              <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-xl font-black text-sm">
                BERHASIL ✓
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
