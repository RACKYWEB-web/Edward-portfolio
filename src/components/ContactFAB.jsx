import { useState } from 'react'
import { person } from '../data/biography.js'

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8.6 8.7c.3 2.1 3 4.8 5.1 5.1.9.1 1.6-.5 1.9-1.3l-1.7-1-.7.6c-.9-.4-2-1.5-2.4-2.4l.6-.7-1-1.7c-.8.3-1.4 1.1-1.3 1.9"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5">
      <path
        d="M6 4c-1 0-2 1-2 2 0 7 7 14 14 14 1 0 2-1 2-2v-2.5c0-.5-.3-.9-.8-1l-3-.8c-.4-.1-.9 0-1.2.3l-1 1c-1.7-.9-3-2.2-3.9-3.9l1-1c.3-.3.4-.8.3-1.2l-.8-3c-.1-.5-.5-.8-1-.8H6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

// A floating contact cluster present on every chapter. Tapping the main
// bubble reveals WhatsApp, Call, Copy Email, and X — collapses again on a
// second tap or after selecting an action.
export default function ContactFAB({ className = '' }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
    } catch {
      // Clipboard API unavailable — fall back silently, the email is still
      // visible elsewhere on the Contact page for manual copying.
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const items = [
    { key: 'whatsapp', label: 'WhatsApp', icon: <ChatIcon />, href: `https://wa.me/${person.whatsapp}`, external: true },
    { key: 'call', label: 'Call', icon: <PhoneIcon />, href: `tel:${person.phone}`, external: false },
    { key: 'email', label: copied ? 'Copied!' : 'Copy Email', icon: <MailIcon />, onClick: copyEmail },
    { key: 'x', label: 'X', icon: <XIcon />, href: person.twitter, external: true },
  ]

return (
  <div className={`relative flex flex-col items-center gap-3 ${className}`}>
    <div
      className={`flex flex-col items-center gap-2.5 transition-all duration-300 ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((it) =>
        it.href ? (
          <a
            key={it.key}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noopener noreferrer" : undefined}
            className="group w-11 h-11 rounded-full border border-ivory-100/15 bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center text-ivory-100/75 hover:border-bronze-400 hover:text-bronze-300 transition-colors"
            aria-label={it.label}
            title={it.label}
          >
            {it.icon}
          </a>
        ) : (
          <button
            key={it.key}
            onClick={it.onClick}
            className="group w-11 h-11 rounded-full border border-ivory-100/15 bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center text-ivory-100/75 hover:border-bronze-400 hover:text-bronze-300 transition-colors"
            aria-label={it.label}
            title={it.label}
          >
            {it.icon}
          </button>
        )
      )}
    </div>

    <button
      onClick={() => setOpen((v) => !v)}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgba(15,13,10,0.5)] ${
        open
          ? "bg-bronze-500 text-charcoal-950 rotate-45"
          : "bg-bronze-500/90 text-charcoal-950 hover:bg-bronze-400"
      }`}
      aria-expanded={open}
      aria-label={open ? "Close contact menu" : "Open contact menu"}
    >
      {open ? <XIcon /> : <ChatIcon />}
    </button>
  </div>
)
}