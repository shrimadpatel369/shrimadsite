import { projects } from '../data';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section className="projects-section section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                {Array.isArray(project.description) ? (
                  <ul className="job-description">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
              {/* Remove project link if not present */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;