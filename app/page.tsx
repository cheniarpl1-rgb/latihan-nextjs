"use client";
import { useState } from "react";

export default function BerandaPage() {
  return (
    <div style={{ background: "#FFF7ED", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "40px 20px 60px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            background: "#CCFBF1",
            color: "#0F766E",
            padding: "8px 18px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          ✨ PORTAL RESMI TIKET & EVENT SEKOLAH
        </span>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#1E1B4B",
            margin: "20px 0 14px",
            lineHeight: 1.1,
          }}
        >
          Cari Event Seru,
          <br />
          Gak Pake Ribet.
        </h1>
        <p
          style={{
            color: "#64748B",
            fontSize: 18,
            lineHeight: 1.7,
            margin: "0 auto",
          }}
        >
          Selamat datang di EventKu. Satu tempat untuk semua keseruan sekolahmu.
          Dari belajar bareng, tanding futsal, nonton konser, sampai jajan di
          bazar, semuanya bisa kamu temukan di sini tanpa harus tanya sana-sini
          lagi.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/event"
            style={{
              background: "#1E1B4B",
              color: "white",
              padding: "14px 30px",
              borderRadius: 999,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Lihat Semua Event →
          </a>
          <a
            href="/favorit"
            style={{
              background: "white",
              color: "#1E1B4B",
              padding: "14px 26px",
              borderRadius: 999,
              fontWeight: 800,
              textDecoration: "none",
              border: "1px solid #E5E7EB",
            }}
          >
            ❤️ Favoritku
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          <div>
            <b style={{ fontSize: 26, color: "#1E1B4B" }}>120+</b>
            <br />
            <span style={{ color: "#64748B", fontSize: 13 }}>Event Sukses</span>
          </div>
          <div>
            <b style={{ fontSize: 26, color: "#1E1B4B" }}>2.500+</b>
            <br />
            <span style={{ color: "#64748B", fontSize: 13 }}>
              Tiket Terjual
            </span>
          </div>
          <div>
            <b style={{ fontSize: 26, color: "#1E1B4B" }}>4.9 ★</b>
            <br />
            <span style={{ color: "#64748B", fontSize: 13 }}>Rating Siswa</span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 20px 20px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            color: "#1E1B4B",
            fontSize: 28,
            textAlign: "center",
            margin: "0 0 8px",
          }}
        >
          Kenapa harus pakai EventKu?
        </h2>
        <p
          style={{
            color: "#64748B",
            textAlign: "center",
            lineHeight: 1.7,
            margin: "0 0 24px",
          }}
        >
          Karena dulu, buat ikut satu event aja kamu harus cari info ke
          sana-sini, tanya kakak kelas, cek grup, dan ujung-ujungnya kehabisan
          kuota. Di sini, semua info itu udah dikumpulin jadi satu.
        </p>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              judul: "💻 Workshop - Buat kamu yang pengen jago",
              isi: "Mau belajar bikin web, bikin poster, atau skill baru lainnya? Di workshop kamu belajar langsung dari kakak kelas dan pemateri yang udah berpengalaman. Gak cuma dengerin, tapi langsung praktek dan pulang bawa karya.",
            },
            {
              judul: "⚽ Olahraga - Buat kamu yang suka tantangan",
              isi: "Turnamen futsal antar kelas selalu jadi yang paling ramai. Bukan cuma soal menang, tapi soal kekompakan, sportivitas, dan seru-seruan bareng teman satu tim. Siap jadi juara tahun ini?",
            },
            {
              judul: "🎸 Musik - Buat kamu yang suka tampil",
              isi: "Malam akustik adalah panggung buat kamu yang suka nyanyi dan main musik. Bawain lagu hits, lagu ciptaan sendiri, atau sekadar nonton dan nyanyi bareng. Suasananya selalu bikin nagih.",
            },
            {
              judul: "🛍️ Bazar - Buat kamu yang suka jajan dan belanja",
              isi: "Bazar adalah tempatnya karya siswa dan jajanan enak berkumpul. Kamu bisa jajan, belanja, sekaligus dukung usaha teman-temanmu. Siapa tau kamu nemu barang unik yang gak ada di tempat lain.",
            },
            {
              judul: "🏆 Lomba - Buat kamu yang suka adu pintar",
              isi: "Lomba cerdas cermat dan lomba lainnya adalah tempat buat buktiin kalau kamu bukan cuma pintar di kelas, tapi juga cepat dan berani. Ajak temanmu, bentuk tim, dan rebut hadiahnya.",
            },
          ].map((k) => (
            <div
              key={k.judul}
              style={{
                background: "white",
                borderRadius: 20,
                padding: 22,
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              }}
            >
              <b style={{ color: "#1E1B4B", fontSize: 17 }}>{k.judul}</b>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.7,
                  margin: "8px 0 0",
                  fontSize: 15,
                }}
              >
                {k.isi}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "20px 20px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#1E1B4B",
            borderRadius: 28,
            padding: 30,
            color: "white",
          }}
        >
          <h2 style={{ margin: "0 0 10px", fontSize: 26 }}>
            Cara pesannya gampang banget.
          </h2>
          <p style={{ color: "#C7D2FE", lineHeight: 1.7, margin: "0 0 20px" }}>
            Pertama, kamu buka halaman Event dan pilih event yang kamu suka.
            Kedua, kamu isi nama dan kelasmu lalu pilih jumlah tiketnya. Ketiga,
            tiketmu langsung tersimpan dan kamu tinggal tunjukin saat datang.
            Udah, segampang itu. Gak perlu antre, gak perlu ribet.
          </p>
          <a
            href="/event"
            style={{
              display: "inline-block",
              background: "#FBBF24",
              color: "#1E1B4B",
              padding: "13px 28px",
              borderRadius: 999,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Cari Event Sekarang →
          </a>
        </div>
        <p style={{ color: "#64748B", marginTop: 24, lineHeight: 1.7 }}>
          Jangan sampai kamu cuma denger cerita serunya dari temanmu. Amankan
          kursimu, ajak temanmu, dan bikin kenangan bareng di event sekolah
          tahun ini.
        </p>
      </div>
    </div>
  );
}
