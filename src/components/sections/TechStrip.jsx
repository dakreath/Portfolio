import { techStripRows } from '../../data'
import Icon from '../ui/Icon.jsx'

// A short row is repeated until it has at least this many items, so the loop never shows a gap
const MIN_ITEMS = 10

// One row that scrolls sideways forever (the animation is in index.css). Hovering pauses it.
function StripRow({ items, label, reverse = false, duration = 40 }) {
  const repeats = Math.max(1, Math.ceil(MIN_ITEMS / items.length))
  const rowItems = Array.from({ length: repeats }, () => items).flat()

  return (
    <div className="strip" aria-label={label}>
      <div
        className={`strip-track ${reverse ? 'reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Two identical copies side by side: when the first scrolls out, the second is in its place */}
        {[0, 1].map((copy) => (
          <div className="strip-half" key={copy} aria-hidden={copy === 1}>
            {rowItems.map((item, i) => (
              <span className="strip-item" key={i}>
                <Icon name={item.icon} />
                {item.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// Two rows of tech moving in opposite directions, under the hero. Built from data/skills.js.
function TechStrip() {
  const [topRow, bottomRow] = techStripRows

  return (
    <div className="tech-strip">
      <StripRow items={topRow} label="Languages and frontend" />
      <StripRow items={bottomRow} label="Backend and tools" reverse duration={45} />
    </div>
  )
}

export default TechStrip
