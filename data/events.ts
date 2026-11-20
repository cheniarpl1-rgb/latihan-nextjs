export type Event = {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  harga: number;
  kuota: number;
  terisi: number;
  gambar: string;
};

export const EVENTS: Event[] = [
  {
    id: 1,
    judul: "Workshop React untuk Pemula",
    kategori: "Workshop",
    tanggal: "2026-11-14",
    lokasi: "Lab RPL",
    harga: 50000,
    kuota: 30,
    terisi: 12,
    gambar: "",
  },
  {
    id: 2,
    judul: "Turnamen Futsal Antar Kelas",
    kategori: "Olahraga",
    tanggal: "2026-11-20",
    lokasi: "Lapangan Sekolah",
    harga: 0,
    kuota: 50,
    terisi: 20,
    gambar: "",
  },
  {
    id: 3,
    judul: "Konser Musik Akustik",
    kategori: "Musik",
    tanggal: "2026-11-27",
    lokasi: "Aula",
    harga: 25000,
    kuota: 100,
    terisi: 45,
    gambar: "",
  },
  {
    id: 4,
    judul: "Bazar Karya Siswa",
    kategori: "Bazar",
    tanggal: "2026-12-03",
    lokasi: "Halaman Depan",
    harga: 10000,
    kuota: 40,
    terisi: 10,
    gambar: "",
  },
  {
    id: 5,
    judul: "Pelatihan Desain Poster",
    kategori: "Workshop",
    tanggal: "2026-12-05",
    lokasi: "Lab Multimedia",
    harga: 30000,
    kuota: 25,
    terisi: 8,
    gambar: "",
  },
  {
    id: 6,
    judul: "Lomba Cerdas Cermat",
    kategori: "Lomba",
    tanggal: "2026-12-10",
    lokasi: "Aula",
    harga: 0,
    kuota: 60,
    terisi: 30,
    gambar: "",
  },
];

export function rupiah(n: number) {
  return n === 0 ? "GRATIS" : "Rp " + n.toLocaleString("id-ID");
}
