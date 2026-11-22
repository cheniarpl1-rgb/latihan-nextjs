import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        style={{
          background: "#FFF1E6",
          fontFamily: "Poppins, sans-serif",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
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
            <Navbar />
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
          style={{
            maxWidth: 1100,
            width: "100%",
            margin: "0 auto",
            padding: "0 16px 50px",
            flex: 1,
          }}
        >
          {children}
        </main>

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

        {/* MARQUEE PALING BAWAH SENDIRI, NEMPEL DI BAWAH LAYAR */}
        <div
          style={{
            overflow: "hidden",
            padding: "12px 0",
            background: "linear-gradient(to right, #FBBF24, #F472B6, #2DD4BF)",
            color: "white",
            fontWeight: 800,
            position: "sticky",
            bottom: 0,
            zIndex: 50,
            width: "100%",
          }}
        >
          <div className="marquee">
            <span>
              ✨ WORKSHOP &nbsp; 🎶 MUSIK &nbsp; 🏆 LOMBA &nbsp; 🛍 BAZAR &nbsp;
              ⚽ OLAHRAGA &nbsp;
            </span>
            <span>
              ✨ WORKSHOP &nbsp; 🎶 MUSIK &nbsp; 🏆 LOMBA &nbsp; 🛍 BAZAR &nbsp;
              ⚽ OLAHRAGA &nbsp;
            </span>
          </div>
        </div>
      </body>
    </html>
  );
}
