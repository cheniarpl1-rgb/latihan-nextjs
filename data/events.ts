export type Event = {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  harga: number;
  kuota: number;
  terisi: number;
  gambar?: string;
};

export const events: Event[] = [
  {
    id: 1,
    judul: "Workshop React untuk Pemula",
    kategori: "Workshop",
    tanggal: "2026-11-14",
    lokasi: "Lab RPL",
    harga: 50000,
    kuota: 30,
    terisi: 12,
    gambar: "/img/event-1.png",
  },
  {
    id: 2,
    judul: "Konser Musik Akustik",
    kategori: "Musik",
    tanggal: "2026-11-27",
    lokasi: "Aula",
    harga: 25000,
    kuota: 150,
    terisi: 54,
    gambar: "/img/event-3.png",
  },
  {
    id: 3,
    judul: "Turnamen Futsal",
    kategori: "Olahraga",
    tanggal: "2026-11-30",
    lokasi: "GOR Kampus",
    harga: 10000,
    kuota: 50,
    terisi: 10,
    gambar: "/img/event-2.png",
  },
  {
    id: 4,
    judul: "Bazar Karya Siswa",
    kategori: "Pameran",
    tanggal: "2026-12-01",
    lokasi: "Galeri Seni",
    harga: 15000,
    kuota: 40,
    terisi: 40,
    gambar: "/img/event-4.png", // Kuota sama dengan terisi = TIKET HABIS
  },
  {
    id: 5,
    judul: "Pelatihan Desain Poster",
    kategori: "Pelatihan",
    tanggal: "2026-12-05",
    lokasi: "Auditorium Utama",
    harga: 0,
    kuota: 200,
    terisi: 45,
    gambar: "/img/event-5.png",
  },
];

export function getEvent(id: string | number): Event | undefined {
  const eventId = Number(id);
  return events.find((e) => e.id === eventId);
}

export function rupiah(angka: number): string {
  return "Rp " + angka.toLocaleString("id-ID");
}
