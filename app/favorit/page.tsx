"use client";
import { useState, useEffect } from "react";

const EVENTS = [
  {
    id: 1,
    judul: "Workshop React Pemula",
    kategori: "Workshop",
    tanggal: "12 Des 2026",
    lokasi: "Lab Komputer 1",
    harga: 25000,
    kuota: 30,
    deskripsi: "Belajar React dari nol bareng kakak kelas.",
  },
  {
    id: 2,
    judul: "Turnamen Futsal",
    kategori: "Olahraga",
    tanggal: "15 Des 2026",
    lokasi: "Lapangan Sekolah",
    harga: 15000,
    kuota: 40,
    deskripsi: "Adu skill futsal antar kelas rebutan piala.",
  },
  {
    id: 3,
    judul: "Konser Musik Sekolah",
    kategori: "Musik",
    tanggal: "18 Des 2026",
    lokasi: "Aula Sekolah",
    harga: 10000,
    kuota: 100,
    deskripsi: "Konser musik yang diselenggarakan oleh band sekolah.",
  },
  {
    id: 4,
    judul: "Bazar Sekolah",
    kategori: "Bazar",
    tanggal: "20 Des 2026",
    lokasi: "Halaman Sekolah",
    harga: 0,
    kuota: 200,
    deskripsi: "Jajan dan belanja karya siswa.",
  },
  {
    id: 5,
    judul: "Workshop Desain Poster",
    kategori: "Workshop",
    tanggal: "22 Des 2026",
    lokasi: "Ruang Multimedia",
    harga: 20000,
    kuota: 25,
    deskripsi: "Belajar bikin poster keren buat pemula.",
  },
  {
    id: 6,
    judul: "Lomba Cerdas Cermat",
    kategori: "Lomba",
    tanggal: "25 Des 2026",
    lokasi: "Aula Sekolah",
    harga: 10000,
    kuota: 50,
    deskripsi: "Uji wawasan umum dan sains.",
  },
];

function gambar(id: number) {
  if (id === 1)
    return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80";
  if (id === 2)
    return "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80";
  if (id === 3)
    return "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80";
  if (id === 4)
    return "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80";
  if (id === 5)
    return "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80";
  if (id === 6)
    return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80";
  return "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80";
}

const WARNA: any = {
  1: "#5EEAD4",
  2: "#F9A8D4",
  3: "#C4B5FD",
  4: "#FDE047",
  5: "#93C5FD",
  6: "#FDA4AF",
};
const rupiah = (n: number) =>
  n === 0 ? "Gratis" : "Rp " + n.toLocaleString("id-ID");

