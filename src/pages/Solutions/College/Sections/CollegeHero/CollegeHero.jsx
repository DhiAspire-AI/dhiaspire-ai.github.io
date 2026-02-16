import React from 'react';
import './CollegeHero.scss';

const CollegeHero = ({ onBookDemo }) => {
  const keyPillars = ['Measure', 'Improve', 'Demonstrate'];

  return (
    <section className="college-hero">
      <div className="hero-background">
        <div className="blob blob-left" />
        <div className="blob blob-right" />
        <div className="blob blob-bottom-right" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">
              <span className="highlight-blue">AI-Powered Employability</span> & Skill Development
            </span>
            <span className="title-line">Platform for Colleges</span>
          </h1>

          <p className="hero-intro">
            DhiAspire empowers colleges with comprehensive AI-driven tools to
          </p>

          <div className="pill-container" aria-label="College outcomes focus">
            {keyPillars.map((pillar) => (
              <span key={pillar} className="pill">
                {pillar}
              </span>
            ))}
          </div>

          <p className="hero-outro">student employability outcomes.</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary">Get Started</button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={onBookDemo}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeHero;
