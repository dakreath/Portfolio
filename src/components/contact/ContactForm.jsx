import { useState } from 'react'
import { site } from '../../data'
import { sendEmail } from '../../lib/contact.js'
import Icon from '../ui/Icon.jsx'

// Name + email + message, sent to my inbox.
// After it sends, the form is replaced by a thank-you card showing what was sent.
function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const [sent, setSent] = useState(null) // the sent message, once it worked

  async function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page
    setSending(true)
    setFailed(false)

    const worked = await sendEmail({
      subject: `Portfolio message from ${name}`,
      name,
      email,
      message,
    })

    setSending(false)

    if (worked) {
      setSent({ name, email, message })
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setFailed(true)
    }
  }

  // After sending: thank the person and show what they sent
  if (sent) {
    const firstName = sent.name.trim().split(' ')[0]

    return (
      <div className="contact-form contact-sent" role="status">
        <Icon name="check2-circle" className="contact-sent-icon" />
        <h3>Thank you, {firstName}!</h3>
        <p>Your message is on its way. I'll get back to you soon.</p>

        <dl className="sent-summary">
          <dt>Name</dt>
          <dd>{sent.name}</dd>
          <dt>Email</dt>
          <dd>{sent.email}</dd>
          <dt>Message</dt>
          <dd>{sent.message}</dd>
        </dl>

        <button type="button" className="text-link" onClick={() => setSent(null)}>
          Send another
        </button>
      </div>
    )
  }

  // Before sending: the form
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={site.contactPlaceholders.name}
            autoComplete="name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={site.contactPlaceholders.email}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label>
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Hi Dak, I'd love to chat about…"
          rows={4}
          required
        />
      </label>

      {failed && (
        <p className="contact-error" role="alert">
          Your message didn't send. Please try again, or copy my email above.
        </p>
      )}

      <button type="submit" className="btn contact-submit" disabled={sending}>
        <Icon name="send" />
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

export default ContactForm
