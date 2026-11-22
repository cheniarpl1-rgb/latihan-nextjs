// components/FormEvent.tsx - VERSI MERGE FINAL
// Logika: PUNYA TEMEN LO ASLI (useActionState + simpanEvent + HasilEvent + Galat) - GAK GUE UBAH!
// Styling: COLORFUL, ANTI-WHITE, SANGAT MODERN, SANGAT MEMUKAU, TATA LETAK SANGAT RAPI, KAYAK WEBSITE JUARA 1 DUNIA!
// Fix: + field Deskripsi (biar ke-save), + Kategori jadi Select (biar gak typo), + hidden id pake defaultValue (biar gak read-only)

"use client";

import { useActionState } from "react";
import { simpanEvent, type HasilEvent } from "@/app/admin/actions";
import type { Event } from "@/data/events";

function Galat({ teks }: { teks?: string }) {
  return teks ? (
    <p
      style={{
        color: "#FCA5A5",
        fontSize: 13,
        fontWeight: 700,
        margin: "6px 0 0",
      }}
    >
      ⚠ {teks}
    </p>
  ) : null;
}

export default function FormEvent({ event }: { event?: Event }) {
  const awal: HasilEvent = {
    pesan: "",
    galat: {},
    isian: {
      id: event ? String(event.id) : "",
      judul: event?.judul ?? "",
      kategori: event?.kategori ?? "Workshop",
      tanggal: event?.tanggal ?? "",
      lokasi: event?.lokasi ?? "",
      harga: event ? String(event.harga) : "0",
      kuota: event ? String(event.kuota) : "50",
      gambar: event?.gambar ?? "",
      deskripsi: (event as any)?.deskripsi ?? "",
    },
  };

  const [hasil, kirim, sedangKirim] = useActionState(simpanEvent, awal);
  const i = hasil.isian;

  // STYLING BARU: ANTI-WHITE, UNGU GELAP + GRADASI, BUKAN PUTIH LAGI!
  const kolom: React.CSSProperties = {
    display: "block",
    width: "100%",
    borderRadius: 16,
    border: "1px solid #7C3AED",
    padding: "13px 16px",
    background: "#120826",
    color: "white",
    outline: "none",
    boxSizing: "border-box",
    fontSize: 15,
  };

  const label: React.CSSProperties = {
    fontWeight: 800,
    fontSize: 13,
    color: "white",
    display: "block",
    marginBottom: 6,
    letterSpacing: 0.3,
  };

  const kategoriList = [
    "Workshop",
    "Olahraga",
    "Musik",
    "Bazar",
    "Lomba",
    "Seminar",
  ];

  return (
    <form
      action={kirim}
      style={{
        maxWidth: 680,
        background: "linear-gradient(135deg,#1E103A,#4C1D95)",
        borderRadius: 28,
        border: "1px solid #7C3AED",
        boxShadow: "0 20px 50px rgba(0,0,0,.45)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* FIX: pake defaultValue + key, bukan value, biar gak read-only & gak nyangkut pas pindah Tambah <-> Ubah */}
      <input type="hidden" name="id" defaultValue={i.id} key={i.id} />

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 44,
            height: 44,
            borderRadius: 14,
            background: "linear-gradient(135deg,#FBBF24,#EC4899)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          🎪
        </span>
        <div>
          <b style={{ fontSize: 18, display: "block" }}>
            {event ? "Ubah Event" : "Tambah Event Baru"}
          </b>
          <span style={{ color: "#C4B5FD", fontSize: 12 }}>
            {event
              ? `Mengubah: ${event.judul}`
              : "Isi semua field di bawah, lalu klik Simpan"}
          </span>
        </div>
      </div>

      <div>
        <label style={label}>🎯 Judul Event *</label>
        <input
          name="judul"
          defaultValue={i.judul}
          placeholder="ex: Workshop React Dasar"
          style={kolom}
        />
        <Galat teks={hasil.galat.judul} />
      </div>

      <div>
        <label style={label}>🏷 Kategori *</label>
        {/* FIX: Jadi Select, biar gak typo workshop / Workshop / WORKSHOP */}
        <select name="kategori" defaultValue={i.kategori} style={kolom}>
          {kategoriList.map((k) => (
            <option
              key={k}
              value={k}
              style={{ background: "#120826", color: "white" }}
            >
              {k}
            </option>
          ))}
        </select>
        <Galat teks={hasil.galat.kategori} />
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <label style={label}>📅 Tanggal *</label>
          <input
            name="tanggal"
            type="date"
            defaultValue={i.tanggal}
            style={{ ...kolom, colorScheme: "dark" }}
          />
          <Galat teks={hasil.galat.tanggal} />
        </div>
        <div style={{ flex: "1 1 200px" }}>
          <label style={label}>📍 Lokasi *</label>
          <input
            name="lokasi"
            defaultValue={i.lokasi}
            placeholder="ex: Lab Komputer"
            style={kolom}
          />
          <Galat teks={hasil.galat.lokasi} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <label style={label}>💰 Harga (0 = Gratis)</label>
          <input
            name="harga"
            type="number"
            min={0}
            defaultValue={i.harga}
            placeholder="0"
            style={kolom}
          />
          <Galat teks={hasil.galat.harga} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={label}>🎟 Kuota *</label>
          <input
            name="kuota"
            type="number"
            min={1}
            defaultValue={i.kuota}
            placeholder="50"
            style={kolom}
          />
          <Galat teks={hasil.galat.kuota} />
        </div>
      </div>

      <div>
        <label style={label}>🖼 Gambar (boleh kosong)</label>
        <input
          name="gambar"
          defaultValue={i.gambar}
          placeholder="Gambar, misalnya /img/event-1.png atau https://... (boleh kosong)"
          style={kolom}
        />
        {i.gambar && (
          <img
            src={i.gambar}
            alt="Preview gambar"
            onError={(e) =>
              ((e.target as HTMLImageElement).style.display = "none")
            }
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 16,
              marginTop: 10,
              border: "1px solid #7C3AED",
            }}
          />
        )}
      </div>

      <div>
        <label style={label}>
          📝 Deskripsi (baru! biar gak kosong terus di Katalog)
        </label>
        <textarea
          name="deskripsi"
          defaultValue={(i as any).deskripsi || ""}
          placeholder="Ceritain event-nya: buat siapa, ngapain aja, bawa apa aja..."
          rows={4}
          style={{ ...kolom, resize: "vertical" }}
        />
      </div>

      {hasil.pesan && (
        <p
          style={{
            background: "#14532D",
            border: "1px solid #22C55E",
            color: "#BBF7D0",
            fontWeight: 800,
            padding: "12px 16px",
            borderRadius: 14,
            margin: 0,
          }}
        >
          ✅ {hasil.pesan}
        </p>
      )}

      <button
        disabled={sedangKirim}
        style={{
          background: "linear-gradient(90deg,#F59E0B,#EC4899,#8B5CF6)",
          color: "white",
          border: "none",
          borderRadius: 999,
          padding: "15px 24px",
          fontWeight: 900,
          fontSize: 15,
          cursor: sedangKirim ? "wait" : "pointer",
          opacity: sedangKirim ? 0.6 : 1,
          boxShadow: "0 10px 25px rgba(236,72,153,.4)",
        }}
      >
        {sedangKirim
          ? "⏳ Menyimpan..."
          : event
            ? "✨ Simpan Perubahan →"
            : "✨ Simpan Event →"}
      </button>

      <p
        style={{
          textAlign: "center",
          color: "#C4B5FD",
          fontSize: 12,
          margin: 0,
        }}
      >
        Field bertanda * wajib diisi • Harga 0 = Gratis • Kuota gak boleh kurang
        dari tiket yang udah terisi
      </p>
    </form>
  );
}
