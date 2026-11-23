import { useEffect, useRef, useState } from 'react'
import { m, MotionConfig } from 'framer-motion'

// The three looks the content can have
const looks = {
  below: { opacity: 0, y: 28, scale: 0.97, filter: 'blur(6px)' }, // waiting under the screen
  shown: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }, // on screen
  above: { opacity: 0, y: -28, scale: 0.97, filter: 'blur(6px)' }, // scrolled off the top
}

// Pops its content in when it scrolls onto the screen and out when it leaves, in both directions:
//   scrolling down: it rises in from below, and floats away upward at the top
//   scrolling up:   it drops in from above, and sinks away downward at the bottom
// Usage: <Reveal delay={0.1}>...</Reveal>
function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null)
  const [place, setPlace] = useState('below') // 'below', 'shown' or 'above'

  useEffect(() => {
    // The browser tells us when the element enters or leaves the screen.
    // The margin trims 8% off the top and bottom, so text pops in a little after it appears
    // and pops out a little before it's gone.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPlace('shown')
        else if (entry.boundingClientRect.top < 0) setPlace('above') // it left through the top
        else setPlace('below') // it left through the bottom
      },
      { rootMargin: '-8% 0px -8% 0px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    // "never": play this even with the system's Reduce Motion setting on (the movement is small)
    <MotionConfig reducedMotion="never">
      <m.div
        ref={ref}
        className={className}
        initial={looks.below}
        animate={looks[place]}
        transition={{
          duration: 0.6,
          delay: place === 'shown' ? delay : 0, // only wait when popping in
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </m.div>
    </MotionConfig>
  )
}

export default Reveal
