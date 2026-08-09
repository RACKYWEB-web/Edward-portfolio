import { mindsetChapter } from '../data/biography.js'

export default function Mindset() {
  const c = mindsetChapter
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
        <p className="reveal-up text-ivory-100/70 leading-relaxed mt-6 max-w-lg text-lg" style={{ animationDelay: '200ms' }}>
          {c.intro}
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-10">
          <div className="reveal-up" style={{ animationDelay: '260ms' }}>
            <div className="chapter-number mb-4">{c.weaknessesHeading}</div>
            <ul className="space-y-3">
              {c.weaknesses.map((w, i) => (
                <li key={i} className="text-ivory-100/65 leading-relaxed pl-4 border-l border-ivory-100/15">
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-up" style={{ animationDelay: '320ms' }}>
            <div className="chapter-number mb-4">{c.strengthsHeading}</div>
            <p className="font-display italic text-bronze-300 mb-3">{c.strengthsIntro}</p>
            <ul className="space-y-3">
              {c.strengths.map((s, i) => (
                <li key={i} className="text-ivory-100/75 leading-relaxed pl-4 border-l border-bronze-400/40">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="reveal-up font-display italic text-xl md:text-2xl text-ivory-100/80 mt-16 text-center max-w-lg mx-auto" style={{ animationDelay: '400ms' }}>
          {c.awareness}
        </p>

        <div className="reveal-up mt-16 text-center" style={{ animationDelay: '460ms' }}>
          <p className="text-ivory-100/60 mb-5">{c.reminder}</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {c.pillars.map((p, i) => (
              <span key={i} className="font-mono text-xs tracking-wide px-3.5 py-2 rounded-full border border-bronze-400/30 text-bronze-300">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
