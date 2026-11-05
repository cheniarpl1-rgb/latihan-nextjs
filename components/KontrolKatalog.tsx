"use client";

type Props = {
  cari: string;
  setCari: (v: string) => void;
  kategori: string;
  setKategori: (v: string) => void;
  daftarKategori: string[];
  urut: string;
  setUrut: (v: string) => void;
  adaTiket: boolean;
  setAdaTiket: (v: boolean) => void;
  hargaMaks: string;
  setHargaMaks: (v: string) => void;
  setBatas: (v: number) => void;
};

export default function KontrolKatalog({
  cari,
  setCari,
  kategori,
  setKategori,
  daftarKategori,
  urut,
  setUrut,
  adaTiket,
  setAdaTiket,
  hargaMaks,
  setHargaMaks,
  setBatas,
}: Props) {
  return (
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
  );
}
