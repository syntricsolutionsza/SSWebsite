/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import MenuDrawer from './components/MenuDrawer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import SpotlightHero from './components/SpotlightHero';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Ease cubic-bezier described in prompt
  const customEase = [0.16, 1, 0.3, 1];

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container" id="app-root">
      {/* Cinematic grid splash overlay transition */}
      <div className="splash-overlay" id="creative-splash">
        <div className="splash-row splash-row-top">
          <div className="splash-box" />
          <div className="splash-box" />
          <div className="splash-box" />
          <div className="splash-box" />
          <div className="splash-box" />
        </div>
        <div className="splash-row splash-row-bottom">
          <div className="splash-box" />
          <div className="splash-box" />
          <div className="splash-box" />
          <div className="splash-box" />
          <div className="splash-box" />
        </div>
      </div>

      {/* Fixed Navbar */}
      <Navbar
        onMenuOpen={() => setMenuOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Slide out navigation drawer */}
      <AnimatePresence>
        {menuOpen && (
          <MenuDrawer
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        )}
      </AnimatePresence>

      {/* Main Content Areas */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <SpotlightHero key="home-experience" onNavigate={handleNavigate} />
        ) : (
          <div style={{ width: '100%', display: 'contents' }} key="subpage-experience">
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'services' && <ServicesPage />}
            {currentPage === 'contact' && <ContactPage />}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
