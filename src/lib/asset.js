/* global __BASE__ */

// Builds the right link to a file in /public.
// On GitHub Pages the site lives at /Portfolio/, so "photo.webp" becomes "/Portfolio/photo.webp".
// Full links (https://...) are returned as they are.
// __BASE__ is set in vite.config.js.
export function asset(path) {
  const isFullLink = /^(https?:|data:)/.test(path)
  if (isFullLink) return path

  const withoutLeadingSlash = path.replace(/^\//, '')
  return __BASE__ + withoutLeadingSlash
}
