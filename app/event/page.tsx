import Link from "next/link";

const LIST = [
  {
    id: 1,
    judul: "Workshop React untuk Pemula",
    kategori: "Workshop",
    harga: 50000,
    tanggal: "2026-11-14",
    lokasi: "Lab RPL",
    emoji: "💻",
    bg: "#CCFBF1",
    chipBg: "#14B8A6",
  },
  {
    id: 2,
    judul: "Turnamen Futsal Antar Kelas",
    kategori: "Olahraga",
    harga: 0,
    tanggal: "2026-11-20",
    lokasi: "Lapangan Sekolah",
    emoji: "⚽",
    bg: "#FBCFE8",
    chipBg: "#EC4899",
  },
  {
    id: 3,
    judul: "Konser Musik Akustik",
    kategori: "Musik",
    harga: 25000,
    tanggal: "2026-11-27",
    lokasi: "Aula",
    emoji: "🎵",
    bg: "#FEF3C7",
    chipBg: "#F59E0B",
  },
  {
    id: 4,
    judul: "Bazar Karya Siswa",
    kategori: "Bazar",
    harga: 10000,
    tanggal: "2026-12-03",
    lokasi: "Halaman Depan",
    emoji: "🛍️",
    bg: "#BAE6FD",
    chipBg: "#0EA5E9",
  },
  {
    id: 5,
    judul: "Pelatihan Desain Poster",
    kategori: "Workshop",
    harga: 30000,
    tanggal: "2026-12-05",
    lokasi: "Lab Multimedia",
    emoji: "🎨",
    bg: "#DDD6FE",
    chipBg: "#8B5CF6",
  },
  {
    id: 6,
    judul: "Lomba Cerdas Cermat",
    kategori: "Lomba",
    harga: 0,
    tanggal: "2026-12-10",
    lokasi: "Aula",
    emoji: "🏆",
    bg: "#D9F99D",
    chipBg: "#65A30D",
  },
];

export default async function Event({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = params.q ?? "";
  const list = q
    ? LIST.filter((e) => e.judul.toLowerCase().includes(q.toLowerCase()))
    : LIST;

  return (
    <>
      <h1
        style={{
          fontSize: 42,
          fontWeight: 900,
          color: "#1E1B4B",
          marginTop: 36,
        }}
      >
        Semua <span style={{ color: "#EC4899" }}>Event</span> 🎪
      </h1>
      <p style={{ color: "#64748B" }}>
        Pilih event favoritmu, klik kartu untuk detail.
      </p>

      <form
        action="/event"
        style={{
          display: "flex",
          background: "white",
          borderRadius: 999,
          padding: 6,
          maxWidth: 520,
          marginTop: 20,
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <input
          name="q"
          defaultValue={q}
          placeholder="Cari workshop, konser..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            padding: "0 16px",
            borderRadius: 999,
          }}
        />
        <button
          style={{
            background: "#FBBF24",
            border: "none",
            padding: "10px 22px",
            borderRadius: 999,
            fontWeight: 800,
          }}
        >
          Cari →
        </button>
      </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          marginTop: 24,
        }}
      >
        {list.map((e) => (
          <article
            key={e.id}
            style={{
              background: e.bg,
              borderRadius: 28,
              padding: 20,
              border: "3px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: 64, textAlign: "center" }}>{e.emoji}</div>
            <span
              style={{
                background: e.chipBg,
                color: "white",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                display: "inline-block",
                marginTop: 12,
              }}
            >
              {e.kategori}
            </span>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#1E1B4B",
                margin: "12px 0 6px",
              }}
            >
              {e.judul}
            </h3>
            <p style={{ color: "#475569", fontSize: 14, margin: 0 }}>
              📅 {e.tanggal} • 📍 {e.lokasi}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <b>
                {e.harga === 0
                  ? "GRATIS 🎉"
                  : "Rp " + e.harga.toLocaleString("id-ID")}
              </b>
              <Link
                href={"/event/" + e.id}
                style={{
                  background: "#1E1B4B",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Lihat →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
