import React from 'react';
import './StudentSuccessStories.scss';

const StudentSuccessStories = () => {
    const stories = [
        {
            text: "The AI assessment helped me realize my data analysis strengths. I landed an internship within 3 months!",
            author: "Dr. Divya Peachi",
            role: "Placement Head, Dhi Engineering College",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        },
        {
            text: "The AI assessment helped me realize my data analysis strengths. I landed an internship within 3 months!",
            author: "Jhon Pandian",
            role: "Student, CSE Dept.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
        }
    ];

    return (
        <section className="student-success-stories">
            <div className="container">
                <div className="header">
                    <h2>Success Stories</h2>
                </div>

                <div className="stories-grid">
                    {stories.map((story, index) => (
                        <div key={index} className="story-card">
                            <p className="story-text">"{story.text}"</p>
                            <div className="author-info">
                                <img src={story.image} alt={story.author} className="author-img" />
                                <div className="author-details">
                                    <h4>{story.author}</h4>
                                    <p>{story.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination-dots">
                    <span className="dot"></span>
                    <span className="dot active"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
    );
};

export default StudentSuccessStories;
