"use client";
import { usePathname } from "next/navigation";
import "./globals.css";

const MENU = [
  { label: "Beranda", href: "/" },
  { label: "Event", href: "/event" },
  { label: "Favorit", href: "/favorit" },
  { label: "Pesanan", href: "/pesanan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
  { label: "• Admin", href: "/admin" },
];

const WARNA_MENU: any = {
  Beranda: "#5EEAD4",
  Event: "#C4B5FD",
  Favorit: "#F9A8D4",
  Pesanan: "#FDE047",
  Tentang: "#93C5FD",
  Kontak: "#FCA5A5",
  "• Admin": "#86EFAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <html lang="id">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial,sans-serif",
          background: "#FFF7ED",
          color: "#1E1B4B",
          paddingBottom: 50,
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "linear-gradient(90deg,#FEF3C7,#FCE7F3,#DBEAFE)",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            borderBottom: "2px solid #FFE4E6",
          }}
        >
          <a
            href="/"
            style={{
              fontSize: 28,
              fontWeight: 900,
              textDecoration: "none",
              color: "#F59E0B",
            }}
          >
            Event<span style={{ color: "#14B8A6" }}>Ku</span>
            <span style={{ color: "#EC4899" }}>.</span>
          </a>
          <nav
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {MENU.map((m) => {
              const aktif =
                path === m.href || (m.href !== "/" && path.startsWith(m.href));
              return (
                <a
                  key={m.label}
                  href={m.href}
                  style={{
                    textDecoration: "none",
                    padding: "9px 16px",
                    borderRadius: 999,
                    fontWeight: 800,
                    fontSize: 14,
                    background: aktif ? "#1E1B4B" : WARNA_MENU[m.label],
                    color: aktif ? "white" : "#1E1B4B",
                    border: aktif
                      ? "3px solid #1E1B4B"
                      : "2px solid transparent",
                    boxShadow: aktif ? "0 6px 14px rgba(0,0,0,.25)" : "none",
                    transform: aktif ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {m.label}
                </a>
              );
            })}
          </nav>
          <a
            href="/event"
            style={{
              background: "#FBBF24",
              color: "#1E1B4B",
              padding: "10px 18px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
              border: "2px solid #1E1B4B",
            }}
          >
            Cari Event →
          </a>
        </header>
        <main>{children}</main>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(90deg,#FBBF24,#F472B6,#38BDF8)",
            padding: "8px 0",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: 900,
            color: "white",
            zIndex: 50,
          }}
        >
          <div
            style={{
              display: "inline-block",
              animation: "jalan 18s linear infinite",
            }}
          >
            🎵 MUSIK &nbsp; 🏆 LOMBA &nbsp; 🛍️ BAZAR &nbsp; ⚽ OLAHRAGA &nbsp;
            ✨ WORKSHOP &nbsp; 🎵 MUSIK &nbsp; 🏆 LOMBA &nbsp; 🛍️ BAZAR &nbsp;
            ⚽ OLAHRAGA &nbsp; ✨ WORKSHOP &nbsp;
          </div>
          <style>{`@keyframes jalan{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
        </div>
      </body>
    </html>
  );
}
