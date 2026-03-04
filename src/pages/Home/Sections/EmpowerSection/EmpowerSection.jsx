import React from "react";
import "./EmpowerSection.scss";
import "../HeroSection/HeroLeft/HeroLeft.scss";

const EmpowerSection = ({ onBookDemo }) => {
  return (
    <section className="empower-section">

      <div className="empower-container">

        <header className="empower-header">

          <h2 className="empower-title">
            Empower Your Future with
            <br className="hidden md:block" />

            <span>
              AI-Powered Employability
            </span>{" "}
            Solutions

          </h2>

          <p className="empower-subtitle">
            Whether you're a student aiming for your dream career, a college improving campus outcomes,
            or an employer looking for skilled talent DhiAspire brings everything under one intelligent ecosystem.
          </p>

        </header>


        <div className="empower-buttons mx-auto flex flex-row justify-center items-center gap-4 flex-wrap w-full max-w-[640px]">

          <button className="hero-left__btn hero-left__btn--primary flex-1 min-w-[140px] max-w-[320px]">
            Get Started
          </button>

          <button
            className="hero-left__btn hero-left__btn--secondary flex-1 min-w-[140px] max-w-[320px]"
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