"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Pesanan = {
  id: string;
  judul: string;
  tanggal: string;
  lokasi: string;
  jumlah: number;
  total: number;
};

export default function Pesanan() {
  const [list, setList] = useState<Pesanan[]>([]);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("pesanan") || "[]"));
  }, []);

  return (
    <div style={{ marginTop: 36 }}>
      <style>{`
        .card-hover { transition: all 0.25s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 35px rgba(0,0,0,0.18) !important; }
      `}</style>

      <div
        style={{
          background: "linear-gradient(135deg,#BAE6FD,#CCFBF1)",
          borderRadius: 32,
          border: "3px solid white",
          boxShadow: "0 15px 30px rgba(0,0,0,0.10)",
          padding: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 38,
              fontWeight: 900,
              color: "#1E1B4B",
              margin: 0,
            }}
          >
            Pesanan Saya 🎟️
          </h1>
          <p style={{ color: "#475569", margin: "6px 0 0" }}>
            Semua tiket yang udah kamu pesan. Total <b>{list.length}</b>{" "}
            pesanan.
          </p>
        </div>
        <p style={{ fontSize: 48, margin: 0 }}>🎫</p>
      </div>

      {list.length === 0 ? (
        <div
          className="card-hover"
          style={{
            maxWidth: 650,
            margin: "28px auto",
            textAlign: "center",
            background: "white",
            borderRadius: 28,
            border: "3px solid white",
            boxShadow: "0 12px 25px rgba(0,0,0,0.10)",
            padding: 40,
          }}
        >
          <p style={{ fontSize: 56, margin: 0 }}>🎫</p>
          <h2 style={{ color: "#1E1B4B" }}>Belum ada pesanan</h2>
          <p style={{ color: "#64748B" }}>
            Tiket kamu bakal muncul di sini setelah checkout.
          </p>
          <Link
            href="/event"
            style={{
              display: "inline-block",
              marginTop: 10,
              background: "#FBBF24",
              color: "#1E1B4B",
              padding: "12px 26px",
              borderRadius: 999,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Pesan Sekarang →
          </Link>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 16, marginTop: 22 }}>
          {list.map((p) => (
            <div
              key={p.id}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 24,
                border: "3px solid white",
                boxShadow: "0 12px 25px rgba(0,0,0,0.10)",
                padding: 22,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div>
                <b style={{ color: "#1E1B4B", fontSize: 18 }}>{p.judul}</b>
                <p style={{ color: "#64748B", margin: "6px 0 0" }}>
                  📅 {p.tanggal} • 📍 {p.lokasi} • {p.jumlah} tiket
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{ fontWeight: 900, color: "#1E1B4B", fontSize: 18 }}
                >
                  Rp {p.total.toLocaleString("id-ID")}
                </div>
                <span
                  style={{
                    background: "#D9F99D",
                    color: "#365314",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  ✅ BERHASIL
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
