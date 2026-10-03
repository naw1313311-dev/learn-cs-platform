export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black">لوحة التحكم</h1>
        <p className="mt-3 text-slate-300">ملخص تقدم الطالب، الدورات الحالية، والتحديات الأسبوعية.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">الدورات الحالية</p>
            <p className="mt-4 text-3xl font-black text-white">6</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">تحديات مكتملة</p>
            <p className="mt-4 text-3xl font-black text-white">24</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">معدل الإنجاز</p>
            <p className="mt-4 text-3xl font-black text-white">87%</p>
          </div>
        </div>
      </div>
    </main>
  );
}
