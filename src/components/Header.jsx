import React, { useState } from 'react';
import './Header.css';

export default function Header({ scrollPos }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrollPos > 50 ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <h3>The Husky Pack</h3>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('whats-inside')}>What's Inside</button>
          <button onClick={() => scrollToSection('training')}>Training</button>
          <button onClick={() => scrollToSection('pack-leaders')}>The Pack</button>
          <button onClick={() => scrollToSection('faq')}>Questions</button>
        </nav>

        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="https://whop.com/thehuskypack/" className="header-cta">
          Join Now
        </a>
      </div>
    </header>
  );
}