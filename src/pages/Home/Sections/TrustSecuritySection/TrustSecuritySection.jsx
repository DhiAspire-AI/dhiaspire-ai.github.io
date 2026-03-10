import React from "react";
import { ArrowRight } from "lucide-react";
import "./TrustSecuritySection.scss";

const features = [
  {
    title: "End-to-end encryption",
    iconUrl:
      "/assets/home-assets/TrustSecuritySectionAssets/icons/encryption.svg",
  },
  {
    title: "FERPA-grade data protection",
    iconUrl:
      "/assets/home-assets/TrustSecuritySectionAssets/icons/protection.svg",
  },
  {
    title: "Transparent privacy policy",
    iconUrl:
      "/assets/home-assets/TrustSecuritySectionAssets/icons/privacy.svg",
  },
  
];

const TrustSecuritySection = () => {
  return (
    <section className="trust-security">

      <div className="trust-security__container">

        {/* HEADER */}
        <div className="trust-security__header">

          <h2 className="trust-security__title">
            Trust, Security & <span>Compliance</span>
          </h2>

          <p className="trust-security__subtitle">
            We follow industry-standard data protection practices to secure
            personal, academic, and performance information.
          </p>

          <p className="trust-security__highlight">
            Your Data. Protected. Always.
          </p>

        </div>


        {/* FEATURES */}
        <div className="trust-security__features">

          {features.map((item, index) => (
            <div key={index} className="trust-security__feature">

              <div className="trust-security__icon">
                <img src={item.iconUrl} alt="" />
              </div>

              <h3>{item.title}</h3>

            </div>
          ))}

        </div>


        {/* CTA */}
        <div className="trust-security__footer">

          <button className="trust-security__button">

            <span>Explore Security & Compliance</span>

            <ArrowRight size={24} strokeWidth={2.5} />

          </button>

        </div>

      </div>

    </section>
  );
};

export default TrustSecuritySection;