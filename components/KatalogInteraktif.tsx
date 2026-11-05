"use client";
import { useState } from "react";
import { rupiah, type Event } from "@/data/events";
import KartuEvent from "./KartuEvent";
import KontrolKatalog from "./KontrolKatalog";

export default function KatalogInteraktif({ events }: { events: Event[] }) {
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [urut, setUrut] = useState("tanggal");
  const [batas, setBatas] = useState(4);

  const [adaTiket, setAdaTiket] = useState(false);
  const [hargaMaks, setHargaMaks] = useState("");

  const daftarKategori = ["Semua", ...new Set(events.map((e) => e.kategori))];

  const hasil = events.filter((e) => {
    const sisaTiket = e.kuota - e.terisi;
    const cocokCari = e.judul.toLowerCase().includes(cari.toLowerCase());
    const cocokKategori = kategori === "Semua" || e.kategori === kategori;
    const cocokAdaTiket = !adaTiket || sisaTiket > 0;
    const cocokHarga = hargaMaks === "" || e.harga <= Number(hargaMaks);

    return cocokCari && cocokKategori && cocokAdaTiket && cocokHarga;
  });

  const tersusun = [...hasil].sort((a, b) => {
    if (urut === "murah") return a.harga - b.harga;
    if (urut === "mahal") return b.harga - a.harga;
    if (urut === "nama") return a.judul.localeCompare(b.judul);
    return a.tanggal.localeCompare(b.tanggal);
  });

  const dataTampil = tersusun.slice(0, batas);

  const totalHarga = tersusun.reduce((acc, e) => acc + e.harga, 0);
  const rataRataHarga = tersusun.length > 0 ? totalHarga / tersusun.length : 0;
  const totalSisaTiket = tersusun.reduce(
    (acc, e) => acc + (e.kuota - e.terisi),
    0,
  );

  return (
    <div>
      <KontrolKatalog
        cari={cari}
        setCari={setCari}
        kategori={kategori}
        setKategori={setKategori}
        daftarKategori={daftarKategori}
        urut={urut}
        setUrut={setUrut}
        adaTiket={adaTiket}
        setAdaTiket={setAdaTiket}
        hargaMaks={hargaMaks}
        setHargaMaks={setHargaMaks}
        setBatas={setBatas}
      />

      <p className="mb-1 text-sm text-slate-500">
        {tersusun.length} event ditemukan
      </p>
      <p className="mb-3 text-sm text-slate-500">
        Rata-rata harga {rupiah(rataRataHarga)} · Total sisa tiket{" "}
        {totalSisaTiket}
      </p>

      {tersusun.length === 0 ? (
        <p className="text-slate-500">Tidak ada event yang cocok.</p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataTampil.map((e) => (
              <KartuEvent key={e.id} event={e} />
            ))}
          </div>

          {batas < tersusun.length && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setBatas(batas + 4)}
                className="rounded bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-300"
              >
                Tampilkan lagi ({Math.min(4, tersusun.length - batas)} lagi)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
