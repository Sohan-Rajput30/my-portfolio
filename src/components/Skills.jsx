import { useState } from 'react'
import { skills } from '../data/portfolio'

const categories = ['All', ...new Set(skills.map((skill) => skill.category))]

function Skills() {
  const [category, setCategory] = useState('All')

  const visible =
    category === 'All'
      ? skills
      : skills.filter((skill) => skill.category === category)

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading reveal">
        <p className="eyebrow">MY TOOLKIT / 01</p>

        <h2>
          LEARNING TO
          <br />
          BUILD &amp; SECURE<span>.</span>
        </h2>
      </div>

      <div className="filters" role="group" aria-label="Filter skills by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter${item === category ? ' active' : ''}`}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {visible.map((skill, index) => (
          <div className="skill-item" key={skill.name}>
            <span className="skill-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span>
              {skill.name}
              <small className="skill-category">{skill.category}</small>
            </span>

            <span className="skill-symbol" aria-hidden="true">
              ↗
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
