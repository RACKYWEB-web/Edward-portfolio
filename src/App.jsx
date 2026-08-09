import { useCallback, useEffect, useRef, useState } from 'react'
import { chapters } from './data/biography.js'
import ChapterNav from './components/ChapterNav.jsx'
import PortraitBadge from './components/PortraitBadge.jsx'
import MotivationalWord from './components/MotivationalWord.jsx'
import Cover from './chapters/Cover.jsx'
import Person from './chapters/Person.jsx'
import Origin from './chapters/Origin.jsx'
import Education from './chapters/Education.jsx'
import Engineering from './chapters/Engineering.jsx'
import Journey from './chapters/Journey.jsx'
import Skills from './chapters/Skills.jsx'
import Projects from './chapters/Projects.jsx'
import Vision from './chapters/Vision.jsx'
import Mindset from './chapters/Mindset.jsx'
import NextChapter from './chapters/NextChapter.jsx'
import Contact from './chapters/Contact.jsx'
import ThankYou from './chapters/ThankYou.jsx'

const chapterComponents = {
  cover: Cover,
  person: Person,
  origin: Origin,
  education: Education,
  engineering: Engineering,
  journey: Journey,
  skills: Skills,
  projects: Projects,
  vision: Vision,
  mindset: Mindset,
  nextchapter: NextChapter,
  contact: Contact,
  thanks: ThankYou,
}
export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [phase, setPhase] = useState('active') // 'entering' | 'active'
  const isAnimatingRef = useRef(false)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const goTo = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(chapters.length - 1, next))
      if (clamped === index || isAnimatingRef.current) return
      isAnimatingRef.current = true
      setDirection(clamped > index ? 'next' : 'prev')
      setPhase('entering')
      setIndex(clamped)
    },
    [index]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // The new chapter first mounts rotated off-axis ("entering"); on the next
  // frame we flip it to "active" so the CSS transition actually animates in.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setPhase('active'))
    const timeout = setTimeout(() => {
      isAnimatingRef.current = false
    }, 750)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
    }
  }, [index])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      dx < 0 ? next() : prev()
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  const chapter = chapters[index]
  const ChapterComponent = chapterComponents[chapter.id]
  const enterClass = direction === 'next' ? 'page-leaf-enter-next' : 'page-leaf-enter-prev'

  return (
    <div
      className="h-full w-full relative bg-charcoal-900 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="grain" aria-hidden="true" />
      <div className="hidden md:block fixed top-8 left-8 z-40">
        <PortraitBadge />
      </div>
      <ChapterNav current={index} onSelect={goTo} onNext={next} onPrev={prev} />
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <MotivationalWord />
      </div>
      <div className="md:hidden fixed left-1/2 -translate-x-1/2 z-40" style={{ bottom: 'calc(4.75rem + env(safe-area-inset-bottom))' }}>
        <MotivationalWord className="text-center" />
      </div>
      <main className="page-stage h-full w-full">
        <div
          key={chapter.id}
          className={`page-leaf h-full w-full ${phase === 'entering' ? enterClass : 'page-leaf-active'}`}
        >
         <ChapterComponent onNext={next} onPrev={prev} onSelectChapter={goTo} isFirst={index === 0} isLast={index === chapters.length - 1} />
        </div>
      </main>
    </div>
  )
}