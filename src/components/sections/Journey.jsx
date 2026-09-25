import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { journey } from '../../data'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

function Journey() {
  const timelineRef = useRef(null)

  // The colored line down the middle fills in as you scroll through the timeline.
  // progress goes from 0 to 1 while the timeline moves up the screen.
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 60%'] })
  const lineHeight = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section id="journey">
      <SectionHeading id="journey" title={journey.title} />

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-track" aria-hidden="true">
          <motion.div className="timeline-fill" style={{ scaleY: lineHeight }} />
        </div>

        {journey.milestones.map((milestone, i) => {
          // Cards alternate: left, right, left, ...
          const side = i % 2 === 0 ? 'left' : 'right'

          return (
            <motion.div
              className={`milestone ${side}`}
              key={milestone.title}
              initial={{ opacity: 0, x: side === 'right' ? 40 : -40 }} // slide in from its own side
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Round icon on the line */}
              <motion.span
                className="milestone-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
              >
                <Icon name={milestone.icon} />
              </motion.span>

              <div className="card milestone-card spotlight">
                <span className="milestone-when">{milestone.when}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.body}</p>

                <div className="chips">
                  {milestone.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {milestone.cta && (
                  <a className="text-link" href={milestone.cta.href}>
                    {milestone.cta.label} <Icon name="arrow-right" className="arrow" />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Journey
