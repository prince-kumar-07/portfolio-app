import "./education.css";
import { motion } from "framer-motion";
import { education } from "../Data/ProfessnalData";



const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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

function Education() {
  return (
    <section className="education-section" id="education">
      <motion.h2
        className="education-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div
            className="education-card"
            variants={cardVariants}
            key={index}
          >
            <h3 className="education-degree">{edu.degree}</h3>

            <span className="education-field">{edu.field}</span>

            <span className="education-meta">
              {edu.institute} • {edu.duration}
            </span>

            <span className="education-location">{edu.location}</span>

            <ul className="education-highlights">
              {edu.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Education;
