import React from 'react';
import './StudentHowItWorks.scss';

const StudentHowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Discover & Profile',
            description: 'Uncover your hidden potential through AI-powered career assessments and build your unique employability profile.'
        },
        {
            number: '2',
            title: 'Personalize & Learn',
            description: 'Get a customized learning roadmap tailored to your career goals, featuring industry-aligned courses and skills.'
        },
        {
            number: '3',
            title: 'Master & Certify',
            description: 'Apply your knowledge through hands-on projects and internships while earning certifications that employers trust.'
        },
        {
            number: '4',
            title: 'Connect & Land',
            description: 'Get matched with top internship and job opportunities through our network of employers and placement support.'
        }
    ];

    return (
        <section className="student-how-it-works">
            <div className="how-it-works-background">
                <div className="blob blob-left"></div>
                <div className="blob blob-right"></div>
            </div>
            
            <div className="how-it-works-container">
                <div className="how-it-works-header">
                    <h2>How it <span className="highlight-blue">Works</span></h2>
                    <p className="subtitle">Getting Started is Simple</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number-wrapper">
                                <div className="step-number">{step.number}</div>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentHowItWorks;
