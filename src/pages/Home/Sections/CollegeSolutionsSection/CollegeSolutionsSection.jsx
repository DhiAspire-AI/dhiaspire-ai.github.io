import React from 'react';
import './CollegeSolutionsSection.scss';

const features = [
  {
    title: 'Skill-Gap Analysis',
    desc: 'Comprehensive analysis for entire batches.',
    iconUrl: '/assets/Home/CollegeSolutionsSection/icons/Skill-Gap-Analysis.svg',
  },
  {
    title: 'Real-Time Tracking',
    desc: 'Monitor student process continuously',
    iconUrl: '/assets/Home/CollegeSolutionsSection/icons/Real-Time-Tracking.svg',
  },
  {
    title: 'Placement Data Automation',
    desc: 'Automate, organize, and track placement records',
    iconUrl: '/assets/Home/CollegeSolutionsSection/icons/Placement-Data-Automation.svg',
  },
  {
    title: 'Employability Intelligence',
    desc: 'Data-driven insights to improve student career outcomes',
    iconUrl: '/assets/Home/CollegeSolutionsSection/icons/Employability-Intelligence.svg',
  },
];

const CollegeSolutionsSection = () => {
  return (
    <section className="college-solutions">
      <div className="college-solutions__inner">
        <div className="header">
          <h1>
            Boost Student Employability & Accreditation Outcomes With{' '}
            <span className="highlight">Data-Driven Insights</span>
          </h1>
          <p className="sub">DhiAspire empowers institutions to create measurable impact using deep analytics.</p>
        </div>

        <div className="solutions-grid">
          <div className="illustration">
            <img
              src="/assets/Home/CollegeSolutionsSection/college-illustration.png"
              alt="Analytics Illustration"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/Home/CollegeSolutionsSection/student-solution-home.webp';
              }}
            />
          </div>

          <div className="solutions-list">
            <ul>
              {features.map((f, i) => (
                <li key={i}>
                  <div className="icon-box">
                    <img src={f.iconUrl} alt="" className="custom-icon" />
                  </div>
                  <div className="text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-footer">
            <button type="button" className="cta-button">
              <span className="cta-label">Explore College Solutions</span>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeSolutionsSection;
