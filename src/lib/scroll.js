// Smoothly scrolls to the element with this id, e.g. scrollToId('projects')
export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// The hero greeting and the fun facts box are far apart in the component tree.
// Instead of passing props all the way down, the greeting fires this browser event
// and FunFacts.jsx listens for it, then scrolls to itself and opens.
export const OPEN_FUN_FACTS = 'portfolio:open-fun-facts'

export function openFunFacts() {
  window.dispatchEvent(new Event(OPEN_FUN_FACTS))
}
