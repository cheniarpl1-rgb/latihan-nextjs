"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENUS = [
  { label: "Beranda", href: "/", warna: "#CCFBF1" },
  { label: "Event", href: "/event", warna: "#FCE7F3" },
  { label: "Favorit", href: "/favorit", warna: "#FEF3C7" },
  { label: "Pesanan", href: "/pesanan", warna: "#CCFBF1" },
  { label: "Tentang", href: "/tentang", warna: "#EDE9FE" },
  { label: "Kontak", href: "/kontak", warna: "#FEF3C7" },
];

export default function Navbar() {
  const pathname = usePathname();

  function gaya(href: string, warna: string, aktif: boolean) {
    return {
      background: aktif ? "#1E1B4B" : warna,
      color: aktif ? "white" : "#1E1B4B",
      padding: "9px 18px",
      borderRadius: 999,
      fontWeight: 800,
      fontSize: 14,
      textDecoration: "none" as const,
      border: "2px solid transparent",
    };
  }

  return (
    <nav
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {MENUS.map((m) => (
        <Link
          key={m.href}
          href={m.href}
          style={gaya(m.href, m.warna, pathname === m.href)}
        >
          {m.label}
        </Link>
      ))}

      {/* ADMIN - sekarang cuma biru tua kalau LAGI di /admin */}
      <Link
        href="/admin"
        style={gaya(
          "/admin",
          "#FCE7F3",
          pathname === "/admin" || pathname.startsWith("/admin/"),
        )}
      >
        • Admin
      </Link>
    </nav>
  );
}
