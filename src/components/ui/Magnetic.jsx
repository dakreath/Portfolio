import { motion, useSpring } from 'framer-motion'

// Wrap a button in this and it gently follows the cursor when you hover it.
// strength: how far it moves (0.3 = 30% of the distance to the cursor)
function Magnetic({ children, strength = 0.3 }) {
  // Springs make the movement smooth instead of jumpy
  const x = useSpring(0, { stiffness: 250, damping: 15 })
  const y = useSpring(0, { stiffness: 250, damping: 15 })

  function handleMouseMove(event) {
    const box = event.currentTarget.getBoundingClientRect()
    const centerX = box.left + box.width / 2
    const centerY = box.top + box.height / 2
    x.set((event.clientX - centerX) * strength)
    y.set((event.clientY - centerY) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      className="magnetic"
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.span>
  )
}

export default Magnetic
