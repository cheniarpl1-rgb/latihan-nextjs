"use client";
import { useState, useEffect, useRef } from "react";
import { EVENTS, rupiah } from "@/data/events";

function getGambar(id: number) {
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

const DESKRIPSI: Record<number, string> = {
  1: "Belajar dasar React dari nol, bikin web pertama kamu bareng kakak kelas.",
  2: "Adu skill futsal antar kelas, rebutan piala bergilir dan hadiah menarik.",
  3: "Malam akustik bareng band sekolah, bawain lagu hits dan lagu ciptaan sendiri.",
  4: "Jajan, belanja karya siswa, dan dukung UMKM teman-teman kita.",
  5: "Belajar bikin poster keren dari dasar sampai jadi, buat pemula.",
  6: "Uji wawasan umum, sains, dan pengetahuan sekolah. Siapa paling cepat dan tepat?",
};

const WARNA_KARTU: Record<number, string> = {
  1: "#5EEAD4",
  2: "#F9A8D4",
  3: "#C4B5FD",
  4: "#FDE047",
  5: "#93C5FD",
  6: "#FDA4AF",
};
const WARNA_BG: Record<number, string> = {
  1: "linear-gradient(180deg, #CCFBF1 0%, #99F6E4 50%, #FFF7ED 100%)",
  2: "linear-gradient(180deg, #FCE7F3 0%, #FBCFE8 50%, #FFF7ED 100%)",
  3: "linear-gradient(180deg, #EDE9FE 0%, #DDD6FE 50%, #FFF7ED 100%)",
  4: "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 50%, #FFF7ED 100%)",
  5: "linear-gradient(180deg, #DBEAFE 0%, #BFDBFE 50%, #FFF7ED 100%)",
  6: "linear-gradient(180deg, #FFE4E6 0%, #FECDD3 50%, #FFF7ED 100%)",
};
const WARNA_AKSEN: Record<number, string> = {
  1: "#0D9488",
  2: "#DB2777",
  3: "#7C3AED",
  4: "#D97706",
  5: "#2563EB",
  6: "#E11D48",
};

export default function EventPage() {
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [favorit, setFavorit] = useState<number[]>([]);
  const [pilih, setPilih] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [tampilForm, setTampilForm] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [kelas, setKelas] = useState("");
  const [jumlah, setJumlah] = useState(1);
  const [sukses, setSukses] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const simpan = JSON.parse(localStorage.getItem("favorit") || "[]");
      setFavorit(simpan);
    } catch {}
  }, []);

  function bukaDetail(id: number) {
    setPilih(id);
    setTampilForm(false);
    setNama("");
    setEmail("");
    setKelas("");
    setJumlah(1);
    setSukses(false);
    window.scrollTo({ top: 0 });
  }

  function klikPesanTiket() {
    setTampilForm(true);
    // AUTO SCROLL KE FORM, BIAR GAK PERLU SCROLL MANUAL
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function toggleFavorit(id: number) {
    let baru: number[];
    if (favorit.includes(id)) baru = favorit.filter((f) => f !== id);
    else baru = [...favorit, id];
    setFavorit(baru);
    localStorage.setItem("favorit", JSON.stringify(baru));
  }

  function pesanSekarang() {
    if (!nama || !email || !kelas) {
      alert("Isi nama, email, dan kelas dulu ya!");
      return;
    }
    if (!email.includes("@")) {
      alert("Email-nya belum bener, harus ada @ nya ya!");
      return;
    }
    const pesananLama = JSON.parse(localStorage.getItem("pesanan") || "[]");
    const eventPilih = EVENTS.find((e) => e.id === pilih);
    pesananLama.push({
      event: eventPilih?.judul,
      nama,
      email,
      kelas,
      jumlah,
      total: (eventPilih?.harga || 0) * jumlah,
      tanggalPesan: new Date().toLocaleString("id-ID"),
    });
    localStorage.setItem("pesanan", JSON.stringify(pesananLama));
    setSukses(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  const listKategori = [
    "Semua",
    ...Array.from(new Set(EVENTS.map((e) => e.kategori))),
  ];
  const tampil = EVENTS.filter((e) => {
    const okCari = e.judul.toLowerCase().includes(cari.toLowerCase());
    const okKat = kategori === "Semua" || e.kategori === kategori;
    return okCari && okKat;
  });
  const eventPilih = EVENTS.find((e) => e.id === pilih);
  const warnaPilih = eventPilih
    ? WARNA_KARTU[eventPilih.id] || "#FFF7ED"
    : "#FFF7ED";
  const bgPilih = eventPilih ? WARNA_BG[eventPilih.id] || "#FFF7ED" : "#FFF7ED";
  const aksenPilih = eventPilih
    ? WARNA_AKSEN[eventPilih.id] || "#1E1B4B"
    : "#1E1B4B";
  const totalHarga = (eventPilih?.harga || 0) * jumlah;

  if (eventPilih) {
    return (
      <div style={{ background: bgPilih, minHeight: "100vh" }}>
        <div
          style={{ maxWidth: 760, margin: "0 auto", padding: "14px 14px 40px" }}
        >
          <button
            onClick={() => setPilih(null)}
            style={{
              background: "#1E1B4B",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: 999,
              fontWeight: 800,
              cursor: "pointer",
              marginBottom: 12,
              boxShadow: "0 6px 14px rgba(30,27,75,0.2)",
              fontSize: 13,
            }}
          >
            ← Kembali ke Semua Event
          </button>

          <div
            style={{
              background: "white",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 18px 35px rgba(30,27,75,0.2)",
              border: `3px solid ${warnaPilih}`,
            }}
          >
            {/* FOTO DIKECILIN: 380 -> 220 BIAR GAK PERLU SCROLL */}
            <div style={{ position: "relative" }}>
              <img
                src={getGambar(eventPilih.id)}
                alt={eventPilih.judul}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 14,
                  background: aksenPilih,
                  color: "white",
                  padding: "7px 14px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 900,
                }}
              >
                {eventPilih.kategori.toUpperCase()}
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: 12,
                  right: 14,
                  background: "#FBBF24",
                  color: "#1E1B4B",
                  padding: "7px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 900,
                  border: "2px solid white",
                }}
              >
                {rupiah(eventPilih.harga)}
              </span>
            </div>
            <div style={{ padding: "16px 18px 18px" }}>
              <h1
                style={{
                  margin: "0 0 8px",
                  color: "#1E1B4B",
                  fontSize: 26,
                  lineHeight: 1.1,
                }}
              >
                {eventPilih.judul}
              </h1>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    background: "#1E1B4B",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  📅 {eventPilih.tanggal}
                </span>
                <span
                  style={{
                    background: "white",
                    color: "#1E1B4B",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    border: "2px solid #1E1B4B",
                  }}
                >
                  📍 {eventPilih.lokasi}
                </span>
                <span
                  style={{
                    background: "#FEF3C7",
                    color: "#92400E",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 800,
                    border: "2px solid #FBBF24",
                  }}
                >
                  🎟️ Sisa: {eventPilih.kuota}
                </span>
              </div>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.6,
                  margin: "0 0 14px",
                  fontSize: 14,
                  background: "#F8FAFC",
                  padding: 12,
                  borderRadius: 12,
                  borderLeft: `5px solid ${aksenPilih}`,
                }}
              >
                {DESKRIPSI[eventPilih.id] || eventPilih.deskripsi}
              </p>

              {!tampilForm && !sukses && (
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={klikPesanTiket}
                    style={{
                      flex: 1.2,
                      background: "#FBBF24",
                      color: "#1E1B4B",
                      border: "3px solid #1E1B4B",
                      padding: 13,
                      borderRadius: 999,
                      fontWeight: 900,
                      cursor: "pointer",
                      fontSize: 15,
                      boxShadow: "0 8px 16px rgba(251,191,36,0.35)",
                    }}
                  >
                    🎫 Pesan Tiket →
                  </button>
                  <button
                    onClick={() => setPilih(null)}
                    style={{
                      flex: 1,
                      background: "white",
                      color: "#1E1B4B",
                      border: "3px solid #1E1B4B",
                      padding: 13,
                      borderRadius: 999,
                      fontWeight: 800,
                      cursor: "pointer",
                      fontSize: 15,
                    }}
                  >
                    Kembali
                  </button>
                </div>
              )}

              <div ref={formRef} style={{ scrollMarginTop: 20 }}>
                {tampilForm && !sukses && (
                  <div
                    style={{
                      background: "#FFF7ED",
                      borderRadius: 16,
                      padding: 16,
                      border: `3px solid ${warnaPilih}`,
                      marginTop: 14,
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 12px",
                        color: "#1E1B4B",
                        fontSize: 18,
                      }}
                    >
                      🎫 Form Pemesanan
                    </h3>
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#1E1B4B",
                      }}
                    >
                      Nama Lengkap
                    </label>
                    <input
                      value={nama}
                      onChange={(e: any) => setNama(e.target.value)}
                      placeholder="Contoh: Andi Pratama"
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E5E7EB",
                        margin: "5px 0 10px",
                        outline: "none",
                        fontSize: 14,
                        background: "white",
                      }}
                    />
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#1E1B4B",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                      placeholder="Contoh: andi@gmail.com"
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E5E7EB",
                        margin: "5px 0 10px",
                        outline: "none",
                        fontSize: 14,
                        background: "white",
                      }}
                    />
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#1E1B4B",
                      }}
                    >
                      Kelas
                    </label>
                    <input
                      value={kelas}
                      onChange={(e: any) => setKelas(e.target.value)}
                      placeholder="Contoh: XI RPL 1"
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "11px 14px",
                        borderRadius: 12,
                        border: "2px solid #E5E7EB",
                        margin: "5px 0 10px",
                        outline: "none",
                        fontSize: 14,
                        background: "white",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                        margin: "4px 0 10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 800,
                          color: "#1E1B4B",
                        }}
                      >
                        Jumlah Tiket
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <button
                          onClick={() => setJumlah(Math.max(1, jumlah - 1))}
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            border: "2px solid #1E1B4B",
                            background: "white",
                            fontSize: 18,
                            fontWeight: 800,
                            cursor: "pointer",
                          }}
                        >
                          -
                        </button>
                        <b
                          style={{
                            fontSize: 15,
                            color: "#1E1B4B",
                            background: "white",
                            padding: "6px 14px",
                            borderRadius: 999,
                            border: "2px solid #E5E7EB",
                          }}
                        >
                          {jumlah} tiket
                        </b>
                        <button
                          onClick={() =>
                            setJumlah(Math.min(eventPilih.kuota, jumlah + 1))
                          }
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            border: `2px solid ${aksenPilih}`,
                            background: aksenPilih,
                            color: "white",
                            fontSize: 18,
                            fontWeight: 800,
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        background: "#1E1B4B",
                        color: "white",
                        padding: "12px 14px",
                        borderRadius: 12,
                        marginBottom: 12,
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: 14 }}>
                        Total Bayar
                      </span>
                      <b style={{ color: "#FBBF24", fontSize: 16 }}>
                        {rupiah(totalHarga)}
                      </b>
                    </div>
                    <button
                      onClick={pesanSekarang}
                      style={{
                        width: "100%",
                        background: "#FBBF24",
                        color: "#1E1B4B",
                        border: "3px solid #1E1B4B",
                        padding: 12,
                        borderRadius: 999,
                        fontWeight: 900,
                        cursor: "pointer",
                        fontSize: 15,
                      }}
                    >
                      Konfirmasi Pesanan →
                    </button>
                    <button
                      onClick={() => setTampilForm(false)}
                      style={{
                        width: "100%",
                        background: "white",
                        color: "#1E1B4B",
                        border: "2px solid #E5E7EB",
                        padding: 11,
                        borderRadius: 999,
                        fontWeight: 800,
                        cursor: "pointer",
                        marginTop: 8,
                        fontSize: 14,
                      }}
                    >
                      ← Kembali
                    </button>
                  </div>
                )}

                {sukses && (
                  <div
                    style={{
                      background: "#ECFDF5",
                      borderRadius: 16,
                      padding: 20,
                      textAlign: "center",
                      border: "3px solid #10B981",
                      marginTop: 14,
                    }}
                  >
                    <div style={{ fontSize: 40 }}>🎉</div>
                    <h3
                      style={{
                        color: "#065F46",
                        margin: "8px 0 6px",
                        fontSize: 20,
                      }}
                    >
                      Pemesanan Berhasil!
                    </h3>
                    <p
                      style={{
                        color: "#475569",
                        fontSize: 14,
                        lineHeight: 1.6,
                        margin: "0 0 6px",
                      }}
                    >
                      Terima kasih <b>{nama}</b>
                      <br />
                      Email: <b>{email}</b> • Kelas: <b>{kelas}</b>
                      <br />
                      Kamu memesan <b>{jumlah} tiket</b> {eventPilih.judul}
                      <br />
                      Total: <b>{rupiah(totalHarga)}</b>
                    </p>
                    <a
                      href="/pesanan"
                      style={{
                        display: "block",
                        background: "#FBBF24",
                        color: "#1E1B4B",
                        padding: 12,
                        borderRadius: 999,
                        fontWeight: 900,
                        textDecoration: "none",
                        marginBottom: 8,
                        fontSize: 15,
                        border: "3px solid #1E1B4B",
                      }}
                    >
                      Lihat Pesanan Saya →
                    </a>
                    <button
                      onClick={() => setPilih(null)}
                      style={{
                        width: "100%",
                        background: "#1E1B4B",
                        color: "white",
                        border: "none",
                        padding: 12,
                        borderRadius: 999,
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      Kembali ke Event
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 60px" }}
    >
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
            fontSize: 42,
            fontWeight: 900,
            color: "#1E1B4B",
            margin: "16px 0 6px",
            lineHeight: 1.1,
          }}
        >
          Cari Event Seru,
          <br />
          Gak Pake Ribet.
        </h1>
        <p style={{ color: "#64748B" }}>
          Temukan, pilih, dan pesan tiket event sekolahmu dalam hitungan detik.
        </p>
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <input
          value={cari}
          onChange={(e: any) => setCari(e.target.value)}
          placeholder="🔍 Cari event..."
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px 20px",
            borderRadius: 999,
            border: "1px solid #E5E7EB",
            outline: "none",
            background: "white",
            fontSize: 15,
          }}
        />
        <select
          value={kategori}
          onChange={(e: any) => setKategori(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px 20px",
            borderRadius: 999,
            border: "1px solid #E5E7EB",
            fontWeight: 700,
            background: "white",
          }}
        >
          {listKategori.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 22,
          marginTop: 26,
        }}
      >
        {tampil.map((e) => {
          const isFav = favorit.includes(e.id);
          const isHover = hover === e.id;
          const warnaKartu = WARNA_KARTU[e.id] || "#FFF7ED";
          const aksen = WARNA_AKSEN[e.id] || "#1E1B4B";
          return (
            <div
              key={e.id}
              onClick={() => bukaDetail(e.id)}
              onMouseEnter={() => setHover(e.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                background: warnaKartu,
                borderRadius: 26,
                overflow: "hidden",
                cursor: "pointer",
                border: isHover ? "3px solid #1E1B4B" : "3px solid white",
                transform: isHover
                  ? "translateY(-8px) scale(1.02)"
                  : "translateY(0) scale(1)",
                boxShadow: isHover
                  ? "0 22px 40px rgba(30,27,75,0.28)"
                  : "0 12px 25px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={getGambar(e.id)}
                  alt={e.judul}
                  style={{
                    width: "100%",
                    height: 210,
                    objectFit: "cover",
                    display: "block",
                    transform: isHover ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.4s ease",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: aksen,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  {e.kategori.toUpperCase()}
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "#FBBF24",
                    padding: "7px 14px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 900,
                    color: "#1E1B4B",
                    border: "2px solid white",
                  }}
                >
                  {rupiah(e.harga)}
                </span>
                <button
                  onClick={(ev: any) => {
                    ev.stopPropagation();
                    toggleFavorit(e.id);
                  }}
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid white",
                    background: "white",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>
              <div style={{ padding: 18 }}>
                <h3
                  style={{ margin: "0 0 8px", color: "#1E1B4B", fontSize: 19 }}
                >
                  {e.judul}
                </h3>
                <p
                  style={{
                    margin: "0 0 4px",
                    color: "#1E1B4B",
                    fontSize: 13,
                    fontWeight: 700,
                    background: "rgba(255,255,255,0.7)",
                    padding: "6px 10px",
                    borderRadius: 999,
                    display: "inline-block",
                  }}
                >
                  📅 {e.tanggal} • 📍 {e.lokasi}
                </p>
                <p
                  style={{
                    margin: "8px 0 12px",
                    color: "#1E1B4B",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  🎟️ Sisa kuota: {e.kuota}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "#334155",
                    fontSize: 14,
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {DESKRIPSI[e.id] || e.deskripsi}
                </p>
                <button
                  style={{
                    width: "100%",
                    background: isHover ? "#FBBF24" : "#1E1B4B",
                    color: isHover ? "#1E1B4B" : "white",
                    border: isHover ? "3px solid #1E1B4B" : "none",
                    padding: 12,
                    borderRadius: 999,
                    fontWeight: 900,
                    cursor: "pointer",
                    marginTop: 14,
                    transition: "all 0.3s ease",
                  }}
                >
                  {isHover ? "Lihat Detail & Pesan →" : "Lihat Detail"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
