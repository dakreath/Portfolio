import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { sections, site, socials, themes } from '../../data'
import { useClipboard } from '../../hooks/useClipboard.js'
import { asset } from '../../lib/asset.js'
import { scrollToId } from '../../lib/scroll.js'
import Icon from '../ui/Icon.jsx'

// The ⌘K (Mac) / Ctrl+K (Windows) menu for jumping around the site.
// Every command is built from data/site.js, so new sections or links show up here on their own.

function downloadResume() {
  const link = document.createElement('a')
  link.href = asset(site.resume.href)
  link.download = site.resume.filename
  link.click()
}

// Each command: { group, label, icon or swatch, run }
function buildCommands({ copy, setThemeId }) {
  const navigate = [
    { group: 'Navigate', label: 'Home', icon: 'house', run: () => scrollToId('top') },
    ...sections.map((section) => ({
      group: 'Navigate',
      label: section.label,
      icon: section.icon,
      run: () => scrollToId(section.id),
    })),
  ]

  const actions = [
    { group: 'Actions', label: 'Copy email address', icon: 'clipboard', run: () => copy(site.email) },
    {
      group: 'Actions',
      label: 'Send an email',
      icon: 'send',
      run: () => (window.location.href = `mailto:${site.email}`),
    },
    { group: 'Actions', label: 'Download resumé', icon: 'download', run: downloadResume },
  ]

  const links = socials.map((social) => ({
    group: 'Links',
    label: social.label,
    icon: social.icon,
    run: () => window.open(social.href, '_blank', 'noopener'),
  }))

  const backgrounds = themes.map((theme) => ({
    group: 'Theme',
    label: `Background: ${theme.label}`,
    swatch: theme.preview,
    run: () => setThemeId(theme.id),
  }))

  return [...navigate, ...actions, ...links, ...backgrounds]
}

function CommandPalette({ open, setOpen, setThemeId }) {
  const [query, setQuery] = useState('') // what the visitor typed
  const [selected, setSelected] = useState(0) // index of the highlighted command
  const inputRef = useRef(null)
  const { copied, copy } = useClipboard(1800)

  const commands = useMemo(() => buildCommands({ copy, setThemeId }), [copy, setThemeId])
  const search = query.trim().toLowerCase()
  const results = commands.filter((command) => command.label.toLowerCase().includes(search))

  // Open and close with ⌘K / Ctrl+K from anywhere on the page
  useEffect(() => {
    function handleShortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((isOpen) => !isOpen)
      }
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [setOpen])

  // Each time the menu opens: clear the search and put the cursor in the box
  useEffect(() => {
    if (!open) return
    setQuery('')
    setSelected(0)
    const timer = setTimeout(() => inputRef.current?.focus(), 20)
    return () => clearTimeout(timer)
  }, [open])

  // Typing a new search highlights the first result again
  useEffect(() => setSelected(0), [query])

  function runCommand(command) {
    setOpen(false)
    setTimeout(command.run, 60) // let the menu close first, then scroll or open the link
  }

  // Arrow keys move the highlight, Enter runs it, Escape closes
  function handleKeyDown(event) {
    const count = Math.max(results.length, 1)

    if (event.key === 'Escape') {
      setOpen(false)
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelected((i) => (i + 1) % count) // wraps from the last back to the first
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelected((i) => (i - 1 + count) % count) // wraps from the first to the last
    } else if (event.key === 'Enter' && results[selected]) {
      runCommand(results[selected])
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          // Dark overlay behind the menu. Clicking it closes the menu.
          <motion.div
            className="cmdk-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              className="cmdk"
              role="dialog"
              aria-modal="true"
              aria-label="Command menu"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              onMouseDown={(event) => event.stopPropagation()} // clicks inside don't close it
            >
              <div className="cmdk-input">
                <Icon name="search" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search…"
                  aria-label="Search commands"
                />
                <kbd>esc</kbd>
              </div>

              <ul className="cmdk-list" role="listbox">
                {results.length === 0 && <li className="cmdk-empty">No results for “{query}”</li>}

                {results.map((command, i) => {
                  const isSelected = i === selected
                  const startsNewGroup = command.group !== results[i - 1]?.group
                  return (
                    <li key={command.label} role="none">
                      {startsNewGroup && <div className="cmdk-group">{command.group}</div>}
                      <button
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={`cmdk-item ${isSelected ? 'selected' : ''}`}
                        onMouseEnter={() => setSelected(i)}
                        onClick={() => runCommand(command)}
                      >
                        {command.swatch ? (
                          <span className="cmdk-swatch" style={{ background: command.swatch }} />
                        ) : (
                          <Icon name={command.icon} />
                        )}
                        {command.label}
                        {isSelected && <Icon name="arrow-return-left" className="cmdk-enter" />}
                      </button>
                    </li>
                  )
                })}
              </ul>

              <div className="cmdk-foot">
                <span>
                  <kbd>↑</kbd>
                  <kbd>↓</kbd> navigate
                </span>
                <span>
                  <kbd>↵</kbd> select
                </span>
                <span>
                  <kbd>⌘</kbd>
                  <kbd>K</kbd> toggle
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small pop-up after "Copy email address" */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="toast"
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Icon name="check2-circle" /> Email copied
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommandPalette
