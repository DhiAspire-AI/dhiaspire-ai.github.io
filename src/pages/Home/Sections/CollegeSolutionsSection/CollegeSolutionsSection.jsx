import React from 'react';
import './CollegeSolutionsSection.scss';

const features = [
  {
    title: 'Skill-Gap Analysis',
    desc: 'Comprehensive analysis for entire batches.',
    iconUrl: '/assets/home-assets/CollegeSolutionsSectionAssets/icons/Skill-Gap-Analysis.svg',
  },
  {
    title: 'Real-Time Tracking',
    desc: 'Monitor student process continuously',
    iconUrl: '/assets/home-assets/CollegeSolutionsSectionAssets/icons/Real-Time-Tracking.svg',
  },
  {
    title: 'Placement Data Automation',
    desc: 'Automate, organize, and track placement records',
    iconUrl: '/assets/home-assets/CollegeSolutionsSectionAssets/icons/Placement-Data-Automation.svg',
  },
  {
    title: 'Employability Intelligence',
    desc: 'Data-driven insights to improve student career outcomes',
    iconUrl: '/assets/home-assets/CollegeSolutionsSectionAssets/icons/Employability-Intelligence.svg',
  },
];

const CollegeSolutionsSection = () => {
  return (
    <section className="college-solutions">
      <div className="college-solutions__inner">
        <div className="section-header">
          <h2>
            Boost Student Employability & Accreditation
            <br className="desktop-br" />
            Outcomes With <span className="highlight">Data-Driven Insights</span>
          </h2>
          <p className="lead">DhiAspire empowers institutions to create measurable impact using deep analytics.</p>
        </div>

        <div className="solutions-grid">
          <div className="illustration">
            <img
              src="/assets/home-assets/CollegeSolutionsSectionAssets/college-illustration.png"
              alt="Analytics Illustration"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/home-assets/CollegeSolutionsSectionAssets/student-solution-home.webp';
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
                    <h3>{f.title}</h3>
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
