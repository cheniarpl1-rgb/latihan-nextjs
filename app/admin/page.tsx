// app/admin/page.tsx - JANGAN PAKE useSearchParams DI SINI, LANGSUNG REDIRECT AJA!
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminIndex() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("admin") === "ya") router.push("/admin/kelola");
    else router.push("/login?dari=/admin/kelola");
  }, [router]);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#120826",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: 800,
      }}
    >
      ⏳ Membuka Admin...
    </div>
  );
}
