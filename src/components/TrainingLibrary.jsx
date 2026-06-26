import React from 'react';
import { useInView } from 'react-intersection-observer';
import './TrainingLibrary.css';

const pillars = [
  {
    number: '01',
    title: 'Routine',
    description: 'Your dog learns your life through a consistent daily flow. Predictability builds calm.'
  },
  {
    number: '02',
    title: 'Timing',
    description: 'Rewards land at the right moment. The wrong second teaches the wrong lesson.'
  },
  {
    number: '03',
    title: 'Environment',
    description: 'Control what they practice. What they practice becomes your future dog.'
  },
  {
    number: '04',
    title: 'Potty, Solved',
    description: 'Out after sleep, food, play. Reward immediately, outside. No drama.'
  },
  {
    number: '05',
    title: 'The Crate',
    description: 'A bedroom, not a punishment. Quiet, clean, theirs.'
  },
  {
    number: '06',
    title: 'The Name Game',
    description: 'Say name → they look → reward. The foundation of recall and focus.'
  }
];

export default function TrainingLibrary() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="training" className="training-library" ref={ref}>
      <div className="container">
        <div className={inView ? 'fade-in-up' : ''}>
          <h2>The Training Library</h2>
          <p className="section-subtitle">
            Six pillars. Zero fluff. This is everything that happens in the first 14 days. And what happens after.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`pillar-card ${inView ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="pillar-number">{pillar.number}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="library-note" style={{ marginTop: '60px', textAlign: 'center', color: 'var(--text-light)' }}>
          Plus one new module each month, building on these foundations as your husky grows and changes.
        </p>
      </div>
    </section>
  );
}