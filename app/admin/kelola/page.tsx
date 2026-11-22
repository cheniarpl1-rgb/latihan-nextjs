// app/admin/kelola/page.tsx - DASHBOARD ADMIN
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EVENTS, rupiah } from "@/data/events";

export default function KelolaAdmin() {
  const router = useRouter();
  const [pesanan, setPesanan] = useState<any[]>([]);
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    // CEK LOGIN DI SINI, BUKAN DI LAYOUT! Biar halaman login gak ke-kunci!
    if (localStorage.getItem("admin") !== "ya") {
      router.push("/admin");
      return;
    }
    setPesanan(JSON.parse(localStorage.getItem("pesanan") || "[]"));
    setSiap(true);
  }, [router]);

  if (!siap)
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#C4B5FD" }}>
        ⏳ Mengecek sesi admin...
      </div>
    );

  const total = pesanan.reduce((a, p) => a + (p.total || 0), 0);
  const totalTiket = pesanan.reduce((a, p) => a + (p.jumlah || 1), 0);

  function logout() {
    localStorage.removeItem("admin");
    router.push("/admin");
  }
  function hapusPesanan(id: string) {
    const baru = pesanan.filter((p) => p.id !== id);
    setPesanan(baru);
    localStorage.setItem("pesanan", JSON.stringify(baru));
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900 }}>
            Dashboard Admin 🎛
          </h1>
          <p style={{ color: "#C4B5FD", margin: "4px 0 0" }}>
            Kelola event & pesanan EventKu
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link
            href="/admin/baru"
            style={{
              background: "linear-gradient(90deg,#F59E0B,#EC4899)",
              color: "white",
              padding: "10px 20px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            ➕ Tambah Event
          </Link>
          <button
            onClick={logout}
            style={{
              background: "#FEE2E2",
              color: "#991B1B",
              border: "none",
              borderRadius: 999,
              padding: "10px 20px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Keluar →
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: 14,
          marginTop: 20,
        }}
      >
        {[
          [
            "🎪",
            `${EVENTS.length} Event`,
            "Total event aktif",
            "linear-gradient(135deg,#7C3AED,#EC4899)",
          ],
          [
            "🎟",
            `${totalTiket} Tiket`,
            "Total tiket dipesan",
            "linear-gradient(135deg,#F59E0B,#F97316)",
          ],
          [
            "💰",
            rupiah(total),
            "Total pemasukan",
            "linear-gradient(135deg,#10B981,#06B6D4)",
          ],
          [
            "📦",
            `${pesanan.length} Pesanan`,
            "Total pesanan masuk",
            "linear-gradient(135deg,#EC4899,#8B5CF6)",
          ],
        ].map(([i, a, k, bg]) => (
          <div
            key={String(a)}
            style={{
              background: bg as string,
              borderRadius: 22,
              padding: 20,
              boxShadow: "0 12px 30px rgba(0,0,0,.3)",
            }}
          >
            <div style={{ fontSize: 28 }}>{i}</div>
            <b style={{ fontSize: 20, display: "block", marginTop: 6 }}>{a}</b>
            <div style={{ fontSize: 13, opacity: 0.9 }}>{k}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 28,
        }}
      >
        <h2 style={{ margin: 0 }}>Daftar Event</h2>
        <span
          style={{
            background: "#1E103A",
            border: "1px solid #7C3AED",
            padding: "6px 12px",
            borderRadius: 999,
            fontSize: 12,
          }}
        >
          {EVENTS.length} Event
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
          gap: 14,
          marginTop: 14,
        }}
      >
        {EVENTS.map((e: any) => (
          <div
            key={String(e.id)}
            style={{
              background: "#1E103A",
              border: "1px solid #4C1D95",
              borderRadius: 20,
              padding: 16,
            }}
          >
            <span
              style={{
                background: "#FBCFE8",
                color: "#9D174D",
                padding: "4px 10px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              {e.kategori}
            </span>
            <b style={{ display: "block", marginTop: 10, fontSize: 17 }}>
              {e.judul}
            </b>
            <p style={{ color: "#C4B5FD", margin: "4px 0", fontSize: 13 }}>
              📅 {e.tanggal} • 📍 {e.lokasi}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <b>{rupiah(e.harga)}</b>
              <Link
                href={`/admin/${e.id}`}
                style={{
                  background: "#F59E0B",
                  color: "#120826",
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontWeight: 800,
                  fontSize: 12,
                  textDecoration: "none",
                }}
              >
                ✏ Ubah
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 28 }}>Pesanan Masuk ({pesanan.length})</h2>
      {pesanan.length === 0 ? (
        <div
          style={{
            background: "#1E103A",
            border: "1px dashed #7C3AED",
            borderRadius: 22,
            padding: 28,
            textAlign: "center",
            color: "#C4B5FD",
          }}
        >
          Belum ada pesanan. Coba pesan 1 tiket dulu dari halaman Event.
        </div>
      ) : (
        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {pesanan.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#1E103A",
                border: "1px solid #4C1D95",
                borderRadius: 20,
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div>
                <b>{p.judul}</b>
                <div style={{ color: "#C4B5FD", fontSize: 13 }}>
                  {p.nama || "Tanpa nama"} • {p.email || "-"} • {p.jumlah} tiket
                  • 📅 {p.tanggal}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <b>{rupiah(p.total)}</b>
                <br />
                <button
                  onClick={() => hapusPesanan(p.id)}
                  style={{
                    background: "#FEE2E2",
                    color: "#991B1B",
                    border: "none",
                    borderRadius: 999,
                    padding: "6px 14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    marginTop: 4,
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        <Link href="/event" style={{ color: "#FBBF24", fontWeight: 700 }}>
          ← Lihat Event
        </Link>
      </div>
    </div>
  );
}
