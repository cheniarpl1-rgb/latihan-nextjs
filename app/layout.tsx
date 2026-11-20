import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    { label: "Beranda", href: "/", bg: "#CCFBF1" },
    { label: "Event", href: "/event", bg: "#FBCFE8" },
    { label: "Favorit", href: "/favorit", bg: "#FEF3C7" },
    { label: "Pesanan", href: "/pesanan", bg: "#BAE6FD" },
    { label: "Tentang", href: "/tentang", bg: "#DDD6FE" },
    { label: "Admin", href: "/admin", bg: "#D9F99D" },
    { label: "Kontak", href: "/kontak", bg: "#FFEDD5" },
  ];

  return (
    <html lang="id">
      <body
        style={{
          background: "#FFF1E6",
          fontFamily: "Poppins, sans-serif",
          margin: 0,
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "linear-gradient(to right, #FEF3C7, #FBCFE8, #CCFBF1)",
            padding: "12px 16px",
            borderBottom: "2px solid white",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: 28,
                fontWeight: 900,
                textDecoration: "none",
                color: "#1E1B4B",
              }}
            >
              <span style={{ color: "#F59E0B" }}>Event</span>
              <span style={{ color: "#14B8A6" }}>Ku</span>
              <span style={{ color: "#EC4899" }}>.</span>
            </Link>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {menu.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  style={{
                    background: m.bg,
                    color: "#1E1B4B",
                    padding: "8px 16px",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    border: "2px solid white",
                  }}
                >
                  {m.label}
                </Link>
              ))}
            </div>

            <Link
              href="/event"
              style={{
                background: "#FBBF24",
                color: "#1E1B4B",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Cari Event →
            </Link>
          </div>
        </header>

        <main
          style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 50px" }}
        >
          {children}
        </main>

        <div
          style={{
            overflow: "hidden",
            padding: "12px 0",
            background: "linear-gradient(to right, #FBBF24, #F472B6, #2DD4BF)",
            color: "white",
            fontWeight: 800,
          }}
        >
          <div className="marquee">
            <span>
              ✨ WORKSHOP &nbsp; 🎶 MUSIK &nbsp; 🏆 LOMBA &nbsp; 🛍️ BAZAR &nbsp;
              ⚽ OLAHRAGA &nbsp;
            </span>
            <span>
              ✨ WORKSHOP &nbsp; 🎶 MUSIK &nbsp; 🏆 LOMBA &nbsp; 🛍️ BAZAR &nbsp;
              ⚽ OLAHRAGA &nbsp;
            </span>
          </div>
        </div>
        <footer
          style={{
            textAlign: "center",
            padding: 24,
            color: "#64748B",
            background: "white",
            fontSize: 14,
          }}
        >
          © 2026 EventKu - Portal Event Sekolah 💛
        </footer>
      </body>
    </html>
  );
}
