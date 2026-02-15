import "./awards.css";
import { motion } from "framer-motion";
import {awards} from "../Data/ProfessnalData"


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

function Awards() {
  return (
    <section className="awards-section" id="awards">
      <motion.h2
        className="awards-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Awards & Achievements
      </motion.h2>

      <motion.div
        className="awards-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {awards.map((award, index) => (
          <motion.div
            className="award-card"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <h3 className="award-title">{award.title}</h3>

            <span className="award-meta">
              {award.issuer} • {award.year}
            </span>

            <p className="award-desc">{award.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Awards;
