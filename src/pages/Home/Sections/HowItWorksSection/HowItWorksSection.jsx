import React from 'react';
import './HowItWorksSection.scss';

const steps = [
  {
    number: '1',
    title: 'Assess',
    description: 'Take skill assessments to measure your strengths and gaps.'
  },
  {
    number: '2',
    title: 'Learn',
    description: 'Follow a personalized path with curated learning content.'
  },
  {
    number: '3',
    title: 'Get Opportunities',
    description: 'Receive internship and job recommendations based on your skill graph.'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works__inner">
        <header className="how-it-works__header">
          <h2>
            How it <span>Works</span>
          </h2>
          <p className="lead">Getting Started is Simple</p>
        </header>

        <div className="how-it-works__steps">
          {steps.map((step) => (
            <article key={step.number} className="how-it-works__step">
              <div className="step-number" aria-hidden="true">
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
