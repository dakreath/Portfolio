import { sections } from '../../data'
import Reveal from './Reveal.jsx'

// Only sections without `numbered: false` get a number
const numberedSections = sections.filter((section) => section.numbered !== false)

// The small "01 · about" label and the big title above each section.
// The number comes from the section's position in data/site.js.
function SectionHeading({ id, title }) {
  const position = numberedSections.findIndex((section) => section.id === id) + 1
  const number = String(position).padStart(2, '0') // 1 -> "01"
  const label = sections.find((section) => section.id === id)?.label.toLowerCase() ?? id

  return (
    <Reveal className="section-head">
      <span className="section-tag">
        {number} · {label}
      </span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  )
}

export default SectionHeading
