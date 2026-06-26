import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>The Husky Pack</h4>
            <p>A community membership for husky owners who want structure, guidance, and real people who get it.</p>
            <div className="social-links">
              <a href="https://instagram.com/thehuskymoon" target="_blank" rel="noopener noreferrer">@thehuskymoon</a>
              <a href="https://instagram.com/thehuskymethod" target="_blank" rel="noopener noreferrer">@thehuskymethod</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://thehuskymethod.com">The Husky Method</a></li>
              <li><a href="https://whop.com/the-husky-pack/the-husky-pack-a8/">Join The Pack</a></li>

              <li><a href="mailto:Thesiberianhuskymoon@gmail.com">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Questions?</h4>
            <p>
              <a href="mailto:Thesiberianhuskymoon@gmail.com">
                Thesiberianhuskymoon@gmail.com
              </a>
            </p>
            <p className="footer-note">Built for husky owners. By husky owners. From New Jersey with love.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 The Husky Pack. All rights reserved.</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <p className="footer-credit">
            Built by <a href="https://www.instagram.com/hadibuilds_/" target="_blank" rel="noopener noreferrer">@hadibuilds_</a>
          </p>
        </div>
      </div>
    </footer>
  );
}