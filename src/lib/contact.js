// The contact section uses two free online services:
//
// 1. Web3Forms (web3forms.com) sends me the contact form as an email.
//    It needs a key in the .env file: VITE_WEB3FORMS_KEY (see .env.example).
// 2. Abacus (abacus.jasoncameron.dev) stores the heart and good-luck counts,
//    so every visitor sees the same numbers. No key needed.

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const COUNTER_URL = 'https://abacus.jasoncameron.dev'
const COUNTER_NAME = 'dakreath-portfolio'

// Sends me an email. Returns true if it worked, false if not.
export async function sendEmail(fields) {
  if (!WEB3FORMS_KEY) {
    console.warn('No VITE_WEB3FORMS_KEY in .env, so nothing was sent.')
    return false
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...fields }),
    })
    const data = await response.json()
    return data.success === true
  } catch {
    return false
  }
}

// action "get" reads a count, action "hit" adds one to it.
// Returns the number, or null if the service can't be reached.
export async function counter(action, key) {
  try {
    const response = await fetch(`${COUNTER_URL}/${action}/${COUNTER_NAME}/${key}`)
    if (response.status === 404) return 0 // nobody has clicked yet
    const data = await response.json()
    return data.value
  } catch {
    return null
  }
}
