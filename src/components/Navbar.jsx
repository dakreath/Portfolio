import { swatches } from '../App.jsx'

// This component receives its state as props instead of managing its own,
// because App.jsx needs to know the background color too. This pattern
// ("lift state up to the closest shared parent") is one of the first
// things worth getting comfortable with in React.

function Navbar({ menuOpen, setMenuOpen, activeSwatch, setActiveSwatch }) {
  //arrow fn: closeMenu defaults to false.
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <div className="inner">
        <div className="brand">
          <span className="bracket">{'</'}</span>
          Dak Ngueny
          <span className="bracket">{'>'}</span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a href="about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className = "nav-right">
          <a className = "nav-cta" href="/./Resume/Resume.pdf">
            My Resumé
          </a>
          <div className = "theme-swatches" role="group" aria-label = "Change background gradient">
            {swatches.map((swatch) => (
              <button
                key={swatch.id}
                className={`swatch ${activeSwatch === swatch.id ? 'active' : ''}`}
                style={{ background: swatch.preview }}
                aria-label={swatch.label}
                onClick={() => setActiveSwatch(swatch.id)}
              />
            ))}
          </div>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
