import Reveal from './Reveal.jsx'

// A row of pill buttons, each with a colored dot and a count.
// Used above Projects and Skills.
// options: [{ id, label, count, tone }]  (tone picks the dot color, optional)
function FilterBar({ options, value, onChange, label }) {
  return (
    <Reveal className="filter-bar" delay={0.1}>
      <div role="group" aria-label={label} className="filter-bar-inner">
        {options.map((option) => {
          const isActive = value === option.id
          return (
            <button
              key={option.id}
              type="button"
              className={`filter ${isActive ? 'active' : ''}`}
              aria-pressed={isActive}
              onClick={() => onChange(option.id)}
            >
              {option.tone && <span className={`dot dot--${option.tone}`} />}
              {option.label}
              <span className="filter-count">{option.count}</span>
            </button>
          )
        })}
      </div>
    </Reveal>
  )
}

export default FilterBar
