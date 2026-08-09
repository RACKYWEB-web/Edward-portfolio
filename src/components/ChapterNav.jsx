import { useState } from 'react'
import { chapters } from '../data/biography.js'
import PortraitBadge from './PortraitBadge.jsx'

export default function ChapterNav({ current, onSelect, onNext, onPrev }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = ((current + 1) / chapters.length) * 100

  return (
    <>
      {/* Desktop vertical chapter rail */}
      <nav
        aria-label="Chapters"
        className="hidden md:flex fixed top-1/2 right-8 -translate-y-1/2 z-40 flex-col items-end"
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
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-2.5 h-2.5 bg-bronze-400 shadow-[0_0_12px_rgba(203,162,104,0.7)]'
                  : 'w-1.5 h-1.5 bg-ivory-100/25 group-hover:bg-bronze-300/70'
              }`}
            />
          </button>
        ))}
        <div className="mt-4 w-px h-24 bg-ivory-100/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-bronze-400 transition-all duration-500"
            style={{ height: `${progress}%` }}
          />
        </div>
      </nav>

      {/* Desktop prev/next + chapter readout */}
      <div className="hidden md:flex fixed bottom-8 left-8 z-40 items-center gap-4">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="w-11 h-11 rounded-full border border-ivory-100/15 flex items-center justify-center text-ivory-100/70 hover:border-bronze-400 hover:text-bronze-300 transition-colors disabled:opacity-20 disabled:pointer-events-none"
          aria-label="Previous chapter"
        >
          ←
        </button>
        <div className="font-mono text-[11px] tracking-[0.2em] text-ivory-100/40 uppercase">
          {chapters[current].number} <span className="text-ivory-100/20">/</span> {chapters.length.toString().padStart(2, '0')}
        </div>
        <button
          onClick={onNext}
          disabled={current === chapters.length - 1}
          className="w-11 h-11 rounded-full border border-ivory-100/15 flex items-center justify-center text-ivory-100/70 hover:border-bronze-400 hover:text-bronze-300 transition-colors disabled:opacity-20 disabled:pointer-events-none"
          aria-label="Next chapter"
        >
          →
        </button>
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
