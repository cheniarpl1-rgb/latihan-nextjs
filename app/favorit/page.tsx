"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Favorit() {
  const [fav, setFav] = useState<any[]>([]);
  useEffect(() => {
    try {
      setFav(JSON.parse(localStorage.getItem("favorit") ?? "[]"));
    } catch {}
  }, []);
  if (fav.length === 0)
    return (
      <div className="text-center pt-16">
        <p className="text-7xl">💔</p>
        <h1 className="text-4xl font-black mt-4 text-slate-900">
          Belum ada favorit
        </h1>
        <Link href="/event" className="btn-kuning mt-6 inline-block">
          Cari Event →
        </Link>
      </div>
    );
  return (
    <>
      <h1 className="text-4xl font-black mt-10 text-slate-900">Favoritku ❤️</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {fav.map((e: any) => (
          <article key={e.id} className="card p-5">
            <span className="chip bg-pink-100 text-pink-600">{e.kategori}</span>
            <h3 className="font-bold text-xl mt-3 text-slate-900">{e.judul}</h3>
            <p className="text-slate-500 text-sm">
              {e.tanggal} • {e.lokasi}
            </p>
            <Link
              href={"/event/" + e.id}
              className="btn-kuning !py-2 !px-4 text-sm mt-4 inline-block"
            >
              Lihat →
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
