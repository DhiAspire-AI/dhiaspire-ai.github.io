import React from 'react';
import './StudentHero.scss';

const StudentHero = () => {
    return (
        <section className="student-hero">
            <div className="hero-grid-pattern"></div>
            
            <div className="student-hero-container">
                <div className="hero-label">
                    <span>FOR STUDENTS</span>
                </div>
                
                <h1 className="hero-title">
                    Bridge the <span className="highlight-gradient">Skill Gap</span> & <br />
                    Launch Your <span className="highlight-blue">Dream Career</span>
                </h1>
                
                <p className="hero-description">
                    Join the AI-powered ecosystem that personalizes your learning journey, 
                    builds industry-ready projects, and connects you with top employers.
                </p>
                
                <div className="hero-cta-group">
                    <button className="btn-primary-glow">Get Started Free</button>
                    <button className="btn-secondary-outline">Explore Features</button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-text">Partner Companies</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">AI-Driven</span>
                        <span className="stat-text">Career Pathing</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">Industry</span>
                        <span className="stat-text">Real Projects</span>
                    </div>
                </div>
            </div>
            
            <div className="hero-visual-gradient"></div>
        </section>
    );
};

export default StudentHero;
