const pricing = [
  {
    name: 'مبتدئ',
    price: 'مجاني',
    features: ['الوصول إلى أول 3 دورات', 'تمارين أساسية', 'متابعة التقدم'],
    highlight: false,
  },
  {
    name: 'برو',
    price: '89 ر.س/شهر',
    features: ['كل الدورات', 'جلسات تقييم', 'مشاريع تطبيقية', 'دعم مباشر'],
    highlight: true,
  },
  {
    name: 'مميز',
    price: '149 ر.س/شهر',
    features: ['جميع المزايا', 'جلسات فردية', 'شهادة إنجاز', 'أولوية الدعم'],
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">الاشتراكات</p>
        <h2 className="mt-4 text-3xl font-bold text-white">اختر الخطة المناسبة لك</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border p-6 ${plan.highlight ? 'border-brand-400 bg-brand-500/10 shadow-soft' : 'border-white/10 bg-white/5'}`}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-brand-300">{plan.name}</p>
            <p className="mt-6 text-4xl font-black text-white">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-full px-4 py-3 font-semibold ${plan.highlight ? 'bg-brand-500 text-slate-950' : 'border border-white/15 text-white'}`}>
              ابدأ الآن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
