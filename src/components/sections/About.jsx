import { motion } from 'framer-motion'
import { about, coreStack } from '../../data'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import FunFacts from './FunFacts.jsx'

function About() {
  return (
    <section id="about">
      <SectionHeading id="about" title={about.title} />

      <div className="about-grid">
        {/* Left: my story + the fun facts box */}
        <Reveal delay={0.1}>
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <FunFacts />
        </Reveal>

        {/* Right: "core stack" tags. They pop in one after another. */}
        <Reveal className="panel spotlight" delay={0.2}>
          <h3 className="panel-title">{'// core stack'}</h3>
          <div className="tag-cloud">
            {coreStack.map((name, i) => (
              <motion.span
                className="tag"
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.05, type: 'spring', stiffness: 260, damping: 18 }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
