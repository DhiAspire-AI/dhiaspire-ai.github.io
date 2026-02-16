import React from 'react';
import './ChallengesSection.scss';

const ChallengesSection = () => {
    const challenges = [
        {
            id: 1,
            title: 'Low Placement Rates despite quality education.',
            image: '/assets/solutions-assets/college-solution-assets/challanges-ing-1.webp'
        },
        {
            id: 2,
            title: 'Unclear Skill Gaps and difficulty identifying improvement areas.',
            image: '/assets/solutions-assets/college-solution-assets/challanges-ing-2.webp'
        },
        {
            id: 3,
            title: 'Time-Consuming manual tracking and placement processes',
            image: '/assets/solutions-assets/college-solution-assets/challanges-ing-3.webp'
        },
        {
            id: 4,
            title: 'Limited Visibility into student readiness.',
            image: '/assets/solutions-assets/college-solution-assets/challanges-ing-4.webp'
        }
    ];

    return (
        <section className="challenges-section">
            <div className="challenges-container">
                <h2 className="challenges-title">
                    The Challenges <span className="highlight-blue">Colleges Face</span>
                </h2>

                <div className="challenges-grid">
                    {challenges.map((challenge) => (
                        <div key={challenge.id} className="challenge-card">
                            <div className="card-top">
                                <div className="card-image-box">
                                    <img src={challenge.image} alt={challenge.title} />
                                </div>
                            </div>
                            <div className="card-bottom">
                                <p>{challenge.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengesSection;
