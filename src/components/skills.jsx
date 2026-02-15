import "./skills.css";
import { motion } from "framer-motion";
import {skills} from "../Data/ProfessnalData"


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            variants={cardVariants}
            key={index}
            whileHover={{ y: -10 }}
          >
            <h3 className="skill-title">{skill.category}</h3>

            <div className="skill-items">
              {skill.items.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
