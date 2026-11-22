"use client";
import { useState, useEffect } from "react";
import { EVENTS, rupiah } from "@/data/events";

function getGambar(id: number) {
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

const WARNA_KARTU: Record<number, string> = {
  1: "#5EEAD4",
  2: "#F9A8D4",
  3: "#C4B5FD",
  4: "#FDE047",
  5: "#93C5FD",
  6: "#FDA4AF",
};

export default function FavoritPage() {
  const [favorit, setFavorit] = useState<number[]>([]);
  const [sudahLoad, setSudahLoad] = useState(false);

  // BACA DARI KUNCI YANG SAMA: "favorit" - INI YANG TADI BEDA
  useEffect(() => {
    try {
      const simpan = JSON.parse(localStorage.getItem("favorit") || "[]");
      setFavorit(simpan);
    } catch {
      setFavorit([]);
    }
    setSudahLoad(true);
  }, []);

  // KALAU PINDAH HALAMAN TERUS BALIK LAGI, BACA ULANG BIAR KE-UPDATE
  useEffect(() => {
    function bacaUlang() {
      try {
        const simpan = JSON.parse(localStorage.getItem("favorit") || "[]");
        setFavorit(simpan);
      } catch {}
    }
    window.addEventListener("focus", bacaUlang);
    return () => window.removeEventListener("focus", bacaUlang);
  }, []);

  function hapusFavorit(id: number) {
    const baru = favorit.filter((f) => f !== id);
    setFavorit(baru);
    localStorage.setItem("favorit", JSON.stringify(baru));
  }

  const listFavorit = EVENTS.filter((e) => favorit.includes(e.id));

  if (!sudahLoad)
    return <div style={{ textAlign: "center", padding: 40 }}>Loading...</div>;

  return (
    <div
      style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 60px" }}
    >
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            background: "#FCE7F3",
            color: "#DB2777",
            padding: "8px 18px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          ❤️ EVENT YANG KAMU SUKA
        </span>
        <h1
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#1E1B4B",
            margin: "14px 0 6px",
          }}
        >
          Favorit Kamu
        </h1>
        <p style={{ color: "#64748B" }}>
          {listFavorit.length === 0
            ? "Belum ada yang kamu suka. Yuk klik love ❤️ di halaman Event!"
            : `Kamu punya ${listFavorit.length} event favorit.`}
        </p>
      </div>

      {listFavorit.length === 0 ? (
        <div
          style={{
            background: "white",
            borderRadius: 22,
            padding: 30,
            textAlign: "center",
            marginTop: 24,
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ fontSize: 48 }}>💔</div>
          <h3 style={{ color: "#1E1B4B" }}>Belum ada favorit</h3>
          <p style={{ color: "#64748B" }}>
            Klik tombol love ❤️ di kartu event, nanti muncul di sini.
          </p>
          <a
            href="/event"
            style={{
              display: "inline-block",
              background: "#1E1B4B",
              color: "white",
              padding: "12px 24px",
              borderRadius: 999,
              fontWeight: 800,
              textDecoration: "none",
              marginTop: 10,
            }}
          >
            Cari Event →
          </a>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 22,
            marginTop: 26,
          }}
        >
          {listFavorit.map((e) => {
            const warnaKartu = WARNA_KARTU[e.id] || "#FFF7ED";
            return (
              <div
                key={e.id}
                style={{
                  background: warnaKartu,
                  borderRadius: 26,
                  overflow: "hidden",
                  border: "3px solid white",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={getGambar(e.id)}
                    alt={e.judul}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "white",
                      padding: "6px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#1E1B4B",
                    }}
                  >
                    {e.kategori}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "#FBBF24",
                      padding: "6px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#1E1B4B",
                    }}
                  >
                    {rupiah(e.harga)}
                  </span>
                  <button
                    onClick={() => hapusFavorit(e.id)}
                    style={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      border: "none",
                      background: "white",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                  >
                    ❤️
                  </button>
                </div>
                <div style={{ padding: 18 }}>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      color: "#1E1B4B",
                      fontSize: 19,
                    }}
                  >
                    {e.judul}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 4px",
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    📅 {e.tanggal} • 📍 {e.lokasi}
                  </p>
                  <p
                    style={{
                      margin: "0 0 12px",
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    🎟️ Sisa kuota: {e.kuota}
                  </p>
                  <a
                    href="/event"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#1E1B4B",
                      color: "white",
                      padding: 12,
                      borderRadius: 999,
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    Lihat Detail →
                  </a>
                  <button
                    onClick={() => hapusFavorit(e.id)}
                    style={{
                      width: "100%",
                      background: "white",
                      color: "#DB2777",
                      border: "2px solid #FBCFE8",
                      padding: 10,
                      borderRadius: 999,
                      fontWeight: 800,
                      cursor: "pointer",
                      marginTop: 8,
                    }}
                  >
                    Hapus dari Favorit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
