import { skillsChapter } from '../data/biography.js'

export default function Skills() {
  const c = skillsChapter
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

        <div className="mt-14 space-y-12">
          {c.groups.map((g, i) => (
            <div key={g.category} className="reveal-up" style={{ animationDelay: `${200 + i * 90}ms` }}>
              <div className="chapter-number mb-5">{g.category}</div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {g.items.map((it) => (
                  <div key={it.name} className="border-l-2 border-bronze-400/30 pl-4">
                    <div className="font-display italic text-xl text-ivory-50">{it.name}</div>
                    <p className="text-ivory-100/60 text-sm mt-1 leading-relaxed">{it.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-up text-ivory-100/65 leading-relaxed mt-14 max-w-xl" style={{ animationDelay: '560ms' }}>
          {c.closing}
        </p>
      </div>
    </section>
  )
}
