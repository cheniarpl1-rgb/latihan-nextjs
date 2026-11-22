"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EVENTS, rupiah } from "@/data/events";

function gambarEvent(judul: string, kategori: string) {
  const j = judul.toLowerCase();
  const k = kategori.toLowerCase();
  if (j.includes("react") || j.includes("workshop"))
    return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=60";
  if (j.includes("futsal") || k.includes("olahraga"))
    return "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=60";
  if (j.includes("musik") || j.includes("konser") || k.includes("musik"))
    return "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=60";
  if (j.includes("bazar") || k.includes("bazar"))
    return "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=60";
  if (j.includes("pelatihan") || j.includes("desain") || j.includes("poster"))
    return "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=60";
  if (j.includes("cerdas") || j.includes("lomba") || k.includes("lomba"))
    return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=60";
  return "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=60";
}

export default function DetailEvent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [jumlah, setJumlah] = useState(1);
  const [isFavorit, setIsFavorit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const event = EVENTS.find((e) => String(e.id) === String(id));

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem("favorit") || "[]");
    setIsFavorit(ids.includes(String(id)));
  }, [id]);

  if (!event) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: 60,
          background: "white",
          borderRadius: 28,
          padding: 40,
        }}
      >
        <p style={{ fontSize: 48, margin: 0 }}>😢</p>
        <h2 style={{ color: "#1E1B4B" }}>Event gak ketemu</h2>
        <Link
          href="/event"
          style={{
            display: "inline-block",
            marginTop: 10,
            background: "#FBBF24",
            color: "#1E1B4B",
            padding: "12px 26px",
            borderRadius: 999,
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Balik ke Event →
        </Link>
      </div>
    );
  }

  const terkait = EVENTS.filter((e) => String(e.id) !== String(id)).slice(0, 3);
  const KUOTA = 50;
  const pesananLama =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("pesanan") || "[]")
      : [];
  const terisi = pesananLama
    .filter((p: any) => p.judul === event.judul)
    .reduce((a: number, p: any) => a + (p.jumlah || 1), 0);
  const sisa = Math.max(0, KUOTA - terisi);

  function toggleFavorit() {
    const ids: string[] = JSON.parse(localStorage.getItem("favorit") || "[]");
    let baru: string[];
    if (ids.includes(String(id))) baru = ids.filter((x) => x !== String(id));
    else baru = [...ids, String(id)];
    localStorage.setItem("favorit", JSON.stringify(baru));
    setIsFavorit(!isFavorit);
  }

  function kirimPesanan() {
    if (!nama.trim()) return setError("Nama lengkap wajib diisi!");
    if (!email.includes("@") || !email.includes("."))
      return setError("Email-nya belum benar, contoh: kamu@email.com");
    if (jumlah < 1 || jumlah > 5) return setError("Jumlah tiket maks 5!");
    if (jumlah > sisa) return setError(`Sisa kuota tinggal ${sisa} tiket!`);

    const pesanan = JSON.parse(localStorage.getItem("pesanan") || "[]");
    pesanan.push({
      id: Date.now().toString(),
      judul: event!.judul,
      tanggal: event!.tanggal,
      lokasi: event!.lokasi,
      nama: nama.trim(),
      email: email.trim(),
      jumlah,
      total: event!.harga * jumlah,
    });
    localStorage.setItem("pesanan", JSON.stringify(pesanan));
    router.push("/pesanan");
  }

  return (
    <div style={{ marginTop: 36 }}>
      <Link
        href="/event"
        style={{ color: "#1E1B4B", fontWeight: 700, textDecoration: "none" }}
      >
        ← Semua Event
      </Link>
      <div
        style={{
          background: "white",
          borderRadius: 28,
          border: "3px solid white",
          boxShadow: "0 15px 30px rgba(0,0,0,0.10)",
          overflow: "hidden",
          marginTop: 16,
        }}
      >
        <img
          src={gambarEvent(event.judul, event.kategori)}
          alt={event.judul}
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            display: "block",
          }}
        />
        <div style={{ padding: "24px 28px 28px" }}>
          <span
            style={{
              background: "#FBCFE8",
              color: "#9D174D",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            {event.kategori}
          </span>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: "#1E1B4B",
              margin: "14px 0 8px",
              lineHeight: 1.2,
            }}
          >
            {event.judul}
          </h1>
          <p style={{ color: "#64748B", margin: 0 }}>
            📅 {event.tanggal} • 📍 {event.lokasi}
          </p>
          <p style={{ color: "#334155", lineHeight: 1.7, marginTop: 14 }}>
            Ikuti {event.judul} di {event.lokasi}. Event {event.kategori} yang
            seru buat siswa, jangan sampai kelewatan. Yuk amankan tiketmu
            sekarang, kuotanya terbatas!
          </p>

          {!showForm ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginTop: 20,
                }}
              >
                <b style={{ fontSize: 22, color: "#1E1B4B" }}>
                  {rupiah(event.harga)} / tiket
                </b>
                <span
                  style={{
                    background: "#FEF3C7",
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Sisa kuota: {sisa} tiket • Terisi: {terisi} / {KUOTA}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 16,
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() => setShowForm(true)}
                  style={{
                    flex: 1,
                    minWidth: 180,
                    background: "#FBBF24",
                    color: "#1E1B4B",
                    border: "none",
                    borderRadius: 999,
                    padding: "13px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Pesan Sekarang →
                </button>
                <button
                  onClick={toggleFavorit}
                  style={{
                    background: isFavorit ? "#FECACA" : "white",
                    color: isFavorit ? "#991B1B" : "#1E1B4B",
                    border: "2px solid #E5E7EB",
                    borderRadius: 999,
                    padding: "12px 20px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  {isFavorit ? "💖 Sudah Favorit" : "🤍 Simpan Favorit"}
                </button>
              </div>
            </>
          ) : (
            <div
              style={{
                background: "#FFF7ED",
                borderRadius: 24,
                padding: 22,
                marginTop: 20,
                border: "2px solid #FDE68A",
              }}
            >
              <h3 style={{ margin: "0 0 4px", color: "#1E1B4B" }}>
                📝 Formulir Pesan
              </h3>
              <p style={{ color: "#64748B", fontSize: 13, margin: "0 0 14px" }}>
                Lengkapi dulu ya, baru tiketnya dipesan.
              </p>
              <label
                style={{ fontWeight: 800, fontSize: 13, color: "#1E1B4B" }}
              >
                👤 NAMA LENGKAP *
              </label>
              <input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Ahmad Fauzi"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: 999,
                  border: "1px solid #E5E7EB",
                  padding: "12px 18px",
                  margin: "8px 0 14px",
                  outline: "none",
                  fontSize: 15,
                }}
              />
              <label
                style={{ fontWeight: 800, fontSize: 13, color: "#1E1B4B" }}
              >
                📧 EMAIL *
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kamu@email.com"
                type="email"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: 999,
                  border: "1px solid #E5E7EB",
                  padding: "12px 18px",
                  margin: "8px 0 14px",
                  outline: "none",
                  fontSize: 15,
                }}
              />
              <label
                style={{ fontWeight: 800, fontSize: 13, color: "#1E1B4B" }}
              >
                🎟️ JUMLAH TIKET * (Maks 5)
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 8,
                }}
              >
                <button
                  onClick={() => setJumlah(Math.max(1, jumlah - 1))}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "none",
                    background: "white",
                    fontWeight: 900,
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={jumlah}
                  onChange={(e) =>
                    setJumlah(
                      Math.min(5, Math.max(1, Number(e.target.value) || 1)),
                    )
                  }
                  style={{
                    flex: 1,
                    textAlign: "center",
                    borderRadius: 999,
                    border: "1px solid #E5E7EB",
                    padding: "11px",
                    fontWeight: 800,
                    fontSize: 16,
                    outline: "none",
                  }}
                />
                <button
                  onClick={() => setJumlah(Math.min(5, jumlah + 1))}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "none",
                    background: "#1E1B4B",
                    color: "white",
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
              <p style={{ color: "#64748B", fontSize: 13, margin: "10px 0 0" }}>
                Sisa kuota: <b style={{ color: "#1E1B4B" }}>{sisa}</b> tiket •
                Terisi: {terisi} / {KUOTA} • Total:{" "}
                <b style={{ color: "#1E1B4B" }}>
                  {rupiah(event.harga * jumlah)}
                </b>
              </p>
              {error && (
                <p
                  style={{
                    color: "#DC2626",
                    fontWeight: 700,
                    fontSize: 13,
                    marginTop: 10,
                  }}
                >
                  ⚠️ {error}
                </p>
              )}
              <button
                onClick={kirimPesanan}
                style={{
                  width: "100%",
                  marginTop: 14,
                  background: "#FBBF24",
                  color: "#1E1B4B",
                  border: "none",
                  borderRadius: 999,
                  padding: "13px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                🎟️ Pesan Tiket →
              </button>
              <button
                onClick={() => setShowForm(false)}
                style={{
                  width: "100%",
                  marginTop: 8,
                  background: "transparent",
                  border: "none",
                  color: "#64748B",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Batal
              </button>
            </div>
          )}
        </div>
      </div>

      <h2 style={{ color: "#1E1B4B", marginTop: 28 }}>Event Lainnya 🎪</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
          gap: 16,
        }}
      >
        {terkait.map((e) => (
          <Link
            key={String(e.id)}
            href={`/event/${e.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "white",
                borderRadius: 24,
                overflow: "hidden",
                border: "3px solid white",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={gambarEvent(e.judul, e.kategori)}
                alt={e.judul}
                loading="lazy"
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "14px 18px 18px" }}>
                <b style={{ color: "#1E1B4B" }}>{e.judul}</b>
                <p
                  style={{ color: "#64748B", margin: "6px 0 0", fontSize: 13 }}
                >
                  📅 {e.tanggal} • {rupiah(e.harga)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
