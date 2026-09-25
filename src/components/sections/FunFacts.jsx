import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { funFacts } from '../../data'
import { OPEN_FUN_FACTS } from '../../lib/scroll.js'
import Icon from '../ui/Icon.jsx'

const itemCount = funFacts.groups.reduce((total, group) => total + group.items.length, 0)

// A small "zip file" in the About section. Click it to "unzip" the fun facts.
// The text lives in data/about.js.
function FunFacts() {
  const [open, setOpen] = useState(false)
  const boxRef = useRef(null)

  // The hero greeting can ask this box to open (see openFunFacts in lib/scroll.js).
  // When it does: scroll here, then unzip once it's on screen.
  useEffect(() => {
    let timer

    function handleOpenRequest() {
      const box = boxRef.current
      if (!box) return
      const boxTop = box.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: boxTop - 160, behavior: 'smooth' })
      timer = setTimeout(() => setOpen(true), 500)
    }

    window.addEventListener(OPEN_FUN_FACTS, handleOpenRequest)
    return () => {
      window.removeEventListener(OPEN_FUN_FACTS, handleOpenRequest)
      clearTimeout(timer)
    }
  }, [])

  // Items animate in one after another, across all groups
  let itemNumber = 0

  return (
    <div className={`funzip ${open ? 'open' : ''}`} ref={boxRef} id="fun-facts">
      <button
        type="button"
        className="funzip-file"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="funzip-content"
      >
        <Icon name={open ? 'file-earmark-zip-fill' : 'file-earmark-zip'} className="funzip-icon" />
        <span className="funzip-name">
          {funFacts.filename}
          <span className="funzip-meta">
            {open ? `unzipped · ${itemCount} items` : `${itemCount} items · click to unzip`}
          </span>
        </span>
        <Icon name="chevron-down" className="funzip-chevron" />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="funzip-content"
            className="funzip-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="funzip-inner">
              {funFacts.groups.map((group) => (
                <div key={group.title} className="funzip-group">
                  <span className="funzip-heading">{group.title}</span>
                  <ul>
                    {group.items.map((item) => {
                      const delay = 0.1 + itemNumber++ * 0.05
                      return (
                        <motion.li
                          key={item.text}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay }}
                        >
                          <span className="funzip-emoji" aria-hidden="true">
                            {item.emoji}
                          </span>
                          <span className="funzip-text">
                            <strong className="funzip-key">{item.key}</strong>
                            {item.text}
                          </span>
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FunFacts
