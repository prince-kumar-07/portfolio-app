import "./projectCard.css";

function Projectcard({ title, description, tech, link }) {
  return (
    <article className="project-card">
      <div className="project-glow" />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        <p className="project-desc">{description}</p>

        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <a href={link} className="project-link">
          View Project →
        </a>
      </div>
    </article>
  );
}

export default Projectcard;
