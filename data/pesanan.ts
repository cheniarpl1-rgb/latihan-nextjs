// data/pesanan.ts - FULL LANGKAH 1 MISI 22
// Ini cuma tipe saja, tidak ada data lagi
export type Pesanan = {
  nomor: number;
  event_id: number;
  nama: string;
  email: string;
  jumlah: number;
  total: number;
  dibuat: string;
  events: { judul: string } | null;
};