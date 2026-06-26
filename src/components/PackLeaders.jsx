import React from 'react';
import { useInView } from 'react-intersection-observer';
import './PackLeaders.css';

const leaders = [
  {
    name: 'Moon',
    role: 'The Star',
    image: '🐕',
    bio: 'Siberian Husky. The talking face you see on @thehuskymoon. Four to six years old. Everything we teach comes from living with Moon. From the chaos to the calm.'
  },
  {
    name: 'Shadow',
    role: 'The Younger Brother',
    image: '🐕‍🦺',
    bio: 'Moon\'s little brother. Husky. Just turned three. Younger, wilder, and the reason we keep refining the method. Different personality. Same principles. Same results.'
  },
  {
    name: 'Brittany & Mark',
    role: 'The Pack Leaders',
    image: '👨‍👩‍👧‍👦',
    bio: 'A family of four plus two huskies. They live this every day. Real jobs. Real schedules. Real chaos. Real solutions. 402K followers on Instagram watch them figure it out in real time.'
  }
];

export default function PackLeaders() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="pack-leaders" className="pack-leaders" ref={ref}>
      <div className="container">
        <div className={inView ? 'fade-in-up' : ''}>
          <h2>Meet Your Pack Leaders</h2>
          <p className="section-subtitle">
            The real people (and huskies) behind The Husky Method.
          </p>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className={`leader-card ${inView ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="leader-image">{leader.image}</div>
              <h4>{leader.name}</h4>
              <p className="leader-role">{leader.role}</p>
              <p>{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}