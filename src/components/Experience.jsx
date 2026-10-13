import { experience } from '../data/portfolio'

function Experience() {
  if (experience.length === 0) return null

  return (
    <section className="experience-section" id="experience">
      <div className="section-heading reveal">
        <p className="eyebrow">WHERE I'VE WORKED / 03</p>

        <h2>
          HANDS-ON
          <br />
          EXPERIENCE<span>.</span>
        </h2>
      </div>

      <ol className="timeline">
        {experience.map((item) => (
          <li className="timeline-item reveal" key={`${item.role}-${item.period}`}>
            <p className="timeline-period">{item.period}</p>

            <div className="timeline-body">
              <h3>{item.role}</h3>
              <p className="timeline-org">
                {item.org}
                {item.location && ` · ${item.location}`}
              </p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
