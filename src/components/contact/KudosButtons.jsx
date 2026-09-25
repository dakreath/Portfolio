import { useEffect, useState } from 'react'
import { counter, sendEmail } from '../../lib/contact.js'

// The two buttons. `key` is the name of the counter online.
const buttons = [
  { key: 'hearts', emoji: '❤️', label: 'Leave a heart', email: 'Someone left you a heart ❤️' },
  { key: 'luck', emoji: '🍀', label: 'Send good luck', email: 'Someone sent you good luck 🍀' },
]

// "Leave a heart" and "Send good luck" buttons, with a count every visitor sees.
// Each visitor can click each one once (remembered in their browser),
// and every click also sends me a short email.
function KudosButtons() {
  const [counts, setCounts] = useState({ hearts: 0, luck: 0 })
  const [clicked, setClicked] = useState({ hearts: false, luck: false })

  // When the page loads: get the counts, and check what this visitor already clicked.
  // This runs in useEffect because browser storage doesn't exist during the prerender build.
  useEffect(() => {
    buttons.forEach(async ({ key }) => {
      const count = await counter('get', key)
      if (count !== null) setCounts((old) => ({ ...old, [key]: count }))
      if (hasClicked(key)) setClicked((old) => ({ ...old, [key]: true }))
    })
  }, [])

  async function handleClick({ key, email }) {
    setClicked((old) => ({ ...old, [key]: true }))
    rememberClick(key)

    const newCount = await counter('hit', key)
    // If the counter service is down, just add 1 on screen
    setCounts((old) => ({ ...old, [key]: newCount ?? old[key] + 1 }))

    sendEmail({ subject: email, message: `${email} on your portfolio.` })
  }

  return (
    <div className="kudos-row">
      {buttons.map((button) => (
        <button
          key={button.key}
          type="button"
          className={`kudos-btn kudos-btn--${button.key}`}
          onClick={() => handleClick(button)}
          disabled={clicked[button.key]}
        >
          <span aria-hidden="true">{button.emoji}</span>
          {button.label}
          <span className="kudos-count">{counts[button.key]}</span>
        </button>
      ))}
    </div>
  )
}

// Browser storage can be blocked (for example in private windows), hence the try/catch
function hasClicked(key) {
  try {
    return localStorage.getItem(`clicked-${key}`) === 'yes'
  } catch {
    return false
  }
}

function rememberClick(key) {
  try {
    localStorage.setItem(`clicked-${key}`, 'yes')
  } catch {
    // the button still works, it just isn't remembered
  }
}

export default KudosButtons
