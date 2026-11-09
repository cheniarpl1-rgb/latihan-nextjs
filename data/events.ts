export type Event = {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  harga: number;
  kuota: number;
  terisi: number;
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
  },
];

// Tambahkan fungsi helper ini di bagian bawah file events.ts
export function getEvent(id: string | number): Event | undefined {
  const eventId = Number(id);
  return events.find((e) => e.id === eventId);
}
