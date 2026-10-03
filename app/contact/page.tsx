export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-black">تواصل معنا</h1>
        <p className="mt-4 text-slate-300">للاستفسارات حول الدورات أو التعاون أو الانضمام إلى المنصة.</p>
        <div className="mt-8 space-y-4 text-slate-200">
          <p>البريد الإلكتروني: hello@learncs.academy</p>
          <p>الهاتف: +966 500 000 000</p>
        </div>
      </div>
    </main>
  );
}
