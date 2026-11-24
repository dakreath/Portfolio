// Project cards, in the order they appear.
// The card numbers (01, 02...) and the filter counts are worked out automatically.
//
// category: small label above the title (shown in capitals)
// status: 'completed', 'in-progress' or 'upcoming'
// links:  { code, demo }. Both are optional. No link = no button.
// role:   one line on what *I* did. Optional. No role = no line.
// image:  { src, alt } screenshot in public/projects/ (960x600 .webp works well). Optional.
// Order = priority: strongest, most technical work first.
// TODO lines mark details still to fill in (see "Next up" in CLAUDE.md).
export const projects = {
  title: { lead: 'My', accent: 'Projects' }, // "Projects" shows in green
  items: [
    {
      slug: 'gambella-marketplace',
      category: 'E-commerce · Ethiopia',
      title: 'Gambella Marketplace',
      description:
        "Mobile-first marketplace for Ethiopia's Gambella region, built with two teammates: live filters, bookings, Telebirr checkout and verified sellers.",
      // TODO: add the rest of the stack (backend, database, hosting) once it's decided
      stack: ['React', 'Tailwind CSS'],
      status: 'in-progress',
      role: 'I own the whole clothing section and the login forms for listings and access.',
      // TODO: add a screenshot, e.g. image: { src: 'projects/gambella.webp', alt: 'Gambella Marketplace home page' },
      // TODO: add links when ready, e.g.
      // links: { code: 'https://github.com/...', demo: 'https://...' },
    },
    {
      slug: 'portfolio',
      category: 'Web architecture · SEO',
      title: 'My Portfolio Website',
      description: 'This site: a prerendered React + Vite app built for speed, SEO and accessibility.',
      stack: ['React', 'CSS', 'Vite', 'Tailwind'],
      status: 'completed',
      role: 'Solo: design, build, performance and deployment.',
      image: {
        src: 'projects/portfolio.webp',
        alt: 'Portfolio headline: From Kakuma to McGill, building software that ships.',
      },
      links: {
        code: 'https://github.com/dakreath/Portfolio',
        demo: 'https://dakreath.github.io/Portfolio/',
      },
    },
    {
      slug: 'affinity-checker',
      category: 'Vanilla JS · DOM',
      title: 'Affinity Checker', // same name as the live page
      description: 'A name-matching game in plain JavaScript, built to practice the DOM and browser events.',
      stack: ['HTML', 'CSS', 'Vanilla JavaScript'],
      status: 'completed',
      role: 'Built it with HTML, CSS and vanilla JavaScript.', // TODO: confirm (solo?)
      image: {
        src: 'projects/matchmaker.webp',
        alt: 'The name-matching app with two name fields and a Calculate button',
      },
      links: {
        code: 'https://github.com/dakreath/MatchMaker',
        demo: 'https://dakreath.github.io/MatchMaker/',
      },
    },
    {
      slug: 'mcgill-professor-project',
      category: 'Research · McGill University',
      title: 'Project with a McGill professor',
      // TODO: once it starts, replace with the topic, your role and the tech used
      role: 'Collaborator on a professor-led project.',
      description: 'Joining a project led by a McGill professor, starting January 2027.',
      stack: ['Python and/or Java (TBD)'],
      status: 'upcoming',
    },
  ],
}

// Status labels live in data/statuses.js
