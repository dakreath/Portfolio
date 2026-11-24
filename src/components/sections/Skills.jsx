import { useState } from 'react'
import { m } from 'framer-motion'
import { allSkills, skills, skillStatuses } from '../../data'
import FilterBar from '../ui/FilterBar.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

// One filter button per status (Comfortable, Learning, Up Next), each with its count
const filterOptions = Object.entries(skillStatuses).map(([statusId, status]) => ({
  id: statusId,
  label: status.label,
  icon: status.icon,
  count: allSkills.filter((skill) => skill.status === statusId).length,
}))

// Strongest skills first: comfortable, then learning, then up next
const statusOrder = Object.keys(skillStatuses)
const sortByStatus = (list) =>
  [...list].sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status))

function Skills() {
  // Clicking a status highlights only those skills. Clicking it again clears it.
  const [highlight, setHighlight] = useState(null)
  const toggleHighlight = (statusId) => setHighlight((current) => (current === statusId ? null : statusId))

  return (
    <section id="skills">
      <span className="commit-scatter" aria-hidden="true" />
      <SectionHeading id="skills" title={skills.title} />
      <FilterBar
        label="Highlight skills by status"
        options={filterOptions}
        value={highlight}
        onChange={toggleHighlight}
      />

      <div className="skills-grid">
        {skills.categories.map((category, i) => (
          <Reveal className="panel skill-category" key={category.name} delay={i * 0.08}>
            <h3 className="panel-title">{`// ${category.name}`}</h3>

            <div className="skill-list">
              {sortByStatus(category.skills).map((skill) => {
                const isDimmed = highlight && highlight !== skill.status
                return (
                  <m.span
                    className={`skill skill--${skill.status}`}
                    key={skill.name}
                    title={skillStatuses[skill.status].label}
                    animate={{ opacity: isDimmed ? 0.2 : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {skill.name}
                    {skill.note && <span className="skill-note"> · {skill.note}</span>}
                  </m.span>
                )
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
