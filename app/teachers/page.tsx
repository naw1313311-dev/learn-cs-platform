export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black">المدرسين</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {['أحمد السعد', 'سارة محمد', 'محمود النجار'].map((teacher, index) => (
            <div key={teacher} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-xl font-black text-brand-200">
                {teacher.split(' ')[0].slice(0, 1)}
              </div>
              <p className="text-xl font-bold">{teacher}</p>
              <p className="mt-2 text-slate-300">خبرة {index + 5} سنوات في تعليم البرمجة والخوارزميات.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
