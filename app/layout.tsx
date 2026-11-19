import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "EventKu" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#EDE6D6] text-[#1A1A1A] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
