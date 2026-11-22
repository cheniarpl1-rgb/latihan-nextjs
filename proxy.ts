import { NextResponse, type NextRequest } from "next/server";
import { NAMA_COOKIE, tokenSah } from "@/lib/sesi";

export async function proxy(request: NextRequest) {
  // Kalau yang dibuka itu /admin doang (halaman login), BOLEHIN LEWAT
  // Jangan dilempar ke mana-mana, karena /admin itu emang tempat loginnya
  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.next();
  }

  const token = request.cookies.get(NAMA_COOKIE)?.value;
  if (await tokenSah(token)) return NextResponse.next();

  // Kalau belum login dan mau buka /admin/kelola, lemparnya ke /admin aja, BUKAN ke /login
  const tujuan = new URL("/admin", request.url);
  return NextResponse.redirect(tujuan);
}

// Hanya jalan untuk alamat yang diawali /admin
export const config = {
  matcher: ["/admin/:path*"],
};
