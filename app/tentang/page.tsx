export default function Tentang() {
  return (
    <div style={{ marginTop: 36 }}>
      <style>{`
        .card-hover { transition: all 0.25s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 35px rgba(0,0,0,0.18) !important; border-color: #1E1B4B !important; }
      `}</style>

      <div
        className="card-hover"
        style={{
          background: "linear-gradient(135deg,#FBCFE8,#FEF3C7,#CCFBF1)",
          borderRadius: 32,
          border: "3px solid white",
          boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
          padding: "36px 28px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            background: "white",
            padding: "8px 16px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 13,
            color: "#EC4899",
          }}
        >
          ✨ PORTAL RESMI SEKOLAH
        </span>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#1E1B4B",
            margin: "16px 0 8px",
            lineHeight: 1.1,
          }}
        >
          Tentang <span style={{ color: "#EC4899" }}>EventKu</span> 💛
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#475569",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          EventKu adalah portal resmi tiket & event sekolah. Biar siswa gak
          ketinggalan workshop, lomba, musik, dan bazar.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        <div
          className="card-hover"
          style={{
            background: "white",
            borderRadius: 28,
            border: "3px solid white",
            boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
            padding: 28,
          }}
        >
          <p style={{ fontSize: 36, margin: 0 }}>📖</p>
          <h2 style={{ color: "#1E1B4B", margin: "10px 0" }}>Cerita Kami</h2>
          <p style={{ color: "#475569", lineHeight: 1.7, margin: 0 }}>
            Dibuat dari keresahan anak sekolah yang sering telat tau ada event.
            Sekarang semua info, tiket, dan jadwal ada di satu tempat, rapi dan
            gampang dicari.
          </p>
        </div>
        <div
          className="card-hover"
          style={{
            background: "#1E1B4B",
            borderRadius: 28,
            padding: 28,
            color: "white",
            boxShadow: "0 12px 25px rgba(0,0,0,0.18)",
          }}
        >
          <p style={{ fontSize: 36, margin: 0 }}>🎯</p>
          <h2 style={{ margin: "10px 0" }}>Misi Kami</h2>
          <p style={{ margin: "6px 0" }}>✅ Memudahkan pesan tiket</p>
          <p style={{ margin: "6px 0" }}>✅ Membantu panitia kelola event</p>
          <p style={{ margin: "6px 0" }}>✅ Bikin event sekolah makin rame</p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 14,
          marginTop: 20,
        }}
      >
        {[
          { angka: "6+", label: "Event", bg: "#CCFBF1" },
          { angka: "120+", label: "Peserta", bg: "#FBCFE8" },
          { angka: "4", label: "Kategori", bg: "#FEF3C7" },
        ].map((s) => (
          <div
            key={s.label}
            className="card-hover"
            style={{
              background: s.bg,
              borderRadius: 24,
              border: "3px solid white",
              padding: 20,
              textAlign: "center",
              boxShadow: "0 12px 22px rgba(0,0,0,0.10)",
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 900, color: "#1E1B4B" }}>
              {s.angka}
            </div>
            <div style={{ fontWeight: 700, color: "#1E1B4B" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
