import { useEffect, useRef } from 'react'
import { sections, site, themes } from '../../data'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import { asset } from '../../lib/asset.js'
import Flag from '../ui/Flag.jsx'
import Icon from '../ui/Icon.jsx'

const sectionIds = sections.map((section) => section.id)

function Navbar({ menuOpen, setMenuOpen, themeId, setThemeId, onOpenPalette }) {
  const activeSection = useActiveSection(sectionIds)
  const navRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  // While the phone menu is open: close it on Escape, or when tapping outside the navbar
  useEffect(() => {
    if (!menuOpen) return

    function handleKey(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, setMenuOpen])

  return (
    <nav className="site-nav" ref={navRef}>
      <div className="nav-inner">
        {/* Logo: </Dak Ngueny> */}
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="bracket">{'</'}</span>
          {site.name}
          <span className="bracket">{'>'}</span>
        </a>

        {/* Section links (on phones they drop down when the menu is open) */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={closeMenu}
                  className={isActive ? 'active' : ''}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {section.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="nav-right">
          <button
            type="button"
            className="cmdk-trigger"
            onClick={onOpenPalette}
            aria-label="Open command menu"
          >
            <Icon name="command" />
            <span>K</span>
          </button>

          <a
            className="btn btn-primary btn-sm nav-resume"
            href={asset(site.resume.href)}
            download={site.resume.filename}
          >
            <Icon name="download" /> My Resumé
          </a>

          {/* Background color picker */}
          <div className="theme-swatches" role="group" aria-label="Page background">
            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className={`swatch ${themeId === theme.id ? 'active' : ''}`}
                style={{ background: theme.preview }}
                aria-label={`${theme.label} background`}
                title={`${theme.label} background`}
                aria-pressed={themeId === theme.id}
                onClick={() => setThemeId(theme.id)}
              />
            ))}
          </div>

          {/* Hamburger button, only visible on phones */}
          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle menu"
            aria-controls="nav-links"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'x-lg' : 'list'} />
          </button>
        </div>
      </div>

      {/* Flags just under the header line, centered */}
      <ul className={`nav-flags ${menuOpen ? 'hidden' : ''}`} aria-label="Countries">
        {site.flags.map((flag) => (
          <li key={flag.code} className="has-tip" data-tip={flag.label}>
            <Flag code={flag.code} title={flag.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
