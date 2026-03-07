import React, { useEffect, useState } from "react";
import "./TrustedBySection.scss";

const stats = [
  { value: "500+", label: "Colleges Partnered" },
  { value: "50,000+", label: "Students Assessed" },
  { value: "200+", label: "Hiring Partners" },
  { value: "85%", label: "Placement Improvement" },
];

const testimonials = [
  {
    quote:
      "The AI career assessment and personalized roadmap helped our students gain clarity and confidence.",
    author: "Dr. Tamminana Bhogesh",
    role: "Placement Head, Dhi Engineering College",
    avatar:
      "/assets/home-assets/TrustedBySectionAssets/author-home.svg",
  },
  {
    quote:
      "DhiAspire AI helped me understand my strengths and secure my first internship.",
    author: "Korla Vamzi",
    role: "Student, CSE Dept.",
    avatar:
      "/assets/home-assets/TrustedBySectionAssets/author-home.svg",
  },
  {
    quote:
      "The platform bridge the gap between academic learning and industry requirements seamlessly.",
    author: "Dr.Nandha Kumar",
    role: "Industry Expert",
    avatar:
      "/assets/home-assets/TrustedBySectionAssets/author-home.svg",
  },
];

const TrustedBySection = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = isMobile
    ? [testimonials[active]]
    : [
      testimonials[active],
      testimonials[(active + 1) % testimonials.length],
    ];

  return (
    <section className="trusted-by">

      {/* CENTER CONTAINER */}
      <div className="trusted-by__container">

        {/* HEADER */}
        <div className="trusted-by__header">
          <h2 className="trusted-by__title">
            Trusted by Colleges, Students & Hiring Partners
          </h2>

          <p className="trusted-by__subtitle">
            Real Impact Across the Ecosystem
          </p>
        </div>


        {/* STATS */}
        <div className="trusted-by__stats grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-12">

          {stats.map((stat) => (
            <div key={stat.label} className="trusted-by__stat">

              <div className="trusted-by__stat-value">
                {stat.value}
              </div>

              <div className="trusted-by__stat-label">
                {stat.label}
              </div>

            </div>
          ))}

        </div>


        {/* TESTIMONIALS */}
        <div className="trusted-by__testimonials grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10">

          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="trusted-by__card">

              <p className="trusted-by__quote">
                “{testimonial.quote}”
              </p>

              <div className="trusted-by__author">

                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="trusted-by__avatar"
                />

                <div>

                  <div className="trusted-by__name">
                    {testimonial.author}
                  </div>

                  <div className="trusted-by__role">
                    {testimonial.role}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* DOTS */}
        <div className="trusted-by__dots">

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`trusted-by__dot ${index === active ? "active" : ""
                }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrustedBySection;