"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", teks: "Beranda" },
  { href: "/event", teks: "Event" },
  { href: "/favorit", teks: "Favorit" },
  { href: "/pesanan", teks: "Pesanan" },
  { href: "/tentang", teks: "Tentang" },
  { href: "/kontak", teks: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#38307A]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3">
        <Link
          href="/"
          className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-xl font-black text-transparent"
        >
          EventKu
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm font-bold">
          {menu.map((m) => {
            const aktif =
              pathname === m.href ||
              (m.href !== "/" && pathname.startsWith(m.href));
            return (
              <Link
                key={m.href}
                href={m.href}
                className={
                  aktif
                    ? "rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-3 py-1.5 text-white shadow-md"
                    : "rounded-full px-3 py-1.5 text-white/80 hover:bg-white/15 hover:text-white"
                }
              >
                {m.teks}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/event"
          className="ml-auto rounded-full bg-white px-4 py-2 text-sm font-black text-[#38307A]"
        >
          Cari Event →
        </Link>
      </div>
    </header>
  );
}
