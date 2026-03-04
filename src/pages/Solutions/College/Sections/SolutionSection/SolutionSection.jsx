import React from "react";
import "./SolutionSection.scss";

const SolutionSection = () => {
  const features = [
    {
      icon: "/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg",
      title: "College Employability Dashboard",
      description:
        "Real-time visibility into student readiness and outcomes.",
    },
    {
      icon: "/assets/home-assets/StudentFeaturesSectionAssets/icons/Personalized-Learning-Path.svg",
      title: "Skill Gap Analysis",
      description:
        "Identify specific deficiencies at batch, department, or individual levels.",
    },
    {
      icon: "/assets/home-assets/StudentFeaturesSectionAssets/icons/Hands-on-Projects&Internships.svg",
      title: "Automated Placement Management",
      description:
        "Streamline entire placement process, reduce admin burden by 60%.",
    },
    {
      icon: "/assets/home-assets/StudentFeaturesSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg",
      title: "Student Progress Tracking",
      description:
        "Monitor individual development throughout academic journey.",
    },
  ];

  return (
    <section className="solution-section">
      <div className="solution-container">
        <h2 className="solution-title">
          <span className="highlight-blue">DhiAspire's</span>{" "}
          <span className="highlight-white">Solution</span>
        </h2>

        {/* CONTENT - Swapped order: Image Left, Features Right */}
        <div className="solution-content grid grid-cols-1 xl:grid-cols-2 items-center gap-[60px] xl:gap-[clamp(60px,6vw,120px)]">
          
          {/* LEFT IMAGE */}
          <div className="solution-left">
            <img
            src="/assets/solutions-assets/college-solution-assets/solution-img-1.png" 
              alt="DhiAspire College Solution"
              className="solution-image"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="solution-right">
            <ul className="solution-list">
              {features.map((feature, index) => (
                <li key={index} className="solution-item">
                  <div className="solution-icon-box">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <div className="solution-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
