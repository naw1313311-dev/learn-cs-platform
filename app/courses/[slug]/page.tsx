import { notFound } from 'next/navigation';
import Link from 'next/link';
import { courses } from '@/data/courses';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/courses" className="mb-8 inline-flex text-brand-300 hover:text-brand-200">
          ← العودة إلى الدورات
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
              {course.level}
            </span>
            <span className="text-sm text-slate-300">{course.duration}</span>
          </div>

          <h1 className="text-4xl font-black text-white">{course.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">{course.description}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-brand-300">المحتوى</p>
              <ul className="space-y-3 text-slate-200">
                {course.overview.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-400/25 bg-brand-500/10 p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-brand-300">معلومات الدورة</p>
              <div className="space-y-3 text-slate-200">
                <p>عدد الدروس: {course.lessons}</p>
                <p>المدة: {course.duration}</p>
                <p>المستوى: {course.level}</p>
              </div>
              <button className="mt-6 rounded-full bg-brand-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-400">
                ابدأ الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
