import { thanksChapter, person } from '../data/biography.js'

function Flourish() {
  return (
    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="mx-auto opacity-70">
      <line x1="0" y1="12" x2="46" y2="12" stroke="#CBA268" strokeWidth="0.6" />
      <path d="M60 4 L64 12 L60 20 L56 12 Z" fill="#CBA268" />
      <line x1="74" y1="12" x2="120" y2="12" stroke="#CBA268" strokeWidth="0.6" />
    </svg>
  )
}

export default function ThankYou({ onSelectChapter }) {
  const c = thanksChapter
  return (
    <section className="h-full w-full overflow-y-auto relative">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #CBA268 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-bronze-500/10 blur-3xl animate-driftSlow pointer-events-none" />

      <div className="min-h-full flex flex-col justify-center max-w-xl mx-auto px-6 md:px-10 py-28 relative text-center">
        <p className="reveal-up chapter-number">{c.eyebrow}</p>

        <div className="reveal-up mt-6" style={{ animationDelay: '80ms' }}>
          <Flourish />
        </div>

       <h2 className="reveal-up font-display text-3xl md:text-5xl text-ivory-50 mt-8 leading-tight" style={{ animationDelay: '160ms' }}>
          {c.title}
        </h2>

        <div className="mt-12 space-y-8 text-left">
          {c.acknowledgments.map((a, i) => (
            <div key={i} className="reveal-up" style={{ animationDelay: `${280 + i * 90}ms` }}>
              <div className="font-display italic text-xl md:text-2xl text-bronze-300">{a.to}</div>
              <p className="text-ivory-100/70 leading-relaxed mt-1.5">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal-up hairline my-12" style={{ animationDelay: '780ms' }} />

        <div className="reveal-up" style={{ animationDelay: '820ms' }}>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ivory-100/40">{c.signOffLine}</p>
          <p className="font-display italic text-2xl text-bronze-300 mt-2">{person.fullName}</p>
        </div>

        {onSelectChapter && (
          <button
            onClick={() => onSelectChapter(0)}
            className="reveal-up group mt-12 inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] uppercase text-ivory-100/50 hover:text-bronze-300 transition-colors self-center"
            style={{ animationDelay: '880ms' }}
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1.5">↺</span>
            {c.replayLabel}
          </button>
        )}
      </div>
    </section>
  )
}