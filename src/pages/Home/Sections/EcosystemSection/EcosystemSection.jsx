import React from 'react';
import './EcosystemSection.scss';

const EcosystemSection = () => {
  const cards = [
    {
      title: 'Students',
      items: [
        'Personalized skill development',
        'AI-based assessments & feedback',
        'Internship & practice opportunities',
        'Placement assistance',
      ],
      type: 'students',
      illustration: '/assets/Home/EcosystemSection/student-home.svg',
    },
    {
      title: 'Colleges',
      items: [
        'Advanced analytics',
        'Skill-gap reports',
        'Accreditation support',
        'Placement automation',
      ],
      type: 'colleges',
      illustration: '/assets/Home/EcosystemSection/collage-home.svg',
    },
    {
      title: 'Employers',
      items: [
        'Access to a pre-skilled',
        'Job-ready talent pool with AI-driven matching',
      ],
      type: 'employers',
      illustration: '/assets/Home/EcosystemSection/employers-home.svg',
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-section__inner">
        <div className="section-header">
          <h1>
            Bridging the{' '}
            <span className="highlight">Education - Employment</span> Gap Using
            AI
          </h1>
          <p>
            An AI-powered ecosystem that aligns students, colleges, and
            employers through skill assessment, gap analysis, and intelligent
            matching.
          </p>
        </div>

        <div className="ecosystem-grid">
          {cards.map((card, index) => (
            <div key={index} className={`ecosystem-card ${card.type}`}>
              <div className="card-illustration-container">
                <img
                  src={card.illustration}
                  alt={`${card.title} Ecosystem`}
                  className="card-illustration"
                />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, i) => (
                    <li key={i}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="#74D885"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <button type="button" className="cta-button">
            <span className="cta-label">See How DhiAspire Works</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

export default EcosystemSection;
