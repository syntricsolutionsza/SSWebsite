import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Globe, Layout, Database, ArrowUpRight, X } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

const FAQ_DATA = [
  {
    question: 'How does Syntrics balance desktop-first precision with mobile-first code?',
    answer: 'We design with a desktop-first pixel layout strategy to match fluid wide screen visuals and maximize density, but implement with responsive code engines (like CSS clamps and flexible flex layouts) to guarantee that same pixel-level fidelity across native touch screens without running slow listener loops.'
  },
  {
    question: 'What is an "Offline-First" state model?',
    answer: 'It means local user states are never interrupted by cellular dropouts. We construct local-first caches using SQLite/Room on mobile and robust storage pipelines on web. Server communication is queued in secure background sync operations, ensuring absolute continuous productivity.'
  },
  {
    question: 'Do you provide design files, or do we start straight with code?',
    answer: 'We deliver complete high-fidelity Figma typography blueprints and interactive transition mockups first. Once you sign off on the design guidelines, our engineers translate those visual tokens directly into atomic Tailwind CSS utilities and clean React/Kotlin codebases.'
  },
  {
    question: 'Why do you emphasize native frameworks over generic cross-platform SDKs?',
    answer: 'Generic multi-layer wrappers introduce unnecessary frame drops, battery drain, and dependency security risks. By building in native Kotlin/Compose for Android and pure React/TypeScript for web, we maximize processing speeds, guarantee 60fps animations, and ensure long-term code maintainability.'
  },
  {
    question: 'How are project updates and milestones shared during development?',
    answer: 'You receive direct access to automated staging sites with persistent build logs, active GitHub pull request tracking, and clean, incremental demo clips. No vague updates or artificial infrastructure—just raw, functional progress.'
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0); // Open first by default for a generous feel

  // Simple mapper helper for Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone':
        return <Smartphone size={18} />;
      case 'globe':
        return <Globe size={18} />;
      case 'layout':
        return <Layout size={18} />;
      case 'database':
        return <Database size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <motion.div
      className="subpage-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="services-page"
    >
      <div className="subpage-header">
        <span className="subpage-label">What We Do</span>
        <h1 className="subpage-title">Engineering services built for speed and stability</h1>
        <p className="subpage-desc">
          We combine precise desktop aesthetics with mobile-first code, supplying our clients with custom software that performs flawlessly.
        </p>
      </div>

      {/* Editorial Service List with thin, high-contrast line dividers */}
      <div className="editorial-services-list" id="services-editorial-container">
        {SERVICES_DATA.map((service, idx) => (
          <motion.div
            key={service.id}
            className="editorial-service-block cursor-pointer group"
            onClick={() => setSelectedService(service)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            id={`service-block-${service.id}`}
          >
            {/* Top thin high-contrast line divider */}
            <div className="editorial-divider-line" id={`service-divider-${service.id}`} />

            <div className="editorial-service-row">
              {/* Index & Icon column */}
              <div className="editorial-col-meta">
                <span className="editorial-index">0{idx + 1}</span>
                <div className="editorial-icon-wrapper" id={`service-icon-wrap-${service.id}`}>
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Title and Description column */}
              <div className="editorial-col-main">
                <h3 className="editorial-service-title">{service.title}</h3>
                <p className="editorial-service-desc">{service.description}</p>
                <div className="editorial-view-flow-indicator">
                  <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                    View workflow details &rarr;
                  </span>
                </div>
              </div>

              {/* Tags and Action column */}
              <div className="editorial-col-tags">
                <div className="editorial-service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="editorial-service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Details Button requested by user */}
                <button
                  className="editorial-details-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  id={`details-trigger-${service.id}`}
                >
                  <span>Details</span>
                  <ArrowUpRight size={14} className="editorial-arrow-icon" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Bottom enclosing divider line */}
        <div className="editorial-divider-line" id="service-divider-bottom" />
      </div>

      <div className="section-footer-note">
        Have a specialized tech stack requirement? Inquire through our Contact page.
      </div>

      {/* Accordion FAQ section explaining Syntrics' premium development methodology */}
      <div className="faq-section" id="methodology-faq-section">
        <div className="faq-header">
          <span className="faq-badge-mono">Methodology Q&A</span>
          <h2 className="faq-section-title">How we craft robust software</h2>
          <p className="faq-section-desc">
            An inside look at our architectural decisions, native engineering values, and desktop-to-mobile execution rules.
          </p>
        </div>

        <div className="faq-accordion-list" id="faq-accordion-container">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={index}
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                id={`faq-item-${index}`}
              >
                <button
                  className="faq-question-button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  id={`faq-trigger-${index}`}
                >
                  <span className="faq-question-num">0{index + 1}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-indicator">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <path
                        d="M6 1V11M1 6H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-container"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer-text">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Expandable Drawer Overlay */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Blurred dark dimming background overlay */}
            <motion.div
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              id="workflow-drawer-backdrop"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              className="drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              id="workflow-drawer-panel"
            >
              {/* Drawer Header Row */}
              <div className="drawer-header-row">
                <div className="drawer-icon-and-title">
                  <div className="drawer-icon-wrap">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="drawer-subtitle-mono">Syntrics Framework</span>
                    <h2 className="drawer-title">{selectedService.title}</h2>
                  </div>
                </div>
                <button
                  className="drawer-close-btn"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close details"
                  id="drawer-close-trigger"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Scrollable Body Content */}
              <div className="drawer-scroll-body">
                {/* Approach description section */}
                {selectedService.approach && (
                  <div className="drawer-approach-section" id="drawer-approach-section">
                    <h4 className="approach-label">Our Approach</h4>
                    <p className="approach-text">{selectedService.approach}</p>
                  </div>
                )}

                <div className="workflow-timeline-title">
                  Phase-by-Phase Execution Workflow
                </div>

                {/* Vertical Timeline Step Blocks */}
                <div className="drawer-timeline-list" id="drawer-timeline-list">
                  {selectedService.workflow?.map((step, idx) => (
                    <div className="drawer-timeline-step" key={idx} id={`workflow-step-${idx}`}>
                      <div className="step-phase-badge">{step.phase}</div>
                      <div className="step-content-box">
                        <h4 className="step-title">{step.title}</h4>
                        <p className="step-details">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Closing action container */}
                <div className="drawer-cta-section">
                  <p className="drawer-cta-desc">
                    All phases are fully managed by Syntrics with clean git updates, active staging sites, and clear milestones.
                  </p>
                  <button
                    className="drawer-cta-button"
                    onClick={() => setSelectedService(null)}
                    id="drawer-cta-confirm"
                  >
                    Return to Services
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
