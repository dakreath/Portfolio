import { site } from './site.js'

// The top of the page: status pill, headline, intro, greeting bubbles and buttons
export const hero = {
  status: 'open to SWE internships',
  headline: {
    lead: 'From Kakuma to McGill,',
    highlight: 'building software that ships.',
  },
  intro:
    "Second-year Software Engineering student at McGill who learned to code in Kakuma refugee camp. I build React and Tailwind frontends, I'm learning FastAPI for the backend, and I'm looking for a software engineering internship.",
  // Chat bubbles that pop up next to the photo.
  // `target` is the section to scroll to, or 'fun-facts' to open the fun facts box.
  greeting: {
    hello: 'Hi 👋',
    // Used when the link has a name in it, e.g. dakreath.github.io/Portfolio/?name=Sarah
    helloNamed: 'Hi {name} 👋',
    messages: [
      { text: 'Fun facts', target: 'fun-facts' },
      { text: 'See what I work with', target: 'skills' },
      { text: 'Hiring a software engineering intern? Let’s talk.', target: 'contact' },
    ],
  },
  actions: [
    { label: 'View my work', href: '#projects', icon: 'arrow-down-short', variant: 'primary' },
    { label: 'Milestones', href: '#journey', icon: 'signpost-split', variant: 'secondary' },
    { label: 'Get in touch', href: `mailto:${site.email}`, variant: 'secondary' },
  ],
}
