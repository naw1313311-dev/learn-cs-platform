export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-bold text-white">LearnCS</p>
          <p className="mt-2">منصة تعليمية متكاملة لتعليم الحاسب الآلي والبرمجة.</p>
        </div>
        <div className="flex gap-6">
          <a href="/courses" className="hover:text-white">الدورات</a>
          <a href="/tracks" className="hover:text-white">المسارات</a>
          <a href="/contact" className="hover:text-white">تواصل معنا</a>
        </div>
      </div>
    </footer>
  );
}
