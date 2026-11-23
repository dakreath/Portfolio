import { m } from 'framer-motion'
import { about, coreStack } from '../../data'
import Reveal from '../ui/Reveal.jsx'
import ScrollFade from '../ui/ScrollFade.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import FunFacts from './FunFacts.jsx'

function About() {
  return (
    <section id="about">
      <ScrollFade>
        <SectionHeading id="about" title={about.title} />
      </ScrollFade>

      <div className="about-grid">
        {/* Left: my story + the fun facts box */}
        <Reveal delay={0.1}>
          {/* Each paragraph fades and shrinks as you scroll past it */}
          {about.paragraphs.map((paragraph, i) => (
            <ScrollFade as="p" key={i}>
              {paragraph}
            </ScrollFade>
          ))}
          <FunFacts />
        </Reveal>

        {/* Right: "core stack" tags. They pop in one after another. */}
        <Reveal className="panel" delay={0.2}>
          <h3 className="panel-title">{'// core stack'}</h3>
          <div className="tag-cloud">
            {coreStack.map((name, i) => (
              <m.span
                className="tag"
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.05, type: 'spring', stiffness: 260, damping: 18 }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                {name}
              </m.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
