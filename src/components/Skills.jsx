// Each skill has a status: "on" (completed), "pending" (haven't started),
// or "" (currently learning). Change a skill's status here and the tag
// color updates everywhere automatically.
const skillCategories = [
  {
      name: 'languages',
      skills: [
      { name: 'Python', status: 'completed' },
      { name: 'JavaScript', status: 'completed' },
      { name: 'Java', status: 'learning' },
      { name: 'C', status: 'learning' },
    ],
  },
  {
      name: 'frontend',
      skills: [
      { name: 'React', status: 'learning' },
      { name: 'Tailwind CSS', status: 'completed' },
      { name: 'HTML', status: 'completed' },
      { name: 'CSS', status: 'completed' },
      { name: 'Next.js', status: 'pending' },
    ],
  },
  {
      name: 'backend',
      skills: [
      { name: 'FastAPI', status: 'learning' },
      { name: 'Node.js', status: 'pending' },
      { name: 'Express', status: 'pending' },
      { name: 'PostgreSQL', status: 'pending' },
    ],
  },
  {
      name: 'tools',
      skills: [
      { name: 'Git', status: 'completed' },
      { name: 'GitHub', status: 'completed' },
      { name: 'VS Code', status: 'completed' },
      { name: 'Docker', status: 'pending' },
      { name: 'Figma', status: 'pending' },
      { name: 'AWS', status: 'pending' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="section-head">
        <span className="section-tag">03 · skills</span>
        <h2 className="section-title">What I work with</h2>
      </div>

      <div className="skills-legend">
        <span className="legend-item">
          <span className="legend-dot on"></span>Completed
        </span>
        <span className="legend-item">
          <span className="legend-dot pending"></span>Pending
        </span>
        <span className="legend-item">
          <span className="legend-dot"></span>Learning
        </span>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.name}>
            <h3>// {category.name} </h3>
            <div className="tag-skill">
              {category.skills.map((skill) => (
                <span className={`skill ${ skill.status === 'completed'? 'completed': skill.status === 'pending'? 'pending': ''}`} key={skill.name}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
