import { CA, KE, SS } from 'country-flag-icons/react/3x2'

// SVG flags, because flag emoji show up as plain letters on Windows.
// To add a country: import its 2-letter code above and add it here.
const flags = { CA, KE, SS }

function Flag({ code, title }) {
  const FlagSvg = flags[code]
  if (!FlagSvg) return null
  return <FlagSvg title={title} className="flag" />
}

export default Flag
