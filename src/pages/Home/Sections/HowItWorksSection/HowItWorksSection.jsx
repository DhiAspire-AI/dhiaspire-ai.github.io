import React from "react";
import "./HowItWorksSection.scss";

const steps = [
  {
    number: "1",
    title: "Assess",
    description:
      "Take skill assessments to measure your strengths and gaps.",
  },
  {
    number: "2",
    title: "Learn",
    description:
      "Follow a personalized path with curated learning content.",
  },
  {
    number: "3",
    title: "Get Opportunities",
    description:
      "Receive internship and job recommendations based on your skill graph.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        {/* header */}
        <header className="how-it-works-header mb-[100px] xl:mb-[180px]">
          <h2 className="how-title">
            How it <span className="highlight">Works</span>
          </h2>

          <p className="how-subtitle">Getting Started is Simple</p>
        </header>

        {/* steps */}
        <div className="how-steps flex flex-col md:flex-row items-start justify-center gap-[60px] xl:gap-[100px]">
          {steps.map((step) => (
            <div key={step.number} className="how-step w-full flex-1">
              <div className="step-number">{step.number}</div>

              <h3 className="step-title">{step.title}</h3>

              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;