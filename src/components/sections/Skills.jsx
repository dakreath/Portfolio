import { useState } from 'react'
import { motion } from 'framer-motion'
import { allSkills, skills, skillStatuses } from '../../data'
import FilterBar from '../ui/FilterBar.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

// One filter button per status (Completed, Pending, Learning), each with its count
const filterOptions = Object.entries(skillStatuses).map(([statusId, status]) => ({
  id: statusId,
  label: status.label,
  tone: statusId,
  count: allSkills.filter((skill) => skill.status === statusId).length,
}))

function Skills() {
  // Clicking a status highlights only those skills. Clicking it again clears it.
  const [highlight, setHighlight] = useState(null)
  const toggleHighlight = (statusId) => setHighlight((current) => (current === statusId ? null : statusId))

  return (
    <section id="skills">
      <SectionHeading id="skills" title={skills.title} />
      <FilterBar
        label="Highlight skills by status"
        options={filterOptions}
        value={highlight}
        onChange={toggleHighlight}
      />

      <div className="skills-grid">
        {skills.categories.map((category, i) => {
          const total = category.skills.length
          const done = category.skills.filter((skill) => skill.status === 'completed').length
          const percent = (done / total) * 100

          return (
            <Reveal className="panel skill-category spotlight" key={category.name} delay={i * 0.08}>
              <h3 className="panel-title">
                {`// ${category.name}`}
                <span className="category-count">
                  {done}/{total}
                </span>
              </h3>

              {/* Progress bar: grows to `percent` when it scrolls into view */}
              <div
                className="progress"
                role="progressbar"
                aria-label={`${category.name}: ${done} of ${total} completed`}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={done}
              >
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => {
                  const isDimmed = highlight && highlight !== skill.status
                  return (
                    <motion.span
                      className={`skill skill--${skill.status}`}
                      key={skill.name}
                      title={skillStatuses[skill.status].label}
                      animate={{ opacity: isDimmed ? 0.2 : 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      {skill.name}
                      {skill.note && <span className="skill-note"> · {skill.note}</span>}
                    </motion.span>
                  )
                })}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
