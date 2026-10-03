import { tracks } from '@/data/tracks';
import { TrackCard } from '@/components/TrackCard';
import { testimonials } from '@/data/testimonials';
import { PricingSection } from '@/components/PricingSection';

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <FeatureSection />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">المسارات</p>
          <h2 className="mt-4 text-3xl font-bold text-white">مسارات تعليمية متكاملة</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">الدورات</p>
            <h2 className="mt-3 text-3xl font-bold text-white">مسارات تعليمية مخصصة</h2>
          </div>
          <Link
            href="/courses"
            className="rounded-full border border-brand-400/50 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-100 transition hover:bg-brand-500/20"
          >
            استعراض الكل
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <TestimonialSection />
      <PricingSection />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">لماذا المنصة؟</p>
              <h3 className="mt-3 text-3xl font-bold text-white">تعلم عملي، مسار واضح، ومحتوى يحفز الإبداع</h3>
            </div>

            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-6">
              <div className="space-y-3 text-sm text-slate-200">
                <p>• محتوى منظم بحسب المستويات</p>
                <p>• تمارين وتحديات يومية</p>
                <p>• شواهد إنجاز ومشاريع عملية</p>
                <p>• تجربة تعليمية تفاعلية للمبتدئين والمتقدمين</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
