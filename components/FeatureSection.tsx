const features = [
  {
    title: 'مسارات تعليمية منظمة',
    description: 'خطط تعلم واضحة حسب المستوى: مبتدئ، متوسط، متقدم.',
  },
  {
    title: 'تمارين وتحديات',
    description: 'أسئلة، اختبارات، ومشاريع تفاعلية لتحفيز التعلم.',
  },
  {
    title: 'بيئة تعليمية تفاعلية',
    description: 'تعلم باستخدام فيديوهات، ملاحظات، ومهام عملية.',
  },
  {
    title: 'إدارة تقدم الطلاب',
    description: 'تتبع الإنجاز والتقدم عبر لوحة التحكم.',
  },
];

export function FeatureSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">المميزات</p>
        <h2 className="mt-4 text-3xl font-bold text-white">كل ما تحتاجه لتعليم الحاسب الآلي بكفاءة</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-xl text-brand-300">
              ✦
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-sm leading-7 text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
