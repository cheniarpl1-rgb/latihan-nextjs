export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#FFF1E6",
        minHeight: "100vh",
        margin: "0 -16px",
        padding: "0 16px 40px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right, #FEF3C7, #FBCFE8, #CCFBF1)",
          borderRadius: 24,
          padding: "16px 20px",
          marginTop: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          border: "3px solid white",
          boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              background: "white",
              width: 44,
              height: 44,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 900,
              color: "#1E1B4B",
            }}
          >
            E
          </div>
          <div>
            <b style={{ color: "#1E1B4B", fontSize: 17 }}>EventKu • ADMIN</b>
            <div style={{ color: "#64748B", fontSize: 12 }}>
              Kelola event & pesanan • Login sebagai admin
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a
            href="/admin"
            style={{
              background: "white",
              color: "#1E1B4B",
              padding: "9px 16px",
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            🔐 Login
          </a>
          <a
            href="/"
            style={{
              background: "white",
              color: "#1E1B4B",
              padding: "9px 16px",
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            🌐 Lihat Web
          </a>
        </div>
      </div>

      {children}
    </div>
  );
}
