import React from 'react';
import './CompanyHero.scss';

const CompanyHero = () => {
    return (
        <section className="company-hero">
            <div className="company-hero-container">
                <div className="hero-content-wrapper">
                    <h1 className="company-hero-title">
                        About <span className="highlight-blue">Us</span>
                    </h1>
                    
                    <p className="company-hero-description">
                        DhiAspire was born from a simple observation: despite India producing millions of graduates annually, unemployment remains high while employers struggle to find qualified talent. This paradox exists because education doesn't always equate to employability.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanyHero;
