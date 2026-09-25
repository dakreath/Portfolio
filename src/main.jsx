import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Fonts are bundled with the site, so there is no request to Google Fonts
import '@fontsource/geist-sans/latin-400.css'
import '@fontsource/geist-sans/latin-500.css'
import '@fontsource/geist-sans/latin-600.css'
import '@fontsource/geist-sans/latin-700.css'
import '@fontsource/geist-mono/latin-400.css'
import '@fontsource/geist-mono/latin-500.css'
import './index.css'

const root = document.getElementById('root')

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// After `npm run build` the page already has HTML inside #root (see scripts/prerender.mjs).
// In that case React just "hydrates" it: it adds the clicks and animations to the existing HTML.
// With `npm run dev` #root is empty, so React draws the page from scratch.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
