import { motion } from 'motion/react';
import { Calendar, User, Code, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.div
      className="subpage-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="about-page"
    >
      <div className="subpage-header">
        <span className="subpage-label">About Our Studio</span>
        <h1 className="subpage-title">We craft premium Android Apps & Custom Websites</h1>
        <p className="subpage-desc">
          Founded on a commitment to speed, usability, and pure layout craftsmanship, Syntrics builds digital experiences that accelerate your goals.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Card: Core Philosophy */}
        <div className="about-card" id="philosophy-card">
          <div>
            <h3 className="about-card-title">Our Architecture</h3>
            <p className="about-card-text">
              We started Syntrics in <strong>2024</strong> with a singular focus: delivering performance-critical, beautiful applications without the unnecessary layers. We believe every pixel should serve a purpose, and every micro-interaction should delight.
            </p>
            <p className="about-card-text">
              Our codebases are built using modern native Kotlin for Android applications, and high-speed TypeScript React for web platforms. By avoiding multi-framework bloat, our applications load faster and survive the test of scale.
            </p>
          </div>

          <div className="about-stats-row">
            <div className="stat-item" id="stat-apps">
              <div className="stat-num">100%</div>
              <div className="stat-label">Native Android</div>
            </div>
            <div className="stat-item" id="stat-perf">
              <div className="stat-num">99+</div>
              <div className="stat-label">Lighthouse Web Speed</div>
            </div>
          </div>
        </div>

        {/* Right Card: Founder & Ownership */}
        <div className="about-profile" id="founder-profile">
          <div className="profile-header">
            <div className="profile-avatar">WS</div>
            <div className="profile-meta">
              <h4>Wandile Soji</h4>
              <p>Founder & Chief Engineer</p>
            </div>
          </div>

          <p className="profile-bio">
            Wandile Soji founded Syntrics in 2024 to bring elite engineering standards to small, medium, and enterprise clients alike. With extensive experience in native mobile applications and responsive frontend architectures, Wandile oversees all core development and design systems.
          </p>

          <p className="profile-bio">
            At Syntrics, Wandile guides a lean, dedicated team of specialists who care deeply about type safety, memory leaks, fluid motion design, and high-contrast styling.
          </p>

          <div className="profile-quote">
            "We don't build generic software templates. We build custom-molded, blazingly fast digital engines designed for responsive precision."
          </div>
        </div>
      </div>

      <div className="section-footer-note">
        Syntrics Studio • Established 2024 • Owned by Wandile Soji
      </div>
    </motion.div>
  );
}
