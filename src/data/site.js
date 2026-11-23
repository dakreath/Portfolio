// Main settings: my details, links, and the list of page sections.
// The navbar, command menu, footer, contact section and SEO tags all read from here,
// so a change here updates the whole site.

export const site = {
  name: 'Dak Ngueny',
  initials: 'DN',
  role: 'Software Engineering Student & Full-Stack Developer',
  url: 'https://dakreath.github.io/Portfolio/',
  email: 'daknguenyreath@gmail.com',
  description:
    'Dak Ngueny is a second-year Software Engineering student at McGill University building full-stack apps with React, Tailwind, and FastAPI. Projects, journey, skills, and contact.',
  shortDescription:
    'Second-year Software Engineering student at McGill. React, Tailwind, FastAPI — always learning, always shipping.',
  school: 'McGill University',

  // Files in the /public folder
  photo: { src: 'photo.webp', srcSmall: 'photo-400.webp', alt: 'Portrait of Dak Ngueny' },
  resume: { href: 'Resume/Resume.pdf', filename: 'Dak-Ngueny-Resume.pdf' },
  shareImage: 'og-image.jpg',

  // Grey example text shown in the empty contact form fields
  contactPlaceholders: { name: 'Your name', email: 'you@example.com' },

  // Small flags shown on the hero photo (ISO country codes)
  flags: [
    { code: 'SS', label: 'South Sudan' },
    { code: 'KE', label: 'Kenya' },
    { code: 'CA', label: 'Canada' },
  ],
}

// Social links (footer of the contact section and the command menu)
export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/dakreath', icon: 'github' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dak-reath-28a09938a',
    icon: 'linkedin',
  },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/dak_rumjoo', icon: 'instagram' },
]

// Page sections, in order. Used for the nav links, the command menu
// and the "01 · about" numbers. numbered: false = no number.
export const sections = [
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'journey', label: 'Journey', icon: 'signpost-split' },
  { id: 'projects', label: 'Projects', icon: 'grid' },
  { id: 'skills', label: 'Skills', icon: 'cpu' },
  { id: 'contact', label: 'Contact', icon: 'envelope', numbered: false },
]

// Background colors the visitor can pick in the navbar. The first one is the default.
export const themes = [
  { id: 'white', label: 'White', preview: '#ffffff', background: '#ffffff' },
  {
    id: 'mint',
    label: 'Mint',
    preview: 'linear-gradient(135deg,#ffffff,#f0fdf4,#dcfce7)',
    background: 'linear-gradient(160deg,#ffffff,#f7fdf9,#ecfdf3)',
  },
  {
    id: 'sage',
    label: 'Sage',
    preview: 'linear-gradient(135deg,#f6f8f6,#e8efe9,#d9e6dc)',
    background: 'linear-gradient(160deg,#fafbfa,#f1f5f2,#e8efe9)',
  },
]
