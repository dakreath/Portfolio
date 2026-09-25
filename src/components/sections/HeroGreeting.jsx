import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { hero } from '../../data'
import { useVisitorName } from '../../hooks/useVisitorName.js'
import { openFunFacts, scrollToId } from '../../lib/scroll.js'
import Icon from '../ui/Icon.jsx'

// Chat bubbles next to the hero photo that "type" themselves out, like a text conversation.
// The text lives in data/hero.js.

// Timing in milliseconds
const FIRST_DELAY = 900 // wait before the first "typing..." dots
const TYPING_TIME = 750 // how long the dots show before each bubble
const PAUSE_AFTER = 450 // gap after a bubble before the next dots

const EASE = [0.22, 1, 0.36, 1]

// Shared animation for every bubble
const bubbleAnimation = {
  layout: 'position', // older bubbles glide up smoothly when a new one appears
  initial: { opacity: 0, y: 12, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.45, ease: EASE },
}

// Clicking a bubble goes to its section, or opens the fun facts box
function goTo(target) {
  if (target === 'fun-facts') openFunFacts()
  else scrollToId(target)
}

function HeroGreeting() {
  const { hello, helloNamed, messages } = hero.greeting
  const visitorName = useVisitorName()
  const helloText = visitorName ? helloNamed.replace('{name}', visitorName) : hello

  const bubbleCount = messages.length + 1 // the "Hi" bubble + the messages
  const [shownCount, setShownCount] = useState(0) // how many bubbles are visible so far
  const [typing, setTyping] = useState(false) // show the "..." dots?
  const [open, setOpen] = useState(true) // false after the visitor closes it

  // Play the conversation once: dots, bubble, pause, dots, bubble, ...
  useEffect(() => {
    const wantsLessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (wantsLessMotion) {
      setShownCount(bubbleCount) // show everything at once
      return
    }

    const timers = []
    let time = FIRST_DELAY

    for (let i = 0; i < bubbleCount; i++) {
      timers.push(setTimeout(() => setTyping(true), time))
      time += TYPING_TIME

      timers.push(
        setTimeout(() => {
          setTyping(false)
          setShownCount(i + 1)
        }, time)
      )
      time += PAUSE_AFTER
    }

    return () => timers.forEach(clearTimeout)
  }, [bubbleCount])

  const visibleMessages = messages.slice(0, Math.max(shownCount - 1, 0))

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="greeting"
          aria-label="Quick links"
          exit={{ opacity: 0, y: 10, transition: { duration: 0.25 } }}
        >
          <AnimatePresence initial={false}>
            {/* "Hi 👋" bubble with the close button */}
            {shownCount >= 1 && (
              <motion.div key="hello" className="greeting-hello" {...bubbleAnimation}>
                {helloText}
                <button
                  type="button"
                  className="greeting-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <Icon name="x-lg" />
                </button>
              </motion.div>
            )}

            {/* The message bubbles, each one a link */}
            {visibleMessages.map((message) => (
              <motion.button
                key={message.text}
                type="button"
                className="greeting-msg"
                onClick={() => goTo(message.target)}
                {...bubbleAnimation}
              >
                {message.text}
                <Icon name="arrow-right" className="arrow" />
              </motion.button>
            ))}

            {/* The "..." typing dots */}
            {typing && (
              <motion.div
                key="typing"
                className="greeting-typing"
                aria-hidden="true"
                layout="position"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span />
                <span />
                <span />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default HeroGreeting
