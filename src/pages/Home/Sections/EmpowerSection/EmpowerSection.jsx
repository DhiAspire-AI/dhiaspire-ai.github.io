import React from 'react';
import './EmpowerSection.scss';

const EmpowerSection = ({ onBookDemo }) => {
  return (
    <section id="empower" className="empower-section">
      <div className="empower-section__inner container">
        <header className="empower-header">
          <h2>
            Empower Your Future with <br />
            <span>AI-Powered Employability</span> Solutions
          </h2>
          <p className="description">
            Whether you're a student aiming for your dream career, a college improving campus outcomes, or an
            employer looking for skilled talent DhiAspire brings everything under one intelligent ecosystem.
          </p>
        </header>

        <div className="empower-ctas">
          <button type="button" className="btn btn--primary">
            Get Started
          </button>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={onBookDemo}
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
