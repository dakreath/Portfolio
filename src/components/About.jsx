// Skills you've actually completed, shown in the "core stack" panel.
// Edit this array whenever you finish learning something new.
const coreStack = ['Python', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code']

function About() {
  return (
    <section id="about">
      <div className="section-head">
        <span className="section-tag">01 · about</span>
        <h2 className="section-title">A little about how I work</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>
            I've spent the last several years building web applications end to end — from
            database schema to pixel-perfect UI. I care most about the parts of a product
            people don't notice: the load time that feels instant, the form that never loses
            your data, the error message that actually helps.
          </p>
          <p>
            Outside of client work, I contribute to open-source tooling and write about
            frontend architecture. I'm drawn to teams that treat craft as seriously as they
            treat deadlines.
          </p>
        </div>
        <div className="skills-panel">
          <h3>// core stack</h3>
          <div className="tag-cloud">
            {coreStack.map((skill) => (
              <span className="tag on" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
