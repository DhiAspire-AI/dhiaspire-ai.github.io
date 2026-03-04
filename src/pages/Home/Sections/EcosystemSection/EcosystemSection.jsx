import React from "react";
import "./EcosystemSection.scss";

const CARDS = [
  {
    title: "Students",
    image: "/assets/home-assets/EcosystemSectionAssets/student-home.svg",
    gradient: "students",
    items: [
      "Personalized skill development",
      "AI-based assessments & feedback",
      "Internship & practice opportunities",
      "Placement assistance",
    ],
  },
  {
    title: "Colleges",
    image: "/assets/home-assets/EcosystemSectionAssets/collage-home.svg",
    gradient: "colleges",
    items: [
      "Advanced analytics",
      "Skill-gap reports",
      "Accreditation support",
      "Placement automation",
    ],
  },
  {
    title: "Employers",
    image: "/assets/home-assets/EcosystemSectionAssets/employers-home.svg",
    gradient: "employers",
    items: [
      "Access to a pre-skilled",
      "Job-ready talent pool with AI-driven matching",
    ],
  },
];

const EcosystemSection = () => {
  return (
    <section className="ecosystem">
      <div className="ecosystem__container">

        <div className="ecosystem__header">
          <h2 className="ecosystem__title">
            Bridging the{" "}
            <span className="ecosystem__highlight">
              Education - Employment
            </span>{" "}
            Gap Using AI
          </h2>

          <p className="ecosystem__subtitle">
            An AI-powered ecosystem that aligns students, colleges,
            and employers through skill assessment, gap analysis,
            and intelligent matching.
          </p>
        </div>

        <div className="ecosystem__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CARDS.map((card, index) => (
            <div className="ecosystem-card h-full" key={index}>
              
              <div className="ecosystem-card__image-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="ecosystem-card__image"
                />
              </div>

              <div className={`ecosystem-card__body ecosystem-card__body--${card.gradient}`}>
                <h3 className="ecosystem-card__title">{card.title}</h3>

                <ul className="ecosystem-card__list">
                  {card.items.map((item, i) => (
                    <li key={i} className="ecosystem-card__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        <div className="ecosystem__footer">
          <button className="ecosystem__button">
            See How DhiAspire Works
            <img
              src="/assets/button-arrow.svg"
              alt="arrow"
              className="ecosystem__button-icon"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;