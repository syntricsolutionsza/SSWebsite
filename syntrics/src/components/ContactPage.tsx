import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, MessageSquare, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'website',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Syntrics Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType.toUpperCase()}\n\n` +
      `Project Specifications / Goals:\n${formData.message}`
    );
    const mailtoUrl = `mailto:syntricsolutionsza@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Open the user's local email client with the pre-filled message
      window.location.href = mailtoUrl;

      setFormData({
        name: '',
        email: '',
        projectType: 'website',
        message: ''
      });
    }, 1000);
  };

  return (
    <motion.div
      className="subpage-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="contact-page"
    >
      <div className="subpage-header">
        <span className="subpage-label">Get In Touch</span>
        <h1 className="subpage-title">Let's build your Android app or custom website</h1>
        <p className="subpage-desc">
          Ready to kickstart your project in 2026? Reach out to Wandile Soji and the Syntrics team for an architectural consultation or project quote.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Panel */}
        <div className="contact-info-panel">
          <div className="contact-info-card" id="contact-details-card">
            <h3 className="contact-info-title">Studio Details</h3>
            
            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="contact-detail">
                  <h5>Direct Email</h5>
                  <p>
                    <a href="mailto:syntricsolutionsza@gmail.com" className="hover:underline text-[#111111]">
                      syntricsolutionsza@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="contact-detail">
                  <h5>Office Hotline</h5>
                  <p>
                    <a href="tel:+27769297953" className="hover:underline text-[#111111]">
                      076 929 7953
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper" style={{ backgroundColor: 'rgba(37, 211, 102, 0.08)', color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.15)' }}>
                  <MessageSquare size={18} />
                </div>
                <div className="contact-detail">
                  <h5>WhatsApp Message</h5>
                  <p>
                    <a href="https://wa.me/27769297953?text=Hi%20Syntrics,%20I'm%20interested%20in%20discussing%20a%20project!" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-[#25D366]">
                      076 929 7953 (Chat Now)
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper" style={{ backgroundColor: 'rgba(225, 48, 108, 0.08)', color: '#E1306C', borderColor: 'rgba(225, 48, 108, 0.15)' }}>
                  <Instagram size={18} />
                </div>
                <div className="contact-detail">
                  <h5>Instagram</h5>
                  <p>
                    <a href="https://instagram.com/syntricsolutions_" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-[#E1306C]">
                      @syntricsolutions_
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="contact-detail">
                  <h5>Headquarters</h5>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card" style={{ padding: '24px' }}>
            <h4 style={{ color: 'var(--color-blue-dark)', fontWeight: 600, fontSize: '16px', marginBottom: '8px' }}>
              Why choose Syntrics?
            </h4>
            <p style={{ fontSize: '13px', color: '#555555', lineHeight: '1.5' }}>
              We do not outsource or use heavy, bloated template engines. Every component is hand-crafted and validated for speed, memory, and native integration.
            </p>
          </div>
        </div>

        {/* Contact Form Wrapper */}
        <div className="contact-form-wrapper" id="form-container">
          {isSubmitted && (
            <motion.div
              className="submit-success-banner"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="success-banner"
            >
              <CheckCircle size={20} />
              <div>
                <strong>Thank you!</strong> Your project details have been successfully prepared. A draft has been launched in your email app to <strong>syntricsolutionsza@gmail.com</strong>. Wandile Soji and the Syntrics team will respond within 12 hours.
              </div>
            </motion.div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} id="contact-form-element">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                id="form-name-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g. john@company.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="form-email-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">What are you looking to build?</label>
              <select
                className="form-input"
                style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23111111\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                id="form-project-select"
              >
                <option value="android">Native Android Application</option>
                <option value="website">Custom Responsive Website</option>
                <option value="both">Both (Full digital platform suite)</option>
                <option value="consultation">Architectural Technical Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Specifications / Goals</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Briefly describe your objectives, approximate timeline, and any technical hurdles you are trying to solve..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                id="form-message-input"
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}
              disabled={isSubmitting}
              id="form-submit-btn"
            >
              <span>{isSubmitting ? 'Transmitting Specs...' : 'Send Inquiry To Syntrics'}</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      <div className="section-footer-note">
        All communication is protected by enterprise confidentiality standards.
      </div>
    </motion.div>
  );
}
