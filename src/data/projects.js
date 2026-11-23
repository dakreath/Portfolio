// Project cards, in the order they appear.
// The card numbers (01, 02...) and the filter counts are worked out automatically.
//
// category: small label above the title (shown in capitals)
// summary:  one bold sentence under the title
// accent:   color of the card's top border: 'green' (web builds), 'deep' (apps and leadership),
//           'light' (in progress) or 'muted' (upcoming)
// status: 'completed', 'in-progress' or 'upcoming'
// links:  { code, demo }. Both are optional. No link = no button.
// Order = priority: strongest, most technical work first.
// TODO lines mark details still to fill in (see "Next up" in CLAUDE.md).
export const projects = {
  title: 'Selected work',
  items: [
    {
      slug: 'gambella-marketplace',
      category: 'E-commerce · Ethiopia',
      summary: 'A mobile-first marketplace connecting Gambella shoppers with verified local sellers.',
      accent: 'light',
      title: 'Gambella Marketplace',
      description:
        'A mobile-first e-commerce marketplace for the Gambella region of Ethiopia, built with two teammates. Shoppers browse clothes, books and goods with live filters, book guesthouse stays and land, and check out with Telebirr payment proof; sellers go through a verification flow.',
      // TODO: add the rest of the stack (backend, database, hosting) once it's decided
      stack: ['React', 'Tailwind CSS'],
      status: 'in-progress',
      // TODO: add links when ready, e.g.
      // links: { code: 'https://github.com/...', demo: 'https://...' },
    },
    {
      slug: 'portfolio',
      category: 'Web architecture · SEO',
      summary: 'A fast, prerendered React portfolio built for speed, search and accessibility.',
      accent: 'green',
      title: 'My Portfolio Website',
      description:
        'This site. A React + Vite app that is prerendered to static HTML for fast first paint and SEO, with a ⌘K command menu, keyboard navigation and reduced-motion support.',
      stack: ['React', 'CSS', 'Vite', 'Tailwind'],
      status: 'completed',
      links: {
        code: 'https://github.com/dakreath/Portfolio',
        demo: 'https://dakreath.github.io/Portfolio/',
      },
    },
    {
      slug: 'infinity-checker',
      category: 'Vanilla JS · DOM',
      summary: 'A framework-free name-matching game built to master the DOM and browser events.',
      accent: 'deep',
      title: 'Infinity Checker',
      description:
        'A playful browser app that scores the "closeness" between two names: friends, family or partners. Built from scratch with no frameworks to practice DOM manipulation and event handling.',
      stack: ['HTML', 'CSS', 'Vanilla JavaScript'],
      status: 'completed',
      links: {
        code: 'https://github.com/dakreath/MatchMaker',
        demo: 'https://dakreath.github.io/MatchMaker/',
      },
    },
    {
      slug: 'mcgill-professor-project',
      category: 'Research · McGill University',
      summary: 'An upcoming research collaboration with one of my McGill professors.',
      accent: 'muted',
      title: 'Project with a McGill professor',
      // TODO: once it starts, replace with the topic, your role and the tech used
      description: 'Joining a project led by one of my McGill professors, starting December 2026.',
      stack: ['Mentorship', 'Collaboration'],
      status: 'upcoming',
    },
  ],
}

// How each status is labeled on the filter buttons and card badges
export const projectStatuses = {
  completed: { label: 'Completed', badge: 'completed', tone: 'completed' },
  'in-progress': { label: 'In progress', badge: 'in progress', tone: 'pending' },
  upcoming: { label: 'Upcoming', badge: 'starting Dec 2026', tone: 'pending' },
}