export default function FavoritPage() {
  const [favIds, setFavIds] = useState<number[]>([]);
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    try {
      const data: any[] = JSON.parse(localStorage.getItem("favorit") || "[]");
      const ids: number[] = data
        .map((x: any) => (typeof x === "number" ? x : x.id))
        .filter((x: any) => typeof x === "number");
      setFavIds([...new Set(ids)]);
    } catch {}
    setSiap(true);
  }, []);

  function hapus(id: number) {
    const b: number[] = favIds.filter((f) => f !== id);
    setFavIds(b);
    localStorage.setItem("favorit", JSON.stringify(b));
  }

  const favEvents = favIds
    .map((id) => EVENTS.find((e) => e.id === id))
    .filter((e): e is (typeof EVENTS)[0] => !!e);

  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    .kartu{transition:all .3s ease}
    .kartu:hover{transform:translateY(-8px) scale(1.02) rotate(-1deg);box-shadow:0 16px 0 #1E1B4B, 0 25px 40px rgba(30,27,75,.3)!important}
    .goyang:hover{animation:goyang .4s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default;color:#0A0A1A}
    .hov:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 8px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
  </style>`;

  // Selama belum siap, jangan tampilkan angka 0 dulu - biar nggak hydration error & nggak kedip
  if (!siap) {
    return (
      <div
        style={{
          background:
            "linear-gradient(180deg,#FFE4E6 0%,#FEF3C7 35%,#D1FAE5 65%,#DBEAFE 100%)",
          minHeight: "100vh",
          padding: "60px 16px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32 }}>⏳</div>
        <p style={{ fontWeight: 800 }}>Loading favorit...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#FFE4E6 0%,#FEF3C7 35%,#D1FAE5 65%,#DBEAFE 100%)",
        minHeight: "100vh",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 16px 60px" }}
      >
        <div
          style={{
            background: "linear-gradient(90deg,#BAE6FD,#FBCFE8,#FEF3C7)",
            borderRadius: 20,
            padding: "18px 22px",
            border: "3px solid #1E1B4B",
            boxShadow: "0 6px 0 #1E1B4B",
          }}
        >
          <h1
            style={{
              margin: "0 0 4px",
              fontSize: 28,
              fontWeight: 900,
              color: "#0A0A1A",
            }}
          >
            <span className="hov">Favorit Saya ❤️</span>
          </h1>
          <p
            style={{
              margin: 0,
              color: "#0A0A1A",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Event yang kamu simpan, ada {favEvents.length} event.
          </p>
        </div>

        {favEvents.length === 0 && (
          <div
            style={{
              background: "#FFF7ED",
              border: "3px solid #1E1B4B",
              boxShadow: "0 6px 0 #1E1B4B",
              borderRadius: 20,
              padding: 28,
              textAlign: "center",
              marginTop: 18,
            }}
          >
            <div style={{ fontSize: 36 }}>💔</div>
            <b style={{ color: "#0A0A1A" }}>Belum ada favorit</b>
            <p style={{ color: "#0A0A1A", margin: "6px 0 14px", fontSize: 14 }}>
              Klik 🤍 di halaman Event dulu.
            </p>
            <a
              href="/event"
              className="goyang"
              style={{
                display: "inline-block",
                background: "#FBBF24",
                color: "#0A0A1A",
                border: "3px solid #1E1B4B",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Cari Event →
            </a>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 18,
            marginTop: 18,
          }}
        >
          {favEvents.map((e) => (
            <div
              key={e.id}
              className="kartu"
              style={{
                background: WARNA[e.id],
                borderRadius: 22,
                overflow: "hidden",
                border: "3px solid #1E1B4B",
                boxShadow: "0 8px 0 #1E1B4B, 0 16px 30px rgba(30,27,75,.22)",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={gambar(e.id)}
                  alt={e.judul}
                  style={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    display: "block",
                    borderBottom: "3px solid #1E1B4B",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "#1E1B4B",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 900,
                    border: "2px solid white",
                  }}
                >
                  {e.kategori.toUpperCase()}
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "#FBBF24",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 900,
                    color: "#0A0A1A",
                    border: "2px solid #1E1B4B",
                  }}
                >
                  {rupiah(e.harga)}
                </span>
              </div>
              <div style={{ padding: "12px 14px 14px" }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#0A0A1A",
                    fontSize: 17,
                    fontWeight: 900,
                    lineHeight: 1.2,
                  }}
                >
                  <span className="hov">{e.judul}</span>
                </h3>
                <p
                  style={{
                    margin: "0 0 6px",
                    color: "#0A0A1A",
                    fontWeight: 800,
                    fontSize: 13,
                    background: "rgba(255,255,255,.6)",
                    padding: "6px 10px",
                    borderRadius: 10,
                  }}
                >
                  📅 {e.tanggal} • 📍 {e.lokasi}
                </p>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#0A0A1A",
                    fontWeight: 800,
                    fontSize: 13,
                    background: "rgba(255,255,255,.6)",
                    padding: "6px 10px",
                    borderRadius: 10,
                  }}
                >
                  🎟️ Sisa kuota: {e.kuota}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#0A0A1A",
                    fontWeight: 700,
                    fontSize: 13,
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical" as any,
                    overflow: "hidden",
                  }}
                >
                  {e.deskripsi}
                </p>
                <a
                  href="/event"
                  className="goyang"
                  style={{
                    display: "block",
                    background: "#0A0A1A",
                    color: "white",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: 999,
                    fontWeight: 900,
                    textDecoration: "none",
                    marginBottom: 8,
                    fontSize: 14,
                  }}
                >
                  Lihat Detail →
                </a>
                <button
                  onClick={() => hapus(e.id)}
                  className="goyang"
                  style={{
                    width: "100%",
                    background: "white",
                    color: "#E11D48",
                    border: "2px solid #1E1B4B",
                    padding: "10px",
                    borderRadius: 999,
                    fontWeight: 900,
                    cursor: "pointer",
                    fontSize: 13,
                  }}
                >
                  Hapus dari Favorit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
