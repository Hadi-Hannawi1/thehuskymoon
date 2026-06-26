import React from 'react';
import { useInView } from 'react-intersection-observer';
import './CommunityPreview.css';

const communityFeatures = [
  'New members introducing their husky with a photo and their story',
  'Training questions answered by Brittany, Mark, and experienced members',
  'Before-and-after wins shared and celebrated',
  'Raw feeding advice and meal plan ideas',
  'Travel tips from families who bring their huskies everywhere',
  'Multi-dog household challenges and solutions',
  'Behavioral breakthroughs and how to move forward',
  'A space where someone understands the real husky chaos',
  'Monthly challenges with real accountability and recognition'
];

export default function CommunityPreview() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="community-preview" ref={ref}>
      <div className="container">
        <div className={inView ? 'fade-in-up' : ''}>
          <h2>Your Private Community</h2>
          <p className="section-subtitle">
            Finally, a place where everyone understands your husky.
          </p>
        </div>

        <div className={`community-box ${inView ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <h3>What The Husky Pack community looks like</h3>
          <ul className="community-list">
            {communityFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}