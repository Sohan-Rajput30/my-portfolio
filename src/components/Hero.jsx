import { profile } from '../data/portfolio'

function Hero() {
  const socials = profile.socials.filter((item) => item.href)

  return (
    <section className="hero" id="home">
      <div className="hero-topline">
        <span>{profile.topline}</span>

        <span className="availability">
          <span className="status-dot" />
          {profile.status}
        </span>
      </div>

      <div className="hero-heading">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          {profile.firstName}
          <br />
          <span className="outlined-text">{profile.lastName}</span>
        </h1>

        <div className="hero-bottom">
          <div>
            <p className="hero-description">
              {profile.heroLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < profile.heroLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
              {profile.resume && (
                <a
                  className="btn btn-ghost"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  download
                >
                  Download resume
                </a>
              )}
              {socials.map((item) => (
                <a
                  key={item.label}
                  className="btn btn-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <a
            className="round-link"
            href="#about"
            aria-label="Scroll to about section"
          >
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-footer">
        <span>{profile.footerLeft}</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  )
}

export default Hero
