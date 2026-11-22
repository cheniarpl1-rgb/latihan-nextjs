import { EVENTS, type Event } from "./events";

export async function ambilEvents(): Promise<Event[]> {
  return EVENTS;
}

export async function ambilEvent(id: number): Promise<Event | undefined> {
  return EVENTS.find((e) => e.id === id);
}

export type Pesanan = {
  id: number;
  eventId: number;
  nama: string;
  email: string;
  jumlah: number;
  pesan: string;
};

const PESANAN: Pesanan[] = [];
let idPesanan = 1;

export async function hitungPesanan(eventId: number) {
  const list = PESANAN.filter((p) => p.eventId === eventId);
  return {
    jumlahPesanan: list.length,
    jumlahTiket: list.reduce((t, p) => t + p.jumlah, 0),
  };
}

export async function buatPesanan(data: {
  event: Event | number;
  nama: string;
  email: string;
  jumlah: number;
  pesan?: string;
}) {
  const eventId = typeof data.event === "number" ? data.event : data.event.id;
  const baru: Pesanan = {
    id: idPesanan++,
    eventId,
    nama: data.nama,
    email: data.email,
    jumlah: data.jumlah,
    pesan: data.pesan ?? "",
  };
  PESANAN.push(baru);
  return { ok: true, pesan: "Pesanan berhasil dibuat!", pesanan: baru };
}

export async function ambilPesanan(): Promise<Pesanan[]> {
  return PESANAN;
}
