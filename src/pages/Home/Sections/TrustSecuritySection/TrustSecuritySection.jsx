import React from 'react';
import { ArrowRight } from 'lucide-react';
import './TrustSecuritySection.scss';

const features = [
  {
    title: 'End-to-end encryption',
    iconUrl: '/assets/home-assets/TrustSecuritySectionAssets/icons/encryption.svg'
  },
  {
    title: 'FERPA-grade data protection',
    iconUrl: '/assets/home-assets/TrustSecuritySectionAssets/icons/protection.svg'
  },
  {
    title: 'Transparent privacy policy',
    iconUrl: '/assets/home-assets/TrustSecuritySectionAssets/icons/privacy.svg'
  }
];

const TrustSecuritySection = () => {
  return (
    <section id="trust-security" className="trust-security-section">
      <div className="trust-security__inner">
        <header className="trust-security__header">
          <h2>
            Trust, Security & <span>Compliance</span>
          </h2>
          <p className="description">
            We follow industry-standard data protection practices to secure personal, academic,
            and performance information.
          </p>
          <p className="highlight-text">Your Data. Protected. Always.</p>
        </header>

        <div className="trust-security__features">
          {features.map(({ title, iconUrl }) => (
            <div key={title} className="trust-security__feature">
              <div className="icon-box">
                <img src={iconUrl} alt="" className="custom-icon" />
              </div>
              <h3>{title}</h3>
            </div>
          ))}
        </div>

        <div className="trust-security__footer">
          <button type="button" className="cta-button">
            Explore Employer Solutions
            <ArrowRight size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSecuritySection;
