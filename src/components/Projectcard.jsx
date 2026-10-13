function ProjectCard({
  number,
  title,
  category,
  description,
  status,
  tags,
  image,
  links = {},
}) {
  const hasLinks = links.github || links.live

  return (
    <article className="project-card">
      {image && (
        <img
          className="project-image"
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
        />
      )}

      <div className="project-card-top">
        <span className="project-number">{number}</span>
        <span className="project-status">{status}</span>
      </div>

      <p className="project-category">{category}</p>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      {hasLinks && (
        <div className="project-links">
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer noopener">
              Source code <span aria-hidden="true">↗</span>
            </a>
          )}
          {links.live && (
            <a href={links.live} target="_blank" rel="noreferrer noopener">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}

      <div className="project-tags">
        {tags.map((tag) => (
          <span className="project-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <span className="project-arrow" aria-hidden="true">
        ↗
      </span>
    </article>
  )
}

export default ProjectCard
