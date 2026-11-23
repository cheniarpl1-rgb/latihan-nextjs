"use client";
import { useState, useEffect } from "react";

const EVENTS = [
  {
    id: 1,
    judul: "Workshop React Pemula",
    kategori: "Workshop",
    tanggal: "23 Nov 2026",
    lokasi: "Lab RPL",
    harga: 25000,
    kuota: 30,
    deskripsi: "Belajar React dari nol bareng kakak kelas.",
  },
  {
    id: 2,
    judul: "Turnamen Futsal",
    kategori: "Olahraga",
    tanggal: "20 Nov 2026",
    lokasi: "Lapangan Sekolah",
    harga: 15000,
    kuota: 40,
    deskripsi: "Adu skill futsal antar kelas rebutan piala.",
  },
  {
    id: 3,
    judul: "Konser Musik Sekolah",
    kategori: "Musik",
    tanggal: "27 Nov 2026",
    lokasi: "Aula Sekolah",
    harga: 10000,
    kuota: 100,
    deskripsi: "Konser musik yang diselenggarakan oleh band sekolah.",
  },
  {
    id: 4,
    judul: "Bazar Sekolah",
    kategori: "Bazar",
    tanggal: "3 Des 2026",
    lokasi: "Halaman Sekolah",
    harga: 0,
    kuota: 200,
    deskripsi: "Jajan dan belanja karya siswa.",
  },
  {
    id: 5,
    judul: "Pelatihan Desain Poster",
    kategori: "Pelatihan",
    tanggal: "5 Des 2026",
    lokasi: "Ruang Multimedia",
    harga: 20000,
    kuota: 25,
    deskripsi: "Belajar bikin poster keren buat pemula.",
  },
  {
    id: 6,
    judul: "Lomba Cerdas Cermat",
    kategori: "Lomba",
    tanggal: "10 Des 2026",
    lokasi: "Aula Sekolah",
    harga: 10000,
    kuota: 50,
    deskripsi: "Uji wawasan umum dan sains.",
  },
];

function gambar(id: number) {
  if (id === 1)
    return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80";
  if (id === 2)
    return "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80";
  if (id === 3)
    return "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80";
  if (id === 4)
    return "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80";
  if (id === 5)
    return "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80";
  if (id === 6)
    return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80";
  return "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80";
}

const WARNA: any = {
  1: "#5EEAD4",
  2: "#F9A8D4",
  3: "#C4B5FD",
  4: "#FDE047",
  5: "#93C5FD",
  6: "#FDA4AF",
};
const rupiah = (n: number) =>
  n === 0 ? "Gratis" : "Rp " + n.toLocaleString("id-ID");

