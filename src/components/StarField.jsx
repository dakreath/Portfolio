import { useMemo } from 'react'
import { motion } from 'framer-motion'

// Generates a fixed set of "stars" once (not on every re-render) —
// each one just a small dot with a random position, size, and its own
// twinkle timing so they don't all pulse in sync.
function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100, // vh %
    left: Math.random() * 100, // vw %
    size: Math.random() * 2.5 + 2, // 2–4.5px
    duration: Math.random() * 3 + 2, // 2–5s per twinkle cycle
    delay: Math.random() * 5, // stagger the start so they're out of phase
  }))
}

function StarField({ count = 80 }) {
  // useMemo means the random values are only calculated once when the
  // component mounts, not on every re-render (e.g. every time the
  // background swatch changes).
  const stars = useMemo(() => generateStars(count), [count])

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default StarField
