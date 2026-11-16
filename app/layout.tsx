import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700" },
  ],
});

export const metadata: Metadata = {
  title: { default: "EventKu", template: "%s · EventKu" },
  description: "Katalog dan pemesanan tiket event sekolah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="antialiased">
      <body
        className={`${poppins.className} flex min-h-screen flex-col bg-slate-50 text-slate-800`}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-500">
          EventKu &bull; dibuat di kelas XII RPL 1
        </footer>
      </body>
    </html>
  );
}
