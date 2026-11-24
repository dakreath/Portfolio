import { forwardRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { projects, projectStatuses, socials } from '../../data'
import { asset } from '../../lib/asset.js'
import FilterBar from '../ui/FilterBar.jsx'
import Icon from '../ui/Icon.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'

// The dark "My Projects" section. Everything on the cards comes from data/projects.js;
// the styles are under "Projects" in index.css.

// Show the most finished work first: completed projects with a screenshot, then other completed ones,
// then in progress, then upcoming. Within a group, the order from data/projects.js is kept.
function rank(project) {
  if (project.status === 'completed') return project.image ? 0 : 1
  return project.status === 'in-progress' ? 2 : 3
}
const sortedProjects = [...projects.items].sort((a, b) => rank(a) - rank(b))

// Give each project a number from its position: 01, 02, ...
const numberedProjects = sortedProjects.map((project, i) => ({
  ...project,
  number: String(i + 1).padStart(2, '0'),
}))

// Filter buttons: "All", then one per status, each with its count
const filterOptions = [
  { id: 'all', label: 'All', count: numberedProjects.length },
  ...Object.entries(projectStatuses).map(([statusId, status]) => ({
    id: statusId,
    label: status.label,
    icon: status.icon,
    count: numberedProjects.filter((project) => project.status === statusId).length,
  })),
]

const github = socials.find((social) => social.id === 'github')

// The screenshot area: a link when the project has one, a plain box otherwise
function PreviewWrapper({ href, label, children }) {
  if (!href) return <div className="project-preview">{children}</div>
  return (
    <a
      className="project-preview"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={-1}
    >
      {children}
    </a>
  )
}

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  const status = projectStatuses[project.status]
  const { code, demo } = project.links ?? {}
  const previewLink = demo || code // clicking the screenshot opens the demo, or the code if there's no demo

  return (
    // The outer box only animates: it fades in on scroll and slides into place when the filter changes
    <m.div
      ref={ref}
      layout
      className="project-cell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="project-card" aria-labelledby={`project-${project.slug}`}>
        {/* Screenshot, or a designed cover (name on a green gradient) until there is one.
            When there's a link, the whole screenshot is clickable. tabIndex -1: keyboard users
            already reach the same link through the buttons below, so it isn't a second stop. */}
        <PreviewWrapper
          href={previewLink}
          label={
            demo
              ? `Live demo of ${project.title} (opens in a new tab)`
              : `Code for ${project.title} on GitHub (opens in a new tab)`
          }
        >
          {project.image ? (
            <img
              src={asset(project.image.src)}
              alt={project.image.alt}
              width="960"
              height="600"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className={`project-cover project-cover--${project.status}`}>
              <span className="project-cover-title" aria-hidden="true">
                {project.title}
              </span>
              <span className="project-cover-category" aria-hidden="true">
                {project.category}
              </span>
            </div>
          )}
          <span className={`project-status project-status--${project.status}`}>
            <span className={`dot dot--${status.icon}`} aria-hidden="true" />
            {status.label}
          </span>
          {previewLink && (
            <span className="project-preview-hint" aria-hidden="true">
              {demo ? 'Open live demo' : 'View code'} <Icon name="arrow-up-right" />
            </span>
          )}
        </PreviewWrapper>

        <div className="project-body">
          <p className="project-category">
            <span className="project-number">{project.number}</span>
            {project.category}
          </p>
          <h3 id={`project-${project.slug}`} className="project-title">
            {project.title}
          </h3>
          <p className="project-description">{project.description}</p>

          {/* What I did on this project */}
          {project.role && (
            <p className="project-role">
              <span>My role · </span>
              {project.role}
            </p>
          )}

          <p className="project-stack">
            <span className="sr-only">Tech stack: </span>
            {project.stack.join(' · ')}
          </p>

          {/* Buttons when the project has links; a short note otherwise, so every card has the same parts */}
          <div className="project-actions">
            {!code && !demo && <span className="project-no-links">Links coming soon</span>}
            {code && (
              <a
                className="project-btn project-btn--code"
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Code for ${project.title} on GitHub (opens in a new tab)`}
              >
                <Icon name="github" /> View code
              </a>
            )}
            {demo && (
              <a
                className="project-btn project-btn--demo"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title} (opens in a new tab)`}
              >
                Live demo <Icon name="arrow-up-right" />
              </a>
            )}
          </div>
        </div>
      </article>
    </m.div>
  )
})

function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects =
    filter === 'all' ? numberedProjects : numberedProjects.filter((project) => project.status === filter)

  return (
    <section id="projects" className="projects-band">
      {/* Decorative glitter at both ends of the dark band (styles: "Glitter" in index.css) */}
      <span className="projects-glitter projects-glitter--top" aria-hidden="true" />
      <span className="projects-glitter projects-glitter--bottom" aria-hidden="true" />
      <SectionHeading
        id="projects"
        title={
          <>
            {projects.title.lead} <span className="projects-title-accent">{projects.title.accent}</span>
          </>
        }
      />
      <FilterBar
        className="filter-bar--dark"
        label="Filter projects"
        options={filterOptions}
        value={filter}
        onChange={setFilter}
      />

      {/* One column on phones, two on tablets, three on laptops.
          layout + AnimatePresence: cards slide into place when the filter changes. */}
      <m.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </m.div>

      {/* "More projects?" banner */}
      {github && (
        <Reveal className="projects-more">
          <div>
            <p className="projects-more-title">More projects?</p>
            <p className="projects-more-text">See everything else I build on GitHub.</p>
          </div>
          <a
            className="project-btn project-btn--code"
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub (opens in a new tab)"
          >
            <Icon name="github" /> Visit my GitHub
          </a>
        </Reveal>
      )}
    </section>
  )
}

export default Projects
