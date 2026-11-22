// components/LoginForm.tsx - CLIENT COMPONENT
// "use client" WAJIB BARIS PALING PERTAMA! Gak boleh ada export / import / apapun di atasnya!

"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [sandi, setSandi] = useState("");
  const [lihat, setLihat] = useState(false);
  const [sisa, setSisa] = useState(5);
  const [error, setError] = useState("");
  const router = useRouter();
  const cari = useSearchParams();
  const dari = cari.get("dari") || "/admin/kelola";

  function masuk() {
    if (sandi === "admin123") {
      document.cookie = "admin=ya; path=/; max-age=86400";
      localStorage.setItem("admin", "ya");
      router.push(dari);
      router.refresh();
    } else {
      const baru = sisa - 1;
      setSisa(Math.max(0, baru));
      setError(
        baru <= 0
          ? "Kamu terkunci! Refresh halaman untuk coba lagi."
          : "Kata sandi salah! Coba lagi.",
      );
      setSandi("");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#120826",
        color: "white",
        fontFamily: "system-ui",
        padding: "40px 16px",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            margin: "0 auto",
            borderRadius: 22,
            background: "linear-gradient(135deg,#FBBF24,#EC4899,#8B5CF6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 900,
            boxShadow: "0 12px 30px rgba(236,72,153,.5)",
          }}
        >
          E
        </div>
        <h1 style={{ margin: "16px 0 4px", fontSize: 28, fontWeight: 900 }}>
          EventKu{" "}
          <span style={{ color: "#C4B5FD", fontSize: 16 }}>• ADMIN</span>
        </h1>
        <p style={{ color: "#C4B5FD", margin: 0 }}>
          Masuk untuk kelola event & pesanan
        </p>

        <div
          style={{
            background: "linear-gradient(135deg,#1E103A,#4C1D95)",
            border: "1px solid #7C3AED",
            borderRadius: 24,
            padding: 28,
            marginTop: 24,
            textAlign: "left",
            boxShadow: "0 20px 50px rgba(0,0,0,.4)",
          }}
        >
          <span
            style={{
              background: "#120826",
              color: "#FBBF24",
              padding: "7px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 800,
              border: "1px solid #7C3AED",
            }}
          >
            🔒 MASUK ADMIN
          </span>
          <h2
            style={{
              margin: "16px 0 0",
              lineHeight: 1.3,
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            Selamat Datang
            <br />
            Kembali, Admin 👋
          </h2>

          <div
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              marginTop: 14,
            }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                style={{
                  width: 26,
                  height: 8,
                  borderRadius: 999,
                  background:
                    i <= sisa
                      ? "linear-gradient(90deg,#FBBF24,#EC4899)"
                      : "#3B2A7A",
                  display: "inline-block",
                }}
              />
            ))}
            <span style={{ fontWeight: 700, fontSize: 13, marginLeft: 6 }}>
              Sisa {sisa}/5 percobaan
            </span>
          </div>

          <label
            style={{
              display: "block",
              marginTop: 20,
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            🔑 KATA SANDI ADMIN *
          </label>
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 10,
              background: "#120826",
              borderRadius: 999,
              padding: 6,
              border: "1px solid #7C3AED",
            }}
          >
            <input
              type={lihat ? "text" : "password"}
              value={sandi}
              onChange={(e) => setSandi(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && masuk()}
              placeholder="••••••••"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                padding: "8px 14px",
                fontSize: 16,
              }}
            />
            <button
              onClick={() => setLihat(!lihat)}
              style={{
                background: "#7C3AED",
                color: "white",
                border: "none",
                borderRadius: 999,
                padding: "8px 16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              👁 Lihat
            </button>
          </div>

          {error && (
            <p
              style={{
                color: "#FCA5A5",
                fontSize: 13,
                fontWeight: 700,
                marginTop: 10,
              }}
            >
              ⚠ {error}
            </p>
          )}

          <button
            onClick={masuk}
            disabled={sisa <= 0}
            style={{
              width: "100%",
              marginTop: 16,
              background: "linear-gradient(90deg,#FBBF24,#EC4899)",
              color: "white",
              border: "none",
              borderRadius: 999,
              padding: "14px",
              fontWeight: 900,
              cursor: "pointer",
              fontSize: 15,
              opacity: sisa <= 0 ? 0.5 : 1,
            }}
          >
            🔓 Masuk ke Admin →
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#C4B5FD",
              fontSize: 12,
              marginTop: 14,
            }}
          >
            🔒 Sesi aman •{" "}
            <Link href="/" style={{ color: "white", fontWeight: 700 }}>
              Balik ke Beranda
            </Link>
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#C4B5FD",
              fontSize: 12,
              margin: "8px 0 0",
            }}
          >
            Coba sandi: <b style={{ color: "white" }}>admin123</b>
          </p>
        </div>
      </div>
    </div>
  );
}
