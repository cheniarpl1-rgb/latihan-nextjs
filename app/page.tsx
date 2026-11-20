import Link from "next/link";

export default function Beranda() {
  return (
    <>
      {/* TULISAN PEMBUKA */}
      <div style={{ textAlign: "center", paddingTop: 50, paddingBottom: 20 }}>
        <span
          style={{
            background: "#CCFBF1",
            color: "#0F766E",
            padding: "8px 18px",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          ✨ PORTAL RESMI TIKET & EVENT SEKOLAH
        </span>

        <h1
          style={{
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#1E1B4B",
            marginTop: 20,
          }}
        >
          Temukan event seru
          <br />
          di <span style={{ color: "#EC4899" }}>sekolahmu</span> 🎉
        </h1>

        <p
          style={{
            color: "#64748B",
            fontSize: 18,
            maxWidth: 600,
            margin: "16px auto",
          }}
        >
          Workshop, lomba, musik, dan bazar. Semua bisa dipesan online, cepat
          dan gampang. Yuk cari event favoritmu di menu Event!
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <Link
            href="/event"
            style={{
              background: "#FBBF24",
              color: "#1E1B4B",
              padding: "13px 26px",
              borderRadius: 999,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Lihat Semua Event →
          </Link>
          <Link
            href="/tentang"
            style={{
              background: "white",
              color: "#1E1B4B",
              padding: "13px 26px",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid #E5E7EB",
            }}
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* TULISAN PENJELASAN, BUKAN KARTU */}
      <div style={{ maxWidth: 700, margin: "40px auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1E1B4B" }}>
          Kenapa pakai EventKu? 💛
        </h2>
        <p
          style={{
            color: "#64748B",
            fontSize: 16,
            lineHeight: 1.7,
            marginTop: 12,
          }}
        >
          1. Pesan tiket gak perlu antri, langsung dari HP.
          <br />
          2. Info event selalu update, gak ketinggalan lagi.
          <br />
          3. Panitia gampang kelola peserta dan tiket.
        </p>
        <p style={{ color: "#94A3B8", fontSize: 14, marginTop: 20 }}>
          👉 Klik menu <b>Event</b> di atas untuk lihat semua kartu event & cari
          event.
        </p>
      </div>
    </>
  );
}
