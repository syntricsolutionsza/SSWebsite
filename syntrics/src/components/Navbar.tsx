import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  onMenuOpen: () => void;
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

export default function Navbar({ onMenuOpen, onNavigate, currentPage }: NavbarProps) {
  return (
    <motion.nav
      className="navbar-fixed"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="main-nav"
    >
      <div className="navbar-left">
        {/* Logo */}
        <div className="nav-logo" onClick={() => onNavigate('home')} id="logo-clickable">
          <div className="logo-svg-wrapper">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'rotate(-35deg)' }}
            >
              <rect x="4" y="6" width="5" height="12" rx="1.5" fill="#111111" />
              <rect x="13" y="6" width="5" height="12" rx="1.5" fill="#111111" />
            </svg>
          </div>
          <span className="logo-brand-text">
            Syntrics
          </span>
        </div>

        {/* Menu button */}
        <button className="menu-btn" onClick={onMenuOpen} id="menu-btn-trigger">
          <div className="circle-plus-wrapper">
            <Plus size={12} strokeWidth={3} color="#111111" />
          </div>
          <span className="menu-btn-text">Menu</span>
        </button>

        {/* Tags Pill */}
        <div className="tags-pill" id="tags-pill-bionics">
          <span className="tag-label">Android Apps</span>
          <div className="tag-divider"></div>
          <span className="tag-label">Web Ecosystems</span>
        </div>
      </div>

      <div className="navbar-right">
        {/* Adaptive Systems Right Pill */}
        <div className="navbar-right-pill" id="right-pill-adaptive">
          <span className="right-pill-label">Syntrics Intelligence</span>
          <button className="circle-dots-btn">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="3" height="3" rx="0.5" fill="#ffffff" />
              <rect x="7" y="2" width="3" height="3" rx="0.5" fill="#ffffff" />
              <rect x="2" y="7" width="3" height="3" rx="0.5" fill="#ffffff" />
              <rect x="7" y="7" width="3" height="3" rx="0.5" fill="#ffffff" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
