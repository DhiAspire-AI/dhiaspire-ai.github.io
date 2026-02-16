import React, { useEffect, useState } from 'react';
import './TrustedBySection.scss';

const stats = [
  { value: '500+', label: 'Colleges Partnered' },
  { value: '50,000+', label: 'Students Assessed' },
  { value: '200+', label: 'Hiring Partners' },
  { value: '85%', label: 'Placement Improvement' },
];

const testimonials = [
  {
    quote:
      'The AI career assessment and personalized roadmap helped our students gain clarity and confidence.',
    author: 'Dr. Divya Peachi',
    role: 'Placement Head, Dhi Engineering College',
    avatar: '/assets/Home/TrustedBySection/author-home.svg',
  },
  {
    quote: 'DhiAspire helped me understand my strengths and secure my first internship.',
    author: 'Jhon Pandian',
    role: 'Student, CSE Dept.',
    avatar: '/assets/Home/TrustedBySection/author-home.svg',
  },
];

const TrustedBySection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 2) return undefined;

    const id = setInterval(
      () => setActive((s) => (s + 1) % testimonials.length),
      4500,
    );

    return () => clearInterval(id);
  }, []);

  const visibleTestimonials =
    testimonials.length > 1
      ? [testimonials[active], testimonials[(active + 1) % testimonials.length]]
      : testimonials;

  return (
    <section id="trusted-by" className="trusted-by">
      <div className="trusted-by__inner container">
        <header className="trusted-header">
          <h2>Trusted by Colleges, Students & Hiring Partners</h2>
          <p className="sub">Real Impact Across the Ecosystem</p>
        </header>

        <div className="trusted-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="trusted-testimonials">
          <div className="testimonial-cards">
            {visibleTestimonials.map((t, index) => (
              <figure className="testimonial" key={`${t.author}-${index}`}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>

                <figcaption className="author-row">
                  <div className="avatar">
                    <img src={t.avatar} alt={t.author} loading="lazy" />
                  </div>

                  <div className="author-copy">
                    <div className="author">{t.author}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="trusted-ellipse" aria-hidden="true" />
    </section>
  );
};

export default TrustedBySection;
