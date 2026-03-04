import React from 'react';
import './KeyBenefits.scss';

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Improve Placement Rates",
      description: "25-40% improvement in outcomes."
    },
    {
      title: "Save Administrative Time",
      description: "Reduce manual work by 60%."
    },
    {
      title: "Predictive Insights",
      description: "Identify at-risk students early"
    },
    {
      title: "Demonstrate ROI",
      description: "Show measurable impact of programs."
    }
  ];

  const BenefitIcon = () => (
    <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-svg">
      <path d="M22.209 0.416992V29.2832H44.9639V0.416992H22.209ZM41.6973 25.1709H25.4766V23.2105L41.6973 23.2109V25.1709ZM25.4766 20.0203V18.06H36.6621V20.0203H25.4766ZM39.9297 10.1805L39.8912 8.68125L34.3175 14.7161L30.0126 10.0652L26.7454 13.6015L25.3233 12.2561L30.0127 7.14395L34.3176 11.7948L38.6996 7.02871L36.5855 6.87498L36.7007 4.91463L41.736 5.22209L41.8513 10.0653L39.9297 10.1805Z" fill="white"/>
      <path d="M32.9715 44.3131C32.9715 44.3131 32.0492 41.4689 31.5495 39.0473C31.3187 37.9327 31.3572 36.818 31.588 35.6263V35.5878C31.588 35.5878 32.3181 33.9734 33.8944 30.5139H21.0555V0.263875C21.0555 0.263875 21.094 0.186818 20.5172 0.110144C17.0966 -0.274377 13.9064 0.340555 10.9851 2.0705C7.44887 4.14608 5.71928 7.29813 4.83501 8.95067C2.25971 13.563 2.106 18.0221 2.18266 20.1743V20.2128L0.107078 26.0169C-0.277444 27.0931 0.414538 28.2462 1.52915 28.4385L2.56714 28.5922C2.60566 28.5922 2.64419 28.6308 2.68234 28.6693V28.7078C1.9522 35.0501 2.9898 37.1643 4.21965 37.8944C4.56564 38.0866 4.91163 38.1633 6.79494 39.0861C7.60213 39.4706 8.64015 40.0084 9.79289 40.9313C9.86994 40.9698 9.90809 41.0083 9.94662 41.0465L10.1003 48.1574C10.1003 48.2345 10.1389 48.2726 10.2156 48.2726H34.2009C34.278 48.2726 34.3546 48.1956 34.3161 48.1189C33.9709 47.1961 33.4715 45.8892 32.9718 44.3133L32.9715 44.3131Z" fill="white"/>
    </svg>
  );

  return (
    <section className="key-benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">
          Key <span className="highlight-blue">Benefits</span>
        </h2>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="icon-wrapper">
                <BenefitIcon />
              </div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
