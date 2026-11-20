export default function Tentang() {
  return (
    <>
      <h1 className="text-4xl font-black mt-10 text-slate-900">
        Tentang <span className="text-pink-500">EventKu</span> 💛
      </h1>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <div className="card p-6 bg-teal-50">
          <h2 className="text-2xl font-bold text-slate-900">Cerita Kami 📖</h2>
          <p className="text-slate-500 mt-3">
            EventKu adalah portal resmi tiket &amp; event sekolah. Biar siswa
            gak ketinggalan workshop, lomba, musik, dan bazar.
          </p>
        </div>

        <div className="card p-6 bg-pink-50">
          <h2 className="text-2xl font-bold text-slate-900">Misi Kami 🎯</h2>
          <p className="text-slate-500 mt-3">
            1. Memudahkan pesan tiket
            <br />
            2. Membantu panitia kelola event
            <br />
            3. Bikin event sekolah makin rame
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="card p-5 text-center bg-amber-50">
          <p className="text-3xl font-black text-amber-500">6+</p>
          <p className="text-sm text-slate-500">Event</p>
        </div>
        <div className="card p-5 text-center bg-sky-50">
          <p className="text-3xl font-black text-sky-500">120+</p>
          <p className="text-sm text-slate-500">Peserta</p>
        </div>
        <div className="card p-5 text-center bg-violet-50">
          <p className="text-3xl font-black text-violet-500">4</p>
          <p className="text-sm text-slate-500">Kategori</p>
        </div>
      </div>
    </>
  );
}
