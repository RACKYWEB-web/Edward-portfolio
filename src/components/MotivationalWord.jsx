import { useEffect, useRef, useState } from 'react'
import { motivationalWords } from '../data/biography.js'

// A small, quietly rotating line. Cycles on its own roughly once a minute,
// and jumps ahead immediately if the visitor hovers (desktop) or taps it
// (mobile). Purely atmospheric — doesn't affect navigation.
export default function MotivationalWord({ className = '' }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const advance = () => setIndex((i) => (i + 1) % motivationalWords.length)

  useEffect(() => {
    timerRef.current = setInterval(advance, 60000)
    return () => clearInterval(timerRef.current)
  }, [])

  const handleInteract = () => {
    advance()
    clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, 60000)
  }

  return (
    <button
      onMouseEnter={handleInteract}
      onClick={handleInteract}
      className={`group text-left cursor-default focus-visible:outline-none ${className}`}
      aria-live="polite"
      aria-label="A rotating line — hover or tap for the next one"
    >
      <span
        key={index}
        className="reveal-up block max-w-[80vw] md:max-w-xs font-display italic text-bronze-300/90 text-sm md:text-base leading-snug group-hover:text-bronze-200 transition-colors"
      >
        {motivationalWords[index]}
      </span>
    </button>
  )
}