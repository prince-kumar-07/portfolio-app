import './projects.css'
import Projectcard from '../components/projectcard'
import { projects } from '../Data/ProfessnalData';

 function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

