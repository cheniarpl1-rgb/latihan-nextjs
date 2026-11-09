import Link from "next/link";
import { cookies } from "next/headers";
import { pesanan } from "@/data/pesanan";
import { rupiah } from "@/data/events";

export default async function HalamanPesanan() {
  const cookieStore = await cookies();
  const namaPemesanCookie = cookieStore.get("nama")?.value ?? "";

  const totalTiket = pesanan.reduce((t, p) => t + p.jumlah, 0);
  const pendapatan = pesanan.reduce((t, p) => t + p.total, 0);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-2 text-2xl font-bold">Daftar Pesanan</h1>

        {namaPemesanCookie && (
          <p className="mb-4 text-lg font-medium text-blue-400">
            Halo, {namaPemesanCookie}!
          </p>
        )}

        {pesanan.length === 0 ? (
          <p className="text-slate-400">
            Belum ada pesanan.{" "}
            <Link href="/event" className="text-blue-400 underline">
              Pilih event
            </Link>
          </p>
        ) : (
          <>
            <p className="mb-3 text-sm text-slate-400">
              {pesanan.length} pesanan · {totalTiket} tiket · pendapatan{" "}
              {rupiah(pendapatan)}
            </p>
            <table className="w-full rounded-xl border border-slate-800 bg-neutral-900 text-sm">
              <thead className="bg-neutral-800 text-left text-slate-200">
                <tr>
                  <th className="p-2">#</th>
                  <th className="p-2">Event</th>
                  <th className="p-2">Pemesan</th>
                  <th className="p-2">Tiket</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {pesanan.map((p) => {
                  const isMilikSaya =
                    namaPemesanCookie &&
                    p.nama.toLowerCase() === namaPemesanCookie.toLowerCase();

                  return (
                    <tr key={p.nomor} className="border-t border-slate-800">
                      <td className="p-2">{p.nomor}</td>
                      <td className="p-2">{p.judul}</td>
                      <td className="p-2 flex items-center gap-2">
                        <span>{p.nama}</span>
                        {isMilikSaya && (
                          <span className="bg-green-900 text-green-300 text-xs px-2 py-0.5 rounded-full font-semibold">
                            Kamu
                          </span>
                        )}
                      </td>
                      <td className="p-2">{p.jumlah}</td>
                      <td className="p-2">{rupiah(p.total)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
