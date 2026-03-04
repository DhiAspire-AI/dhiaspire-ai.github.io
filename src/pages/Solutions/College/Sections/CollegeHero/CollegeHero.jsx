import React from 'react';
import './CollegeHero.scss';

const CollegeHero = ({ onBookDemo }) => {
  return (
    <section className="college-hero">
      <div className="hero-background">
        <div className="blob blob-left"></div>
        <div className="blob blob-right"></div>
        <div className="blob blob-bottom-right"></div>
      </div>

      <div className="container-main">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line highlight-blue">AI-Powered Employability</span> & Skill Development <br />
            Platform for Colleges
          </h1>

          <p className="hero-intro">
            DhiAspire empowers colleges with comprehensive AI-driven tools to Measure, Improve and
            Demonstrate student employability outcomes.
          </p>

          <div className="hero-actions">
            <button className="btn-get-started">
              Get Started
            </button>
            <button className="btn-book-demo" onClick={onBookDemo}>
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeHero;
