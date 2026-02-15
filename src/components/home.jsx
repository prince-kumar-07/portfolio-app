import "./home.css";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import prince from '../assets/prince.png'


export default function Home() {
  return (
    <section className="lux-home">
      {/* Ambient lights */}
      <div className="lux-light lux-light-1" />
      <div className="lux-light lux-light-2" />

      <motion.div
        className="lux-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* LEFT */}
        <div className="lux-left">
          <motion.span
            className="lux-tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            SOFTWARE DEVELOPMENT ENGINEER
          </motion.span>

          <motion.h1
            className="lux-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Prince
            <br />
            <span>Kumar</span>
          </motion.h1>

          <motion.p
            className="lux-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Backend-focused engineer crafting scalable, clean and
            production-ready systems using Java, REST APIs and modern
            DevOps tooling.
          </motion.p>

          <motion.div
            className="lux-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="lux-btn lux-btn-primary">
              View Work
            </a>
            <a href="#contact" className="lux-btn lux-btn-outline">
              Contact
            </a>
          </motion.div>

          <motion.div
            className="lux-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#"><Github size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="mailto:prince-kumar12@outlook.com"><Mail size={20} /></a>
          </motion.div>
        </div>

        <motion.div
          className="lux-right"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="lux-photo-frame">
            <img className="img-prince" src={prince} alt="Prince Kumar" />
          </div>
        </motion.div>
      </motion.div>

      
      <motion.div
        className="lux-scroll"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
