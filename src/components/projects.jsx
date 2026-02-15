import './projects.css'
import Projectcard from '../components/projectcard'
import { TopProjects } from '../Data/ProfessnalData'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="projects-heading">Selected Projects</h2>

      <div className="projects-grid">
        {TopProjects.slice(0, 3).map((project, index) => (
          <Projectcard key={index} {...project} />
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="projects-btn-container">
        <Link to="/all-projects" className="see-all-btn">
          See All Projects →
        </Link>
      </div>

    </section>
  )
}

export default Projects
