import React, { useState } from 'react';
import CollegeHero from './Sections/CollegeHero/CollegeHero';
import ChallengesSection from './Sections/ChallengesSection/ChallengesSection';
import SolutionSection from './Sections/SolutionSection/SolutionSection';
import KeyBenefits from './Sections/KeyBenefits/KeyBenefits';
import CollegeCTA from './Sections/CollegeCTA/CollegeCTA';
import Footer from '../../../components/Footer/Footer';
import BookADemo from '../../../components/BookADemo/BookADemo';
import './CollegeSolution.scss';

const CollegeSolution = () => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const openDemoModal = () => setIsDemoModalOpen(true);
    const closeDemoModal = () => setIsDemoModalOpen(false);

    return (
        <div className="college-solution">
            <CollegeHero onBookDemo={openDemoModal} />
            <ChallengesSection />
            <SolutionSection />
            <KeyBenefits />
            <CollegeCTA onScheduleDemo={openDemoModal} />
            
            {/* Add more sections here as they are developed */}
            
            <Footer />

            <BookADemo 
                isOpen={isDemoModalOpen} 
                onClose={closeDemoModal} 
            />
        </div>
    );
};

export default CollegeSolution;
