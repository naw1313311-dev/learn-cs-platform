import Link from 'next/link';
import { courses } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">الدورات</p>
          <h1 className="mt-4 text-4xl font-black text-white">اختر الدرس الذي يناسبك</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-300">تجربة تعليمية كاملة</p>
              <h2 className="mt-3 text-2xl font-bold text-white">هيكل بين الطلاب والمدرسين والإدارة</h2>
            </div>
            <Link href="/" className="rounded-full bg-brand-500 px-5 py-3 font-semibold text-slate-950">
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
