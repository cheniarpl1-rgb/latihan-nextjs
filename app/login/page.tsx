"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
export const dynamic = "force-dynamic";

function LoginAdmin() {
  const [sandi, setSandi] = useState("");
  const [lihat, setLihat] = useState(false);
  const [sisa, setSisa] = useState(5);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const dari = searchParams.get("dari") || "/admin/kelola";

  function masuk() {
    if (sandi === "admin123") {
      localStorage.setItem("admin", "ya");
      router.push(dari);
    } else {
      const baru = sisa - 1;
      setSisa(Math.max(0, baru));
      setError("Kata sandi salah! Coba lagi ya.");
      setSandi("");
    }
  }

  return (
    <div style={{ marginTop: 10 }}>
      {/* JUDUL - SAMA KAYAK BERANDA */}
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            background: "#CCFBF1",
            color: "#0F766E",
            padding: "8px 18px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          ✨ PORTAL RESMI TIKET & EVENT SEKOLAH
        </span>
        <h1
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#1E1B4B",
            margin: "16px 0 6px",
            lineHeight: 1.1,
          }}
        >
          Halo, Admin! 👋
        </h1>
        <p style={{ color: "#64748B", margin: 0 }}>
          Masuk untuk kelola event & pesanan EventKu
        </p>
      </div>

      {/* KARTU LOGIN - PUTIH PASTEL */}
      <div
        style={{
          maxWidth: 440,
          margin: "24px auto 0",
          background: "white",
          borderRadius: 28,
          padding: 28,
          border: "3px solid white",
          boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        }}
      >
        <span
          style={{
            background: "#FCE7F3",
            color: "#9D174D",
            padding: "7px 14px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 800,
          }}
        >
          🔒 MASUK ADMIN
        </span>
        <h2 style={{ color: "#1E1B4B", margin: "16px 0 0", lineHeight: 1.3 }}>
          Selamat Datang
          <br />
          Kembali, Admin
        </h2>

        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            marginTop: 12,
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              style={{
                width: 26,
                height: 8,
                borderRadius: 999,
                background: i <= sisa ? "#FBBF24" : "#FDE68A",
                display: "inline-block",
              }}
            />
          ))}
          <span
            style={{
              color: "#1E1B4B",
              fontWeight: 700,
              fontSize: 13,
              marginLeft: 6,
            }}
          >
            Sisa {sisa}/5 percobaan
          </span>
        </div>

        <label
          style={{
            display: "block",
            marginTop: 20,
            color: "#1E1B4B",
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
            background: "#FFF7ED",
            borderRadius: 999,
            padding: 6,
            border: "2px solid #FDE68A",
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
              color: "#1E1B4B",
              padding: "8px 14px",
              fontSize: 16,
              fontWeight: 600,
            }}
          />
          <button
            onClick={() => setLihat(!lihat)}
            style={{
              background: "white",
              color: "#1E1B4B",
              border: "2px solid #E5E7EB",
              borderRadius: 999,
              padding: "8px 16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            👁️ Lihat
          </button>
        </div>

        {error && (
          <p
            style={{
              color: "#DC2626",
              background: "#FEF2F2",
              padding: "10px 14px",
              borderRadius: 14,
              fontSize: 13,
              fontWeight: 700,
              marginTop: 12,
            }}
          >
            ⚠️ {error}
          </p>
        )}

        <button
          onClick={masuk}
          disabled={sisa <= 0}
          style={{
            width: "100%",
            marginTop: 16,
            background: "#FBBF24",
            color: "#1E1B4B",
            border: "none",
            borderRadius: 999,
            padding: "13px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 15,
            boxShadow: "0 8px 16px rgba(251,191,36,0.4)",
            opacity: sisa <= 0 ? 0.5 : 1,
          }}
        >
          🔓 Masuk ke Admin →
        </button>

        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            fontSize: 12,
            marginTop: 14,
          }}
        >
          🔒 Sesi aman •{" "}
          <Link href="/" style={{ color: "#1E1B4B", fontWeight: 700 }}>
            Balik ke Beranda
          </Link>
        </p>
        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            fontSize: 12,
            margin: "8px 0 0",
          }}
        >
          Coba sandi: <b style={{ color: "#1E1B4B" }}>admin123</b>
        </p>
      </div>

      {/* BAWAH - 3 KOTAK KECIL KAYAK DI BERANDA */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 22,
        }}
      >
        {[
          ["🎪", "Kelola Event"],
          ["🎟️", "Kelola Pesanan"],
          ["⭐", "Lihat Laporan"],
        ].map(([ikon, teks]) => (
          <div
            key={teks}
            style={{
              background: "white",
              borderRadius: 20,
              padding: "10px 20px",
              fontWeight: 700,
              color: "#1E1B4B",
              fontSize: 14,
              border: "3px solid white",
              boxShadow: "0 8px 16px rgba(0,0,0,0.06)",
            }}
          >
            {ikon} {teks}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginAdmin />
    </Suspense>
  );
}
