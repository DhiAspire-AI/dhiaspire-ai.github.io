import React, { useEffect, useState } from 'react';
import './HeroRight.scss';

const ROTATION_INTERVAL_MS = 3500;
const TRANSITION_DURATION_MS = 960;
const BOOT_DURATION_MS = 920;

const HERO_IMAGES = [
  { src: '/assets/Home/HeroSection/Ai-mock-interview-hero.svg', alt: 'AI Mock Interview' },
  { src: '/assets/Home/HeroSection/Resume-review-hero.svg', alt: 'Resume Reviewer' },
  { src: '/assets/Home/HeroSection/AI-feedback-service-hero.svg', alt: 'AI Feedback Service' },
  { src: '/assets/Home/HeroSection/Ai-coading-service-hero.svg', alt: 'AI Coding Service' },
];

const HeroRight = ({ images = HERO_IMAGES }) => {
  const safeImages = images.length > 0 ? images : HERO_IMAGES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBooting, setIsBooting] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    syncMotionPreference();

    if (typeof motionPreference.addEventListener === 'function') {
      motionPreference.addEventListener('change', syncMotionPreference);
      return () => motionPreference.removeEventListener('change', syncMotionPreference);
    }

    motionPreference.addListener(syncMotionPreference);
    return () => motionPreference.removeListener(syncMotionPreference);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const preloadedImages = safeImages.map((item) => {
      const image = new window.Image();
      image.src = item.src;
      return image;
    });

    return () => {
      preloadedImages.length = 0;
    };
  }, [safeImages]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsBooting(false);
      setIsTransitioning(false);
      return undefined;
    }

    const bootTimerId = window.setTimeout(() => {
      setIsBooting(false);
    }, BOOT_DURATION_MS);

    return () => window.clearTimeout(bootTimerId);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (safeImages.length <= 1 || prefersReducedMotion) {
      return undefined;
    }

    if (isBooting || isTransitioning) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setIsTransitioning(true);
    }, ROTATION_INTERVAL_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isBooting, isTransitioning, prefersReducedMotion, safeImages.length]);

  useEffect(() => {
    if (!isTransitioning || prefersReducedMotion) {
      return undefined;
    }

    const transitionTimerId = window.setTimeout(() => {
      setActiveIndex((previousIndex) => (previousIndex + 1) % safeImages.length);
      setIsTransitioning(false);
    }, TRANSITION_DURATION_MS);

    return () => {
      window.clearTimeout(transitionTimerId);
    };
  }, [isTransitioning, prefersReducedMotion, safeImages.length]);

  useEffect(() => {
    if (safeImages.length <= 1 || !prefersReducedMotion) {
      return undefined;
    }

    const reducedMotionTimer = window.setInterval(() => {
      setActiveIndex((previousIndex) => (previousIndex + 1) % safeImages.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(reducedMotionTimer);
  }, [prefersReducedMotion, safeImages.length]);

  const totalSlides = safeImages.length;
  const previousIndex = (activeIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (activeIndex + 1) % totalSlides;
  const activeImage = safeImages[activeIndex];
  const previousImage = safeImages[previousIndex];
  const nextImage = safeImages[nextIndex];
  const stageClassName = [
    'hero-right__stage',
    isBooting ? 'is-booting' : '',
    isTransitioning ? 'is-transitioning' : 'is-idle',
  ].join(' ').trim();

  return (
    <div className="hero-right" aria-hidden="true">
      <div className={stageClassName}>
        <div className={`hero-right__ghost hero-right__ghost--top ${isBooting || isTransitioning ? 'is-hidden' : ''}`}>
          <img
            className="hero-right__ghost-image"
            src={previousImage.src}
            alt=""
            decoding="async"
            loading="lazy"
          />
        </div>

        <div className={`hero-right__ghost hero-right__ghost--bottom ${isTransitioning ? 'is-hidden' : ''}`}>
          <img
            className="hero-right__ghost-image"
            src={nextImage.src}
            alt=""
            decoding="async"
            loading="lazy"
          />
        </div>

        {!isBooting && !isTransitioning && (
          <div className="hero-right__card hero-right__card--center">
            <img
              className="hero-right__image"
              src={activeImage.src}
              alt=""
              decoding="async"
              loading="eager"
            />
          </div>
        )}

        {isBooting && (
          <div className="hero-right__card hero-right__card--boot">
            <img
              className="hero-right__image"
              src={activeImage.src}
              alt=""
              decoding="async"
              loading="eager"
            />
          </div>
        )}

        {isTransitioning && (
          <div className="hero-right__card hero-right__card--outgoing">
            <img
              className="hero-right__image"
              src={activeImage.src}
              alt=""
              decoding="async"
              loading="eager"
            />
          </div>
        )}

        {isTransitioning && (
          <div className="hero-right__card hero-right__card--incoming">
            <img
              className="hero-right__image"
              src={nextImage.src}
              alt=""
              decoding="async"
              loading="eager"
            />
          </div>
        )}
      </div>

      <p className="hero-right__title">{activeImage.alt}</p>
    </div>
  );
};

export default HeroRight;
