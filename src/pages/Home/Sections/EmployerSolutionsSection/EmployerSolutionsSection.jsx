import React from "react";
import "./EmployerSolutionsSection.scss";

const features = [
  {
    title: "AI Skill Matching",
    description: "AI-based candidate-job matching",
    iconUrl:
      "/assets/home-assets/EmployerSolutionsSectionAssets/icons/Personalized-Learning-Path.svg",
  },
  {
    title: "Verified Skill Assessments",
    description: "Aptitude, coding & communication tests",
    iconUrl:
      "/assets/home-assets/EmployerSolutionsSectionAssets/icons/AI-Career-Assessment-Test.svg",
  },
  {
    title: "Internship Access",
    description: "Direct access to internship pipelines",
    iconUrl:
      "/assets/home-assets/EmployerSolutionsSectionAssets/icons/Hands-on-Projects&Internships.svg",
  },
  {
    title: "Faster, Accurate Hiring",
    description: "Reduced hiring time with precision",
    iconUrl:
      "/assets/home-assets/EmployerSolutionsSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg",
  },
];

const EmployerSolutionsSection = () => {
  return (
    <section className="employer-solutions">

      {/* CONTAINER */}
      <div className="employer-solutions__container">

        {/* FRAME */}
        <div className="employer-solutions__frame">

          {/* HEADER */}
          <div className="employer-solutions__header">

            <h2 className="employer-solutions__title">
              Hire Faster. Hire Better. With Skill-Based{" "}
              <span className="highlight">AI Talent Matching</span>
            </h2>

            <p className="employer-solutions__subtitle">
              DhiAspire Ai connects employers with a pre-skilled, assessed,
              and job-ready talent pool.
            </p>

          </div>


          {/* CONTENT GRID */}
          <div className="employer-solutions__content flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[clamp(40px,5vw,80px)] min-h-[auto] lg:min-h-[400px]">

            {/* LEFT LIST */}
            <div className="employer-solutions__left w-full lg:flex-1 max-w-[920px] transform transition-transform duration-300 ease-in-out lg:-translate-x-4 xl:-translate-x-6">

              <ul className="employer-solutions__list">

                {features.map((feature, index) => (
                  <li key={index} className="employer-solutions__item">

                    <div className="employer-solutions__icon w-[60px] h-[60px] flex-[0_0_60px] md:w-[80px] md:h-[80px] md:flex-[0_0_80px]">

                      <img
                        src={feature.iconUrl}
                        alt=""
                        className="employer-solutions__icon-img"
                      />

                    </div>

                    <div className="employer-solutions__text">

                      <h3>{feature.title}</h3>

                      <p>{feature.description}</p>

                    </div>

                  </li>
                ))}

              </ul>

            </div>


            {/* RIGHT IMAGE */}
            <div className="employer-solutions__right w-full lg:flex-1 flex justify-center lg:justify-end max-w-[850px]">

              <img
                src="/assets/home-assets/EmployerSolutionsSectionAssets/employ-solution-home.webp"
                alt="Employer solutions dashboard"
                className="employer-solutions__image"
              />

            </div>

          </div>


          {/* CTA */}
          <div className="employer-solutions__footer">

            <button className="employer-solutions__cta">

              Explore Employer Solutions

              <svg viewBox="0 0 24 24" fill="none">

                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EmployerSolutionsSection;