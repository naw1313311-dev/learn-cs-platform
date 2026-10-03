import Link from 'next/link';

export function TrackCard({ track }: { track: { title: string; description: string; duration: string; level: string } }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-400/30">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
          {track.level}
        </span>
        <span className="text-sm text-slate-300">{track.duration}</span>
      </div>

      <h3 className="text-xl font-bold text-white">{track.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{track.description}</p>

      <Link href="/tracks" className="mt-5 inline-flex text-sm font-semibold text-brand-300 hover:text-brand-200">
        عرض المسار
      </Link>
    </div>
  );
}
