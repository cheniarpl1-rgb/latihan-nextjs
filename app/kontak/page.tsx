export default function Kontak() {
  return (
    <>
      <h1 className="text-4xl font-black mt-10 text-slate-900">
        Hubungi <span className="text-teal-500">Kami 💬</span>
      </h1>
      <p className="text-slate-500 mt-2">
        Ada pertanyaan soal event? Chat kami.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <div className="space-y-4">
          <div className="card p-5 bg-amber-50">
            <p className="font-bold text-slate-900">📍 Sekolah</p>
            <p className="text-slate-500">Jl. Pendidikan No. 1, Sumberpucung</p>
          </div>

          <div className="card p-5 bg-sky-50">
            <p className="font-bold text-slate-900">📧 Email</p>
            <p className="text-slate-500">halo@eventku.sch.id</p>
          </div>

          <div className="card p-5 bg-pink-50">
            <p className="font-bold text-slate-900">📱 WA Panitia</p>
            <p className="text-slate-500">0812-3456-7890</p>
          </div>
        </div>

        <form className="card p-6 space-y-3 h-fit">
          <label className="font-bold text-slate-900">Nama</label>
          <input placeholder="Nama kamu" />

          <label className="font-bold text-slate-900">Email / WA</label>
          <input placeholder="Email / WA" />

          <label className="font-bold text-slate-900">Pesan</label>
          <textarea placeholder="Tulis pesan..." className="h-28" />

          <button className="btn-kuning w-full">Kirim Pesan →</button>
        </form>
      </div>
    </>
  );
}
