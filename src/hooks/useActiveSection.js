import { useEffect, useState } from 'react'

// Returns the id of the section the visitor is reading right now,
// so the navbar can underline the matching link.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    // Watch a thin line 30% down the screen. Whichever section crosses it is "active".
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -69% 0px' }
    )

    ids.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
