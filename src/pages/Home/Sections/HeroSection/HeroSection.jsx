import React from "react";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";
import "./HeroSection.scss";

const HeroSection = ({ onBookDemo }) => {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />
      <div className="hero__decor hero__decor--top" />
      <div className="hero__decor hero__decor--bottom" />

      <div className="hero__frame">
        <HeroLeft onBookDemo={onBookDemo} />
        <HeroRight />
      </div>
    </section>
  );
};

export default HeroSection;