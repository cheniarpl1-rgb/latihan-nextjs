"use client";
import { useState } from "react";

export default function KontakPage() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [sukses, setSukses] = useState(false);

  function kirim(e: any) {
    e.preventDefault();
    if (!nama || !email || !pesan) {
      alert("Isi nama, email, dan pesan dulu ya!");
      return;
    }
    setSukses(true);
    setNama("");
    setEmail("");
    setPesan("");
  }

  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    .kartu{transition:all .3s ease}
    .kartu:hover{transform:translateY(-8px) scale(1.03) rotate(-1deg);box-shadow:0 14px 0 #1E1B4B, 0 25px 40px rgba(30,27,75,.3)!important}
    .goyang:hover{animation:goyang .4s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default;color:#0A0A1A}
    .hov:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 10px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
  </style>`;

  const INP: any = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 12,
    border: "2px solid #1E1B4B",
    margin: "5px 0 12px",
    outline: "none",
    fontSize: 14,
    background: "white",
    color: "#1E1B4B",
  };

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
        style={{ maxWidth: 900, margin: "0 auto", padding: "18px 16px 80px" }}
      >
        <div
          style={{
            background: "linear-gradient(90deg,#BAE6FD,#FBCFE8,#FEF3C7)",
            border: "3px solid #1E1B4B",
            boxShadow: "0 8px 0 #1E1B4B",
            borderRadius: 22,
            padding: "26px 28px",
          }}
        >
          <h1
            style={{
              margin: "0 0 8px",
              fontSize: 32,
              fontWeight: 900,
              color: "#0A0A1A",
            }}
          >
            <span className="hov">Hubungi Kami 👋</span>
          </h1>
          <p style={{ margin: 0, color: "#0A0A1A", fontWeight: 700 }}>
            <span className="hov">
              Ada pertanyaan soal event? Chat aja, kami bales secepatnya.
            </span>
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 18,
            marginTop: 18,
          }}
        >
          {/* EMAIL - luar biru pastel, dalem biru muda pastel, bukan putih lagi */}
          <div
            className="kartu"
            style={{
              background: "#BFDBFE",
              border: "3px solid #1E1B4B",
              boxShadow: "0 8px 0 #1E1B4B, 0 16px 30px rgba(30,27,75,.2)",
              borderRadius: 20,
              padding: "22px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32 }}>📧</div>
            <h3
              style={{
                margin: "10px 0 6px",
                color: "#0A0A1A",
                fontSize: 18,
                fontWeight: 900,
              }}
            >
              <span className="hov">Email</span>
            </h3>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 800,
                fontSize: 14,
                background: "#DBEAFE",
                padding: "9px 10px",
                borderRadius: 12,
                border: "2px solid #93C5FD",
              }}
            >
              <span className="hov">eventku@sekolah.id</span>
            </p>
          </div>

          {/* WHATSAPP - luar hijau pastel, dalem hijau muda pastel */}
          <div
            className="kartu"
            style={{
              background: "#BBF7D0",
              border: "3px solid #1E1B4B",
              boxShadow: "0 8px 0 #1E1B4B, 0 16px 30px rgba(30,27,75,.2)",
              borderRadius: 20,
              padding: "22px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32 }}>📱</div>
            <h3
              style={{
                margin: "10px 0 6px",
                color: "#0A0A1A",
                fontSize: 18,
                fontWeight: 900,
              }}
            >
              <span className="hov">WhatsApp</span>
            </h3>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 800,
                fontSize: 14,
                background: "#DCFCE7",
                padding: "9px 10px",
                borderRadius: 12,
                border: "2px solid #86EFAC",
              }}
            >
              <span className="hov">0812-3456-7890</span>
            </p>
          </div>

          {/* LOKASI - luar pink pastel, dalem pink muda pastel */}
          <div
            className="kartu"
            style={{
              background: "#FBCFE8",
              border: "3px solid #1E1B4B",
              boxShadow: "0 8px 0 #1E1B4B, 0 16px 30px rgba(30,27,75,.2)",
              borderRadius: 20,
              padding: "22px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32 }}>📍</div>
            <h3
              style={{
                margin: "10px 0 6px",
                color: "#0A0A1A",
                fontSize: 18,
                fontWeight: 900,
              }}
            >
              <span className="hov">Lokasi</span>
            </h3>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 800,
                fontSize: 14,
                background: "#FCE7F3",
                padding: "9px 10px",
                borderRadius: 12,
                border: "2px solid #F9A8D4",
              }}
            >
              <span className="hov">SMK Brantas Karangkates</span>
            </p>
          </div>
        </div>

        <div
          style={{
            background: "white",
            border: "3px solid #1E1B4B",
            boxShadow: "0 8px 0 #1E1B4B",
            borderRadius: 20,
            padding: 22,
            marginTop: 18,
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              color: "#0A0A1A",
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            <span className="hov">Kirim Pesan</span>
          </h2>
          {sukses && (
            <div
              style={{
                background: "#ECFDF5",
                border: "2px solid #10B981",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              <b style={{ color: "#065F46" }}>Pesan terkirim! Makasih ya 🙏</b>
            </div>
          )}
          <form onSubmit={kirim}>
            <label style={{ color: "#0A0A1A", fontSize: 13, fontWeight: 800 }}>
              <span className="hov">Nama Lengkap</span>
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e: any) => setNama(e.target.value)}
              placeholder="Contoh: Cenia"
              style={INP}
            />
            <label style={{ color: "#0A0A1A", fontSize: 13, fontWeight: 800 }}>
              <span className="hov">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="cenia@gmail.com"
              style={INP}
            />
            <label style={{ color: "#0A0A1A", fontSize: 13, fontWeight: 800 }}>
              <span className="hov">Pesan</span>
            </label>
            <textarea
              value={pesan}
              onChange={(e: any) => setPesan(e.target.value)}
              placeholder="Tulis pertanyaanmu soal event..."
              style={{ ...INP, minHeight: 100, resize: "vertical" }}
            />
            <button
              type="submit"
              className="goyang"
              style={{
                width: "100%",
                background: "#FBBF24",
                color: "#0A0A1A",
                border: "3px solid #1E1B4B",
                padding: 13,
                borderRadius: 999,
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Kirim Pesan →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
