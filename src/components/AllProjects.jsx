import "./AllProjects.css";
import Projectcard from "../components/projectcard";
import { Projects } from "../Data/ProfessnalData";
import { Link } from "react-router-dom";

function AllProjects() {
  return (
    <section className="all-projects">

      {/* Heading */}
      <h2 className="all-projects-heading">All Projects</h2>

      {/* Back button */}
      <div className="all-projects-back">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="all-projects-grid">
        {Projects.map((project, index) => (
          <Projectcard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>

    </section>
  );
}

export default AllProjects;
