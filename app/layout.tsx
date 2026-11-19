import "./globals.css";
import Navbar from "@/components/Navbar";

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
        {/* HEADER - SEKARANG PINDAH KE components/Navbar.tsx BIAR PINK-NYA BISA PINDAH */}
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
