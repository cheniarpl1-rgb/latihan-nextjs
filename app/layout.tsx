import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EventKu",
  description: "Katalog dan pemesanan tiket event sekolah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="antialiased">
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-500">
          EventKu &bull; dibuat di kelas XII RPL 1
        </footer>
      </body>
    </html>
  );
}
