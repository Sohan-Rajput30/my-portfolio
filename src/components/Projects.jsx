import { useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from './Projectcard'

const statuses = ['All', ...new Set(projects.map((project) => project.status))]

function Projects() {
  const [status, setStatus] = useState('All')

  const visible =
    status === 'All'
      ? projects
      : projects.filter((project) => project.status === status)

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">SELECTED WORK / 02</p>

        <h2>
          CURIOSITY
          <br />
          IN PRACTICE<span>.</span>
        </h2>
      </div>

      {statuses.length > 2 && (
        <div className="filters" role="group" aria-label="Filter projects by status">
          {statuses.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter${item === status ? ' active' : ''}`}
              aria-pressed={item === status}
              onClick={() => setStatus(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid">
        {visible.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
