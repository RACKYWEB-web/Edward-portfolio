import { useState } from 'react'
import { chapters } from '../data/biography.js'
import PortraitBadge from './PortraitBadge.jsx'

export default function ChapterNav({ current, onSelect, onNext, onPrev }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = ((current + 1) / chapters.length) * 100

  return (
    <>
      {/* LEFT WALL — Previous (desktop + mobile) */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-ivory-100/15 bg-charcoal-900/70 backdrop-blur-md flex items-center justify-center text-ivory-100/75 hover:border-bronze-400 hover:text-bronze-300 active:border-bronze-400 transition-colors disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Previous chapter"
      >
        <span className="text-xl md:text-2xl">←</span>
      </button>

      {/* RIGHT WALL — Next (desktop + mobile) */}
      <button
        onClick={onNext}
        disabled={current === chapters.length - 1}
        className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-bronze-400/40 bg-bronze-500/10 backdrop-blur-md flex items-center justify-center text-bronze-300 hover:bg-bronze-500/20 active:bg-bronze-500/20 transition-colors disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Next chapter"
      >
        <span className="text-xl md:text-2xl">→</span>
      </button>

      {/* Desktop vertical chapter rail — shifted further from the edge so
          it doesn't crowd the Next arrow */}
      <nav
        aria-label="Chapters"
        className="hidden md:flex fixed top-1/2 right-16 -translate-y-1/2 z-30 flex-col items-end"
      >
        {chapters.map((c, i) => (
          <button
            key={c.id}
            onClick={() => onSelect(i)}
            aria-current={i === current ? 'true' : undefined}
            className="group relative flex items-center gap-3 py-2.5 focus-visible:outline-none"
          >
            <span
              className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${
                i === current
                  ? 'text-bronze-300 opacity-100 translate-x-0'
                  : 'text-ivory-100/40 opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
              }`}
            >
              {c.label}
            </span>
            <span
              className={`relative block rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-2.5 h-2.5 bg-bronze-400 shadow-[0_0_12px_rgba(203,162,104,0.7)]'
                  : 'w-1.5 h-1.5 bg-ivory-100/25 group-hover:bg-bronze-300/70'
              }`}
            >
              {i === current && <span className="absolute inset-0 rounded-full bg-bronze-400/60 animate-ping-slow" aria-hidden="true" />}
            </span>
          </button>
        ))}
        <div className="mt-4 w-px h-24 bg-ivory-100/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-bronze-400 transition-all duration-500"
            style={{ height: `${progress}%` }}
          />
        </div>
      </nav>

      {/* Desktop chapter counter, bottom-left (small, unobtrusive) */}
      <div className="hidden md:block fixed bottom-8 left-8 z-40 font-mono text-[11px] tracking-[0.2em] text-ivory-100/35 uppercase">
        {chapters[current].number} <span className="text-ivory-100/15">/</span> {chapters.length.toString().padStart(2, '0')}
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-3 bg-charcoal-900/70 backdrop-blur-md border-b border-ivory-100/10">
        <div className="flex items-center gap-3">
          <PortraitBadge size="small" />
          <div className="font-mono text-[10px] tracking-[0.2em] text-bronze-300 uppercase">
            {chapters[current].number} — {chapters[current].label}
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open chapter menu"
          className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
        >
          <span className="block w-5 h-px bg-ivory-100" />
          <span className="block w-5 h-px bg-ivory-100" />
        </button>
      </div>

      {/* Mobile chapter counter, bottom-left */}
      <div
        className="md:hidden fixed left-4 z-40 font-mono text-[10px] tracking-[0.2em] text-ivory-100/35 uppercase"
        style={{ bottom: 'calc(1.1rem + env(safe-area-inset-bottom))' }}
      >
        {chapters[current].number} <span className="text-ivory-100/15">/</span> {chapters.length.toString().padStart(2, '0')}
      </div>

      {/* Mobile full-screen chapter menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-xl flex flex-col">
          <div className="flex justify-end px-5 pt-4">
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="w-9 h-9 text-2xl text-ivory-100/70">
              ×
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto">
            {chapters.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  onSelect(i)
                  setMobileOpen(false)
                }}
                className="reveal-up flex items-baseline gap-4 py-3 text-left border-b border-ivory-100/5"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <span className="chapter-number">{c.number}</span>
                <span className={`font-display text-2xl ${i === current ? 'text-bronze-300 italic' : 'text-ivory-100/85'}`}>
                  {c.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}