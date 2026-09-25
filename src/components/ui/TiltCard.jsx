import { motion, useSpring } from 'framer-motion'

// A card that tilts in 3D toward the cursor.
// It also sets --mx and --my (cursor position inside the card), which the
// CSS uses for the soft "spotlight" glow.
//
// max:      how many degrees it can tilt
// disabled: turn the tilt off
// Any other props (initial, animate, whileHover...) go straight to framer-motion.
function TiltCard({ children, className, max = 6, disabled = false, ...motionProps }) {
  const rotateX = useSpring(0, { stiffness: 220, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 220, damping: 20 })

  function handleMouseMove(event) {
    if (disabled) return

    const card = event.currentTarget
    const box = card.getBoundingClientRect()
    const x = event.clientX - box.left // cursor position inside the card
    const y = event.clientY - box.top

    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)

    // x / width goes from 0 (left edge) to 1 (right edge). Minus 0.5 makes the center 0.
    rotateY.set((x / box.width - 0.5) * max * 2)
    rotateX.set(-(y / box.height - 0.5) * max * 2)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
