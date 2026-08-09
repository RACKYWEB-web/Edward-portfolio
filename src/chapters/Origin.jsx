import { originChapter } from '../data/biography.js'

export default function Origin() {
  const c = originChapter
  return (
    <section className="h-full w-full overflow-y-auto relative">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="400" cy="400" r="120" fill="none" stroke="#CBA268" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="220" fill="none" stroke="#CBA268" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="320" fill="none" stroke="#CBA268" strokeWidth="0.5" />
        <line x1="0" y1="400" x2="800" y2="400" stroke="#CBA268" strokeWidth="0.4" />
        <line x1="400" y1="0" x2="400" y2="800" stroke="#CBA268" strokeWidth="0.4" />
        <circle cx="400" cy="400" r="4" fill="#CBA268" />
      </svg>

      <div className="min-h-full flex flex-col justify-center max-w-2xl mx-auto px-6 md:px-10 py-28 relative">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-5xl md:text-7xl text-ivory-50 mt-4 leading-[0.95]" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>
        <p className="reveal-up eyebrow-serif mt-6" style={{ animationDelay: '160ms' }}>
          {c.place}
        </p>

        <div className="mt-8 space-y-4 max-w-lg">
          {c.narrative.map((p, i) => (
            <p key={i} className="reveal-up text-ivory-100/70 leading-relaxed text-lg" style={{ animationDelay: `${220 + i * 70}ms` }}>
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 space-y-1">
          {c.shortLines.map((l, i) => (
            <p key={i} className="reveal-up font-display italic text-ivory-100/55" style={{ animationDelay: `${480 + i * 70}ms` }}>
              {l}
            </p>
          ))}
        </div>

        <p className="reveal-up font-display italic text-2xl text-bronze-300 mt-8" style={{ animationDelay: '700ms' }}>
          {c.closing}
        </p>
      </div>
    </section>
  )
}
