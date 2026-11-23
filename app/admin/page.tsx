"use client";
import { useState } from "react";

export default function AdminPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  const [salah, setSalah] = useState("");

  function masuk(e: any) {
    e.preventDefault();
    if (user === "admin" && pass === "admin123") {
      setLogin(true);
      setSalah("");
      localStorage.setItem("adminLogin", "ya");
    } else {
      setSalah("Username / Password salah! Coba admin / admin123");
    }
  }

  function keluar() {
    setLogin(false);
    setUser("");
    setPass("");
    localStorage.removeItem("adminLogin");
  }

  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    @keyframes melayang{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .kartu{transition:all .3s ease}
    .kartu:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 14px 0 #1E1B4B, 0 25px 40px rgba(30,27,75,.3)!important}
    .goyang:hover{animation:goyang .4s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default;color:#0A0A1A}
    .hov:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 10px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
    .hov-putih{display:inline-block;transition:all .2s ease;cursor:default;color:white}
    .hov-putih:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 10px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
  </style>`;

  const INP: any = {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px 16px",
    borderRadius: 14,
    border: "2px solid #1E1B4B",
    margin: "6px 0 14px",
    outline: "none",
    fontSize: 15,
    background: "#FEFCE8",
    color: "#1E1B4B",
    fontWeight: 600,
    boxShadow: "0 3px 0 #1E1B4B",
  };

  // Kalau udah login, tampilannya
  if (login) {
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
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "30px 16px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48 }}>🎉</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#0A0A1A" }}>
            <span className="hov">Halo Admin!</span>
          </h1>
          <p style={{ color: "#0A0A1A", fontWeight: 700 }}>
            <span className="hov">
              Kamu berhasil masuk. Kelola event & pesanan di sini.
            </span>
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 18,
            }}
          >
            <a
              href="/event"
              style={{
                background: "#1E1B4B",
                color: "white",
                padding: "12px 22px",
                borderRadius: 999,
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Lihat Event →
            </a>
            <a
              href="/pesanan"
              style={{
                background: "#FBBF24",
                color: "#0A0A1A",
                border: "3px solid #1E1B4B",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Lihat Pesanan →
            </a>
            <button
              onClick={keluar}
              className="goyang"
              style={{
                background: "white",
                color: "#E11D48",
                border: "2px solid #1E1B4B",
                padding: "11px 20px",
                borderRadius: 999,
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Keluar
            </button>
          </div>
        </div>
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
        style={{
          maxWidth: 520,
          margin: "0 auto",
          padding: "22px 16px 80px",
          textAlign: "center",
        }}
      >
        {/* LOGO E - sama kayak sebelumnya */}
        <div
          className="melayang"
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg,#F472B6,#A78BFA)",
            border: "3px solid #1E1B4B",
            boxShadow: "0 6px 0 #1E1B4B",
            borderRadius: 22,
            width: 64,
            height: 64,
            lineHeight: "64px",
            fontSize: 32,
            fontWeight: 900,
            color: "white",
          }}
        >
          E
        </div>
        <h1
          style={{
            margin: "14px 0 6px",
            fontSize: 32,
            fontWeight: 900,
            color: "#0A0A1A",
          }}
        >
          <span className="hov">EventKu • ADMIN</span>
        </h1>
        <p style={{ margin: "0 0 18px", color: "#0A0A1A", fontWeight: 700 }}>
          <span className="hov">Masuk untuk kelola event & pesanan</span>
        </p>

        {/* KOTAK MASUK ADMIN - INI YANG DIBENERIN JADI PASTEL */}
        <div
          className="kartu"
          style={{
            background:
              "linear-gradient(180deg,#BFDBFE 0%,#FBCFE8 50%,#FEF3C7 100%)",
            border: "3px solid #1E1B4B",
            boxShadow: "0 10px 0 #1E1B4B, 0 20px 35px rgba(30,27,75,.25)",
            borderRadius: 22,
            padding: 22,
            textAlign: "left",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#1E1B4B",
              color: "white",
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 0.5,
            }}
          >
            🔒 MASUK ADMIN
          </span>
          <h2
            style={{
              margin: "14px 0 16px",
              color: "#0A0A1A",
              fontSize: 22,
              fontWeight: 900,
            }}
          >
            <span className="hov">Selamat Datang</span>
          </h2>

          {salah && (
            <div
              style={{
                background: "#FEE2E2",
                border: "2px solid #FCA5A5",
                color: "#991B1B",
                padding: 10,
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 800,
                marginBottom: 12,
              }}
            >
              {salah}
            </div>
          )}

          <form onSubmit={masuk}>
            <label style={{ color: "#0A0A1A", fontSize: 14, fontWeight: 900 }}>
              <span className="hov">Username</span>
            </label>
            <input
              type="text"
              value={user}
              onChange={(e: any) => setUser(e.target.value)}
              placeholder="admin"
              style={INP}
            />

            <label style={{ color: "#0A0A1A", fontSize: 14, fontWeight: 900 }}>
              <span className="hov">Password</span>
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e: any) => setPass(e.target.value)}
              placeholder="admin123"
              style={INP}
            />

            <button
              type="submit"
              className="goyang"
              style={{
                width: "100%",
                background: "#FBBF24",
                color: "#0A0A1A",
                border: "3px solid #1E1B4B",
                boxShadow: "0 4px 0 #1E1B4B",
                padding: 14,
                borderRadius: 999,
                fontWeight: 900,
                cursor: "pointer",
                fontSize: 16,
                marginTop: 4,
              }}
            >
              Masuk →
            </button>
          </form>

          <p
            style={{
              margin: "14px 0 0",
              textAlign: "center",
              color: "#0A0A1A",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <span className="hov">Demo: admin / admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}
