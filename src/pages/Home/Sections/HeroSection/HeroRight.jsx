import React from 'react';
import './HeroRight.scss';

const HERO_IMAGES = [
  { 
    src: '/assets/home-assets/HeroSectionAssets/Ai-mock-interview-hero.svg', 
    alt: 'AI Mock Interview',
    tags: [
      { text: 'Placement Boost', position: 'top-right' },
      { text: 'Talent Filtering', position: 'left' },
      { text: 'Builds Confidence', position: 'bottom' }
    ]
  },
  { 
    src: '/assets/home-assets/HeroSectionAssets/Resume-review-hero.svg', 
    alt: 'Resume Reviewer',
    tags: [
      { text: 'Resume Auditing', position: 'top' },
      { text: 'Coursework Simulation', position: 'bottom-left' },
      { text: 'Placement Readiness', position: 'right' }
    ]
  },
  { 
    src: '/assets/home-assets/HeroSectionAssets/AI-feedback-service-hero.svg', 
    alt: 'AI Feedback Service',
    tags: [
      { text: 'Performance Levels', position: 'top' },
      { text: 'Self-Assessments', position: 'left' },
      { text: 'Face/Coding Efficiency', position: 'bottom' }
    ]
  },
  { 
    src: '/assets/home-assets/HeroSectionAssets/Ai-coading-service-hero.svg', 
    alt: 'AI Coding Service',
    tags: [
      { text: 'Job Readiness', position: 'top' },
      { text: 'Advanced Insights', position: 'right' },
      { text: 'Efficient Coaching', position: 'bottom' }
    ]
  },
];

const HeroRight = () => {
  const currentImage = HERO_IMAGES[0];

  return (
    <div className="hero-right">
      <div className="hero-right__stage">
        {/* Center card - main/active */}
        <div className="hero-right__card hero-right__card--center">
          <img
            className="hero-right__image"
            src={currentImage.src}
            alt={currentImage.alt}
          />
          
          {/* Tags around the image */}
          {currentImage.tags && currentImage.tags.map((tag, index) => (
            <div 
              key={index}
              className={`hero-right__tag hero-right__tag--${tag.position}`}
            >
              {tag.text}
            </div>
          ))}
        </div>

        {/* Top-right ghost card */}
        <div className="hero-right__card hero-right__card--top">
          <img
            className="hero-right__image"
            src={HERO_IMAGES[1].src}
            alt={HERO_IMAGES[1].alt}
          />
        </div>

        {/* Bottom-right ghost card */}
        <div className="hero-right__card hero-right__card--bottom">
          <img
            className="hero-right__image"
            src={HERO_IMAGES[2].src}
            alt={HERO_IMAGES[2].alt}
          />
        </div>
      </div>

      <p className="hero-right__title">{currentImage.alt}</p>
    </div>
  );
};

export default HeroRight;
