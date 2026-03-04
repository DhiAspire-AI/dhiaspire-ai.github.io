import React from "react";
import "./StudentFeaturesSection.scss";

const features = [
  {
    title: "AI Career Assessment Test",
    description:
      "Discover your strengths, interests, and ideal career roles.",
    iconUrl:
      "/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg",
  },
  {
    title: "Personalized Learning Path",
    description:
      "A customized roadmap with courses, projects, exercises & quizzes.",
    iconUrl:
      "/assets/home-assets/StudentFeaturesSectionAssets/icons/Personalized-Learning-Path.svg",
  },
  {
    title: "Hands-on Projects & Internships",
    description:
      "Gain real-world experience through curated projects and verified internship opportunities.",
    iconUrl:
      "/assets/home-assets/StudentFeaturesSectionAssets/icons/Hands-on-Projects&Internships.svg",
  },
  {
    title: "Placement Preparation & Mock Interviews",
    description:
      "AI-based evaluation for communication, aptitude, coding & domain knowledge.",
    iconUrl:
      "/assets/home-assets/StudentFeaturesSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg",
  },
];

const StudentFeaturesSection = () => {
  return (
    <section className="student-features">
      <div className="student-features__container">

        {/* HEADER */}
        <div className="student-features__header">
          <h2 className="student-features__title">
            <span className="highlight">Build Job-Ready Skills</span> with
            Personalized Learning
          </h2>

          <p className="student-features__subtitle">
            Start your journey with a platform that adapts to your learning
            style, pace, and career goals.
          </p>
        </div>

        {/* CONTENT */}
        <div className="student-features__content flex flex-col lg:flex-row items-center gap-14 lg:gap-[100px]">

          {/* LEFT */}
          <div className="student-features__left w-full lg:w-[55%] lg:self-start lg:pr-8 transform transition-transform duration-300 ease-in-out lg:-translate-x-4 xl:-translate-x-6">
            <ul className="student-features__list w-full">
              {features.map((feature, index) => (
                <li key={index} className="student-features__item">

                  <div className="student-features__icon w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] flex-shrink-0">
                    <img
                      src={feature.iconUrl}
                      alt=""
                      className="student-features__icon-img"
                    />
                  </div>

                  <div className="student-features__text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>

                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="student-features__right w-full lg:w-[45%] flex justify-center lg:justify-end">
            <img
              src="/assets/home-assets/StudentFeaturesSectionAssets/students-features.webp"
              alt="Student dashboard"
              className="student-features__image w-full h-auto translate-x-0 lg:-translate-x-4 xl:-translate-x-6 lg:scale-105 xl:scale-110 transition-transform duration-300 ease-in-out object-contain"
            />
          </div>

        </div>

        {/* CTA */}
        <div className="student-features__footer">
          <button className="student-features__cta">
            Explore Student Features
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
    </section>
  );
};

export default StudentFeaturesSection;