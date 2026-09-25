import { site } from '../../data'
import Icon from '../ui/Icon.jsx'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <span>
        Built by {site.name} © {year}
      </span>
      <span className="footer-hint">
        press <kbd>⌘</kbd>
        <kbd>K</kbd> to jump anywhere
      </span>
      <a href="#top" className="footer-top">
        back to top <Icon name="arrow-up" />
      </a>
    </footer>
  )
}

export default Footer