export default function EventPage() {
  const [cari, setCari] = useState("");
  const [kat, setKat] = useState("Semua");
  const [fav, setFav] = useState<number[]>([]);

  useEffect(() => {
    try {
      const data: any[] = JSON.parse(localStorage.getItem("favorit") || "[]");
      setFav(data.map((x: any) => (typeof x === "number" ? x : x.id)));
    } catch {}
  }, []);

  function toggleFav(id: number) {
    const b = fav.includes(id) ? fav.filter((f) => f !== id) : [...fav, id];
    setFav(b);
    localStorage.setItem("favorit", JSON.stringify(b));
  }

  function pesan(e: any) {
    const nama = prompt("Nama kamu?");
    if (!nama) return;
    const email = prompt("Email kamu?");
    const kelas = prompt("Kelas kamu?");
    const jumlah = Number(prompt("Mau pesan berapa tiket?", "1") || "1");
    const lama: any[] = JSON.parse(localStorage.getItem("pesanan") || "[]");
    lama.push({
      event: e.judul,
      nama,
      email,
      kelas,
      jumlah,
      total: e.harga * jumlah,
      tanggalPesan: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });
    localStorage.setItem("pesanan", JSON.stringify(lama));
    alert("Yeay! Tiket " + e.judul + " berhasil dipesan 🎉");
  }

  const list = EVENTS.filter(
    (e) =>
      (kat === "Semua" || e.kategori === kat) &&
      (e.judul.toLowerCase().includes(cari.toLowerCase()) ||
        e.kategori.toLowerCase().includes(cari.toLowerCase())),
  );
  const KATEGORI = ["Semua", "Workshop", "Olahraga", "Musik", "Bazar", "Lomba"];

  const CSS = `<style>
    @keyframes goyang{0%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}100%{transform:rotate(-2deg)}}
    .kartu{transition:all .3s ease}
    .kartu:hover{transform:translateY(-8px) scale(1.02) rotate(-1deg);box-shadow:0 16px 0 #1E1B4B, 0 25px 40px rgba(30,27,75,.3)!important}
    .goyang:hover{animation:goyang .4s ease infinite}
    .hov{display:inline-block;transition:all .2s ease;cursor:default;color:#0A0A1A}
    .hov:hover{background:#FBBF24;color:#0A0A1A;transform:translateY(-3px) scale(1.06) rotate(-1deg);padding:2px 8px;border-radius:999px;font-weight:900;box-shadow:0 6px 14px rgba(0,0,0,.2)}
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
          maxWidth: 1100,
          margin: "0 auto",
          padding: "22px 16px 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: 56,
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: -1,
          }}
        >
          <span
            className="kata hov"
            style={{
              color: "#5EEAD4",
              WebkitTextStroke: "1.5px #1E1B4B",
              textShadow: "3px 3px 0 #1E1B4B",
            }}
          >
            Cari&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#F9A8D4",
              WebkitTextStroke: "1.5px #1E1B4B",
              textShadow: "3px 3px 0 #1E1B4B",
            }}
          >
            Event&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#FDE68A",
              WebkitTextStroke: "1.5px #1E1B4B",
              textShadow: "3px 3px 0 #1E1B4B",
            }}
          >
            Seru,&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#C4B5FD",
              WebkitTextStroke: "1.5px #1E1B4B",
              textShadow: "3px 3px 0 #1E1B4B",
            }}
          >
            Gak&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#93C5FD",
              WebkitTextStroke: "1.5px #1E1B4B",
              textShadow: "3px 3px 0 #1E1B4B",
            }}
          >
            Pake&nbsp;
          </span>
          <span
            className="kata hov"
            style={{
              color: "#FDA4AF",
              WebkitTextStroke: "1.5px #1E1B4B",
              textShadow: "3px 3px 0 #1E1B4B",
            }}
          >
            Ribet.
          </span>
        </h1>
        <p
          style={{
            margin: "0 0 20px",
            color: "#0A0A1A",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          <span className="hov">
            Temukan, pilih, dan pesan tiket event sekolahmu.
          </span>
        </p>

        <input
          value={cari}
          onChange={(e: any) => setCari(e.target.value)}
          placeholder="🔍 Contoh: futsal, musik, workshop"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px 18px",
            borderRadius: 999,
            border: "2px solid #1E1B4B",
            outline: "none",
            fontSize: 15,
            background: "white",
            boxShadow: "0 4px 0 #1E1B4B",
            marginBottom: 16,
          }}
        />

        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 8,
          }}
        >
          {KATEGORI.map((k) => (
            <button
              key={k}
              onClick={() => setKat(k)}
              className="goyang"
              style={{
                background: kat === k ? "#1E1B4B" : "white",
                color: kat === k ? "white" : "#0A0A1A",
                border: "2px solid #1E1B4B",
                padding: "10px 18px",
                borderRadius: 999,
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              {k}
            </button>
          ))}
        </div>

        <p
          style={{
            margin: "16px 0 4px",
            color: "#0A0A1A",
            fontWeight: 800,
            fontSize: 14,
          }}
        >
          Menampilkan {list.length} event
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 18,
            marginTop: 14,
            textAlign: "left",
          }}
        >
          {list.map((e) => (
            <div
              key={e.id}
              className="kartu"
              style={{
                background: WARNA[e.id],
                borderRadius: 22,
                overflow: "hidden",
                border: "3px solid #1E1B4B",
                boxShadow: "0 8px 0 #1E1B4B, 0 16px 30px rgba(30,27,75,.22)",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={gambar(e.id)}
                  alt={e.judul}
                  style={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    display: "block",
                    borderBottom: "3px solid #1E1B4B",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "#1E1B4B",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 900,
                    border: "2px solid white",
                  }}
                >
                  {e.kategori.toUpperCase()}
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "#FBBF24",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 900,
                    color: "#0A0A1A",
                    border: "2px solid #1E1B4B",
                  }}
                >
                  {rupiah(e.harga)}
                </span>
              </div>
              <div style={{ padding: "12px 14px 14px" }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#0A0A1A",
                    fontSize: 17,
                    fontWeight: 900,
                    lineHeight: 1.2,
                  }}
                >
                  <span className="hov">{e.judul}</span>
                </h3>
                <p
                  style={{
                    margin: "0 0 6px",
                    color: "#0A0A1A",
                    fontWeight: 800,
                    fontSize: 13,
                    background: "rgba(255,255,255,.6)",
                    padding: "6px 10px",
                    borderRadius: 10,
                  }}
                >
                  📅 {e.tanggal} • 📍 {e.lokasi}
                </p>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#0A0A1A",
                    fontWeight: 800,
                    fontSize: 13,
                    background: "rgba(255,255,255,.6)",
                    padding: "6px 10px",
                    borderRadius: 10,
                  }}
                >
                  🎟️ Sisa kuota: {e.kuota}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#0A0A1A",
                    fontWeight: 700,
                    fontSize: 13,
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical" as any,
                    overflow: "hidden",
                  }}
                >
                  {e.deskripsi}
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => pesan(e)}
                    className="goyang"
                    style={{
                      flex: 1,
                      background: "#0A0A1A",
                      color: "white",
                      border: "none",
                      padding: "11px",
                      borderRadius: 999,
                      fontWeight: 900,
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >
                    Pesan Tiket →
                  </button>
                  {/* LOVE - LATAR TETAP PUTIH, YANG MERAH CUMA LOVE-NYA */}
                  <button
                    onClick={() => toggleFav(e.id)}
                    className="goyang"
                    title={
                      fav.includes(e.id)
                        ? "Hapus dari favorit"
                        : "Simpan ke favorit"
                    }
                    style={{
                      background: "white",
                      color: fav.includes(e.id) ? "#E11D48" : "#CBD5E1",
                      border: "2px solid #1E1B4B",
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      borderRadius: "50%",
                      fontWeight: 900,
                      cursor: "pointer",
                      fontSize: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                      padding: 0,
                      textShadow: fav.includes(e.id) ? "0 0 0 #E11D48" : "none",
                    }}
                  >
                    {fav.includes(e.id) ? "❤️" : "♡"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <p style={{ fontWeight: 800, marginTop: 20 }}>
            Event nggak ketemu 😢 Coba kata lain.
          </p>
        )}
      </div>
    </div>
  );
}
