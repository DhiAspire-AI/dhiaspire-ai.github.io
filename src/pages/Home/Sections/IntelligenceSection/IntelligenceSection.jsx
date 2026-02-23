import React from 'react';
import './IntelligenceSection.scss';

const features = [
  {
    title: 'AI Career Assessment',
    description: 'Identify strengths, skills, and ideal career paths',
    iconUrl: '/assets/home-assets/IntelligenceSectionAssets/icons/ai-career-assessment.svg',
  },
  {
    title: 'Personalized Learning Paths',
    description: "Dynamic content mapped to the student's performance",
    iconUrl: '/assets/home-assets/IntelligenceSectionAssets/icons/personalized-learning-path.svg',
  },
  {
    title: 'AI Mentor',
    description: 'Your always-on personal career guide',
    iconUrl: '/assets/home-assets/IntelligenceSectionAssets/icons/ai-mentor.svg',
  },
  {
    title: 'Predictive Skill Analytics',
    description: 'Forecast readiness for job roles',
    iconUrl: '/assets/home-assets/IntelligenceSectionAssets/icons/predective-skills-analytics.svg',
  },
  {
    title: 'Placement Matching',
    description: 'AI-driven job and internship recommendations',
    iconUrl: '/assets/home-assets/IntelligenceSectionAssets/icons/placement-matchihng.svg',
  },
];

const IntelligenceSection = () => {
  return (
    <section className="intelligence-section">
      <div className="intelligence-section__inner">
        <div className="section-header">
          <h2>
            Where Intelligence Meets <span className="highlight">Skill Development</span>
          </h2>
          <p>
            DhiAspire&apos;s AI engine delivers actionable insights from learner data to support
            personalized development.
          </p>
        </div>

        <div className="intelligence-content">
          <div className="intelligence-left">
            <img
              src="/assets/home-assets/IntelligenceSectionAssets/ai-bot-image.webp"
              alt="AI assistant with connected learning dashboards"
              className="intelligence-image"
              loading="lazy"
            />
          </div>

          <div className="intelligence-right">
            <ul className="feature-list">
              {features.map(({ title, description, iconUrl }) => (
                <li key={title} className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <img src={iconUrl} alt="" className="custom-icon" />
                  </span>
                  <div className="feature-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-footer">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
