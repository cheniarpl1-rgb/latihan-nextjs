"use client";
import { useState, useEffect } from "react";

function infoEvent(namaEvent: string) {
  const n = (namaEvent || "").toLowerCase();
  if (n.includes("react"))
    return {
      gambar:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      warna: "#5EEAD4",
    };
  if (n.includes("futsal"))
    return {
      gambar:
        "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
      warna: "#F9A8D4",
    };
  if (n.includes("akustik"))
    return {
      gambar:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      warna: "#C4B5FD",
    };
  if (n.includes("bazar"))
    return {
      gambar:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80",
      warna: "#FDE047",
    };
  if (n.includes("poster"))
    return {
      gambar:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
      warna: "#93C5FD",
    };
  if (n.includes("cerdas"))
    return {
      gambar:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      warna: "#FDA4AF",
    };
  return {
    gambar:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    warna: "#FDE047",
  };
}

const rupiah = (n: number) => "Rp " + (n || 0).toLocaleString("id-ID");

export default function PesananPage() {
  const [list, setList] = useState<any[]>([]);
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    try {
      const data: any[] = JSON.parse(localStorage.getItem("pesanan") || "[]");
      setList(data);
    } catch {}
    setSiap(true);
  }, []);

  function hapus(index: number) {
    const b = list.filter((_, i) => i !== index);
    setList(b);
    localStorage.setItem("pesanan", JSON.stringify(b));
  }

  function hapusSemua() {
    if (!confirm("Hapus semua pesanan?")) return;
    setList([]);
    localStorage.setItem("pesanan", JSON.stringify([]));
  }

  const totalSemua = list.reduce((s, p) => s + (p.total || 0), 0);

  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    .kartu{transition:all .3s ease}
    .kartu:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 14px 0 #1E1B4B, 0 25px 40px rgba(30,27,75,.3)!important}
    .goyang:hover{animation:goyang .4s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default;color:#0A0A1A}
    .hov:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 8px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
  </style>`;

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
        <p style={{ fontWeight: 800 }}>Loading pesanan...</p>
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
        style={{ maxWidth: 900, margin: "0 auto", padding: "16px 16px 80px" }}
      >
        <div
          style={{
            background: "linear-gradient(90deg,#BAE6FD,#99F6E4)",
            borderRadius: 20,
            padding: "20px 22px",
            border: "3px solid #1E1B4B",
            boxShadow: "0 6px 0 #1E1B4B",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                margin: "0 0 6px",
                fontSize: 28,
                fontWeight: 900,
                color: "#0A0A1A",
              }}
            >
              <span className="hov">Pesanan Saya 🎟️</span>
            </h1>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              <span className="hov">
                Semua tiket yang udah kamu pesan. Total {list.length} pesanan.
              </span>
            </p>
            <p style={{ margin: "8px 0 0", color: "#0A0A1A", fontWeight: 900 }}>
              <span className="hov">
                Total Bayar Semua: {rupiah(totalSemua)}
              </span>
            </p>
          </div>
          <div style={{ fontSize: 40 }}>🎫</div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <a
            href="/event"
            className="goyang"
            style={{
              background: "#1E1B4B",
              color: "white",
              padding: "11px 20px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 14,
              boxShadow: "0 4px 0 rgba(0,0,0,.25)",
            }}
          >
            ← Cari Event Lagi
          </a>
          {list.length > 0 && (
            <button
              onClick={hapusSemua}
              className="goyang"
              style={{
                background: "white",
                color: "#E11D48",
                border: "2px solid #1E1B4B",
                padding: "11px 20px",
                borderRadius: 999,
                fontWeight: 900,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Hapus Semua
            </button>
          )}
        </div>

        {list.length === 0 && (
          <div
            style={{
              background: "#FFF7ED",
              border: "3px solid #1E1B4B",
              boxShadow: "0 6px 0 #1E1B4B",
              borderRadius: 20,
              padding: 32,
              textAlign: "center",
              marginTop: 18,
            }}
          >
            <div style={{ fontSize: 40 }}>💔</div>
            <b style={{ color: "#0A0A1A" }}>
              <span className="hov">Belum ada pesanan</span>
            </b>
            <p style={{ color: "#0A0A1A", margin: "6px 0 14px", fontSize: 14 }}>
              <span className="hov">
                Yuk pesan tiket dulu di halaman Event.
              </span>
            </p>
            <a
              href="/event"
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
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 18,
          }}
        >
          {list.map((p, i) => {
            const info = infoEvent(p.event || p.judul || "");
            return (
              <div
                key={i}
                className="kartu"
                style={{
                  background: info.warna,
                  border: "3px solid #1E1B4B",
                  boxShadow: "0 8px 0 #1E1B4B, 0 16px 30px rgba(30,27,75,.22)",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <img
                  src={info.gambar}
                  alt={p.event}
                  style={{
                    width: 130,
                    objectFit: "cover",
                    display: "block",
                    borderRight: "3px solid #1E1B4B",
                  }}
                />
                <div style={{ flex: 1, padding: "14px 16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#0A0A1A",
                        fontSize: 18,
                        fontWeight: 900,
                        lineHeight: 1.2,
                      }}
                    >
                      <span className="hov">
                        {p.event || p.judul || "Event"}
                      </span>
                    </h3>
                    <b
                      style={{
                        color: "#0A0A1A",
                        fontSize: 16,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span className="hov">{rupiah(p.total || 0)}</span>
                    </b>
                  </div>
                  <p
                    style={{
                      margin: "8px 0 4px",
                      color: "#0A0A1A",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    <span className="hov">
                      👤 Nama Pemesan: {p.nama || "-"}
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0 0 4px",
                      color: "#0A0A1A",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    <span className="hov">
                      📧 Email: {p.email || "-"} | 🎓 Kelas: {p.kelas || "-"}
                    </span>
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: "#0A0A1A",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    <span className="hov">
                      📅 Dipesan: {p.tanggalPesan || p.tanggal || "-"} | 🎫{" "}
                      {p.jumlah || 1} tiket
                    </span>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <span
                      style={{
                        background: "#DCFCE7",
                        color: "#166534",
                        padding: "6px 12px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 900,
                        border: "1px solid #86EFAC",
                      }}
                    >
                      ✅ BERHASIL
                    </span>
                    <button
                      onClick={() => hapus(i)}
                      className="goyang"
                      style={{
                        background: "white",
                        color: "#E11D48",
                        border: "2px solid #FECDD3",
                        padding: "7px 16px",
                        borderRadius: 999,
                        fontWeight: 900,
                        cursor: "pointer",
                        fontSize: 13,
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
