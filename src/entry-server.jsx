// Only used during `npm run build`.
// scripts/prerender.mjs calls render() to turn the app into plain HTML,
// so the page shows up right away and search engines can read it.
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
