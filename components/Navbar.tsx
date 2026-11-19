// components/Navbar.tsx - FULL, DESAIN SAMA KAYAK LAYOUT LAMA KAMU
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU = [
  { label: "Beranda", href: "/" },
  { label: "Event", href: "/event" },
  { label: "Favorit", href: "/favorit" },
  { label: "Pesanan", href: "/pesanan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isAktif = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#FBBF24]/30 bg-[#334155] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-tight">
          <span className="text-[#FBBF24]">Event</span>
          <span className="text-[#2DD4BF]">Ku</span>
        </Link>

        {/* Menu Tengah - INI YANG UDAH DIBENERIN */}
        <nav className="flex items-center gap-1 rounded-full bg-black/30 p-1.5 ring-1 ring-white/20">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={
                isAktif(m.href)
                  ? "rounded-full bg-[#FB7185] px-4 py-2 text-sm font-black text-white shadow-lg shadow-[#FB7185]/30"
                  : "rounded-full px-4 py-2 text-sm font-bold text-slate-200 hover:text-white"
              }
            >
              {m.label}
            </Link>
          ))}
        </nav>

        {/* Tombol Kanan */}
        <Link
          href="/event"
          className="rounded-full bg-[#FBBF24] px-4 py-2.5 text-sm font-black text-slate-900 shadow-lg shadow-[#FBBF24]/30 transition hover:-translate-y-0.5"
        >
          Cari Event →
        </Link>
      </div>
    </header>
  );
}
