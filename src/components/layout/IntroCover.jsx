import { useEffect, useState } from 'react'
import { site } from '../../data'
import Icon from '../ui/Icon.jsx'

// The green intro screen, shown once per visit (reloading skips it).
// Clicking the open button (or pressing Enter) fades it out and shows the portfolio.
//
// index.html adds the class "intro" to <html> before the page appears. While that class is
// there, the cover is shown (see "Intro cover" in index.css). Removing it shows the portfolio.

function IntroCover() {
  const [leaving, setLeaving] = useState(false)

  // Fade out, then show the portfolio. The 400ms matches the fade in index.css.
  function openPortfolio() {
    setLeaving(true)
    try {
      sessionStorage.setItem('introSeen', '1') // remembered until the tab is closed
    } catch {
      // private mode can block storage; the intro just shows again next time
    }
    setTimeout(() => {
      document.documentElement.classList.remove('intro')
      window.scrollTo(0, 0)
      setLeaving(false)
    }, 400)
  }

  // Enter opens it too, but only while the cover is showing
  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Enter' && document.documentElement.classList.contains('intro')) {
        event.preventDefault()
        openPortfolio()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // The footer's "back to intro" link sends this event
  useEffect(() => {
    function showIntro() {
      document.documentElement.classList.add('intro')
    }
    window.addEventListener('portfolio:intro', showIntro)
    return () => window.removeEventListener('portfolio:intro', showIntro)
  }, [])

  return (
    <div className={`intro-cover ${leaving ? 'is-leaving' : ''}`} role="dialog" aria-modal="true" aria-label="Welcome">
      <p className="intro-title">
        <span className="intro-bracket">&lt;/</span>Powered by Green<span className="intro-bracket">&gt;</span>
      </p>
      <p className="intro-name">{site.name} · Software Engineering · McGill University</p>

      <button type="button" className="intro-open" onClick={openPortfolio} aria-label="Open my portfolio">
        <Icon name="arrow-right" />
      </button>
      <p className="intro-hint">click to open my portfolio</p>
    </div>
  )
}

export default IntroCover
