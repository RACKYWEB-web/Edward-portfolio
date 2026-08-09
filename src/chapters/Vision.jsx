import { visionChapter } from '../data/biography.js'

export default function Vision() {
  const c = visionChapter
  return (
    <section className="h-full w-full overflow-y-auto relative">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #CBA268 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-emerald-500/10 blur-3xl animate-driftSlow pointer-events-none" />

      <div className="min-h-full flex flex-col justify-center max-w-3xl mx-auto px-6 md:px-10 py-28 relative text-center">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-4xl md:text-6xl text-ivory-50 mt-4 leading-tight" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>
        <p className="reveal-up eyebrow-serif mt-3" style={{ animationDelay: '140ms' }}>
          {c.subtitle}
        </p>

        <div className="mt-10 space-y-1">
          {c.intro.map((l, i) => (
            <p key={i} className="reveal-up text-ivory-100/75 text-lg" style={{ animationDelay: `${200 + i * 70}ms` }}>
              {l}
            </p>
          ))}
        </div>

        <p
          className="reveal-up font-display text-2xl md:text-4xl text-bronze-300 leading-snug mt-6 max-w-2xl mx-auto"
          style={{ animationDelay: '340ms' }}
        >
          {c.intersection}
        </p>

        <div className="mt-10 space-y-3 max-w-xl mx-auto">
          {c.body.map((l, i) => (
            <p key={i} className="reveal-up text-ivory-100/70 leading-relaxed text-lg" style={{ animationDelay: `${420 + i * 70}ms` }}>
              {l}
            </p>
          ))}
        </div>

        <p className="reveal-up font-display italic text-4xl md:text-5xl text-ivory-50 mt-6" style={{ animationDelay: '560ms' }}>
          {c.emphasis}
        </p>

        <div className="mt-10 space-y-3 max-w-xl mx-auto">
          {c.more.map((l, i) => (
            <p key={i} className="reveal-up text-ivory-100/65 leading-relaxed" style={{ animationDelay: `${620 + i * 70}ms` }}>
              {l}
            </p>
          ))}
        </div>

        <div className="reveal-up mt-16" style={{ animationDelay: '860ms' }}>
          <div className="chapter-number mb-4">{c.ambitionHeading}</div>
          <p className="text-ivory-100/70 mb-6 max-w-lg mx-auto">{c.ambitionIntro}</p>
          <div className="max-w-md mx-auto text-left space-y-2.5">
            {c.ambitionItems.map((it, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-ivory-100/10">
                <span className="font-mono text-[11px] text-bronze-400">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-ivory-100/75">{it}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-xl mx-auto">
          <p className="reveal-up text-ivory-100/70 leading-relaxed" style={{ animationDelay: '980ms' }}>
            {c.closing}
          </p>
          <p className="reveal-up font-display italic text-lg text-ivory-100/50 mt-2" style={{ animationDelay: '1040ms' }}>
            {c.closingEmphasis}
          </p>
          <p className="reveal-up font-display text-3xl md:text-4xl text-bronze-300 mt-4" style={{ animationDelay: '1100ms' }}>
            {c.finalEmphasis}
          </p>
        </div>
      </div>
    </section>
  )
}
