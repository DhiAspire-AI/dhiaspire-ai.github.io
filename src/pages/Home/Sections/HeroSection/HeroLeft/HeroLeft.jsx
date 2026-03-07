import React from "react";
import "./HeroLeft.scss";

const HeroLeft = ({ onBookDemo }) => {
  const LOGIN_URL = import.meta.env.VITE_LOGIN_URL ;

  return (
    <div className="hero-left">
      <h1 className="hero-left__title">
        AI-Powered Employability Ecosystem for Institutions,
        Students & Employers.
      </h1>

      <p className="hero-left__description">
        Unlock Skills, Improve Outcomes, Accelerate Careers Powered by
        Intelligent Personalization.
      </p>

      <div className="hero-left__actions">
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-left__btn hero-left__btn--primary"
        >
          Get Started
        </a>

        <button
          onClick={onBookDemo}
          className="hero-left__btn hero-left__btn--secondary"
        >
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;