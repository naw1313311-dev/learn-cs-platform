import { testimonials } from '@/data/testimonials';

export function TestimonialSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">آراء الطلاب</p>
        <h2 className="mt-4 text-3xl font-bold text-white">أكثر من 12 ألف متعلم يثقون في التجربة</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-brand-300">★★★★★</div>
            <p className="text-sm leading-7 text-slate-200">“{item.quote}”</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-bold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
