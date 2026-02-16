import React from 'react';
import './SolutionSection.scss';

const SolutionSection = () => {
    const features = [
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg',
            title: 'College Employability Dashboard',
            description: 'Real-time visibility into student readiness and outcomes.'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Personalized-Learning-Path.svg',
            title: 'Skill Gap Analysis',
            description: 'Identify specific deficiencies at batch, department, or individual levels.'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Hands-on-Projects&Internships.svg',
            title: 'Automated Placement Management',
            description: 'Streamline entire placement process, reduce admin burden by 60%.'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg',
            title: 'Student Progress Tracking',
            description: 'Monitor individual development throughout academic journey.'
        }
    ];

    return (
        <section className="solution-section">
            <div className="solution-container">
                <h2 className="solution-title">
                    <span className="highlight-blue">DhiAspire's</span> <span className="highlight-white">Solution</span>
                </h2>

                <div className="solution-content">
                    <div className="solution-image-container">
                        <img 
                            src="/assets/solutions-assets/college-solution-assets/solution-img-1.png" 
                            alt="DhiAspire Solution Dashboard" 
                            className="solution-main-image"
                        />
                    </div>

                    <div className="solution-features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon-box">
                                    <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
                                </div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
