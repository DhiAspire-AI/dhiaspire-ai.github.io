import React from 'react';
import './CompanySolution.scss';

const CompanySolution = () => {
    const solutions = [
        {
            title: "For Students",
            description: "Personalized career guidance, skill development paths, placement support.",
            type: "students"
        },
        {
            title: "For Colleges",
            description: "Data-driven insights, skill gap analysis, accreditation support.",
            type: "colleges"
        },
        {
            title: "For Employers",
            description: "Pre-assessed talent pool with verified skills and efficient hiring.",
            type: "employers"
        }
    ];

    return (
        <section className="company-solution">
            <div className="company-solution-container">
                <div className="solution-header">
                    <h2 className="solution-title">
                        Our <span className="highlight-blue">Solution</span>
                    </h2>
                    <p className="solution-subtitle">
                        DhiAspire Ai creates a comprehensive employability ecosystem
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((item, index) => (
                        <div key={index} className={`solution-box solution-box--${item.type}`}>
                            <h3 className="box-title">{item.title}</h3>
                            <p className="box-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanySolution;
