import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectStatuses } from '../../data'
import FilterBar from '../ui/FilterBar.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import TiltCard from '../ui/TiltCard.jsx'

// Give each project a number from its position: 01, 02, ...
const numberedProjects = projects.items.map((project, i) => ({
  ...project,
  number: String(i + 1).padStart(2, '0'),
}))

// Filter buttons: "All", then one per status, each with its count
const filterOptions = [
  { id: 'all', label: 'All', count: numberedProjects.length },
  ...Object.entries(projectStatuses).map(([statusId, status]) => ({
    id: statusId,
    label: status.label,
    tone: status.tone,
    count: numberedProjects.filter((project) => project.status === statusId).length,
  })),
]

function ProjectCard({ project, index }) {
  const status = projectStatuses[project.status]
  const isDone = project.status === 'completed'
  const { code, demo } = project.links ?? {}

  return (
    <TiltCard
      layout
      disabled={!isDone} // only finished projects tilt
      className={`card project-card ${isDone ? 'is-done' : 'is-wip'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={isDone ? { y: -4 } : undefined}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className={`badge badge--${status.tone}`}>{status.badge}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="chips">
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {(demo || code) && (
        <div className="project-links">
          {demo && (
            <a className="btn btn-primary btn-sm" href={demo} target="_blank" rel="noopener noreferrer">
              <Icon name="play-circle" /> Live demo
            </a>
          )}
          {code && (
            <a className="text-link" href={code} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> View code <Icon name="arrow-up-right" className="arrow" />
            </a>
          )}
        </div>
      )}
    </TiltCard>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects =
    filter === 'all' ? numberedProjects : numberedProjects.filter((project) => project.status === filter)

  return (
    <section id="projects">
      <SectionHeading id="projects" title={projects.title} />
      <FilterBar label="Filter projects" options={filterOptions} value={filter} onChange={setFilter} />

      {/* layout + AnimatePresence: cards slide into place when the filter changes */}
      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects
