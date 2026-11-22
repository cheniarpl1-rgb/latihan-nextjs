// app/login/page.tsx - SERVER COMPONENT (JANGAN KASIH "use client" DI SINI!)
// Tugasnya cuma: export dynamic + bungkus Suspense + tampilin LoginForm

import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
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
          ⏳ Loading Login...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
