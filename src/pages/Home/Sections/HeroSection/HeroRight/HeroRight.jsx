import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroRight.scss";

const HERO_IMAGES = [
  {
    src: "/assets/home-assets/HeroSectionAssets/Ai-mock-interview-hero.svg",
    alt: "AI Mock Interview",
    tags: [
      { text: "Placement Boost", position: "top" },
      { text: "Talent Filtering", position: "left" },
      { text: "Builds Confidence", position: "bottom" }
    ]
  },
  {
    src: "/assets/home-assets/HeroSectionAssets/Resume-review-hero.svg",
    alt: "Resume Reviewer",
    tags: [
      { text: "Placement Readiness", position: "top" },
      { text: "Better Visibility", position: "bottom-left" },
      { text: "Faster Screening", position: "right" }
    ]
  },
  {
    src: "/assets/home-assets/HeroSectionAssets/AI-feedback-service-hero.svg",
    alt: "AI Feedback Service",
    tags: [
      { text: "Performance Clarity", position: "top" },
      { text: "Skill Gaps Tracking", position: "left" },
      { text: "Candidate Efficiency", position: "bottom" }
    ]
  },
  {
    src: "/assets/home-assets/HeroSectionAssets/Ai-coading-service-hero.svg",
    alt: "AI Coding Service",
    tags: [
      { text: "Job Readiness", position: "top" },
      { text: "Benchmark Insights", position: "right" },
      { text: "Proven Capability", position: "bottom" }
    ]
  }
];

const HeroRight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef([]);
  const tagsRef = useRef([]);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const total = HERO_IMAGES.length;
    
    // Orbital path with visible low-opacity slots
    const SLOTS = {
      CENTER: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 10, filter: "blur(0px)" },
      TOP_RIGHT: { x: 300, y: -160, scale: 0.2, opacity: 0.12, zIndex: 1, filter: "blur(4px)" },
      BOTTOM_RIGHT: { x: 300, y: 200, scale: 0.2, opacity: 0.12, zIndex: 1, filter: "blur(4px)" }
    };

    const currentIdx = currentIndex;
    const nextIdx = (currentIndex + 1) % total;
    const prevIdx = (currentIndex + total - 1) % total;

    // 1. Initial State: Center is visible, Top/Bottom are low-opacity previews
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      if (i === currentIdx) {
        gsap.set(card, SLOTS.CENTER);
      } else if (i === nextIdx) {
        gsap.set(card, SLOTS.BOTTOM_RIGHT);
      } else if (i === prevIdx) {
        gsap.set(card, SLOTS.TOP_RIGHT);
      } else {
        gsap.set(card, { opacity: 0, scale: 0.1, zIndex: 0 });
      }
    });

    // Tag visibility for ONLY the center card
    tagsRef.current.forEach((group, i) => {
      if (!group) return;
      if (i === currentIdx) {
        gsap.set(group.children, { opacity: 1, y: 0 });
      } else {
        gsap.set(group.children, { opacity: 0, y: 20 });
      }
    });

    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      delay: 3.5, // Pause on each card
      onComplete: () => {
        setCurrentIndex(nextIdx);
      }
    });

    // 2. Orbital Rotation Cycle
    // A. Current card (Center) moves to TOP_RIGHT (becomes background low-opacity)
    tl.to(cardsRef.current[currentIdx], {
      ...SLOTS.TOP_RIGHT,
      duration: 1.8,
      ease: "power2.inOut"
    });

    // B. Next card (Bottom Right) moves to CENTER (becomes foreground)
    tl.to(cardsRef.current[nextIdx], {
      ...SLOTS.CENTER,
      duration: 1.8,
      ease: "power2.inOut"
    }, 0);

    // C. The card that WAS at TOP_RIGHT fades out to make room
    tl.to(cardsRef.current[prevIdx], {
      opacity: 0,
      scale: 0.1,
      duration: 1.0,
      ease: "power2.in"
    }, 0);

    // D. The NEXT card in line (after nextIdx) fades in at BOTTOM_RIGHT
    const incomingIdx = (nextIdx + 1) % total;
    tl.fromTo(cardsRef.current[incomingIdx], 
      { opacity: 0, scale: 0.1 },
      { ...SLOTS.BOTTOM_RIGHT, duration: 1.2 }, 
      0.6
    );

    // E. Content Fades (Tags & Title)
    tl.to([tagsRef.current[currentIdx].children, titleRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.6
    }, 0);

    tl.fromTo([tagsRef.current[nextIdx].children, titleRef.current], 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      }, 
      1.0
    );

    timelineRef.current = tl;

    return () => {
      if (tl) tl.kill();
    };
  }, [currentIndex]);

  return (
    <div className="hero-right">
      <div className="hero-right__stage">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="hero-right__card"
          >
            <img
              className="hero-right__image"
              src={image.src}
              alt={image.alt}
            />

            <div
              ref={(el) => (tagsRef.current[index] = el)}
              className="hero-right__tags"
            >
              {image.tags.map((tag, i) => (
                <div
                  key={i}
                  className={`hero-right__tag hero-right__tag--${tag.position}`}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p ref={titleRef} className="hero-right__title">
        {HERO_IMAGES[currentIndex].alt}
      </p>
    </div>
  );
};

export default HeroRight;
