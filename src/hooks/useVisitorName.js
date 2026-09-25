import { useEffect, useState } from 'react'

const STORAGE_KEY = 'visitorName'

// Reads the visitor's name from the link, e.g. dakreath.github.io/Portfolio/?name=Sarah
// (?to=Sarah works too). The name is saved in the browser, so a returning visitor
// is still greeted by name. Returns '' when there is no name.
export function useVisitorName() {
  const [name, setName] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const nameFromLink = cleanName(params.get('name') ?? params.get('to'))

    try {
      if (nameFromLink) localStorage.setItem(STORAGE_KEY, nameFromLink)
      setName(nameFromLink || cleanName(localStorage.getItem(STORAGE_KEY)))
    } catch {
      // storage blocked: still use the name from the link
      setName(nameFromLink)
    }
  }, [])

  return name
}

// "  sarah-jane!! " -> "Sarah-Jane"
// Keeps only letters, spaces, hyphens and apostrophes, max 30 characters,
// and capitalizes the first letter of each part.
function cleanName(raw) {
  const name = (raw ?? '')
    .replace(/[^\p{L}\s'-]/gu, '') // remove anything that isn't a letter, space, ' or -
    .replace(/\s+/g, ' ') // collapse repeated spaces
    .trim()
    .slice(0, 30)

  return name.replace(/(^|[\s-])\p{L}/gu, (letter) => letter.toUpperCase())
}
