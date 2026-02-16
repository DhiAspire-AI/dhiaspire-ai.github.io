import React from 'react';
import './StudentOverview.scss';

const StudentOverview = () => {
    const features = [
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/AI-Career-Assessment-Test.svg',
            title: 'AI Career Assessment',
            description: 'Discover your strengths and interests with our advanced AI diagnostic tools that map your profile to top industry roles.'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Personalized-Learning-Path.svg',
            title: 'Personalized Learning',
            description: 'Get a custom-curated path of micro-courses and labs designed to bridge your specific skill gaps rapidly.'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Hands-on-Projects&Internships.svg',
            title: 'Real-World Projects',
            description: 'Work on actual industry projects and virtual internships that count as experience on your resume.'
        },
        {
            icon: '/assets/home-assets/StudentFeaturesSectionAssets/icons/Placement-Preparation&Mock-Interviews.svg',
            title: 'Mock Interviews',
            description: 'Practice with AI-powered simulators and live industry experts to master your behavioral and technical rounds.'
        }
    ];

    return (
        <section className="student-overview">
            <div className="container">
                <div className="overview-grid">
                    <div className="text-content">
                        <h2 className="section-title">A Unified <span className="highlight">Platform</span> for Your Career Success</h2>
                        <p className="section-desc">
                            DhiAspire is more than a learning platform. It's your career companion that guides you from 
                            first-year curiosity to your dream job offer letter.
                        </p>
                        
                        <div className="features-list">
                            {features.map((f, i) => (
                                <div key={i} className="feature-item">
                                    <div className="icon-box">
                                        <img src={f.icon} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>{f.title}</h4>
                                        <p>{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="visual-content">
                        <div className="image-wrapper">
                            <img src="/assets/home-assets/StudentFeaturesSectionAssets/students-features.webp" alt="Student Dashboard" />
                            <div className="floating-badge badge-1">AI-Powered</div>
                            <div className="floating-badge badge-2">Skill Verified</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentOverview;
