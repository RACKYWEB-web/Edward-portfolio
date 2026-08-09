import { engineeringChapter } from '../data/biography.js'

function MoleculeMotif() {
  return (
    <svg
      className="absolute top-10 right-6 md:right-16 w-40 md:w-64 opacity-[0.18] pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle cx="60" cy="60" r="8" stroke="#CBA268" strokeWidth="1" />
      <circle cx="140" cy="50" r="6" stroke="#CBA268" strokeWidth="1" />
      <circle cx="100" cy="120" r="10" stroke="#CBA268" strokeWidth="1" />
      <circle cx="160" cy="140" r="5" stroke="#CBA268" strokeWidth="1" />
      <line x1="66" y1="64" x2="134" y2="52" stroke="#CBA268" strokeWidth="0.7" />
      <line x1="106" y1="128" x2="140" y2="52" stroke="#CBA268" strokeWidth="0.7" />
      <line x1="108" y1="126" x2="156" y2="138" stroke="#CBA268" strokeWidth="0.7" />
    </svg>
  )
}

export default function Engineering() {
  const c = engineeringChapter
  return (
    <section className="h-full w-full overflow-y-auto relative">
      <MoleculeMotif />
      <div className="min-h-full max-w-3xl mx-auto px-6 md:px-10 py-28 relative">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-5xl md:text-7xl text-ivory-50 mt-4 leading-[0.95]" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>
        <p className="reveal-up font-display italic text-xl text-ivory-100/75 mt-6 max-w-xl leading-relaxed" style={{ animationDelay: '140ms' }}>
          {c.intro}
        </p>

        <div className="mt-14 grid gap-12">
          <div className="reveal-up" style={{ animationDelay: '200ms' }}>
            <div className="chapter-number mb-3">{c.interestsHeading}</div>
            <p className="text-ivory-100/75 leading-relaxed text-lg max-w-xl">{c.interestsBody}</p>
          </div>

          <div className="reveal-up" style={{ animationDelay: '260ms' }}>
            <div className="chapter-number mb-4">{c.learningHeading}</div>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.learningItems.map((it) => (
                <div key={it.subject} className="border-l-2 border-bronze-400/40 pl-4">
                  <div className="font-display text-xl text-ivory-50">{it.subject}</div>
                  <p className="text-ivory-100/60 mt-1.5 leading-relaxed">{it.body}</p>
                </div>
              ))}
            </div>
            <p className="text-ivory-100/60 leading-relaxed mt-6 max-w-lg">{c.learningClosing}</p>
          </div>

          <div className="reveal-up" style={{ animationDelay: '320ms' }}>
            <div className="chapter-number mb-4">{c.mindsetHeading}</div>
            <div className="space-y-2.5">
              {c.mindsetItems.map((it, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-ivory-100/10">
                  <span className="font-mono text-[11px] text-bronze-400">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-ivory-100/80">{it}</span>
                </div>
              ))}
            </div>
            <p className="font-display italic text-lg text-bronze-300 mt-6 max-w-lg">{c.mindsetClosing}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
