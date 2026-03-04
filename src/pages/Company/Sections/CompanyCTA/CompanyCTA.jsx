import React from 'react';
import './CompanyCTA.scss';

const CompanyCTA = () => {
    return (
        <section className="company-cta-custom">
            <div className="cta-container">
                <h2 className="cta-title">
                    <span className="highlight-blue">AI Career Guidance</span> & Employability <br />
                    Platform for Students
                </h2>

                <div className="cta-actions">
                    <button className="btn-primary">
                        Start Your Free Career Assessment
                    </button>
                    <button className="btn-secondary">
                        Explore Student Features
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CompanyCTA;
