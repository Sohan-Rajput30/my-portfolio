import { skills } from '../data/portfolio'

// Slow scrolling strip of skill names. Pauses on hover.
function Marquee() {
  const items = skills.map((skill) => skill.name)

  return (
    <div className="marquee" aria-label="Skills overview">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Marquee
