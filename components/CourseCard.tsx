import Link from 'next/link';

export function CourseCard({ course }: { course: { slug: string; title: string; description: string; level: string; lessons: number; duration: string; } }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 transition hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-soft">
      <div className="h-40 bg-gradient-to-br from-brand-500/25 via-brand-600/15 to-slate-900 p-6">
        <div className="flex h-full items-end justify-between">
          <span className="rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
            {course.level}
          </span>
          <span className="text-sm text-slate-300">{course.duration}</span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold text-white">{course.title}</h3>
        <p className="text-sm leading-7 text-slate-300">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>{course.lessons} دروس</span>
          <Link href={`/courses/${course.slug}`} className="font-semibold text-brand-300 transition group-hover:text-brand-200">
            التفاصيل
          </Link>
        </div>
      </div>
    </article>
  );
}
