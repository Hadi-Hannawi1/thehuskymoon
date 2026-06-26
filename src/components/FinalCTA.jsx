import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FinalCTA.css';

export default function FinalCTA() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="final-cta" ref={ref}>
      <div className="container">
        <div className={`cta-content ${inView ? 'fade-in-up' : ''}`}>
          <h2>Ready to Join the Pack?</h2>
          <p>$9/month. First 100 members lock in the founding rate.</p>
          <a href="https://whop.com/thehuskypack/" className="cta-primary cta-large">
            Join The Husky Pack Now
          </a>
          <p className="cta-fine-print">Founding members keep $9/month forever. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}