import { cookies } from "next/headers";
import { events } from "@/data/events";
import FormPesan from "@/components/FormPesan";
import { notFound } from "next/navigation";

export default async function DetailEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    notFound();
  }

  const namaAwal = (await cookies()).get("nama")?.value ?? "";

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{event.judul}</h1>
      <FormPesan event={event} namaAwal={namaAwal} />
    </div>
  );
}
