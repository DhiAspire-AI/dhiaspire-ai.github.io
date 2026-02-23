import React from 'react';
import { Check } from 'lucide-react';
import './KeyBenefits.scss';

const KeyBenefits = () => {
    const benefits = [
        {
            title: 'Improve Placement Rates',
            description: '25-40% improvement in outcomes.'
        },
        {
            title: 'Save Administrative Time',
            description: 'Reduce manual work by 60%.'
        },
        {
            title: 'Predictive Insights',
            description: 'Identify at-risk students early.'
        },
        {
            title: 'Demonstrate ROI',
            description: 'Show measurable impact of programs.'
        }
    ];

    return (
        <section className="key-benefits">
            <div className="benefits-container">
                <h2 className="benefits-title">
                    Key <span className="highlight-blue">Benefits</span>
                </h2>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-item">
                            <div className="icon-wrapper">
                                <Check size={28} className="check-icon" />
                            </div>
                            <div className="benefit-content">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;
