import { site } from './site.js'

// The top of the page: status pill, headline, intro, greeting bubbles and buttons
export const hero = {
  status: 'open to SWE internships',
  headline: {
    lead: 'From Kakuma to McGill,',
    highlight: 'building software that ships.',
  },
  intro:
    "I'm a second-year Software Engineering student at McGill who first learned to code in Kakuma refugee camp. I'm an aspiring full-stack engineer: React and Tailwind on the front end, learning FastAPI on the back end, and building Gambella Marketplace, an e-commerce platform, with two teammates.",
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
    { label: 'Get in touch', href: `mailto:${site.email}`, variant: 'secondary' },
  ],
}
