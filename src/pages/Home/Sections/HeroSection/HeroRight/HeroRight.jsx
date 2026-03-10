import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroRight.scss";

const HERO_IMAGES = [
  {
    src: "/assets/home-assets/HeroSectionAssets/Ai-mock-interview-hero.png",
    alt: "AI Mock Interview",
    tags: [
      { text: "Placement Boost", top: "14%", left: "96%" },
      { text: "Talent Filtering", top: "55%", left: "0%" },
      { text: "Builds Confidence", top: "82%", left: "99%" }
    ]
  },
{
  src: "/assets/home-assets/HeroSectionAssets/Resume-review-hero.png",
  alt: "Resume Reviewer",
  tags: [
    { text: "Better Visibility", top: "8%", left: "0%" },
    { text: "Placement Readiness", top: "10%", left: "88%" },
    { text: "Faster Screening", top: "80%", left: "-8%" },
  ],
},
  {
    src: "/assets/home-assets/HeroSectionAssets/AI-feedback-service-hero.png",
    alt: "AI Feedback Service",
    tags: [
      { text: "Performance Clarity", top: "2%", left: "100%" },
      { text: "Skill Gaps Tracking", top: "23%", left: "-10%" },
      { text: "Candidate Efficiency", top: "82%", left: "0%" }
    ]
  },
  {
    src: "/assets/home-assets/HeroSectionAssets/Ai-coading-service-hero.png",
    alt: "AI Coding Service",
    tags: [
      { text: "Job Readiness", top: "10%", left: "0%" },
      { text: "Benchmark Insights", top: "50%", left: "92%" },
      { text: "Proven Capability", top: "85%", left: "0%" }
    ]
  }
];

const HeroRight = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsRef = useRef([]);
  const tagsRef = useRef([]);
  const timelineRef = useRef(null);
  const titleRef = useRef(null);
  const rotationTimerRef = useRef(null);

  const getCenterIndex = () => currentIndex;
  const getTopIndex = () => (currentIndex + 3) % HERO_IMAGES.length;
  const getBottomIndex = () => (currentIndex + 1) % HERO_IMAGES.length;

  useEffect(() => {

    if (timelineRef.current) timelineRef.current.kill();

    const centerIdx = getCenterIndex();
    const topIdx = getTopIndex();
    const bottomIdx = getBottomIndex();

    const tl = gsap.timeline();

    const centerScale = centerIdx === 1 || centerIdx === 3 ? 1.75 : 1.45;

    const SLOTS = {
      CENTER: { x: 0, y: 0, scale: centerScale, opacity: 1 },
      TOP_RIGHT: { x: 240, y: -180, scale: 0.26, opacity: 0.35 },
      BOTTOM_RIGHT: { x: 240, y: 180, scale: 0.26, opacity: 0.35 }
    };

    HERO_IMAGES.forEach((_, idx) => {

      const card = cardsRef.current[idx];
      if (!card) return;

      gsap.set(card, { xPercent: -50, yPercent: -50 });

      if (idx === centerIdx) {

        gsap.set(card, SLOTS.BOTTOM_RIGHT);

        if (tagsRef.current[idx]) {
          gsap.set(tagsRef.current[idx].children, { opacity: 0 });
        }

      }
      else if (idx === topIdx) {
        gsap.set(card, SLOTS.TOP_RIGHT);
      }
      else if (idx === bottomIdx) {
        gsap.set(card, SLOTS.BOTTOM_RIGHT);
      }
      else {
        gsap.set(card, { opacity: 0 });
      }

    });

    // determine a responsive diagonal offset for title entrance
    const titleOffset = (() => {
      const w = window.innerWidth;
      if (w >= 1200) return { x: 120, y: 120 };
      if (w <= 768) return { x: 40, y: 40 };
      return { x: 80, y: 80 };
    })();

    // ensure title initial state before timeline (only vertical offset so it comes from below)
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, x: 0, y: titleOffset.y });
    }

    tl.to(cardsRef.current[centerIdx], {
      ...SLOTS.CENTER,
      duration: 1.2,
      ease: "power3.out"
    });

    // title enters from below (vertical motion only)
    if (titleRef.current) {
      tl.to(
        titleRef.current,
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.25"
      );
    }

    // tags animate after title appears
    if (tagsRef.current[centerIdx]) {
      tl.to(tagsRef.current[centerIdx].children, { opacity: 1, stagger: 0.15, duration: 0.4 }, ">");
    }

    tl.to({}, { duration: 1.5 });

    if (tagsRef.current[centerIdx]) {
      tl.to(tagsRef.current[centerIdx].children, { opacity: 0 });
    }

    tl.to(cardsRef.current[centerIdx], {
      ...SLOTS.TOP_RIGHT,
      duration: 1.2
    });

    timelineRef.current = tl;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, tl.totalDuration() * 1000);

    return () => {
      clearTimeout(timer);
      if (timelineRef.current) timelineRef.current.kill();
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
            style={{ left: "50%", top: "50%" }}
          >

            <div className="hero-right__image-wrapper">

              <img
                className="hero-right__image"
                src={image.src}
                alt={image.alt}
              />

              <div
                ref={(el) => (tagsRef.current[index] = el)}
                className="hero-right__tags"
              >

                {image.tags.map((tag, tagIndex) => (

                  <div
                    key={tagIndex}
                    className="hero-right__tag"
                    style={{ top: tag.top, left: tag.left }}
                  >
                    {tag.text}
                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

      <p className="hero-right__title" ref={titleRef}>
        {HERO_IMAGES[currentIndex].alt}
      </p>

    </div>

  );

};

export default HeroRight;