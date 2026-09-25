import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { useTheme } from './hooks/useTheme.js'

// Layout: things that sit around or on top of the page
import CommandPalette from './components/layout/CommandPalette.jsx'
import CursorGlow from './components/layout/CursorGlow.jsx'
import FloatingCTA from './components/layout/FloatingCTA.jsx'
import Footer from './components/layout/Footer.jsx'
import Navbar from './components/layout/Navbar.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import WaterCursor from './components/layout/WaterCursor.jsx'

// Sections: the page itself, from top to bottom
import About from './components/sections/About.jsx'
import Contact from './components/sections/Contact.jsx'
import Hero from './components/sections/Hero.jsx'
import Journey from './components/sections/Journey.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import TechStrip from './components/sections/TechStrip.jsx'

function App() {
  const [menuOpen, setMenuOpen] = useState(false) // mobile nav menu
  const [paletteOpen, setPaletteOpen] = useState(false) // ⌘K command menu
  const [themeId, setThemeId] = useTheme() // page background

  return (
    // reducedMotion="user" turns animations off for people who asked their device for less motion
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />
      <CursorGlow />
      <WaterCursor />

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
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} setThemeId={setThemeId} />
    </MotionConfig>
  )
}

export default App
