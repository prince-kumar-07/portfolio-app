import "./conatact.css";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import {socialLinks} from '../Data/ProfessnalData'

function Contact() {
  // console.log(socialLinks.github)
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title">Let’s Work Together</h2>

        <p className="contact-desc">
          Open to backend-focused roles, challenging projects, and impactful
          engineering work. Let’s build something solid and scalable.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:prince-kumar12@outlook.com"
            className="contact-btn primary"
          >
            Contact Me
          </a>

          <a
            href="/PRINCE_KUMAR_RESUME.pdf"
            className="contact-btn outline"
            download
          >
            Download Resume
          </a>
        </div>

        <div className="contact-socials">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <Github size={22} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={22} />
          </a>
          <a href="mailto:prince-kumar12@outlook.com">
            <Mail size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
