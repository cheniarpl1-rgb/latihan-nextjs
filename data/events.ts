export type Event = {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  harga: number;
  kuota: number;
  gambar: string;
  deskripsi: string;
  warna: string;
};

export function rupiah(n: number) {
  if (n === 0) return "GRATIS";
  return "Rp " + n.toLocaleString("id-ID");
}

export const EVENTS: Event[] = [
  {
    id: 1,
    judul: "Workshop React untuk Pemula",
    kategori: "Workshop",
    tanggal: "2026-11-14",
    lokasi: "Lab RPL",
    harga: 50000,
    kuota: 30,
    gambar:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    deskripsi:
      "Belajar dasar React dari nol, bikin web pertama kamu bareng kakak kelas.",
    warna: "#CCFBF1",
  },
  {
    id: 2,
    judul: "Turnamen Futsal Antar Kelas",
    kategori: "Olahraga",
    tanggal: "2026-11-20",
    lokasi: "Lapangan Sekolah",
    harga: 0,
    kuota: 100,
    gambar:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
    deskripsi:
      "Adu skill futsal antar kelas, rebutan piala bergilir dan hadiah menarik.",
    warna: "#FCE7F3",
  },
  {
    id: 3,
    judul: "Konser Musik Akustik",
    kategori: "Musik",
    tanggal: "2026-11-27",
    lokasi: "Aula",
    harga: 25000,
    kuota: 150,
    gambar:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    deskripsi:
      "Malam akustik bareng band sekolah, bawain lagu hits dan lagu ciptaan sendiri.",
    warna: "#EDE9FE",
  },
  {
    id: 4,
    judul: "Bazar Karya Siswa",
    kategori: "Bazar",
    tanggal: "2026-11-28",
    lokasi: "Halaman Sekolah",
    harga: 10000,
    kuota: 200,
    gambar:
      "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&q=80",
    deskripsi: "Jajan, belanja karya siswa, dan dukung UMKM teman-teman kita.",
    warna: "#FCE7F3",
  },
  {
    id: 5,
    judul: "Pelatihan Desain Poster",
    kategori: "Pelatihan",
    tanggal: "2026-11-29",
    lokasi: "Lab Multimedia",
    harga: 30000,
    kuota: 40,
    gambar:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    deskripsi:
      "Belajar bikin poster keren pakai 【entity-Canva¦canonical_name=Canva】 dan 【entity-Figma¦canonical_name=Figma】 dari dasar sampai jadi.",
    warna: "#CCFBF1",
  },
  {
    id: 6,
    judul: "Lomba Cerdas Cermat",
    kategori: "Lomba",
    tanggal: "2026-11-30",
    lokasi: "Ruang Kelas 12",
    harga: 0,
    kuota: 60,
    gambar:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    deskripsi:
      "Uji wawasan umum, sains, dan pengetahuan sekolah. Siapa paling cepat dan tepat?",
    warna: "#FEF3C7",
  },
];
