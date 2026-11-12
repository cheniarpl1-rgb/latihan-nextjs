import Link from "next/link";
import { cookies } from "next/headers";
import { events } from "@/data/events";
import { ambilEvent } from "@/data/ambil";

export default async function HalamanFavorit() {
  const cookieStore = await cookies();
  // Ambil daftar ID favorit dari cookies (atau sesuaikan dengan state penyimpanan favoritmu)
  const favoritCookie = cookieStore.get("favorit")?.value;
  const daftarId: number[] = favoritCookie
    ? JSON.parse(favoritCookie)
    : [1, 2, 3]; // Contoh fallback data ID

  // Ambil data event berdasarkan ID favorit
  const eventFavorit = await Promise.all(
    daftarId.map(async (id) => await ambilEvent(id)),
  );

  const listEvent = eventFavorit.filter(Boolean);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Event Favorit</h1>
        <p className="text-xs font-medium text-slate-500 mt-0.5">
          Daftar event pilihan yang telah kamu tandai.
        </p>
      </div>

      {listEvent.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listEvent.map((event: any) => {
            const sisa = event.sisaTiket ?? event.kuota - event.terisi;
            return (
              <div
                key={event.id}
                className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Garis Aksen Gradasi */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

                <div className="p-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-extrabold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-100">
                      {event.kategori}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      📅 {event.tanggal}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {event.judul}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                      📍 {event.lokasi}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Harga Tiket
                      </p>
                      <p className="text-sm font-black text-slate-900 mt-0.5">
                        {event.harga === 0
                          ? "Gratis"
                          : `Rp ${event.harga.toLocaleString("id-ID")}`}
                      </p>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${sisa > 0 ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-100"}`}
                    >
                      {sisa > 0 ? `Sisa ${sisa} tiket` : "Tiket habis"}
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    href={`/event/${event.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md group-hover:shadow-lg"
                  >
                    <span>Lihat Detail Event</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-800 font-bold text-sm">
            Belum ada event favorit
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Silakan tambahkan event ke favorit dari halaman katalog.
          </p>
        </div>
      )}
    </div>
  );
}
