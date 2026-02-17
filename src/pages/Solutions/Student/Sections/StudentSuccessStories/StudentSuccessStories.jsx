import React from 'react';
import './StudentSuccessStories.scss';

const StudentSuccessStories = () => {
    const stories = [
        {
            id: 1,
            name: 'Dr. Divya Peachi',
            role: 'Placement Head',
            company: 'Dhi Engineering College',
            story: 'The AI assessment helped me realize my data analysis strengths. I landed an internship within 3 months!',
            image: 'https://i.pravatar.cc/150?u=divya'
        },
        {
            id: 2,
            name: 'Jhon Pandian',
            role: 'Student',
            company: 'CSE Dept.',
            story: 'The AI assessment helped me realize my data analysis strengths. I landed an internship within 3 months!',
            image: 'https://i.pravatar.cc/150?u=jhon'
        }
    ];

    return (
        <section className="student-success-stories">
            <div className="container">
                <div className="header">
                    <h2>Success Stories</h2>
                </div>
                <div className="stories-grid">
                    {stories.map(story => (
                        <div key={story.id} className="story-card">
                            <div className="story-content">
                                <p>"{story.story}"</p>
                            </div>
                            <div className="story-footer">
                                <img src={story.image} alt={story.name} />
                                <div className="user-info">
                                    <h4>{story.name}</h4>
                                    <p>{story.role}, {story.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
    );
};

export default StudentSuccessStories;
