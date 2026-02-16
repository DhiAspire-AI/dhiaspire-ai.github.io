import React from 'react';
import HeroRight from './HeroRight';
import './HeroSection.scss';

const HeroSection = ({ onBookDemo }) => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="blob blob-left"></div>
        <div className="blob blob-right"></div>
        <div className="blob blob-bottom-right"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Employability <br />
            Ecosystem for Institutions, <br />
            Students & Employers.
          </h1>
          <p className="hero-subtitle">
            Unlock Skills, Improve Outcomes, Accelerate Careers Powered by <br />
            Intelligent Personalization.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary">Get Started</button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={onBookDemo}
            >
              Book a demo
            </button>
          </div>
        </div>

        <HeroRight />
      </div>
    </section>
  );
};

export default HeroSection;
