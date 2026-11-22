"use client";
import { useState } from "react";

export default function Kontak() {
  const [nama, setNama] = useState("");
  const [kontak, setKontak] = useState("");
  const [pesan, setPesan] = useState("");
  const [kirim, setKirim] = useState(false);

  return (
    <div style={{ marginTop: 36 }}>
      <style>{`
        .card-hover { transition: all 0.25s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 20px 35px rgba(0,0,0,0.18) !important; border-color: #1E1B4B !important; }
      `}</style>

      <h1
        style={{ fontSize: 38, fontWeight: 900, color: "#1E1B4B", margin: 0 }}
      >
        Hubungi Kami <span>💬</span>
      </h1>
      <p style={{ color: "#64748B", fontSize: 17 }}>
        Ada pertanyaan soal event? Chat kami, dibalas panitia secepatnya.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 16,
          marginTop: 20,
        }}
      >
        <div
          className="card-hover"
          style={{
            background: "#CCFBF1",
            borderRadius: 24,
            border: "3px solid white",
            padding: 20,
            boxShadow: "0 12px 22px rgba(0,0,0,0.10)",
          }}
        >
          <p style={{ fontSize: 28, margin: 0 }}>📍</p>
          <b style={{ color: "#1E1B4B" }}>Sekolah</b>
          <p style={{ margin: "6px 0 0", color: "#334155" }}>
            Jl. Lolaras, Karangkates
          </p>
        </div>
        <div
          className="card-hover"
          style={{
            background: "#FBCFE8",
            borderRadius: 24,
            border: "3px solid white",
            padding: 20,
            boxShadow: "0 12px 22px rgba(0,0,0,0.10)",
          }}
        >
          <p style={{ fontSize: 28, margin: 0 }}>📧</p>
          <b style={{ color: "#1E1B4B" }}>Email</b>
          <p style={{ margin: "6px 0 0", color: "#334155" }}>
            halo@eventku.sch.id
          </p>
        </div>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="card-hover"
          style={{
            background: "#D9F99D",
            borderRadius: 24,
            border: "3px solid white",
            padding: 20,
            boxShadow: "0 12px 22px rgba(0,0,0,0.10)",
            textDecoration: "none",
            display: "block",
          }}
        >
          <p style={{ fontSize: 28, margin: 0 }}>💬</p>
          <b style={{ color: "#1E1B4B" }}>WA Panitia</b>
          <p style={{ margin: "6px 0 0", color: "#334155" }}>
            0812-3456-7890 → Chat →
          </p>
        </a>
      </div>

      <div
        className="card-hover"
        style={{
          background: "white",
          borderRadius: 28,
          border: "3px solid white",
          boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
          padding: 28,
          marginTop: 20,
        }}
      >
        <h2 style={{ color: "#1E1B4B", marginTop: 0 }}>Kirim Pesan ✉️</h2>
        <label style={{ fontWeight: 700, fontSize: 13, color: "#1E1B4B" }}>
          Nama
        </label>
        <input
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama kamu"
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: 16,
            border: "1px solid #E5E7EB",
            padding: "12px 16px",
            margin: "6px 0 14px",
            outline: "none",
          }}
        />
        <label style={{ fontWeight: 700, fontSize: 13, color: "#1E1B4B" }}>
          Email / WA
        </label>
        <input
          value={kontak}
          onChange={(e) => setKontak(e.target.value)}
          placeholder="Email / WA"
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: 16,
            border: "1px solid #E5E7EB",
            padding: "12px 16px",
            margin: "6px 0 14px",
            outline: "none",
          }}
        />
        <label style={{ fontWeight: 700, fontSize: 13, color: "#1E1B4B" }}>
          Pesan
        </label>
        <textarea
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pertanyaan kamu..."
          rows={4}
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            borderRadius: 16,
            border: "1px solid #E5E7EB",
            padding: "12px 16px",
            margin: "6px 0 14px",
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        {kirim ? (
          <p
            style={{
              background: "#D9F99D",
              color: "#365314",
              padding: "12px",
              borderRadius: 16,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            ✅ Pesan terkirim! Makasih, {nama}.
          </p>
        ) : (
          <button
            onClick={() => {
              if (!nama || !pesan) return alert("Isi nama & pesan dulu ya!");
              setKirim(true);
            }}
            style={{
              width: "100%",
              background: "#1E1B4B",
              color: "white",
              border: "none",
              borderRadius: 999,
              padding: "13px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Kirim Pesan →
          </button>
        )}
      </div>
    </div>
  );
}
