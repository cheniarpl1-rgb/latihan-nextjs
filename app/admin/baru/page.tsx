// app/admin/baru/page.tsx
import type { Metadata } from "next";
import FormEvent from "@/components/FormEvent";

export const metadata: Metadata = { title: "Tambah Event" };

export default function Baru() {
  return (
    <>
      <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 10 }}>
        Tambah{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#FBBF24,#EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Event
        </span>{" "}
        ➕
      </h1>
      <p style={{ color: "#C4B5FD", marginBottom: 20 }}>
        Isi formulir di bawah untuk menambah event baru.
      </p>
      <FormEvent />
    </>
  );
}
