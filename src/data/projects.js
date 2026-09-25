// Project cards, in the order they appear.
// The card numbers (01, 02...) and the filter counts are worked out automatically.
//
// status: 'completed' or 'in-progress'
// links:  { code, demo }. Both are optional. No link = no button.
export const projects = {
  title: 'Selected work',
  items: [
    {
      slug: 'portfolio',
      title: 'My Portfolio Website',
      description: 'A personal portfolio website built to showcase my web development projects and skills.',
      stack: ['React', 'CSS', 'Vite', 'Tailwind'],
      status: 'completed',
      links: {
        code: 'https://github.com/dakreath/Portfolio',
        demo: 'https://dakreath.github.io/Portfolio/',
      },
    },
    {
      slug: 'infinity-checker',
      title: 'Infinity Checker',
      description:
        'An interactive, simple web app designed for checking closeness between lovers/friends/family members meant for fun',
      stack: ['HTML', 'CSS', 'Vanilla JavaScript'],
      status: 'completed',
      links: {
        code: 'https://github.com/dakreath',
        // demo: 'https://...',  add the live link here to show a "Live demo" button
      },
    },
    {
      slug: 'fanryng',
      title: 'FanRyng · Riipen Labs',
      description:
        'Group project for a fan-engagement platform. As technical lead, I worked with the team to produce the strategy and operations documents behind the product.',
      stack: ['Technical Lead', 'Strategy', 'Operations'],
      status: 'completed',
    },
    {
      slug: 'project-four',
      title: 'Project four',
      description: 'Nothing shipped here yet — check back soon.',
      stack: ['TBD'],
      status: 'in-progress',
    },
  ],
}

// How each status is labeled on the filter buttons and card badges
export const projectStatuses = {
  completed: { label: 'Completed', badge: 'completed', tone: 'completed' },
  'in-progress': { label: 'In progress', badge: 'in progress', tone: 'pending' },
}
