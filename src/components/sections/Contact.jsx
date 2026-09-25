import { motion } from 'framer-motion'
import { site, socials } from '../../data'
import { useClipboard } from '../../hooks/useClipboard.js'
import ContactForm from '../contact/ContactForm.jsx'
import KudosButtons from '../contact/KudosButtons.jsx'
import Icon from '../ui/Icon.jsx'
import Reveal from '../ui/Reveal.jsx'

function Contact() {
  const { copied, copy } = useClipboard()

  return (
    <section id="contact">
      <Reveal className="contact-box spotlight">
        <h2>
          Let's build something
          <br />
          worth shipping.
        </h2>
        <p>
          I'm currently open to new roles and select freelance projects. The fastest way to reach me is email.
        </p>

        <div className="contact-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => copy(site.email)}
            aria-label="Copy email address"
          >
            <Icon name={copied ? 'check2' : 'clipboard'} />
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <ContactForm />
        <KudosButtons />

        {/* Social icons, sliding in one after another */}
        <div className="social-row">
          {socials.map((social, i) => (
            <motion.a
              key={social.id}
              className="social has-tip"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              data-tip={social.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={social.icon} />
            </motion.a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
