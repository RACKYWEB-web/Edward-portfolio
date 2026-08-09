import { useState } from 'react'
import { projectsChapter } from '../data/biography.js'

export default function Projects() {
  const [active, setActive] = useState(null)
  const c = projectsChapter

  return (
    <section className="h-full w-full overflow-y-auto relative">
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

        {c.hasProjects && c.items.length > 0 ? (
          <div className="mt-14 divide-y divide-ivory-100/10">
            {c.items.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className="reveal-up w-full text-left py-8 group flex items-start justify-between gap-6"
                style={{ animationDelay: `${260 + i * 100}ms` }}
              >
                <div>
                  <div className="font-mono text-[11px] text-bronze-400 mb-2 tracking-wide uppercase">{p.tagline}</div>
                  <div className="font-display text-3xl text-ivory-50 group-hover:text-bronze-300 transition-colors">{p.title}</div>
                  <p className="text-ivory-100/60 mt-2 max-w-md">{p.summary.slice(0, 110)}…</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-bronze-400/30 text-bronze-300/90">
                      Status: {p.status}
                    </span>
                    <span className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-ivory-100/15 text-ivory-100/50">
                      Chapter: {p.chapterStatus}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-ivory-100/40 group-hover:text-bronze-300 transition-colors shrink-0 mt-2">Read →</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="reveal-up mt-16 max-w-lg" style={{ animationDelay: '260ms' }}>
            <div className="hairline mb-10 w-24" />
            <div className="font-display italic text-2xl md:text-3xl text-bronze-300 leading-snug">This Chapter Is Still Being Written</div>
          </div>
        )}
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] bg-charcoal-950/98 backdrop-blur-xl overflow-y-auto" role="dialog" aria-modal="true">
          <div className="max-w-2xl mx-auto px-6 md:px-10 py-20 relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-8 right-6 md:right-10 w-10 h-10 flex items-center justify-center text-2xl text-ivory-100/60 hover:text-bronze-300"
              aria-label="Close project"
            >
              ×
            </button>
            <div className="chapter-number mb-3">{active.tagline}</div>
            <h3 className="font-display text-5xl text-ivory-50 leading-tight">{active.title}</h3>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-bronze-400/40 text-bronze-300">
                Status: {active.status}
              </span>
              <span className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-ivory-100/15 text-ivory-100/60">
                Chapter: {active.chapterStatus}
              </span>
            </div>

            <p className="text-ivory-100/75 leading-relaxed mt-8 text-lg">{active.summary}</p>

            {active.tags && active.tags.length > 0 && (
              <>
                <div className="hairline my-10" />
                <div className="chapter-number mb-3">This project sits at the beginning of a journey into</div>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full border border-ivory-100/15 text-ivory-100/70">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
