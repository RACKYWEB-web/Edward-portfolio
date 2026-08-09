import { journeyChapter } from '../data/biography.js'

export default function Journey() {
  const c = journeyChapter
  return (
    <section className="h-full w-full overflow-y-auto">
      <div className="min-h-full max-w-3xl mx-auto px-6 md:px-10 py-28">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-5xl md:text-7xl text-ivory-50 mt-4 leading-[0.95]" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>
        <p className="reveal-up eyebrow-serif mt-4" style={{ animationDelay: '140ms' }}>
          {c.subtitle}
        </p>
        <p className="reveal-up text-ivory-100/70 leading-relaxed mt-6 max-w-xl text-lg" style={{ animationDelay: '200ms' }}>
          {c.intro}
        </p>

        <div className="mt-14 space-y-10">
          {c.sections.map((s, i) => (
            <div key={s.heading} className="reveal-up pb-10 border-b border-ivory-100/10 last:border-none" style={{ animationDelay: `${240 + i * 90}ms` }}>
              <div className="font-display italic text-2xl text-bronze-300">{s.heading}</div>
              <p className="text-ivory-100/70 leading-relaxed mt-2.5 max-w-xl">{s.body}</p>
              {s.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-xs tracking-wide px-3 py-1.5 rounded-full border border-ivory-100/15 text-ivory-100/65">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
