import "./summary.css";
import { motion } from "framer-motion";

function Summary() {
  return (
    <section className="summary-section" id="summary">
      <motion.div
        className="summary-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="summary-title">Professional Summary</h2>

        <p className="summary-text">
          Software Development Engineer with <strong>1.5+ years of experience</strong>{" "}
          in Java backend development and production support. Strong foundation in{" "}
          <strong>REST APIs, Data Structures, and Object-Oriented Programming</strong>,
          with hands-on experience delivering clean, scalable, and
          production-ready systems in Agile environments.
        </p>

        {/* STAT CHIPS */}
        <motion.div
          className="summary-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-chip">
            <span className="stat-value">1.5+</span>
            <span className="stat-label">Years Experience</span>
          </div>

          <div className="stat-chip">
            <span className="stat-value">10+</span>
            <span className="stat-label">Projects</span>
          </div>

          <div className="stat-chip">
            <span className="stat-value">3★</span>
            <span className="stat-label">CodeChef</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Summary;
