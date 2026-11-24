import { useState } from 'react'
import { LazyMotion, MotionConfig } from 'framer-motion'
import { useTheme } from './hooks/useTheme.js'

// Layout: things that sit around or on top of the page
import CommandPalette from './components/layout/CommandPalette.jsx'
import Footer from './components/layout/Footer.jsx'
import Navbar from './components/layout/Navbar.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import Ambient from './components/layout/Ambient.jsx'
import IntroCover from './components/layout/IntroCover.jsx'

// Sections: the page itself, from top to bottom
import About from './components/sections/About.jsx'
import Contact from './components/sections/Contact.jsx'
import Hero from './components/sections/Hero.jsx'
import Journey from './components/sections/Journey.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import TechStrip from './components/sections/TechStrip.jsx'

const loadMotionFeatures = () => import('./lib/motionFeatures.js').then((mod) => mod.default)

function App() {
  const [menuOpen, setMenuOpen] = useState(false) // mobile nav menu
  const [paletteOpen, setPaletteOpen] = useState(false) // ⌘K command menu
  const [themeId, setThemeId] = useTheme() // page background

  return (
    // LazyMotion: the animation engine downloads in its own file after the page shows, so first load is lighter.
    // reducedMotion="user" turns animations off for people who asked their device for less motion
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <IntroCover />
        <Ambient />
        <ScrollProgress />

        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          themeId={themeId}
          setThemeId={setThemeId}
          onOpenPalette={() => setPaletteOpen(true)}
        />

        <main className="container" id="main">
          <Hero />
          <TechStrip />
          <About />
          <Projects />
          <Journey />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} setThemeId={setThemeId} />
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
