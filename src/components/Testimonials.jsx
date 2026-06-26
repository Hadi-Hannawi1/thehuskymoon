import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'When we first got Moon, I was completely overwhelmed. Once we built a real routine and gave him structure, everything changed. He became calm, confident — and so did I.',
    author: 'Brittany',
    role: 'Co-founder, @thehuskymoon'
  },
  {
    quote: 'Moon and Shadow are living proof. No tricks, no gadgets — just consistency and clear expectations. People always ask how our huskies are so well-behaved. The answer is always the same.',
    author: 'Mark',
    role: 'Co-founder'
  }
];

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <h2 className={inView ? 'fade-in-up' : ''}>From The Pack Leaders</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`testimonial-card ${inView ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="testimonial-footer">
                <p className="author">{testimonial.author}</p>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}