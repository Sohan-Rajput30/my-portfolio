import { certifications, education } from '../data/portfolio'

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="reveal">
        <p className="eyebrow">THE FOUNDATION / 04</p>

        <h2>
          ALWAYS
          <br />
          LEARNING<span>.</span>
        </h2>
      </div>

      {education.map((item, index) => (
        <div className="education-item reveal" key={item.title}>
          <span className="education-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}

      {certifications.length > 0 && (
        <>
          <h3 className="subheading reveal">Certifications &amp; courses</h3>

          <div className="cert-grid">
            {certifications.map((cert) => {
              const body = (
                <>
                  <span className="cert-year">{cert.year}</span>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  {cert.link && (
                    <span className="cert-link">
                      View credential <span aria-hidden="true">↗</span>
                    </span>
                  )}
                </>
              )

              return cert.link ? (
                <a
                  className="cert reveal"
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {body}
                </a>
              ) : (
                <div className="cert reveal" key={cert.title}>
                  {body}
                </div>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}

export default Education
