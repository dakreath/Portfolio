import { useEffect, useState } from 'react'
import { themes } from '../data'

const STORAGE_KEY = 'theme'

// The page background the visitor picked (black, grey or aurora).
// The choice is saved in the browser, so it's still there next visit.
export function useTheme() {
  // Start with the default theme so it matches the prerendered HTML
  const [themeId, setThemeId] = useState(themes[0].id)

  // After the page loads: bring back the saved choice, if there is one
  useEffect(() => {
    const saved = readStorage(STORAGE_KEY)
    const isKnownTheme = themes.some((theme) => theme.id === saved)
    if (isKnownTheme) setThemeId(saved)
  }, [])

  // Every time the theme changes: paint the background and save the choice
  useEffect(() => {
    const theme = themes.find((t) => t.id === themeId) ?? themes[0]
    document.body.style.background = theme.background
    document.body.style.backgroundAttachment = 'fixed'
    writeStorage(STORAGE_KEY, themeId)
  }, [themeId])

  return [themeId, setThemeId]
}

// Browser storage can be blocked (for example in private windows), hence the try/catch
function readStorage(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // not saved, but the theme still works for this visit
  }
}
