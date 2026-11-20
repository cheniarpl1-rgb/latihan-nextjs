import { supabaseAdmin } from "@/lib/supabase-admin";
import { pastikanAdmin } from "@/lib/sesi";
import Link from "next/link";
import { hapusEvent } from "./actions";
export default async function Admin() {
  await pastikanAdmin();
  const { data } = await supabaseAdmin
    .from("events")
    .select("*")
    .order("tanggal");
  const list = data ?? [];
  return (
    <>
      <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
        <h1 className="text-4xl font-black text-slate-900">
          Dashboard Admin ⚙️
        </h1>
        <Link href="/admin/baru" className="btn-kuning">
          + Tambah Event
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="card p-5 text-center bg-teal-50">
          <p className="text-3xl font-black text-teal-600">{list.length}</p>
          <p className="text-sm text-slate-500">Total Event</p>
        </div>
        <div className="card p-5 text-center bg-pink-50">
          <p className="text-3xl font-black text-pink-500">{list.length}</p>
          <p className="text-sm text-slate-500">Aktif</p>
        </div>
        <div className="card p-5 text-center bg-amber-50">
          <p className="text-3xl font-black text-amber-500">4</p>
          <p className="text-sm text-slate-500">Kategori</p>
        </div>
      </div>
      <div className="card mt-6 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-orange-50">
              <th className="p-4">Event</th>
              <th className="p-4">Harga</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e: any) => (
              <tr key={e.id} className="border-t border-orange-100">
                <td className="p-4">
                  <b className="text-slate-900">{e.judul}</b>
                  <br />
                  <span className="text-slate-500 text-xs">
                    {e.kategori} • {e.lokasi}
                  </span>
                </td>
                <td className="p-4">
                  {e.harga === 0
                    ? "GRATIS"
                    : "Rp " + e.harga.toLocaleString("id-ID")}
                </td>
                <td className="p-4 flex gap-2">
                  <Link href={`/admin/${e.id}`} className="chip bg-slate-100">
                    Edit
                  </Link>
                  <form action={hapusEvent}>
                    <input type="hidden" name="id" value={e.id} />
                    <button className="chip bg-red-100 text-red-600">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
