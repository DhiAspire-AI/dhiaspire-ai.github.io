import React from 'react';
import './IntelligenceSection.scss';

const features = [
  {
    title: 'AI Career Assessment',
    description: 'Identify strengths, skills, and ideal career paths',
    iconUrl:
      '/assets/home-assets/IntelligenceSectionAssets/icons/ai-career-assessment.svg',
  },
  {
    title: 'Personalized Learning Paths',
    description: "Dynamic content mapped to the student's performance",
    iconUrl:
      '/assets/home-assets/IntelligenceSectionAssets/icons/personalized-learning-path.svg',
  },
  {
    title: 'AI Mentor',
    description: 'Your always-on personal career guide',
    iconUrl:
      '/assets/home-assets/IntelligenceSectionAssets/icons/ai-mentor.svg',
  },
  {
    title: 'Predictive Skill Analytics',
    description: 'Forecast readiness for job roles',
    iconUrl:
      '/assets/home-assets/IntelligenceSectionAssets/icons/predective-skills-analytics.svg',
  },
  {
    title: 'Placement Matching',
    description: 'AI-driven job and internship recommendations',
    iconUrl:
      '/assets/home-assets/IntelligenceSectionAssets/icons/placement-matchihng.svg',
  },
];

const IntelligenceSection = () => {
  return (
    <section className="intelligence">
      <div className="intelligence__container">
        {/* HEADER */}
        <div className="intelligence__header">
          <h2 className="intelligence__title">
            Where <span className="highlight">Intelligence Meets</span> Skill
            Development
          </h2>

          <p className="intelligence__subtitle">
            DhiAspire's AI engine delivers actionable insights from learner data
            to support personalized development.
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
          intelligence__content
          flex flex-col
          xl:flex-row
          items-center
          gap-12
          xl:gap-[100px]
          "
        >
          {/* LEFT FEATURES */}
          <div className="intelligence__left w-full xl:flex-1">
            <ul className="intelligence__list">
              {features.map((item, index) => (
                <li key={index} className="intelligence__item">
                  <div
                    className="
                    intelligence__icon
                    w-[56px] h-[56px]
                    sm:w-[72px] sm:h-[72px]
                    flex-shrink-0
                    "
                  >
                    <img
                      src={item.iconUrl}
                      alt=""
                      className="intelligence__icon-img"
                    />
                  </div>

                  <div className="intelligence__text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
            intelligence__right
            w-full
            xl:flex-1
            flex
            justify-center
            xl:justify-end
            "
          >
            <img
              src="/assets/home-assets/IntelligenceSectionAssets/ai-bot-image.webp"
              alt="AI Intelligence"
              className="intelligence__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
