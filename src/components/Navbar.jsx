import { useState } from 'react'
import { navLinks, profile, sectionIds } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  const close = () => setOpen(false)
  const isDark = theme === 'dark'

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={close} aria-label="Home">
        {profile.initials}
        <span>.</span>
      </a>

      <div className={`nav-links${open ? ' open' : ''}`} id="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={close}
            className={active === link.id ? 'active' : undefined}
            aria-current={active === link.id ? 'true' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <a className="nav-cta" href="#contact">
          LET'S TALK <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          title={isDark ? 'Light theme' : 'Dark theme'}
        >
          <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
        </button>

        <button
          type="button"
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
