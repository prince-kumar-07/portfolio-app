import "./footer.css";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Phone,
  MapPin,
  Cake,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>Prince Kumar</h3>
          <p>
            Backend-focused Software Development Engineer building scalable,
            clean, and production-ready systems.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-info">
          <div>
            <MapPin size={16} />
            <span>
              Pionier Lake District, Gattahalli, Bengaluru, Karnataka 560099
            </span>
          </div>

          <div>
            <Mail size={16} />
            <a href="mailto:prince-kumar12@outlook.com">
              prince-kumar12@outlook.com
            </a>
          </div>

          <div>
            <Phone size={16} />
            <a href="tel:+917424961769">+91 7424961769</a>
          </div>

          <div>
            <Cake size={16} />
            <span>14 Dec 2001</span>
          </div>
        </div>

        {/* LINKS + RESUME */}
        <div className="footer-actions">
          <a
            href="/PRINCE_KUMAR_RESUME.pdf"
            download
            className="resume-btn"
          >
            <Download size={18} />
            Download Resume
          </a>

          <div className="footer-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>

            <a
              href="https://www.codechef.com"
              target="_blank"
              rel="noreferrer"
            >
              3★ CodeChef
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Prince Kumar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
