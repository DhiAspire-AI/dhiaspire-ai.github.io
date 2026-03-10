import React, { useState } from 'react';
import { useEffect } from 'react';
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

const Home = ({ initialOpenDemo = false }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(Boolean(initialOpenDemo));

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  // If the route passed initialOpenDemo prop, open modal on mount
  useEffect(() => {
    if (initialOpenDemo) openDemoModal();
  }, [initialOpenDemo]);

  // Deep-link support removed: modal can still be opened via prop `initialOpenDemo` or `onBookDemo` handler.

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
