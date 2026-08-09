import { person } from '../data/biography.js'

// A persistent portrait badge that follows the visitor across every chapter.
// The decorative ring rotates slowly — the photo itself stays still and
// readable. Falls back to an initials monogram until a real photo is added
// (set person.photo in biography.js to a path like '/edward.jpg').
export default function PortraitBadge({ size = 'default' }) {
  const dimension = size === 'small' ? 'w-9 h-9' : 'w-16 h-16 md:w-20 md:h-20'
  const ringSize = size === 'small' ? '' : ''

  return (
    <div className={`relative ${dimension} shrink-0`}>
      <svg
        className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="47" stroke="#CBA268" strokeWidth="1" strokeDasharray="3 6" opacity="0.7" />
      </svg>
      <div className="absolute inset-[6%] rounded-full overflow-hidden border border-bronze-400/40 bg-charcoal-800 flex items-center justify-center">
        {person.photo ? (
          <img src={person.photo} alt={person.fullName} className="w-full h-full object-cover" />
        ) : (
          <span className={`font-display italic text-bronze-300 ${size === 'small' ? 'text-xs' : 'text-lg md:text-xl'}`}>
            {person.initials}
          </span>
        )}
      </div>
    </div>
  )
}
