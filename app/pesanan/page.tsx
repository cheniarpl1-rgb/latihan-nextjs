import { ambilPesanan } from "@/data/ambil";

export default async function PesananPage() {
  const pesanan = await ambilPesanan();

  return (
    <div className="min-h-screen bg-[#12121f] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-black mb-6">Pesanan Saya</h1>

        <div className="overflow-x-auto rounded-3xl bg-white/5 border border-white/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400">
                <th className="px-5 py-4">Event</th>
                <th className="px-5 py-4">Nama</th>
                <th className="px-5 py-4">Jumlah</th>
                <th className="px-5 py-4">Waktu Pesan</th>
              </tr>
            </thead>
            <tbody>
              {pesanan.map((p: any) => (
                <tr key={p.nomor} className="border-b border-white/5">
                  <td className="px-5 py-4 font-bold">
                    {p.events?.judul ?? p.event_id}
                  </td>
                  <td className="px-5 py-4">{p.nama}</td>
                  <td className="px-5 py-4">{p.jumlah} tiket</td>
                  <td className="px-5 py-4 text-zinc-300">
                    {new Date(p.dibuat).toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {pesanan.length === 0 && (
            <p className="p-6 text-center text-zinc-400">Belum ada pesanan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
