import React from 'react';
import './CollegeCTA.scss';

const CollegeCTA = ({ onScheduleDemo }) => {
  return (
    <section className="college-cta">
      <div className="cta-container">
        <h2 className="cta-title">
          Empower Your Future with <br />
          <span className="highlight-blue">AI-Powered Employability</span>{' '}
          Solutions
        </h2>

        <p className="cta-description">
          Whether you're a student aiming for your dream career, a college
          improving campus outcomes, or an employer looking for skilled talent
          DhiAspire Ai brings everything under one intelligent ecosystem.
        </p>

        <div className="cta-actions">
          <button className="btn-schedule" onClick={onScheduleDemo}>
            Book Demo{' '}
          </button>
          <button className="btn-view-features">View College Features</button>
        </div>
      </div>
    </section>
  );
};

export default CollegeCTA;
