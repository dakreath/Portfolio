import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="eyebrow">
            <span className="dot"></span>
            available for new projects
          </span>
          <h1>
            Building fast, thoughtful
            <br />
            <span className="gradient-text">software products.</span>
          </h1>
          <p className="lede">
            I'm an aspiring full-stack engineer who turns complex problems into clean, reliable
            interfaces — currently focused on developer tools and design systems.
            Software Engineering student at McGill, building clean interfaces with
             a structured, deliberate approach — always learning, always shipping. 
             Currently deep in React, Tailwind, and FastAPI.
          </p>
          <div className="hero-actions">
            <a className="btn-hero" href="#projects">
              View my work
            </a>
            <a className="btn-secondary" href="mailto:daknguenyreath@gmail.com">
              Get in touch
            </a>
          </div>
        </div>

        {/*
          A real framer-motion component.
          1. "initial" is how it looks before it appears
          2. "animate" is where it settles,
          4. "whileHover" runs automatically/ replaces event listeners.
        */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          whileHover={{
            scale: 1.035,
            y: -6,
            transition: { type: 'spring', stiffness: 300, damping: 18 },
          }}
        >
          <img src="/Photo.png" alt="Dak Ngueny" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
