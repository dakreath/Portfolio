// Skills you've actually completed, shown in the "core stack" panel.
// Edit this array whenever you finish learning something new.
const coreStack = ['Python', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code']

function About() {
  return (
    <section id="about">
      <div className="section-head">
        <span className="section-tag">01 · about</span>
        <h2 className="section-title">A little about me & my Software development journey</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>
            It started as something I nearly missed. I was in Kakuma refugee camp, Kenya, and had to 
            compete for a seat in a free vocational training center's HTML, CSS, and JavaScript course.
            At first, the syntax felt impenetrable — abstract, almost arcane. Then the logic clicked into place,
            and what I'd expected to be tedious became genuinely absorbing. Four years on, what began by chance has 
            become the foundation my career — and much of my resolve — is built on.
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
