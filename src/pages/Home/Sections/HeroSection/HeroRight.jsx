import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
    className: 'resume-reviewer',
    tags: [
      { text: 'Placement Readiness', position: 'top' },
      { text: 'Better Visibility', position: 'bottom-left' },
      { text: 'Faster Screening', position: 'right' }
    ]
  },
  { 
    src: '/assets/home-assets/HeroSectionAssets/AI-feedback-service-hero.svg', 
    alt: 'AI Feedback Service',
    tags: [
      { text: 'Performance Clarity', position: 'top' },
      { text: 'Skill Gaps Tracking', position: 'left' },
      { text: 'Candidate Efficiency', position: 'bottom' }
    ]
  },
  { 
    src: '/assets/home-assets/HeroSectionAssets/Ai-coading-service-hero.svg', 
    alt: 'AI Coding Service',
    tags: [
      { text: 'Job Readiness', position: 'top' },
      { text: 'Benchmark Insights', position: 'right' },
      { text: 'Proven Capability', position: 'bottom' }
    ]
  },
];

const HeroRight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef([]);
  const tagsRef = useRef([]);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  // Calculate positions
  const getCenterIndex = () => currentIndex;
  const getTopIndex = () => (currentIndex + 3) % HERO_IMAGES.length;
  const getBottomIndex = () => (currentIndex + 1) % HERO_IMAGES.length;

  useEffect(() => {
    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const centerIdx = getCenterIndex();
    const topIdx = getTopIndex();
    const bottomIdx = getBottomIndex();

    // Create GSAP Timeline
    const tl = gsap.timeline({
      defaults: {
        force3D: true
      }
    });

    // SLOT POSITIONS (using transform only)
    const SLOTS = {
      CENTER: { x: 0, y: 0, scale: 1, opacity: 1 },
      TOP_RIGHT: { x: 360, y: -280, scale: 0.26, opacity: 0.3 },
      BOTTOM_RIGHT: { x: 370, y: 280, scale: 0.22, opacity: 0.25 }
    };

    // Initialize all cards to hidden
    HERO_IMAGES.forEach((image, idx) => {
      const card = cardsRef.current[idx];
      if (!card) return;

      if (idx === centerIdx) {
        // Current center - set to BOTTOM_RIGHT initially
        gsap.set(card, {
          x: SLOTS.BOTTOM_RIGHT.x,
          y: SLOTS.BOTTOM_RIGHT.y,
          scale: SLOTS.BOTTOM_RIGHT.scale,
          opacity: SLOTS.BOTTOM_RIGHT.opacity,
          zIndex: 10
        });
        
        // Hide tags initially
        if (tagsRef.current[idx]) {
          gsap.set(tagsRef.current[idx].children, { opacity: 0 });
        }
      } else if (idx === topIdx) {
        // Top position
        gsap.set(card, {
          x: SLOTS.TOP_RIGHT.x,
          y: SLOTS.TOP_RIGHT.y,
          scale: SLOTS.TOP_RIGHT.scale,
          opacity: SLOTS.TOP_RIGHT.opacity,
          zIndex: 2
        });
        
        if (tagsRef.current[idx]) {
          gsap.set(tagsRef.current[idx].children, { opacity: 0 });
        }
      } else if (idx === bottomIdx) {
        // Bottom position - ready for next cycle
        gsap.set(card, {
          x: SLOTS.BOTTOM_RIGHT.x,
          y: SLOTS.BOTTOM_RIGHT.y,
          scale: SLOTS.BOTTOM_RIGHT.scale,
          opacity: SLOTS.BOTTOM_RIGHT.opacity,
          zIndex: 1
        });
        
        if (tagsRef.current[idx]) {
          gsap.set(tagsRef.current[idx].children, { opacity: 0 });
        }
      } else {
        // Hidden
        gsap.set(card, { opacity: 0, zIndex: 0 });
        if (tagsRef.current[idx]) {
          gsap.set(tagsRef.current[idx].children, { opacity: 0 });
        }
      }
    });

    // Hide title initially
    gsap.set(titleRef.current, { opacity: 0, y: 20 });

    // Define label positions relative to center anchor
    const LABEL_POSITIONS = {
      left: {
        initial: { x: -310, y: -14, opacity: 0 },
        final: { x: -250, y: -14, opacity: 1 },
        exit: { x: -350, y: -14, opacity: 0 }
      },
      right: {
        initial: { x: 220, y: -14, opacity: 0 },
        final: { x: 160, y: -14, opacity: 1 },
        exit: { x: 260, y: -14, opacity: 0 }
      },
      top: {
        initial: { x: -68, y: -260, opacity: 0 },
        final: { x: -68, y: -206, opacity: 1 },
        exit: { x: -68, y: -300, opacity: 0 }
      },
      'top-right': {
        initial: { x: -68, y: -260, opacity: 0 },
        final: { x: -68, y: -206, opacity: 1 },
        exit: { x: -68, y: -300, opacity: 0 }
      },
      bottom: {
        initial: { x: -74, y: 230, opacity: 0 },
        final: { x: -74, y: 176, opacity: 1 },
        exit: { x: -74, y: 260, opacity: 0 }
      },
      'bottom-left': {
        initial: { x: -74, y: 230, opacity: 0 },
        final: { x: -74, y: 176, opacity: 1 },
        exit: { x: -74, y: 260, opacity: 0 }
      }
    };

    // Set initial hidden state for all labels
    HERO_IMAGES.forEach((image, idx) => {
      if (tagsRef.current[idx]) {
        const tags = Array.from(tagsRef.current[idx].children);
        tags.forEach((tag, tagIdx) => {
          const position = image.tags[tagIdx]?.position || 'left';
          const posKey = LABEL_POSITIONS[position] ? position : 'left';
          const initial = LABEL_POSITIONS[posKey].initial;
          gsap.set(tag, { x: initial.x, y: initial.y, opacity: initial.opacity });
        });
      }
    });

    // ========================================
    // STEP 1: IMAGE ENTERS CENTER SLOT
    // ========================================
    tl.to(cardsRef.current[centerIdx], {
      x: SLOTS.CENTER.x,
      y: SLOTS.CENTER.y,
      scale: SLOTS.CENTER.scale,
      opacity: SLOTS.CENTER.opacity,
      duration: 1.2,
      ease: 'power3.out'
    });

    // ========================================
    // STEP 2: TITLE APPEARS BELOW IMAGE
    // ========================================
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out'
      }
    );

    // ========================================
    // STEP 3: LABELS APPEAR AROUND IMAGE
    // ========================================
    if (tagsRef.current[centerIdx]) {
      const centerTags = Array.from(tagsRef.current[centerIdx].children);
      const currentImage = HERO_IMAGES[centerIdx];
      
      centerTags.forEach((tag, tagIdx) => {
        const position = currentImage.tags[tagIdx]?.position || 'left';
        const posKey = LABEL_POSITIONS[position] ? position : 'left';
        const initial = LABEL_POSITIONS[posKey].initial;
        const final = LABEL_POSITIONS[posKey].final;
        
        tl.fromTo(
          tag,
          { x: initial.x, y: initial.y, opacity: initial.opacity },
          {
            x: final.x,
            y: final.y,
            opacity: final.opacity,
            duration: 0.7,
            ease: 'power2.out'
          },
          `-=${tagIdx === 0 ? 0 : 0}` + (tagIdx * 0.1) // Stagger by 0.1s
        );
      });
    }

    // ========================================
    // STEP 4: HOLD STATE
    // ========================================
    tl.to({}, { duration: 1.5 });

    // ========================================
    // STEP 5: LABELS DISAPPEAR
    // ========================================
    if (tagsRef.current[centerIdx]) {
      const centerTags = Array.from(tagsRef.current[centerIdx].children);
      const currentImage = HERO_IMAGES[centerIdx];
      
      centerTags.forEach((tag, tagIdx) => {
        const position = currentImage.tags[tagIdx]?.position || 'left';
        const posKey = LABEL_POSITIONS[position] ? position : 'left';
        const exit = LABEL_POSITIONS[posKey].exit;
        
        tl.to(
          tag,
          {
            x: exit.x,
            y: exit.y,
            opacity: exit.opacity,
            duration: 0.7,
            ease: 'power2.in'
          },
          `-=${tagIdx === 0 ? 0.7 : 0.7 - (tagIdx * 0.05)}` // Slight stagger
        );
      });
    }

    // ========================================
    // STEP 6: TITLE DISAPPEARS
    // ========================================
    tl.to(
      titleRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      }
    );

    // ========================================
    // STEP 7: IMAGE EXITS TO TOP-RIGHT
    // ========================================
    tl.to(
      cardsRef.current[centerIdx],
      {
        x: SLOTS.TOP_RIGHT.x,
        y: SLOTS.TOP_RIGHT.y,
        scale: SLOTS.TOP_RIGHT.scale,
        opacity: SLOTS.TOP_RIGHT.opacity,
        duration: 1.2,
        ease: 'power3.inOut'
      },
      '-=0.1'
    );

    // Fade out the previous top card (move it out)
    tl.to(
      cardsRef.current[topIdx],
      {
        opacity: 0,
        duration: 0.5
      },
      '-=1.2'
    );

    timelineRef.current = tl;

    // Auto-advance after timeline completes
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, tl.totalDuration() * 1000);

    return () => {
      clearTimeout(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [currentIndex]);

  return (
    <div className="hero-right">
      <div className="hero-right__stage">
        {HERO_IMAGES.map((image, index) => {
          const isResumeReviewer = image.className === 'resume-reviewer';
          
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="hero-right__card"
              style={{
                position: 'absolute',
                left: '45%',
                top: '50%',
                width: isResumeReviewer ? '500px' : '425px',
                height: isResumeReviewer ? '530px' : '462px'
              }}
            >
              <img
                className="hero-right__image"
                src={image.src}
                alt={image.alt}
              />
              
              {/* Tags container */}
              <div 
                ref={(el) => (tagsRef.current[index] = el)}
                style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  top: 0, 
                  left: 0,
                  pointerEvents: 'none'
                }}
              >
                {image.tags && image.tags.map((tag, tagIndex) => (
                  <div 
                    key={tagIndex}
                    className={`hero-right__tag hero-right__tag--${tag.position}`}
                    style={{ opacity: 0, pointerEvents: 'auto' }}
                  >
                    {tag.text}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="hero-right__title" ref={titleRef}>
        {HERO_IMAGES[currentIndex].alt}
      </p>
    </div>
  );
};

export default HeroRight;
