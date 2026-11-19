import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EventKu",
  description: "Cari event favoritmu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#090B12] text-white antialiased">
        {/* HEADER - INI YANG DIUBAH, DIBIKIN BEDA DARI HALAMAN */}
        {/* Halaman hitam, header dibikin abu slate terang + garis bawah */}
        <header className="sticky top-0 z-50 border-b-2 border-[#FBBF24]/30 bg-[#334155] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            {/* Logo */}
            <Link href="/" className="text-3xl font-black tracking-tight">
              <span className="text-[#FBBF24]">Event</span>
              <span className="text-[#2DD4BF]">Ku</span>
            </Link>

            {/* Menu Tengah - Beranda, Event, dll */}
            <nav className="flex items-center gap-1 rounded-full bg-black/30 p-1.5 ring-1 ring-white/20">
              <Link
                href="/"
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 hover:text-white"
              >
                Beranda
              </Link>
              <Link
                href="/event"
                className="rounded-full bg-[#FB7185] px-4 py-2 text-sm font-black text-white shadow-lg shadow-[#FB7185]/30"
              >
                Event
              </Link>
              <Link
                href="/favorit"
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 hover:text-white"
              >
                Favorit
              </Link>
              <Link
                href="/pesanan"
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 hover:text-white"
              >
                Pesanan
              </Link>
              <Link
                href="/tentang"
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 hover:text-white"
              >
                Tentang
              </Link>
              <Link
                href="/kontak"
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-200 hover:text-white"
              >
                Kontak
              </Link>
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

        <main>{children}</main>
      </body>
    </html>
  );
}
