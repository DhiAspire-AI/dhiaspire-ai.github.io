import React from 'react';
import './StudentHero.scss';

const StudentHero = ({ onBookDemo, onGetStarted }) => {
    return (
        <section className="student-hero">
            <div className="hero-background">
                <div className="blob blob-left"></div>
                <div className="blob blob-right"></div>
                <div className="blob blob-bottom-right"></div>
            </div>
            
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-line">
                            <span className="highlight-blue">AI Career Guidance</span> & Employability
                        </span>
                        <span className="title-line">Platform for Students</span>
                    </h1>
                    
                    <p className="hero-description">
                        Confused about which career path suits you best? DhiAspire is your AI-powered 
                        platform to build job-ready skills and accelerate career success.
                    </p>
                    
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={onGetStarted}>Get Started</button>
                        <button className="btn btn-outline" onClick={onBookDemo}>Book a demo</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentHero;
