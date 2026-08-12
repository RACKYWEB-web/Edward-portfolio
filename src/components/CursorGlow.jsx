import { useEffect, useRef } from 'react'

// A soft warm glow that follows the cursor on desktop, eased rather than
// snapped to the exact pointer position, for a subtle premium feel.
// Automatically inert on touch devices and respects reduced-motion.
export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    if (prefersReduced || isTouch) return undefined

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08
      pos.current.y += (target.current.y - pos.current.y) * 0.08
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 220}px, ${pos.current.y - 220}px, 0)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="hidden md:block fixed top-0 left-0 w-[440px] h-[440px] rounded-full pointer-events-none z-10"
      style={{
        background: 'radial-gradient(circle, rgba(203,162,104,0.10) 0%, rgba(203,162,104,0.04) 40%, transparent 72%)',
      }}
      aria-hidden="true"
    />
  )
}