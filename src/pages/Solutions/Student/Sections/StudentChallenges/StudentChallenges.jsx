import React from 'react';
import './StudentChallenges.scss';

const StudentChallenges = () => {
    const challenges = [
        {
            id: 1,
            title: 'Degree but No Skill',
            description: 'Many students graduate with a degree but lack the specific technical skills industry leaders actually look for.',
            icon: '🎓'
        },
        {
            id: 2,
            title: 'The Experience Catch-22',
            description: "You can't get a job without experience, and you can't get experience without a job. A frustrating loop.",
            icon: '🔄'
        },
        {
            id: 3,
            title: 'Information Overload',
            description: 'Too many courses, too many certifications, but no clear path tailored to your personal strengths.',
            icon: '📚'
        },
        {
            id: 4,
            title: 'Ineffective Preparation',
            description: 'Generic resumes and lack of targeted interview practice often lead to missed opportunities.',
            icon: '📝'
        }
    ];

    return (
        <section className="student-challenges">
            <div className="container">
                <div className="header">
                    <h2>Modern <span className="highlight">Career Obstacles</span></h2>
                    <p>Why the traditional approach to job hunting is no longer enough.</p>
                </div>

                <div className="challenges-grid">
                    {challenges.map((item) => (
                        <div key={item.id} className="challenge-item">
                            <div className="challenge-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentChallenges;
