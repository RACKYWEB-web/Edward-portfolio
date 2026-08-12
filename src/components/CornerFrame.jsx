// A quiet, museum-placard style corner frame — four thin gold brackets at
// the very edges of the viewport. Purely decorative, present on every
// chapter, reinforcing the "gallery/editorial" feel of the site.
export default function CornerFrame() {
  const bracket = 'absolute w-6 h-6 md:w-9 md:h-9 border-bronze-400/25'
  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      <span className={`${bracket} top-3 left-3 md:top-5 md:left-5 border-t border-l`} />
      <span className={`${bracket} top-3 right-3 md:top-5 md:right-5 border-t border-r`} />
      <span className={`${bracket} bottom-3 left-3 md:bottom-5 md:left-5 border-b border-l`} />
      <span className={`${bracket} bottom-3 right-3 md:bottom-5 md:right-5 border-b border-r`} />
    </div>
  )
}