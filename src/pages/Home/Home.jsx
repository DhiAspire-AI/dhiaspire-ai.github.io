import React, { useState } from 'react';
import './Home.scss';
import SectionsHero from './Sections/HeroSection/HeroSection';
import CollegeSolutionsSection from './Sections/CollegeSolutionsSection/CollegeSolutionsSection';
import EcosystemSection from './Sections/EcosystemSection/EcosystemSection';
import IntelligenceSection from './Sections/IntelligenceSection/IntelligenceSection';
import StudentFeaturesSection from './Sections/StudentFeaturesSection/StudentFeaturesSection';
import TrustedBySection from './Sections/TrustedBySection/TrustedBySection';
import EmployerSolutionsSection from './Sections/EmployerSolutionsSection/EmployerSolutionsSection';
import HowItWorksSection from './Sections/HowItWorksSection/HowItWorksSection';
import TrustSecuritySection from './Sections/TrustSecuritySection/TrustSecuritySection';
import EmpowerSection from './Sections/EmpowerSection/EmpowerSection';
import Footer from '../../components/Footer/Footer';
import BookADemo from '../../components/BookADemo/BookADemo';

const Home = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="home-page">
      <SectionsHero onBookDemo={openDemoModal} />
      <EcosystemSection />
      <IntelligenceSection />
      <StudentFeaturesSection />
      <CollegeSolutionsSection />
      <EmployerSolutionsSection />
      <TrustedBySection />
      <HowItWorksSection />
      <TrustSecuritySection />
      <EmpowerSection onBookDemo={openDemoModal} />
      <Footer />

      <BookADemo 
        isOpen={isDemoModalOpen} 
        onClose={closeDemoModal} 
      />
    </div>
  );
};

export default Home;
