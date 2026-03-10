import React from 'react';
import './StudentCTA.scss';

const StudentCTA = () => {
  return (
    <section className="student-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            <span className="highlight-blue">AI Career Guidance</span> & Employability
            <br />
            Platform for Students
          </h2>
          <div className="cta-actions">
            <button className="btn btn-primary">
              <span>Start Your Free Career Assessment</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(20px, 2vw, 24px)', height: 'clamp(20px, 2vw, 24px)', stroke: 'currentColor', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>
            <button className="btn btn-outline">
              <span>Explore Student Features</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(20px, 2vw, 24px)', height: 'clamp(20px, 2vw, 24px)', stroke: 'currentColor', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCTA;
