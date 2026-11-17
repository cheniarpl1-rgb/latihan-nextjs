import Link from "next/link";
import { alamatHalaman, type Saringan } from "@/data/saring";

export default function Halaman({
  s,
  hal,
  jumlah,
}: {
  s: Saringan;
  hal: number;
  jumlah: number;
}) {
  if (jumlah <= 1) return null;

  const nomor = Array.from({ length: jumlah }, (_, i) => i + 1);

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {hal > 1 && (
        <Link
          href={alamatHalaman(s, hal - 1)}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20 hover:bg-white/20"
        >
          « Sebelumnya
        </Link>
      )}
      {nomor.map((n) => (
        <Link
          key={n}
          href={alamatHalaman(s, n)}
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            n === hal
              ? "bg-gradient-to-r from-fuchsia-500 to-orange-500 text-white shadow-lg"
              : "bg-white/10 ring-1 ring-white/20 hover:bg-white/20"
          }`}
        >
          {n}
        </Link>
      ))}
      {hal < jumlah && (
        <Link
          href={alamatHalaman(s, hal + 1)}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20 hover:bg-white/20"
        >
          Berikutnya »
        </Link>
      )}
    </div>
  );
}
