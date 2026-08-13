import { useState } from 'react'
import { contactChapter, person } from '../data/biography.js'

function XIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const c = contactChapter

  const handleSubmit = (e) => {
    e.preventDefault()
    // Note: this form does not send anywhere yet — it's a front-end-only
    // placeholder. Wire it to a real email service (e.g. Formspree,
    // EmailJS, or a small backend) before relying on it to reach you.
    setSent(true)
  }

  return (
    <section className="h-full w-full overflow-y-auto">
      <div className="min-h-full max-w-xl mx-auto px-6 md:px-10 py-28 flex flex-col justify-center">
        <p className="chapter-number reveal-up">{c.eyebrow}</p>
        <h2 className="reveal-up font-display text-4xl md:text-6xl text-ivory-50 mt-4 leading-tight" style={{ animationDelay: '80ms' }}>
          {c.title}
        </h2>

        {sent ? (
          <p className="reveal-up mt-10 font-display italic text-xl text-bronze-300">Thank you — your message has been noted.</p>
        ) : (
          <form onSubmit={handleSubmit} className="reveal-up mt-10 space-y-5" style={{ animationDelay: '160ms' }}>
            <div>
              <label className="chapter-number block mb-2">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-ivory-100/20 py-2.5 text-ivory-100 placeholder-ivory-100/30 focus:border-bronze-400 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="chapter-number block mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-ivory-100/20 py-2.5 text-ivory-100 placeholder-ivory-100/30 focus:border-bronze-400 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="chapter-number block mb-2">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-ivory-100/20 py-2.5 text-ivory-100 placeholder-ivory-100/30 focus:border-bronze-400 outline-none transition-colors resize-none"
                placeholder="Say hello"
              />
            </div>
            <button
              type="submit"
              className="btn-shine font-mono text-xs tracking-[0.24em] uppercase text-bronze-300 hover:text-bronze-200 transition-colors mt-4 inline-flex items-center gap-2 border border-bronze-400/30 rounded-full px-5 py-2.5"
            >
              Send <span>→</span>
            </button>
          </form>
        )}

        <div className="hairline my-12" />

        <div className="flex flex-wrap gap-6 reveal-up" style={{ animationDelay: '260ms' }}>
          <a href={`https://wa.me/${person.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-wide text-ivory-100/60 hover:text-bronze-300 transition-colors">
            WhatsApp
          </a>
          <a href={`tel:${person.phone}`} className="font-mono text-xs tracking-wide text-ivory-100/60 hover:text-bronze-300 transition-colors">
            Call
          </a>
          <a href={`mailto:${person.email}`} className="font-mono text-xs tracking-wide text-ivory-100/60 hover:text-bronze-300 transition-colors">
            {person.email}
          </a>
         <a href={person.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-ivory-100/60 hover:text-bronze-300 transition-colors">
            <XIcon />
          </a>
          {person.linkedin && (
            <a href={person.linkedin} className="font-mono text-xs tracking-wide text-ivory-100/60 hover:text-bronze-300 transition-colors">
              LinkedIn
            </a>
          )}
          {person.github && (
            <a href={person.github} className="font-mono text-xs tracking-wide text-ivory-100/60 hover:text-bronze-300 transition-colors">
              GitHub
            </a>
          )}
        </div>

        <div className="reveal-up mt-16 pt-10 border-t border-ivory-100/10 text-center" style={{ animationDelay: '320ms' }}>
          <p className="font-display italic text-xl md:text-2xl text-bronze-300 leading-relaxed max-w-md mx-auto">
            &ldquo;{c.finalWord}&rdquo;
          </p>

          <div className="mt-10">
            <div className="font-display text-2xl text-ivory-50">{c.identity.name}</div>
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-ivory-100/45 mt-2 leading-relaxed">{c.identity.disciplines}</div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ivory-100/55 mt-3">{c.identity.university}</div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ivory-100/45 mt-0.5">{c.identity.departmentLine}</div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-bronze-400/70 mt-1">{c.identity.location}</div>
          </div>

          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ivory-100/35 mt-8">{c.closing}</p>
        </div>
      </div>
    </section>
  )
}