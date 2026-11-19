export default function Loading() {
  return (
    <div className="min-h-screen bg-[#2e2763] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="h-6 w-48 bg-white/20 rounded-full animate-pulse mb-4" />
        <div className="h-12 w-72 bg-white/20 rounded-2xl animate-pulse mb-10" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h- bg-white/15 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
