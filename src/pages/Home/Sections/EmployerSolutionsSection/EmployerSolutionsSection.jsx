import React from 'react';
import './EmployerSolutionsSection.scss';

const features = [
  {
    title: 'AI Skill Matching',
    description: 'AI-based candidate-job matching',
    iconUrl: '/assets/Home/EmployerSolutionsSection/icons/Personalized-Learning-Path.svg',
  },
  {
    title: 'Verified Skill Assessments',
    description: 'Aptitude, coding & communication tests',
    iconUrl: '/assets/Home/EmployerSolutionsSection/icons/AI-Career-Assessment-Test.svg',
  },
  {
    title: 'Internship Access',
    description: 'Direct access to internship pipelines',
    iconUrl: '/assets/Home/EmployerSolutionsSection/icons/Hands-on-Projects&Internships.svg',
  },
  {
    title: 'Faster, Accurate Hiring',
    description: 'Reduced hiring time with precision',
    iconUrl: '/assets/Home/EmployerSolutionsSection/icons/Placement-Preparation&Mock-Interviews.svg',
  },
];

const EmployerSolutionsSection = () => {
  return (
    <section className="employer-solutions-section">
      <div className="employer-solutions__inner">
        <div className="section-header">
          <h2>
            Hire Faster. Hire Better. With Skill-Based
            <br />
            <span className="highlight">AI Talent Matching</span>
          </h2>
          <p>
            DhiAspire connects employers with a pre-skilled, assessed, and
            job-ready talent pool.
          </p>
        </div>

        <div className="employer-solutions-panel">
          <div className="employer-solutions-panel__grid">
            <div className="employer-solutions-panel__left">
              <ul className="employer-feature-list">
                {features.map(({ title, description, iconUrl }) => (
                  <li key={title} className="employer-feature-item">
                    <span className="icon-box" aria-hidden="true">
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

            <div className="employer-solutions-panel__right">
              <div className="employer-solutions-media">
                <img
                  src="/assets/Home/EmployerSolutionsSection/employ-solution-home.webp"
                  alt="Employer talent matching dashboard with verified candidate insights"
                  className="employer-solutions-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/Home/EcosystemSection/employers-home.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="employer-solutions-footer">
          <button type="button" className="cta-button">
            <span className="cta-label">Explore Employer Solutions</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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

export default EmployerSolutionsSection;
