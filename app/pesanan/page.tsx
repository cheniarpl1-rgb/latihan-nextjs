import Link from "next/link";
import { cookies } from "next/headers";
import { pesanan } from "@/data/pesanan";
import { rupiah } from "@/data/events";
import { batalkanPesanan } from "@/app/actions";

export default async function HalamanPesanan() {
  const cookieStore = await cookies();
  const namaPemesanCookie = cookieStore.get("nama")?.value ?? "";

  const totalTiket = pesanan.reduce((t, p) => t + p.jumlah, 0);
  const pendapatan = pesanan.reduce((t, p) => t + p.total, 0);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      {/* Header Halaman */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Daftar Pesanan
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola dan pantau tiket event sekolahmu di sini.
          </p>
        </div>
        {namaPemesanCookie && (
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 border border-blue-100 self-start sm:self-auto">
            <span>👋 Halo,</span>
            <span className="font-semibold">{namaPemesanCookie}!</span>
          </div>
        )}
      </div>

      {pesanan.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
          <p className="text-slate-500 mb-3">
            Belum ada pesanan tiket yang terdaftar.
          </p>
          <Link
            href="/event"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            Pilih Event Sekarang
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Ringkasan Statistik */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Total Pesanan
              </p>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {pesanan.length} transaksi
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Tiket Terpesan
              </p>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {totalTiket} tiket
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Total Pendapatan
              </p>
              <p className="text-xl font-bold text-blue-600 mt-1">
                {rupiah(pendapatan)}
              </p>
            </div>
          </div>

          {/* Tabel Data Pesanan */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4">Event</th>
                    <th className="p-4">Pemesan</th>
                    <th className="p-4">Tiket</th>
                    <th className="p-4">Total Harga</th>
                    <th className="p-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pesanan.map((p) => {
                    const isMilikSaya =
                      namaPemesanCookie &&
                      p.nama.toLowerCase() === namaPemesanCookie.toLowerCase();

                    return (
                      <tr
                        key={p.nomor}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="p-4 font-medium text-slate-500">
                          {p.nomor}
                        </td>
                        <td className="p-4 font-semibold text-slate-900">
                          {p.judul}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-800">{p.nama}</span>
                            {isMilikSaya && (
                              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
                                Kamu
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-slate-700">{p.jumlah} tiket</td>
                        <td className="p-4 font-medium text-slate-900">
                          {rupiah(p.total)}
                        </td>
                        <td className="p-4 text-center">
                          {isMilikSaya ? (
                            <form
                              action={batalkanPesanan}
                              className="inline-block"
                            >
                              <input
                                type="hidden"
                                name="nomor"
                                value={p.nomor}
                              />
                              <button
                                type="submit"
                                className="inline-flex items-center rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
                              >
                                Batalkan
                              </button>
                            </form>
                          ) : (
                            <span className="text-xs text-slate-400 italic">
                              -
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
