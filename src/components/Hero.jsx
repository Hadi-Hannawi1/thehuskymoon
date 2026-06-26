import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="hero" ref={ref}>
      <div className="hero-background"></div>
      <div className="container">
        <div className="demo-banner">
          <p>📍 This is a quick demo of The Husky Pack concept. The actual community structure will be customized based on Brittany & Mark's feedback before launch.</p>
        </div>

        <div className={`hero-content ${inView ? 'fade-in-up' : ''}`}>
          <h1>The Husky Pack.<br />Your pack just got bigger.</h1>
          <p className="hero-subtitle">
            A monthly membership for husky owners who want structure, community, and guidance from the real experts. Moon, Shadow, Brittany, and Mark.
          </p>

          <div className="pricing-section">
            <div className="price-display">
              <span className="price">$9</span>
              <span className="billing">/month</span>
            </div>
            <p className="price-note">First 100 members lock in founding rate. After that, $12/month.</p>
          </div>

          <a href="https://whop.com/the-husky-pack/the-husky-pack-a8/" className="cta-primary">
            Join The Husky Pack
          </a>

          <p className="hero-footer-text">Founding members get lifetime $9/month access. Cancel anytime.</p>
        </div>

        <div className={`hero-image ${inView ? 'fade-in' : ''}`}>
          <div className="image-placeholder">
            <div className="placeholder-content">
              🐕 Moon & Shadow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}