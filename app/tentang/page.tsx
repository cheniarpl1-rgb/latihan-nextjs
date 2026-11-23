"use client";

export default function TentangPage() {
  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    @keyframes melayang{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .kartu{transition:all .3s ease}
    .kartu:hover{transform:translateY(-8px) scale(1.02) rotate(-1deg);box-shadow:0 16px 0 #1E1B4B, 0 28px 45px rgba(30,27,75,.3)!important}
    .kartu2:hover{transform:translateY(-8px) scale(1.02) rotate(1deg)!important;box-shadow:0 16px 0 #1E1B4B, 0 28px 45px rgba(30,27,75,.3)!important}
    .goyang:hover{animation:goyang .4s ease infinite}
    .melayang{animation:melayang 3s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default;color:#0A0A1A}
    .hov:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 10px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
    .hov-putih{display:inline-block;transition:all .2s ease;cursor:default;color:white}
    .hov-putih:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 10px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
  </style>`;

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
        style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 16px 80px" }}
      >
        {/* HEADER - lebih hidup, nggak kaku */}
        <div
          style={{
            background:
              "linear-gradient(90deg,#FBCFE8,#FEF3C7,#BFDBFE,#A7F3D0)",
            border: "3px solid #1E1B4B",
            boxShadow: "0 8px 0 #1E1B4B",
            borderRadius: 26,
            padding: "32px 22px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            className="goyang"
            style={{
              display: "inline-block",
              background: "white",
              border: "2px solid #1E1B4B",
              padding: "7px 16px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 900,
              color: "#DB2777",
              letterSpacing: 1,
            }}
          >
            ✨ PORTAL RESMI SEKOLAH ✨
          </span>
          <h1
            style={{
              margin: "14px 0 10px",
              fontSize: 42,
              fontWeight: 900,
              color: "#0A0A1A",
              lineHeight: 1.1,
            }}
          >
            <span className="hov">Tentang</span>{" "}
            <span className="hov" style={{ color: "#EC4899" }}>
              EventKu
            </span>{" "}
            <span className="melayang" style={{ display: "inline-block" }}>
              🧡
            </span>
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: 580,
              color: "#0A0A1A",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            <span className="hov">
              EventKu adalah portal resmi tiket & event sekolah. Biar siswa gak
              ketinggalan workshop, lomba, musik, dan bazar.
            </span>
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              marginTop: 18,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/event"
              className="goyang"
              style={{
                background: "#1E1B4B",
                color: "white",
                padding: "12px 24px",
                borderRadius: 999,
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 4px 0 rgba(0,0,0,.25)",
              }}
            >
              Cari Event →
            </a>
            <a
              href="/favorit"
              className="goyang"
              style={{
                background: "white",
                color: "#0A0A1A",
                border: "3px solid #1E1B4B",
                padding: "10px 22px",
                borderRadius: 999,
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Lihat Favorit ❤️
            </a>
          </div>
        </div>

        {/* CERITA + MISI - dibikin nggak sejajar kaku, satu miring kiri, satu miring kanan */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 22,
            marginTop: 24,
          }}
        >
          <div
            className="kartu"
            style={{
              background: "white",
              border: "3px solid #1E1B4B",
              boxShadow: "0 10px 0 #1E1B4B, 0 20px 35px rgba(30,27,75,.2)",
              borderRadius: 24,
              padding: 24,
              transform: "rotate(-1deg)",
            }}
          >
            <div style={{ fontSize: 36 }}>📖</div>
            <h2
              style={{
                margin: "12px 0 10px",
                color: "#0A0A1A",
                fontSize: 22,
                fontWeight: 900,
              }}
            >
              <span className="hov">Cerita Kami</span>
            </h2>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 700,
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              <span className="hov">
                Dibuat dari keresahan anak sekolah yang sering telat tau ada
                event. Sekarang semua info, tiket, dan jadwal ada di satu
                tempat, rapi dan gampang dicari.
              </span>
            </p>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginTop: 16,
              }}
            >
              <span
                style={{
                  background: "#FEF3C7",
                  border: "2px solid #1E1B4B",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 900,
                }}
              >
                📅 Jadwal Rapi
              </span>
              <span
                style={{
                  background: "#DCFCE7",
                  border: "2px solid #1E1B4B",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 900,
                }}
              >
                🎟️ Tiket Gampang
              </span>
            </div>
          </div>

          <div
            className="kartu2 kartu"
            style={{
              background: "#1E1B4B",
              border: "3px solid #1E1B4B",
              boxShadow: "0 10px 0 #FBBF24, 0 20px 35px rgba(30,27,75,.3)",
              borderRadius: 24,
              padding: 24,
              transform: "rotate(1deg)",
            }}
          >
            <div style={{ fontSize: 36 }}>🎯</div>
            <h2
              style={{
                margin: "12px 0 12px",
                color: "white",
                fontSize: 22,
                fontWeight: 900,
              }}
            >
              <span className="hov-putih">Misi Kami</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontWeight: 800,
                  fontSize: 15,
                  background: "rgba(255,255,255,.12)",
                  padding: "10px 12px",
                  borderRadius: 12,
                }}
              >
                <span className="hov-putih">✅ Memudahkan pesan tiket</span>
              </p>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontWeight: 800,
                  fontSize: 15,
                  background: "rgba(255,255,255,.12)",
                  padding: "10px 12px",
                  borderRadius: 12,
                }}
              >
                <span className="hov-putih">
                  ✅ Membantu panitia kelola event
                </span>
              </p>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontWeight: 800,
                  fontSize: 15,
                  background: "rgba(255,255,255,.12)",
                  padding: "10px 12px",
                  borderRadius: 12,
                }}
              >
                <span className="hov-putih">
                  ✅ Bikin event sekolah makin rame
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* STATS - 3 kartu pastel, nggak kaku */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 18,
            marginTop: 22,
          }}
        >
          <div
            className="kartu"
            style={{
              background: "#A7F3D0",
              border: "3px solid #1E1B4B",
              boxShadow: "0 8px 0 #1E1B4B",
              borderRadius: 22,
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28 }}>🎪</div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#0A0A1A",
                margin: "6px 0 2px",
              }}
            >
              <span className="hov">6+</span>
            </div>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 800,
                fontSize: 14,
              }}
            >
              <span className="hov">Event Seru</span>
            </p>
          </div>
          <div
            className="kartu"
            style={{
              background: "#FBCFE8",
              border: "3px solid #1E1B4B",
              boxShadow: "0 8px 0 #1E1B4B",
              borderRadius: 22,
              padding: "20px 16px",
              textAlign: "center",
              transform: "translateY(-6px)",
            }}
          >
            <div style={{ fontSize: 28 }}>👥</div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#0A0A1A",
                margin: "6px 0 2px",
              }}
            >
              <span className="hov">120+</span>
            </div>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 800,
                fontSize: 14,
              }}
            >
              <span className="hov">Siswa Ikut</span>
            </p>
          </div>
          <div
            className="kartu"
            style={{
              background: "#FEF08A",
              border: "3px solid #1E1B4B",
              boxShadow: "0 8px 0 #1E1B4B",
              borderRadius: 22,
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28 }}>🏆</div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#0A0A1A",
                margin: "6px 0 2px",
              }}
            >
              <span className="hov">4</span>
            </div>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 800,
                fontSize: 14,
              }}
            >
              <span className="hov">Kategori Event</span>
            </p>
          </div>
        </div>

        {/* BAWAH - ajakan, biar nggak putus kaku */}
        <div
          className="kartu"
          style={{
            background: "linear-gradient(90deg,#FBBF24,#F472B6)",
            border: "3px solid #1E1B4B",
            boxShadow: "0 8px 0 #1E1B4B",
            borderRadius: 22,
            padding: "20px 22px",
            marginTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 4px",
                color: "#0A0A1A",
                fontSize: 20,
                fontWeight: 900,
              }}
            >
              <span className="hov">Yuk, jangan sampai ketinggalan lagi!</span>
            </h3>
            <p
              style={{
                margin: 0,
                color: "#0A0A1A",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              <span className="hov">
                Cek event terbaru & amankan tiketmu sekarang.
              </span>
            </p>
          </div>
          <a
            href="/event"
            className="goyang"
            style={{
              background: "#0A0A1A",
              color: "white",
              padding: "12px 22px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Lihat Event →
          </a>
        </div>
      </div>
    </div>
  );
}
