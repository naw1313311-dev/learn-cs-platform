import Link from 'next/link';

const navItems = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الدورات', href: '/courses' },
  { label: 'المسارات', href: '/tracks' },
  { label: 'المدرسين', href: '/teachers' },
  { label: 'تواصل معنا', href: '/contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-black text-slate-950">
            CS
          </div>
          <div>
            <p className="text-lg font-bold text-white">LearnCS</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-300">academy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-400 hover:text-white">
            تسجيل الدخول
          </Link>
          <Link href="/dashboard" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
            ابدأ الآن
          </Link>
        </div>
      </div>
    </header>
  );
}
