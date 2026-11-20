import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ambilEvent } from "@/data/ambil";
import FormEvent from "@/components/FormEvent";

export const metadata: Metadata = { title: "Ubah Event" };

export default async function Ubah({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await ambilEvent(Number(id));
  if (!event) notFound();

  return (
    <>
      <h1
        style={{
          fontSize: 38,
          fontWeight: 900,
          color: "#1E1B4B",
          marginTop: 36,
        }}
      >
        Ubah <span style={{ color: "#F59E0B" }}>Event</span> ✏️
      </h1>
      <p style={{ color: "#64748B", marginBottom: 20 }}>
        Ubah data event: {event.judul}
      </p>
      <FormEvent event={event} />
    </>
  );
}
