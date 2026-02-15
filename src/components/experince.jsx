import "./experince.css";
import { motion } from "framer-motion";
import {experiences} from "../Data/ProfessnalData"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <motion.h2
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <motion.div
        className="experience-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            variants={cardVariants}
            key={index}
          >
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="company">{exp.company}</span>
              <span className="meta">
                {exp.duration} • {exp.location}
              </span>
            </div>

            <ul className="experience-points">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
