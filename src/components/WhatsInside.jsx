import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WhatsInside.css';

const features = [
  {
    title: 'The Full Husky Method Course',
    description: 'Access the complete training course inside your membership. Lifetime updates as we add new chapters.',
    icon: '📚'
  },
  {
    title: 'Private Community Feed',
    description: 'Post photos and videos of your husky. Ask questions. Share wins. Get feedback from real owners who get it.',
    icon: '👥'
  },
  {
    title: 'One New Training Module Per Month',
    description: 'Beyond the first 14 days. Topics like recall, leash reactivity, adolescence, multi-dog homes, travel, and raw feeding.',
    icon: '🎓'
  },
  {
    title: 'Monthly Live Q&A',
    description: 'Ask Brittany and Mark anything. Real questions. Real answers. Member-submitted topics.',
    icon: '💬'
  },
  {
    title: 'Monthly Challenges',
    description: 'Teach your husky one new command, track a health milestone, or solve a behavior issue. Winners featured on @thehuskymoon.',
    icon: '🏆'
  },
  {
    title: 'Husky Health Tracker',
    description: 'Downloadable PDF template. Coat log. Diet tracker. Vet visit records. Exercise log. Updated quarterly.',
    icon: '📋'
  },
  {
    title: 'Behind-the-Scenes Content',
    description: 'Outtakes. Daily routine clips. Unfiltered Moon and Shadow moments. Never shared on Instagram.',
    icon: '🎬'
  },
  {
    title: 'Early Access & Discounts',
    description: 'First to know about Volume 2 content and future products. Member-only subscriber discounts on partner offers.',
    icon: '⭐'
  }
];

export default function WhatsInside() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="whats-inside" className="whats-inside" ref={ref}>
      <div className="container">
        <div className={inView ? 'fade-in-up' : ''}>
          <h2>What's Inside Your Membership</h2>
          <p className="section-subtitle">
            Everything you need to build structure with your husky. Everything Moon and Shadow live every day.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`feature-card ${inView ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}