"use client";

import { useActionState } from "react";
import { simpanEvent, type HasilEvent } from "@/app/admin/actions";
import type { Event } from "@/data/events";

function Galat({ teks }: { teks?: string }) {
  return teks ? (
    <p style={{ color: "#DC2626", fontSize: 13, margin: "4px 0 0" }}>{teks}</p>
  ) : null;
}

export default function FormEvent({ event }: { event?: Event }) {
  const awal: HasilEvent = {
    pesan: "",
    galat: {},
    isian: {
      id: event ? String(event.id) : "",
      judul: event?.judul ?? "",
      kategori: event?.kategori ?? "",
      tanggal: event?.tanggal ?? "",
      lokasi: event?.lokasi ?? "",
      harga: event ? String(event.harga) : "0",
      kuota: event ? String(event.kuota) : "",
      gambar: event?.gambar ?? "",
    },
  };

  const [hasil, kirim, sedangKirim] = useActionState(simpanEvent, awal);
  const i = hasil.isian;

  const kolom: React.CSSProperties = {
    display: "block",
    width: "100%",
    borderRadius: 20,
    border: "1px solid #E5E7EB",
    padding: "12px 16px",
    background: "white",
    color: "#1E1B4B",
    outline: "none",
    boxSizing: "border-box",
  };

  const label: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 13,
    color: "#1E1B4B",
    display: "block",
    marginBottom: 6,
  };

  return (
    <form
      action={kirim}
      style={{
        maxWidth: 640,
        background: "#FFF7ED",
        borderRadius: 28,
        border: "3px solid white",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <input type="hidden" name="id" value={i.id} />

      <div>
        <label style={label}>Judul Event</label>
        <input
          name="judul"
          defaultValue={i.judul}
          placeholder="Judul"
          style={kolom}
        />
        <Galat teks={hasil.galat.judul} />
      </div>

      <div>
        <label style={label}>Kategori</label>
        <input
          name="kategori"
          defaultValue={i.kategori}
          placeholder="Kategori"
          style={kolom}
        />
        <Galat teks={hasil.galat.kategori} />
      </div>

      <div>
        <label style={label}>Tanggal</label>
        <input
          name="tanggal"
          type="date"
          defaultValue={i.tanggal}
          style={kolom}
        />
        <Galat teks={hasil.galat.tanggal} />
      </div>

      <div>
        <label style={label}>Lokasi</label>
        <input
          name="lokasi"
          defaultValue={i.lokasi}
          placeholder="Lokasi"
          style={kolom}
        />
        <Galat teks={hasil.galat.lokasi} />
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <label style={label}>Harga</label>
          <input
            name="harga"
            type="number"
            defaultValue={i.harga}
            placeholder="Harga"
            style={kolom}
          />
          <Galat teks={hasil.galat.harga} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={label}>Kuota</label>
          <input
            name="kuota"
            type="number"
            defaultValue={i.kuota}
            placeholder="Kuota"
            style={kolom}
          />
          <Galat teks={hasil.galat.kuota} />
        </div>
      </div>

      <div>
        <label style={label}>Gambar</label>
        <input
          name="gambar"
          defaultValue={i.gambar}
          placeholder="Gambar, misalnya /img/event-1.png (boleh kosong)"
          style={kolom}
        />
      </div>

      {hasil.pesan && (
        <p style={{ color: "#DC2626", fontWeight: 700 }}>{hasil.pesan}</p>
      )}

      <button
        disabled={sedangKirim}
        style={{
          background: "#FBBF24",
          color: "#1E1B4B",
          border: "none",
          borderRadius: 999,
          padding: "13px 24px",
          fontWeight: 800,
          cursor: sedangKirim ? "wait" : "pointer",
          opacity: sedangKirim ? 0.6 : 1,
        }}
      >
        {sedangKirim ? "Menyimpan..." : "Simpan"}
      </button>
    </form>
  );
}
