"use client";

export default function BerandaPage() {
  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    @keyframes melayang{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .goyang:hover{animation:goyang .4s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default}
    .hov:hover{background:#FBBF24;color:#0A0A1A!important;-webkit-text-fill-color:#0A0A1A!important;transform:translateY(-3px) scale(1.08) rotate(-2deg);padding:2px 10px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
    .kata{display:inline-block;transition:all .2s ease;cursor:default;line-height:1.05}
    .kata:hover{transform:translateY(-6px) scale(1.08) rotate(-2deg)}
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
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "28px 16px 80px",
          textAlign: "center",
        }}
      >
        <span
          className="goyang"
          style={{
            display: "inline-block",
            background: "#CCFBF1",
            border: "2px solid #99F6E4",
            color: "#0F766E",
            padding: "8px 18px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          ✨ PORTAL RESMI TIKET & EVENT SEKOLAH
        </span>

        {/* JUDUL - PASTEL + FONT GEDE */}
        <h1
          style={{
            margin: "18px 0 14px",
            fontSize: 76,
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: -1,
          }}
        >
          <span
            className="kata hov"
            style={{
              color: "#5EEAD4",
              WebkitTextStroke: "2px #1E1B4B",
              textShadow: "4px 4px 0 #1E1B4B",
            }}
          >
            Cari&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#F9A8D4",
              WebkitTextStroke: "2px #1E1B4B",
              textShadow: "4px 4px 0 #1E1B4B",
            }}
          >
            Event&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#FDE68A",
              WebkitTextStroke: "2px #1E1B4B",
              textShadow: "4px 4px 0 #1E1B4B",
            }}
          >
            Seru,
          </span>
          <br />
          <span
            className="kata hov"
            style={{
              color: "#C4B5FD",
              WebkitTextStroke: "2px #1E1B4B",
              textShadow: "4px 4px 0 #1E1B4B",
            }}
          >
            Gak&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#93C5FD",
              WebkitTextStroke: "2px #1E1B4B",
              textShadow: "4px 4px 0 #1E1B4B",
            }}
          >
            Pake&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#FDA4AF",
              WebkitTextStroke: "2px #1E1B4B",
              textShadow: "4px 4px 0 #1E1B4B",
            }}
          >
            Ribet.
          </span>
        </h1>

        <p
          style={{
            margin: "0 auto",
            maxWidth: 620,
            color: "#475569",
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          Selamat datang di EventKu. Satu tempat untuk semua keseruan sekolahmu.
          Dari belajar bareng, tanding futsal, nonton konser, sampai jajan di
          bazar, semuanya bisa kamu temukan di sini tanpa harus tanya sana-sini
          lagi.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 22,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/event"
            className="goyang"
            style={{
              background: "#1E1B4B",
              color: "white",
              padding: "13px 24px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "0 5px 0 rgba(0,0,0,.25)",
            }}
          >
            Lihat Semua Event →
          </a>
          <a
            href="/favorit"
            className="goyang"
            style={{
              background: "white",
              color: "#0A0A1A",
              border: "2px solid #E5E7EB",
              padding: "12px 22px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            ❤️ Favoritku
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#0A0A1A" }}>
              <span className="hov">120+</span>
            </div>
            <p
              style={{
                margin: "4px 0 0",
                color: "#64748B",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Event Sukses
            </p>
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#0A0A1A" }}>
              <span className="hov">2.500+</span>
            </div>
            <p
              style={{
                margin: "4px 0 0",
                color: "#64748B",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Tiket Terjual
            </p>
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#0A0A1A" }}>
              <span className="hov">4.9 ★</span>
            </div>
            <p
              style={{
                margin: "4px 0 0",
                color: "#64748B",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Rating Siswa
            </p>
          </div>
        </div>

        <h2
          style={{
            margin: "52px 0 10px",
            fontSize: 30,
            fontWeight: 900,
            color: "#0A0A1A",
          }}
        >
          <span className="hov">Kenapa harus pakai EventKu?</span>
        </h2>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 620,
            color: "#64748B",
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          Karena dulu, buat ikut satu event aja kamu harus cari info ke
          sana-sini, tanya kakak kelas, cek grup, dan
        </p>
      </div>
    </div>
  );
}
