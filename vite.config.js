import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site, socials } from './src/data/site.js'
import { allSkills } from './src/data/skills.js'

// Fills in the {{placeholders}} in index.html (page title, search and link-preview tags)
// using the details in src/data/site.js, so I only write them in one place.
function siteMeta() {
  const values = {
    name: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    shortDescription: site.shortDescription,
    url: site.url,
    email: site.email,
    image: new URL(site.shareImage, site.url).href,
    photo: new URL(site.photo.src, site.url).href,
    jsonLd: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      url: site.url,
      image: new URL(site.photo.src, site.url).href,
      jobTitle: 'Software Engineering Student',
      email: `mailto:${site.email}`,
      alumniOf: { '@type': 'CollegeOrUniversity', name: site.school },
      knowsAbout: allSkills.filter((s) => s.status !== 'pending').map((s) => s.name),
      sameAs: socials.map((s) => s.href),
    }),
  }
  // Make text safe to put inside HTML attributes
  const escape = (v) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

  return {
    name: 'site-meta',
    transformIndexHtml: (html) =>
      html.replace(/\{\{(\w+)\}\}/g, (_, key) =>
        key === 'jsonLd' ? values.jsonLd : escape(values[key] ?? '')
      ),
  }
}

// GitHub Pages serves the site at /Portfolio/.
// (Run with BASE_PATH=./ to build a copy that works from any folder.)
const base = process.env.BASE_PATH ?? '/Portfolio/'

export default defineConfig({
  plugins: [react(), siteMeta()],
  base,
  // Lets src/lib/asset.js know the base path too
  define: { __BASE__: JSON.stringify(base) },
})
