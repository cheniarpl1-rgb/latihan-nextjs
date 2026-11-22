// app/admin/[id]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EVENTS } from "@/data/events";
import FormEvent from "@/components/FormEvent";

export const metadata: Metadata = { title: "Ubah Event" };

export default async function Ubah({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // FIX: Jangan pake Number(id)! ID temen lo itu String(Date.now()), bukan angka!
  // Kalau pake Number(), ID-nya jadi NaN / gak ketemu, makanya halaman ubah-nya notFound terus!
  const event = EVENTS.find((e: any) => String(e.id) === String(id));
  if (!event) notFound();

  return (
    <>
      <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 10 }}>
        Ubah <span style={{ color: "#F59E0B" }}>Event</span> ✏
      </h1>
      <p style={{ color: "#C4B5FD", marginBottom: 20 }}>
        Ubah data event: {event.judul}
      </p>
      <FormEvent event={event} />
    </>
  );
}
