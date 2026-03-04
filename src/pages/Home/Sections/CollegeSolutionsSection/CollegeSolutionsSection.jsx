import React from "react";
import "./CollegeSolutionsSection.scss";

const features = [
  {
    title: "Skill-Gap Analysis",
    desc: "Comprehensive analysis for entire batches.",
    iconUrl:
      "/assets/home-assets/CollegeSolutionsSectionAssets/icons/Skill-Gap-Analysis.svg",
  },
  {
    title: "Real-Time Tracking",
    desc: "Monitor student process continuously",
    iconUrl:
      "/assets/home-assets/CollegeSolutionsSectionAssets/icons/Real-Time-Tracking.svg",
  },
  {
    title: "Placement Data Automation",
    desc: "Automate, organize, and track placement records",
    iconUrl:
      "/assets/home-assets/CollegeSolutionsSectionAssets/icons/Placement-Data-Automation.svg",
  },
  {
    title: "Employability Intelligence",
    desc: "Data-driven insights to improve student career outcomes",
    iconUrl:
      "/assets/home-assets/CollegeSolutionsSectionAssets/icons/Employability-Intelligence.svg",
  },
];

const CollegeSolutionsSection = () => {
  return (
    <section className="college-solutions">

      {/* OUTER CONTAINER (padding only) */}
      <div className="college-solutions__container">

        {/* INNER FRAME (controls exact layout width like Figma frame) */}
        <div className="college-solutions__frame">

          {/* HEADER */}
          <div className="college-solutions__header">

            <h2 className="college-solutions__title">
              Boost Student Employability & Accreditation
              <br />
              Outcomes With{" "}
              <span className="highlight">
                Data-Driven Insights
              </span>
            </h2>

            <p className="college-solutions__subtitle">
              DhiAspire empowers institutions to create measurable impact using deep analytics.
            </p>

          </div>


          {/* CONTENT */}
          <div className="college-solutions__content flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[clamp(40px,5vw,100px)]">

            {/* LEFT IMAGE */}
            <div className="college-solutions__image-wrapper w-full lg:flex-1 flex justify-center lg:justify-start">

              <img
                src="/assets/home-assets/CollegeSolutionsSectionAssets/student-solution-home.webp"
                alt="College Analytics"
                className="college-solutions__image translate-x-0 lg:-translate-x-4 xl:-translate-x-6 transition-transform duration-300 ease-in-out object-contain"
              />

            </div>


            {/* RIGHT FEATURES */}
            <div className="college-solutions__features w-full lg:flex-1">

              <ul className="college-solutions__list">

                {features.map((feature, index) => (
                  <li key={index} className="college-solutions__item">

                    <div className="college-solutions__icon w-[60px] h-[60px] flex-[0_0_60px] md:w-[80px] md:h-[80px] md:flex-[0_0_80px]">
                      <img
                        src={feature.iconUrl}
                        alt=""
                        className="college-solutions__icon-img"
                      />
                    </div>

                    <div className="college-solutions__text">
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>

                  </li>
                ))}

              </ul>

            </div>

          </div>


          {/* CTA */}
          <div className="college-solutions__footer">

            <button className="college-solutions__cta">

              Explore College Solutions

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

export default CollegeSolutionsSection;