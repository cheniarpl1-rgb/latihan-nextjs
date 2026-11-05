"use client";
import { useState } from "react";
import { rupiah, type Event } from "@/data/events";
import KartuEvent from "./KartuEvent";

export default function KatalogInteraktif({ events }: { events: Event[] }) {
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [urut, setUrut] = useState("tanggal");
  const [batas, setBatas] = useState(4);

  // State baru untuk penyaring lanjutan
  const [adaTiket, setAdaTiket] = useState(false);
  const [hargaMaks, setHargaMaks] = useState("");

  const daftarKategori = ["Semua", ...new Set(events.map((e) => e.kategori))];

  // Logika penyaringan yang diperbarui
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

  // Memotong data sesuai dengan state batas
  const dataTampil = tersusun.slice(0, batas);

  // Perhitungan statistik katalog
  const totalHarga = tersusun.reduce((acc, e) => acc + e.harga, 0);
  const rataRataHarga = tersusun.length > 0 ? totalHarga / tersusun.length : 0;
  const totalSisaTiket = tersusun.reduce(
    (acc, e) => acc + (e.kuota - e.terisi),
    0,
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-3 items-center">
        <input
          value={cari}
          onChange={(e) => {
            setCari(e.target.value);
            setBatas(4);
          }}
          placeholder="Cari event..."
          className="rounded border bg-white px-3 py-2 text-black"
        />
        <select
          value={kategori}
          onChange={(e) => {
            setKategori(e.target.value);
            setBatas(4);
          }}
          className="rounded border bg-white px-3 py-2 text-black"
        >
          {daftarKategori.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <select
          value={urut}
          onChange={(e) => {
            setUrut(e.target.value);
            setBatas(4);
          }}
          className="rounded border bg-white px-3 py-2 text-black"
        >
          <option value="tanggal">Tanggal terdekat</option>
          <option value="murah">Harga termurah</option>
          <option value="mahal">Harga termahal</option>
          <option value="nama">Nama A-Z</option>
        </select>

        {/* Checkbox Hanya yang masih ada tiket */}
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={adaTiket}
            onChange={(e) => {
              setAdaTiket(e.target.checked);
              setBatas(4);
            }}
          />
          Hanya yang masih ada tiket
        </label>

        {/* Input Harga Maksimal */}
        <input
          type="number"
          value={hargaMaks}
          onChange={(e) => {
            setHargaMaks(e.target.value);
            setBatas(4);
          }}
          placeholder="Harga maksimal"
          className="rounded border bg-white px-3 py-2 text-black"
        />
      </div>

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

          {/* Tombol Tampilkan Lagi */}
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
