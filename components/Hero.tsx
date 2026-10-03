import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/35 bg-brand-500/10 px-4 py-2 text-sm text-brand-100">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-400" />
            منصة تعليمية متكاملة للحاسب الآلي
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              تعلم البرمجة والحاسب الآلي بطريقة احترافية وتفاعلية.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              اكتسب مهارات البرمجة، الخوارزميات، قواعد البيانات، الشبكات، والأمن السيبراني من خلال مسارات تعليمية واضحة ومشاريع عملية.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/courses" className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-400">
              اختر مسارك
            </Link>
            <Link href="/about" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-brand-400 hover:text-brand-100">
              تعرف على المنصة
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-300">
            <div>
              <span className="block text-2xl font-black text-white">12k+</span>
              طالب
            </div>
            <div>
              <span className="block text-2xl font-black text-white">87</span>
              دورة
            </div>
            <div>
              <span className="block text-2xl font-black text-white">4.9</span>
              تقييم
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-sm">
          <div className="rounded-[24px] border border-brand-400/20 bg-slate-900/80 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">المسار الحالي</p>
                <h2 className="mt-1 text-2xl font-bold text-white">مقدمة في البرمجة</h2>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">جاري</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>التقدم</span>
                  <span>72%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
                </div>
              </div>

              <div className="grid gap-3 pt-4 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/70 p-3">
                  <span>الأساسيات</span>
                  <span className="text-emerald-300">مكتمل</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/70 p-3">
                  <span>المتغيرات والوظائف</span>
                  <span className="text-brand-300">قيد التنفيذ</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/70 p-3">
                  <span>المشاريع التطبيقية</span>
                  <span className="text-slate-400">قادم</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
