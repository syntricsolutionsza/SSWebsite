import { motion } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

export default function MenuDrawer({ isOpen, onClose, onNavigate, currentPage }: MenuDrawerProps) {
  if (!isOpen) return null;

  const links: { label: string; page: PageType }[] = [
    { label: 'Home Experience', page: 'home' },
    { label: 'About Syntrics', page: 'about' },
    { label: 'Our Services', page: 'services' },
    { label: 'Inquire & Contact', page: 'contact' },
  ];

  return (
    <div className="menu-drawer-backdrop" onClick={onClose} id="drawer-backdrop">
      <motion.div
        className="menu-drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        id="drawer-container"
      >
        <div className="drawer-header">
          <span className="drawer-brand">Syntrics Studio</span>
          <button className="close-drawer-btn" onClick={onClose} id="close-drawer-trigger">
            <X size={18} color="#111111" />
          </button>
        </div>

        <div className="drawer-links">
          {links.map((link) => (
            <div
              key={link.page}
              className={`drawer-link ${currentPage === link.page ? 'active' : ''}`}
              onClick={() => {
                onNavigate(link.page);
                onClose();
              }}
              id={`nav-link-${link.page}`}
            >
              <span>{link.label}</span>
              <ArrowRight size={18} style={{ opacity: currentPage === link.page ? 1 : 0.2 }} />
            </div>
          ))}
        </div>

        <div className="drawer-footer">
          <div className="drawer-owner-info">
            Owned by <strong>Wandile Soji</strong>
          </div>
          <div className="drawer-owner-info">
            Established <strong>2024</strong>
          </div>
          <div className="drawer-tagline">
            Custom High-Performance Android Apps & Websites
          </div>
        </div>
      </motion.div>
    </div>
  );
}
