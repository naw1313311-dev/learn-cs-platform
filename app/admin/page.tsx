import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">لوحة الإدارة</p>
            <h1 className="mt-3 text-4xl font-black">إحصائيات المنصة</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-brand-400 hover:text-white">
            العودة إلى الرئيسية
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            ['الطلاب', '12,480'],
            ['الدورات', '87'],
            ['التقييمات', '1,920'],
            ['المشاريع', '340'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-300">{label}</p>
              <p className="mt-5 text-3xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white">الدورات المضافة حديثًا</h2>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>أساسيات الحاسب الآلي</span>
                <span className="text-brand-300">نشط</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>قواعد البيانات</span>
                <span className="text-brand-300">نشط</span>
              </li>
              <li className="flex items-center justify-between">
                <span>الأمن السيبراني</span>
                <span className="text-brand-300">جديد</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white">مؤشرات الأداء</h2>
            <div className="mt-6 space-y-5">
              {[
                ['معدل إكمال الدروس', '86%'],
                ['معدل الاحتفاظ', '91%'],
                ['نسبة الانجاز في المشاريع', '74%'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
