"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const aktif = (href: string) =>
    path === href
      ? "rounded-full bg-[#FB7185] px-5 py-2.5 text-white shadow-lg shadow-rose-500/40"
      : "rounded-full px-4 py-2.5 text-slate-200 hover:bg-white/10 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#0F172A]/95 px-6 py-3 border-b border-white/10 backdrop-blur">
      <Link href="/" className="text-3xl font-black tracking-tight">
        <span className="text-[#FBBF24]">Event</span>
        <span className="text-[#5EEAD4]">Ku</span>
      </Link>
      <div className="flex items-center gap-2 rounded-full bg-white/5 p-1.5 text- font-bold ring-1 ring-white/10">
        <Link href="/" className={aktif("/")}>
          Beranda
        </Link>
        <Link href="/event" className={aktif("/event")}>
          Event
        </Link>
        <Link href="/favorit" className={aktif("/favorit")}>
          Favorit
        </Link>
        <Link href="/pesanan" className={aktif("/pesanan")}>
          Pesanan
        </Link>
        <Link href="/tentang" className={aktif("/tentang")}>
          Tentang
        </Link>
        <Link href="/kontak" className={aktif("/kontak")}>
          Kontak
        </Link>
      </div>
      <Link
        href="/event"
        className="rounded-full bg-[#FBBF24] px-5 py-2.5 text-sm font-black text-[#0F172A] shadow-lg shadow-amber-500/30"
      >
        Cari Event →
      </Link>
    </nav>
  );
}
