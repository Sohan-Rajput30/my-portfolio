import { useState } from 'react'
import { profile } from '../data/portfolio'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const socials = profile.socials.filter((item) => item.href)

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!emailPattern.test(form.email.trim()))
      next.email = 'Enter a valid email address, like name@example.com.'
    if (form.message.trim().length < 10)
      next.message = 'Write at least 10 characters.'

    setErrors(next)
    if (Object.keys(next).length > 0) return

    // No backend needed: opens the visitor's email app with the message filled in.
    const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`)
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <footer className="contact-section" id="contact">
      <p className="eyebrow">{profile.contactEyebrow}</p>

      <h2>
        LET'S CONNECT<span>.</span>
      </h2>

      <div className="contact-grid">
        <div className="contact-info">
          <p>{profile.contactText}</p>

          <a className="contact-link" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>

          {socials.length > 0 && (
            <div className="contact-socials">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span className="field-error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span className="field-error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span className="field-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            Send message
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {sent
              ? 'Your email app should open with the message ready to send.'
              : ''}
          </p>
        </form>
      </div>

      <div className="copyright">
        <span>
          © {new Date().getFullYear()} {profile.name.toUpperCase()} · BUILT WITH
          REACT
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}

export default Contact
