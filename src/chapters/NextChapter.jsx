import { nextChapterChapter } from '../data/biography.js'

export default function NextChapter() {
  const c = nextChapterChapter
  return (
    <section className="h-full w-full flex items-center justify-center relative px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #CBA268 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-bronze-500/10 blur-3xl animate-driftSlow" />

      <div className="relative max-w-2xl text-center">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-4xl md:text-6xl text-ivory-50 mt-6 leading-tight" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>
        <p className="reveal-up eyebrow-serif mt-3" style={{ animationDelay: '140ms' }}>
          {c.subtitle}
        </p>

        <div className="mt-10 space-y-1">
          {c.lines.map((l, i) => (
            <p key={i} className="reveal-up font-display italic text-xl md:text-2xl text-ivory-100/75" style={{ animationDelay: `${200 + i * 80}ms` }}>
              {l}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-2 max-w-lg mx-auto">
          {c.reflection.map((l, i) => (
            <p key={i} className="reveal-up text-ivory-100/65 leading-relaxed" style={{ animationDelay: `${640 + i * 80}ms` }}>
              {l}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-2 max-w-lg mx-auto">
          <p className="reveal-up text-ivory-100/75 leading-relaxed" style={{ animationDelay: '820ms' }}>
            {c.today}
          </p>
          <p className="reveal-up text-ivory-100/75 leading-relaxed" style={{ animationDelay: '880ms' }}>
            {c.tomorrow}
          </p>
        </div>

        <div className="mt-12">
          <p className="reveal-up text-ivory-100/60" style={{ animationDelay: '960ms' }}>
            {c.closingIntro}
          </p>
          <p className="reveal-up font-display text-3xl md:text-4xl text-bronze-300 mt-3" style={{ animationDelay: '1020ms' }}>
            {c.closingEmphasis}
          </p>
        </div>
      </div>
    </section>
  )
}
