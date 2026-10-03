const stats = [
  { value: '12K+', label: 'طلاب مسجلين' },
  { value: '87', label: 'دورات تعليمية' },
  { value: '32', label: 'مدرسين متخصصين' },
  { value: '96%', label: 'معدل إكمال' },
];

export function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-slate-900/70">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
