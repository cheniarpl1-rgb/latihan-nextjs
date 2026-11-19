import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#0F172A] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
