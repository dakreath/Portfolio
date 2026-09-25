import { motion, useScroll, useSpring } from 'framer-motion'

// The thin colored bar at the very top that fills up as you scroll down.
function ScrollProgress() {
  const { scrollYProgress } = useScroll() // 0 at the top of the page, 1 at the bottom
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return <motion.div className="scroll-progress" style={{ scaleX: width }} aria-hidden="true" />
}

export default ScrollProgress
