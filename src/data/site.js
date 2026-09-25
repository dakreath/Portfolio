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
  contactPlaceholders: { name: 'Goy Kuoth', email: 'goykuothnhial@gmail.com' },

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
  { id: 'black', label: 'Black', preview: '#000000', background: '#000000' },
  {
    id: 'grey',
    label: 'Grey',
    preview: 'linear-gradient(135deg,#09090B,#27272A,#3F3F46)',
    background: 'linear-gradient(160deg,#09090B,#18181B,#27272A)',
  },
  {
    id: 'aura',
    label: 'Aurora',
    preview: 'linear-gradient(135deg,#020617,#1E1B4B,#2E1065)',
    background: 'linear-gradient(160deg,#020617,#0F0A2E,#1E1B4B)',
  },
]
