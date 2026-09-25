import { useCallback, useEffect, useState } from 'react'

// Copies text to the clipboard.
// `copied` is true for a short moment after copying, so buttons can say "Copied!".
export function useClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false)

  // Switch `copied` back to false after a moment
  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), resetAfter)
    return () => clearTimeout(timer)
  }, [copied, resetAfter])

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      return true
    } catch {
      return false
    }
  }, [])

  return { copied, copy }
}
