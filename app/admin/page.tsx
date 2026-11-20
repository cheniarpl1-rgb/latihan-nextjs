import Link from "next/link";
import { ambilEvents } from "@/data/ambil";
import { rupiah, type Event } from "@/data/events";
import { hapusEvent } from "@/app/admin/actions";

export default async function Admin({
  searchParams,
}: {
  searchParams: Promise<{ info?: string; galat?: string }>;
}) {
  const { info, galat } = await searchParams;
  const events = await ambilEvents();

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 36,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <h1
          style={{ fontSize: 38, fontWeight: 900, color: "#1E1B4B", margin: 0 }}
        >
          Kelola <span style={{ color: "#EC4899" }}>Event</span> 🎪
        </h1>
        <Link
          href="/admin/baru"
          style={{
            background: "#FBBF24",
            color: "#1E1B4B",
            padding: "10px 20px",
            borderRadius: 999,
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ➕ Tambah event
        </Link>
      </div>

      {typeof info === "string" && (
        <p
          style={{
            background: "#D9F99D",
            color: "#365314",
            padding: "10px 16px",
            borderRadius: 16,
            fontWeight: 700,
            marginTop: 16,
          }}
        >
          ✅ {info}
        </p>
      )}
      {typeof galat === "string" && (
        <p
          style={{
            background: "#FECACA",
            color: "#991B1B",
            padding: "10px 16px",
            borderRadius: 16,
            fontWeight: 700,
            marginTop: 16,
          }}
        >
          ❌ {galat}
        </p>
      )}

      <div
        style={{
          background: "white",
          borderRadius: 28,
          border: "3px solid white",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          overflow: "hidden",
          marginTop: 20,
        }}
      >
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}
        >
          <thead>
            <tr style={{ background: "#FEF3C7", textAlign: "left" }}>
              <th style={{ padding: 14 }}>Event</th>
              <th style={{ padding: 14 }}>Tanggal</th>
              <th style={{ padding: 14 }}>Harga</th>
              <th style={{ padding: 14 }}>Terisi</th>
              <th style={{ padding: 14 }}></th>
            </tr>
          </thead>
          <tbody>
            {events.map((e: Event) => (
              <tr key={e.id} style={{ borderTop: "1px solid #F1F5F9" }}>
                <td style={{ padding: 14, fontWeight: 700, color: "#1E1B4B" }}>
                  {e.judul}
                </td>
                <td style={{ padding: 14, color: "#64748B" }}>{e.tanggal}</td>
                <td style={{ padding: 14 }}>{rupiah(e.harga)}</td>
                <td style={{ padding: 14 }}>
                  <span
                    style={{
                      background: "#CCFBF1",
                      color: "#0F766E",
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {e.terisi}/{e.kuota}
                  </span>
                </td>
                <td style={{ padding: 14 }}>
                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <Link
                      href={`/admin/${e.id}/ubah`}
                      style={{
                        background: "#BAE6FD",
                        color: "#0C4A6E",
                        padding: "6px 14px",
                        borderRadius: 999,
                        fontWeight: 700,
                        fontSize: 13,
                        textDecoration: "none",
                      }}
                    >
                      Ubah
                    </Link>
                    <form action={hapusEvent} style={{ margin: 0 }}>
                      <input type="hidden" name="id" value={e.id} />
                      <button
                        style={{
                          background: "#FECACA",
                          color: "#991B1B",
                          border: "none",
                          padding: "6px 14px",
                          borderRadius: 999,
                          fontWeight: 700,
                          fontSize: 13,
                          cursor: "pointer",
                        }}
                      >
                        Hapus
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
