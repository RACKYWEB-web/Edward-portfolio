import { person, coverChapter } from '../data/biography.js'

export default function Cover({ onNext }) {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #CBA268 1px, transparent 0)', backgroundSize: '34px 34px' }}
      />
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-bronze-500/10 blur-3xl animate-driftSlow" />
      <div
        className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl animate-driftSlow"
        style={{ animationDelay: '2s' }}
      />

      <p className="chapter-number reveal-up mb-8">{coverChapter.kicker}</p>

      <h1
        className="font-display text-[13vw] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight text-ivory-50"
        style={{ animationDelay: '120ms' }}
      >
        {person.fullName.split(' ').map((word, i) => (
          <span key={i} className="reveal-up inline-block mr-[0.22em] last:mr-0" style={{ animationDelay: `${140 + i * 110}ms` }}>
            {word}
          </span>
        ))}
      </h1>

      <p className="reveal-up font-mono text-[11px] md:text-xs tracking-[0.22em] uppercase text-bronze-400/90 mt-6" style={{ animationDelay: '500ms' }}>
        {coverChapter.disciplineLine}
      </p>

      <p
        className="reveal-up font-display italic text-xl md:text-2xl text-ivory-100/75 mt-8 max-w-lg leading-relaxed"
        style={{ animationDelay: '580ms' }}
      >
        {coverChapter.tagline}
      </p>

      <div className="reveal-up mt-8 flex flex-col gap-1.5" style={{ animationDelay: '660ms' }}>
        {coverChapter.roles.map((r) => (
          <span key={r} className="font-mono text-[11px] tracking-[0.16em] uppercase text-ivory-100/50">
            {r}
          </span>
        ))}
      </div>

      <p className="reveal-up font-mono text-[11px] tracking-[0.24em] uppercase text-bronze-300/80 mt-8" style={{ animationDelay: '740ms' }}>
        {person.state}, {person.country}
      </p>

      <button
        onClick={onNext}
        className="btn-shine reveal-up mt-14 group inline-flex items-center gap-3 font-mono text-xs tracking-[0.24em] uppercase text-bronze-300 hover:text-bronze-200 transition-colors border border-bronze-400/30 rounded-full px-6 py-3.5"
        style={{ animationDelay: '820ms' }}
      >
        {coverChapter.cta}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </button>
    </section>
  )
}