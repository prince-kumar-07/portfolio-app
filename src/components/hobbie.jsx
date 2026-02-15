import "./hobbie.css";
import { motion } from "framer-motion";
import { hobbies } from "../Data/ProfessnalData";


function Hobbies() {
  return (
    <section className="hobbies-section" id="hobbies">
      <motion.h2
        className="hobbies-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Interests
      </motion.h2>

      <motion.div
        className="hobbies-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="hobby-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-desc">{hobby.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hobbies;
