import {
  about,
  certifications,
  experience,
  profile,
  projects,
  skills,
} from '../data/portfolio'

function About() {
  const stats = [
    { value: projects.length, label: 'Projects' },
    { value: skills.length, label: 'Skills' },
    { value: certifications.length, label: 'Certifications' },
    { value: experience.length, label: 'Roles' },
  ].filter((item) => item.value > 0)

  return (
    <section className="about-section" id="about">
      <div className="intro-strip">
        <div>
          <p className="strip-label">{about.label}</p>
          {profile.photo && (
            <img
              className="about-photo"
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
            />
          )}
        </div>
        <p className="strip-copy">{about.summary}</p>
      </div>

      <dl className="stats">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{String(item.value).padStart(2, '0')}</dd>
          </div>
        ))}
      </dl>

      <div className="focus-grid">
        {about.focus.map((item) => (
          <article className="focus-item reveal" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
