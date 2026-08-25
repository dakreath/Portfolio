// Once you ship a real project, replace the matching entry here with
// real details and drop "pending: true" so it renders as a normal card.
const projects = [
  { id: '01', 
    title: 'My Portfolio Website', 
    description: 'A personal portfolio website built to showcase my web development projects and skills.', 
    stack: 'React | CSS | Vite | Tailwind', 
    pending: false,
    complete: true,
    link: 'https://github.com/dakreath'
    },
  { id: '02', 
    title: 'Project two', 
    description: 'A simple web app designed for checking relationship compatibility between lovers/friends/family members',
    stack: 'HTML | CSS | Vanilla Java Script',
    pending: false, 
    complete: true,
    link: 'https: //github.com/dakreath'
    },
  { id: '03', title: 'Project three', pending: true, complete: false },
  { id: '04', title: 'Project four', pending: true, complete: false},
]



function Projects() {
  return (
    <section id="projects">
      <div className="section-head">
        <span className="section-tag">02 | projects</span>
        <h2 className="section-title">Selected work</h2>
      </div>

      <div className="skills-legend">
        <span className="legend-item">
          <span className="legend-dot on"></span>Completed
        </span>
        <span className="legend-item">
          <span className="legend-dot pending"></span>Pending
        </span>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className={`project-card ${project.pending ? 'pending' : 'completed'}`} key={project.id}>
            <div className="project-top">
              <div className="project-icon"><span>{project.id}</span></div>
              {project.pending?(<span className="pending-badge">in progress</span>) : (<span className="pending-comp">completed</span>)}
            </div>
            <h3>{project.title}</h3>
            <p>
              {project.pending
                ? 'Nothing shipped here yet — check back soon.'
                : project.description}
            </p>
            <div className="project-stack">
              <span className="chip">{project.pending ? 'TBD' : project.stack}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
