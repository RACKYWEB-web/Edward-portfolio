import { personChapter } from '../data/biography.js'

export default function Person() {
  const c = personChapter
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

        <div className="mt-10 space-y-5 max-w-2xl">
          {c.narrative.map((p, i) => (
            <p
              key={i}
              className={`reveal-up leading-relaxed ${i === 2 ? 'font-display italic text-xl text-bronze-300' : 'text-ivory-100/75 text-lg'}`}
              style={{ animationDelay: `${200 + i * 60}ms` }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="reveal-up hairline my-14" style={{ animationDelay: '520ms' }} />

        <div className="reveal-up" style={{ animationDelay: '560ms' }}>
          <div className="chapter-number mb-6">{c.mattersHeading}</div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
            {c.matters.map((m) => (
              <div key={m.label}>
                <div className="font-display italic text-xl text-bronze-300">{m.label}</div>
                <p className="text-ivory-100/65 leading-relaxed mt-1.5">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up mt-14" style={{ animationDelay: '620ms' }}>
          <div className="chapter-number mb-3">{c.beyondHeading}</div>
          <p className="text-ivory-100/70 mb-4">{c.beyondIntro}</p>
          <div className="flex flex-wrap gap-2.5">
            {c.beyondClassroom.map((it) => (
              <span key={it} className="font-mono text-xs tracking-wide px-3.5 py-2 rounded-full border border-ivory-100/15 text-ivory-100/70">
                {it}
              </span>
            ))}
          </div>
          <p className="font-display italic text-ivory-100/60 mt-5">{c.music}</p>
        </div>
      </div>
    </section>
  )
}
