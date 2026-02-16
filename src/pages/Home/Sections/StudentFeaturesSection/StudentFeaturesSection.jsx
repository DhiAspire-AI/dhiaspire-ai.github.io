import React from 'react';
import './StudentFeaturesSection.scss';

const features = [
  {
    title: 'AI Career Assessment Test',
    description: 'Discover your strengths, interests, and ideal career roles.',
    iconUrl: '/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg'
  },
  {
    title: 'Personalized Learning Path',
    description: 'A customized roadmap with courses, projects, exercises & quizzes.',
    iconUrl: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Personalized-Learning-Path.svg'
  },
  {
    title: 'Hands-on Projects & Internships',
    description: 'Gain real-world experience through curated projects and internships.',
    iconUrl: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Hands-on-Projects&Internships.svg'
  },
  {
    title: 'Placement Preparation & Mock Interviews',
    description: 'AI-based evaluation for communication, aptitude, coding & domain knowledge.',
    iconUrl: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg'
  }
];

const StudentFeaturesSection = () => {
  return (
    <section className="student-features-section">
      <div className="student-features__inner">
        <div className="section-header">
          <h2>
            <span className="highlight">Build Job-Ready Skills</span> with Personalized Learning
          </h2>
          <p className="lead">
            Start your journey with a platform that adapts to your learning style, pace, and career
            goals.
          </p>
        </div>

        <div className="student-features-panel">
          <div className="student-features-panel__grid">
            <div className="student-features-panel__left">
              <ul className="student-feature-list">
                {features.map(({ title, description, iconUrl }) => (
                  <li key={title} className="student-feature-item">
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

            <div className="student-features-panel__right">
              <div className="student-features-media">
                <img
                  src="/assets/home-assets/StudentFeaturesSectionAssets/students-features.webp"
                  alt="Student learning dashboard and personalized skill insights"
                  className="student-features-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="student-features-footer">
          <button type="button" className="cta-button">
            Explore Student Features
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

export default StudentFeaturesSection;
