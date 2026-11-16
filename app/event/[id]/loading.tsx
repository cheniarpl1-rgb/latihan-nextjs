export default function LoadingDetail() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-pulse">
      <div className="h-9 w-32 bg-slate-200 rounded-xl" />
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 space-y-6">
          <div className="h-6 w-24 bg-slate-200 rounded-xl" />
          <div className="space-y-2">
            <div className="h-8 w-3/4 bg-slate-200 rounded-xl" />
            <div className="h-4 w-1/2 bg-slate-200 rounded-lg" />
          </div>
          <div className="h-20 bg-slate-200 rounded-2xl" />
        </div>
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-8 space-y-6">
          <div className="h-6 w-40 bg-slate-200 rounded-xl" />
          <div className="h-10 bg-slate-200 rounded-xl" />
          <div className="h-10 bg-slate-200 rounded-xl" />
          <div className="h-12 bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
