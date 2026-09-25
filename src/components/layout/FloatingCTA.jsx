import { motion } from 'framer-motion'
import { site } from '../../data'
import Icon from '../ui/Icon.jsx'

// The round "Let's talk" email button in the bottom corner.
// It pops in one second after the page loads.
function FloatingCTA() {
  return (
    <motion.a
      className="floating-cta has-tip"
      href={`mailto:${site.email}`}
      aria-label="Let's talk"
      data-tip="Let's talk"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ y: -4, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon name="chat-quote-fill" />
    </motion.a>
  )
}

export default FloatingCTA
