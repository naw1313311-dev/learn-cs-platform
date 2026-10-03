import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">الاشتراكات</p>
          <h1 className="mt-4 text-4xl font-black">اختر الخطة المناسبة لك</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['مبتدئ', 'مجاني', ['الوصول إلى 3 دورات', 'تمارين أساسية', 'تتبع التقدم']],
            ['برو', '89 ر.س / شهر', ['كل الدورات', 'مشاريع تطبيقية', 'دعم مباشر']],
            ['مميز', '149 ر.س / شهر', ['جميع المزايا', 'جلسات فردية', 'شهادة إنجاز']],
          ].map(([name, price, features]) => (
            <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-300">{name}</p>
              <p className="mt-6 text-4xl font-black text-white">{price}</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-brand-500 px-4 py-3 font-semibold text-slate-950">
                اختر الخطة
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-brand-400 hover:text-brand-100">
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
