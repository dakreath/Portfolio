import { useEffect, useState } from 'react'

// The shortcut key to show in hints: "⌘" on Apple devices, "Ctrl" everywhere else.
// The page is prerendered without a browser, so it starts with "⌘" and switches after
// it loads if the visitor isn't on a Mac (the shortcut itself accepts both keys).
export function useModKey() {
  const [modKey, setModKey] = useState('⌘')

  useEffect(() => {
    const platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent
    if (!/mac|iphone|ipad|ipod/i.test(platform)) setModKey('Ctrl')
  }, [])

  return modKey
}
