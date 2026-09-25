import { useEffect, useRef } from 'react'

// A soft light that follows the mouse (computers only, not phones).
// It also tells every element with the "spotlight" class where the mouse is,
// so those cards can glow under the cursor.
function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouchScreen = window.matchMedia('(hover: none)').matches
    if (isTouchScreen) return

    let frame = 0

    function handleMouseMove(event) {
      // requestAnimationFrame: update at most once per screen refresh, keeps it smooth
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const glow = glowRef.current
        if (glow) {
          glow.style.opacity = '1'
          // the glow is 600px wide, so move it by 300px to center it on the mouse
          glow.style.transform = `translate(${event.clientX - 300}px, ${event.clientY - 300}px)`
        }

        document.querySelectorAll('.spotlight').forEach((card) => {
          const box = card.getBoundingClientRect()
          card.style.setProperty('--mx', `${event.clientX - box.left}px`)
          card.style.setProperty('--my', `${event.clientY - box.top}px`)
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow
