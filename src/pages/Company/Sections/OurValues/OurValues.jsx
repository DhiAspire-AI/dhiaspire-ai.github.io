import React from 'react';
import './OurValues.scss';

const OurValues = () => {
    const values = [
        {
            title: "Student First",
            description: "Every decision prioritizes student success."
        },
        {
            title: "Data-Driven",
            description: "Insights based on evidence, not assumptions."
        },
        {
            title: "Innovation",
            description: "Continuously improving through technology."
        },
        {
            title: "Accessibility",
            description: "Making quality career guidance available to all."
        },
        {
            title: "Ethics",
            description: "Fair, unbiased AI and protection of privacy."
        }
    ];

    return (
        <section className="our-values">
            <div className="values-container">
                <h2 className="values-title">
                    Our <span className="highlight-blue">Values</span>
                </h2>

                <div className="values-list">
                    {values.map((item, index) => (
                        <div key={index} className="value-item">
                            <div className="icon-wrapper">
                                <svg 
                                    className="check-icon" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2.5"
                                >
                                    <path 
                                        d="M17 9l-7 7-4-4" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                    <circle cx="12" cy="12" r="10.5" />
                                </svg>
                            </div>
                            <div className="value-content">
                                <span className="value-title">{item.title} : </span>
                                <span className="value-description">{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
