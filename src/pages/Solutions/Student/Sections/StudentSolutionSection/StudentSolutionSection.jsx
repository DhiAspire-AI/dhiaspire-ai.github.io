import React from 'react';
import './StudentSolutionSection.scss';

const StudentSolutionSection = () => {
    const features = [
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg',
            title: 'AI Career Assessment',
            description: 'Discover your strengths, interests, and ideal career paths'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Personalized-Learning-Path.svg',
            title: 'Personalized Learning Paths',
            description: 'Follow customized roadmaps with courses and projects'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg', // Using existing available icon for mentor
            title: '24/7 AI Mentor',
            description: 'Get instant career guidance and skill recommendations'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Hands-on-Projects&Internships.svg',
            title: 'Real-World Experience',
            description: 'Access curated internship opportunities and hands-on projects'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg',
            title: 'Placement Support',
            description: 'Prepare for interviews with AI-powered mock assessments'
        }
    ];

    return (
        <section className="student-solution-section">
            <div className="section-header">
                <h2>
                    Why Students <span className="highlight">Choose DhiAspire</span>
                </h2>
            </div>

            <div className="student-solution-panel">
                <div className="student-solution-panel__grid">
                    <div className="student-solution-panel__left">
                        <ul className="student-solution-list">
                            {features.map((feature, index) => (
                                <li key={index} className="student-solution-item">
                                    <span className="icon-box">
                                        <img src={feature.icon} alt="" className="custom-icon" />
                                    </span>
                                    <div className="feature-copy">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className=" student-solution-panel__right">
                        <div className="student-solution-media">
                            <img 
                                src="/assets/solutions-assets/college-solution-assets/solution-img-1.png" 
                                alt="DhiAspire Student Dashboard" 
                                className="student-solution-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="student-solution-footer">
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
            </div> */}
        </section>
    );
};

export default StudentSolutionSection;
