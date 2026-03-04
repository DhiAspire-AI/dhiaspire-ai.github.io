import React from 'react';
import './OurStory.scss';

const OurStory = () => {
    return (
        <section className="our-story">
            <div className="our-story-container">
                <h2 className="story-title">
                    Our <span className="highlight-blue">Story</span>
                </h2>

                <div className="story-grid">
                    <div className="story-card">
                        <h3 className="card-title">Our Mission</h3>
                        <p className="card-description">
                            To make every graduate job-ready by providing AI-powered 
                            personalized learning, comprehensive skill assessment, and direct 
                            connections to employment opportunities.
                        </p>
                    </div>

                    <div className="story-divider"></div>

                    <div className="story-card">
                        <h3 className="card-title">Our Vision</h3>
                        <p className="card-description">
                            A future where every student graduates with verified, market 
                            relevant skills and transitions seamlessly into fulfilling careers. 
                            Where colleges measure success by employability. Where hiring is 
                            based on demonstrated capabilities, not degrees or pedigree.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
