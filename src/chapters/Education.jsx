import { educationChapter } from '../data/biography.js'

export default function Education() {
  const c = educationChapter
  return (
    <section className="h-full w-full overflow-y-auto">
      <div className="min-h-full max-w-3xl mx-auto px-6 md:px-10 py-28">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-5xl md:text-7xl text-ivory-50 mt-4 leading-[0.95]" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>

        <div className="mt-16">
          {c.timeline.map((t, i) => (
            <div
              key={i}
              className="reveal-up flex gap-6 md:gap-10 pb-12 border-l border-ivory-100/10 pl-6 md:pl-10 relative"
              style={{ animationDelay: `${160 + i * 100}ms` }}
            >
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-bronze-400" />
              <div>
                <div className="chapter-number mb-2">{t.year}</div>
                <div className="font-display text-2xl md:text-3xl text-ivory-50">{t.heading}</div>
                <div className="font-display italic text-lg text-bronze-300 mt-1">{t.subheading}</div>
                <p className="text-ivory-100/65 leading-relaxed mt-3 max-w-lg">{t.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-up font-display italic text-xl md:text-2xl text-ivory-100/75 max-w-xl" style={{ animationDelay: '420ms' }}>
          {c.closing}
        </p>
      </div>
    </section>
  )
}
