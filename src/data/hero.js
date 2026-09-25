import { site } from './site.js'

// The top of the page: status pill, headline, intro, greeting bubbles and buttons
export const hero = {
  status: 'available for new projects',
  headline: {
    lead: 'Building fast, thoughtful',
    highlight: 'software products.',
  },
  intro:
    "I'm a second-year Software Engineering student at McGill and an aspiring full-stack engineer who turns complex problems into clean, reliable interfaces. I enjoy Java and software systems, and I'm currently deep in React, Tailwind, and FastAPI — always learning, always shipping.",
  // Chat bubbles that pop up next to the photo.
  // `target` is the section to scroll to, or 'fun-facts' to open the fun facts box.
  greeting: {
    hello: 'Hi 👋',
    // Used when the link has a name in it, e.g. dakreath.github.io/Portfolio/?name=Sarah
    helloNamed: 'Hi {name} 👋',
    messages: [
      { text: 'Before you leave, check out my fun facts', target: 'fun-facts' },
      { text: 'See what I work with', target: 'skills' },
      { text: 'Looking for an intern, or someone to mentor? That could be me.', target: 'contact' },
    ],
  },
  actions: [
    { label: 'View my work', href: '#projects', icon: 'arrow-down-short', variant: 'primary' },
    { label: 'Get in touch', href: `mailto:${site.email}`, variant: 'secondary' },
  ],
}
