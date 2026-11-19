// app/api/events/[id]/route.ts - FULL, TINGGAL PASTE
import { ambilEvent } from "@/data/ambil";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const idAngka = Number(id);

  if (!Number.isFinite(idAngka)) {
    return Response.json({ pesan: "Event tidak ditemukan" }, { status: 404 });
  }

  const event = await ambilEvent(idAngka);

  if (!event) {
    return Response.json({ pesan: "Event tidak ditemukan" }, { status: 404 });
  }

  return Response.json(event);
}
