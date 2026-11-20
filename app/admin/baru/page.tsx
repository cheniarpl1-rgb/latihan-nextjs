import type { Metadata } from "next";
import FormEvent from "@/components/FormEvent";

export const metadata: Metadata = { title: "Tambah Event" };

export default function Baru() {
  return (
    <>
      <h1
        style={{
          fontSize: 38,
          fontWeight: 900,
          color: "#1E1B4B",
          marginTop: 36,
        }}
      >
        Tambah <span style={{ color: "#65A30D" }}>Event</span> ➕
      </h1>
      <p style={{ color: "#64748B", marginBottom: 20 }}>
        Isi formulir di bawah untuk menambah event baru.
      </p>
      <FormEvent />
    </>
  );
}
