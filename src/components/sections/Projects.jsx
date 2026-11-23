import { forwardRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { projects, projectStatuses } from '../../data'
import FilterBar from '../ui/FilterBar.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

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

// The color of each card's thick top border (the `accent` in data/projects.js).
// Written out in full so Tailwind can find the class names.
const accentBorders = {
  green: 'border-t-accent', // web builds
  deep: 'border-t-leaf-deep', // apps and leadership
  light: 'border-t-[#4ade80]', // in progress
  muted: 'border-t-line', // upcoming
}

// Keyboard focus ring for the links on a card
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  const status = projectStatuses[project.status]
  const isDone = project.status === 'completed'
  const { code, demo } = project.links ?? {}

  return (
    // The outer box only animates: it fades in on scroll and slides into place when the filter changes
    <m.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* The card itself */}
      <article
        className={`rounded-xl border border-t-4 border-line ${accentBorders[project.accent] ?? accentBorders.muted} bg-surface p-7 font-sans transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_30px_-10px_rgba(21,128,61,0.18)] motion-reduce:hover:translate-y-0`}
      >
        {/* Top row: number + category on the left, status on the right */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-medium ${
                isDone ? 'bg-leaf-deep text-on-accent' : 'border border-line text-ink-dimmer'
              }`}
            >
              {project.number}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent-soft">
              {project.category}
            </span>
          </div>
          <span className="shrink-0 whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-0.5 text-[11px] font-medium text-ink-dim">
            {status.badge}
          </span>
        </div>

        <h3 className="m-0 font-serif text-2xl font-normal leading-tight text-ink md:text-[26px]">
          {project.title}
        </h3>
        <p className="mb-0 mt-2 text-[13.5px] font-semibold leading-snug text-ink">{project.summary}</p>
        <p className="mb-0 mt-3 text-[14.5px] leading-relaxed text-ink-dim">{project.description}</p>

        {/* Tech stack */}
        <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-leaf-deep"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links, only when the project has them */}
        {(demo || code) && (
          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-line pt-5">
            {demo && (
              <a
                className={`inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 text-[13px] font-medium text-on-accent no-underline transition-colors hover:bg-leaf-deep ${focusRing}`}
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="play-circle" /> Live demo
              </a>
            )}
            {code && (
              <a
                className={`inline-flex items-center gap-1.5 rounded text-[13px] font-medium text-accent-soft underline-offset-4 hover:underline ${focusRing}`}
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                View code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </article>
    </m.div>
  )
})

function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects =
    filter === 'all' ? numberedProjects : numberedProjects.filter((project) => project.status === filter)

  return (
    <section id="projects" className="text-ink">
      <SectionHeading id="projects" title={projects.title} />
      <FilterBar
        className="filter-bar--editorial"
        label="Filter projects"
        options={filterOptions}
        value={filter}
        onChange={setFilter}
      />

      {/* Two columns on wider screens. items-start lets each card keep its own height.
          layout + AnimatePresence: cards slide into place when the filter changes. */}
      <m.div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2" layout>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </m.div>
    </section>
  )
}

export default Projects
