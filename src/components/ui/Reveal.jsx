import { motion } from 'framer-motion'

// Fades and slides its content up the first time it scrolls into view.
// Usage: <Reveal delay={0.1}>...</Reveal>
function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // play once, when 20% of it is visible
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
