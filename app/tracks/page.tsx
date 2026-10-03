export default function TracksPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black">المسارات التعليمية</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            'أساسيات الحاسب الآلي',
            'البرمجة',
            'قواعد البيانات',
            'الشبكات',
            'الأمن السيبراني',
            'الذكاء الاصطناعي',
          ].map((track) => (
            <div key={track} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xl font-bold">{track}</p>
              <p className="mt-3 text-slate-300">مسار تدريبي متكامل يضم دورات وتمارين ومشاريع عملية.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
