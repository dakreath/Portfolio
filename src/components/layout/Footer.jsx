import { site } from '../../data'
import { useModKey } from '../../hooks/useModKey.js'
import Icon from '../ui/Icon.jsx'

function Footer() {
  const year = new Date().getFullYear()
  const modKey = useModKey() // "⌘" on Mac, "Ctrl" elsewhere

  return (
    <footer className="site-footer">
      <span>
        Built by {site.name} © {year}
      </span>
      <span className="footer-hint">
        press <kbd>{modKey}</kbd>
        <kbd>K</kbd> to jump anywhere
      </span>
      <button
        type="button"
        className="footer-top"
        onClick={() => window.dispatchEvent(new Event('portfolio:intro'))}
      >
        back to intro
      </button>
      <a href="#top" className="footer-top">
        back to top <Icon name="arrow-up" />
      </a>
    </footer>
  )
}

export default Footer
