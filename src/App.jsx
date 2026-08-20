import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingCTA from './components/FloatingCTA.jsx'
import StarField from './components/StarField.jsx'


export const swatches = [
  { id: 'black', 
    label: 'Default black background',
    preview: '#000000', 
    bg: '#000000' },
  {
    id: 'grey',
    label: 'Grey background',
    preview: 'linear-gradient(135deg,#09090B,#27272A,#3F3F46)',
    bg: 'linear-gradient(160deg,#09090B,#18181B,#27272A)',
  },
  {
    id: 'aura',
    label: 'Aurora gradient',
    preview: 'linear-gradient(135deg,#020617,#1E1B4B,#2E1065)',
    bg: 'linear-gradient(160deg,#020617,#0F0A2E,#1E1B4B)',
  },
]

function App() {
  // Whether the mobile nav dropdown is open
  // menuOpen equals false/closed
  const [menuOpen, setMenuOpen] = useState(false)

  // Which background swatch is currently selected
  const [activeSwatch, setActiveSwatch] = useState('black')

  // Whenever activeSwatch changes, apply it to the actual page background.
  useEffect(() => {
    const chosen = swatches.find((theme) => theme.id === activeSwatch)
    document.body.style.background = chosen.bg
    document.body.style.backgroundAttachment = 'fixed'
  }, [activeSwatch])

  return (
    <>
      <StarField />
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSwatch={activeSwatch}
        setActiveSwatch={setActiveSwatch}
      />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}

export default App
