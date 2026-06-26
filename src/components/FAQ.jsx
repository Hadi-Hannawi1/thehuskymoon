import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './FAQ.css';

const faqs = [
  {
    question: 'How is this different from The Husky Method course?',
    answer: 'The Husky Method course ($59 standalone) is the foundation. The Husky Pack membership includes that course plus a private community, one new training module every month, live monthly Q&As with Brittany and Mark, monthly challenges, member-only health trackers, behind-the-scenes content, and early access to future products. The membership is ongoing. The course was a one-time product.'
  },
  {
    question: 'What if I already bought The Husky Method course?',
    answer: 'Great question. We\'ll make this right. Email us at Thesiberianhuskymoon@gmail.com and we\'ll figure out how to credit your purchase toward The Husky Pack membership.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No questions. No cancellation fee. You can cancel your membership at any time from your Whop account.'
  },
  {
    question: 'What platform is this on?',
    answer: 'Whop. Everything is there. Your membership access, the course library, community feed, Q&A threads, challenge tracking. One place.'
  },
  {
    question: 'How much time does it take?',
    answer: 'As much or as little as you want. Browse the course when your husky hits a new stage. Post in the community when you have a question or win to share. Join the live Q&A if you can. Participate in challenges if they fit your life. You decide.'
  },
  {
    question: 'Will there be more advanced training?',
    answer: 'Yes. Every month, a new module gets added. Adolescence. Recall. Leash reactivity. Multi-dog homes. Travel. Raw feeding. Seasonal health issues. We keep going as long as you\'re in the pack.'
  },
  {
    question: 'What if it\'s not for me?',
    answer: 'Cancel. But honestly, try it. The community is the real magic. It\'s husky owners who actually get it. Give it two weeks. You\'ll know.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq" ref={ref}>
      <div className="container">
        <div className={inView ? 'fade-in-up' : ''}>
          <h2>Questions. Answered.</h2>
          <p className="section-subtitle">
            Everything you need to know before joining.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIndex === idx ? 'open' : ''} ${inView ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${Math.min(idx * 0.05, 0.3)}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}