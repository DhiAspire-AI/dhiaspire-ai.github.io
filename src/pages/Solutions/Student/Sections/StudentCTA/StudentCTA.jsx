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
              Start Your Free Career Assessment
            </button>
            <button className="btn btn-outline">
              Explore Student Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCTA;
