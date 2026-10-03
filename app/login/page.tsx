export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
        <h1 className="text-3xl font-black text-white">تسجيل الدخول</h1>
        <p className="mt-3 text-slate-300">أدخل بياناتك لتسجيل الدخول إلى المنصة</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">البريد الإلكتروني</label>
            <input type="email" className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-brand-400" placeholder="name@example.com" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">كلمة المرور</label>
            <input type="password" className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-brand-400" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-brand-400">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </main>
  );
}
