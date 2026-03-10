import React from 'react';
import './StudentHowItWorks.scss';

const StudentHowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Career Discovery',
            description: ' Take the AI Career Assessment to create your employability profile.'
        },
        {
            number: '2',
            title: 'Learning Path',
            description: 'Follow your personalized learning path with recommended courses and milestones.'
        },
        {
            number: '3',
            title: 'Skill Building',
            description: 'Build real-world skills through practical projects and internships.'
        },
        {
            number: '4',
            title: 'Placement Prep',
            description: 'Prepare for placement with mock interviews and assessments.'
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
