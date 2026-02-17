import React, { useState } from 'react';
import StudentHero from './Sections/StudentHero/StudentHero';
import StudentChallenges from './Sections/StudentChallenges/StudentChallenges';
import StudentSolutionSection from './Sections/StudentSolutionSection/StudentSolutionSection';
import StudentHowItWorks from './Sections/StudentHowItWorks/StudentHowItWorks';
import StudentSuccessStories from './Sections/StudentSuccessStories/StudentSuccessStories';
import StudentCTA from './Sections/StudentCTA/StudentCTA';
import Footer from '../../../components/Footer/Footer';
import BookADemo from '../../../components/BookADemo/BookADemo';
import './StudentSolution.scss';

const StudentSolution = () => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const openDemoModal = () => setIsDemoModalOpen(true);
    const closeDemoModal = () => setIsDemoModalOpen(false);
    const handleGetStarted = () => {
        // Handle get started logic, maybe scroll to CTA or redirect
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="student-solution">
            <StudentHero onBookDemo={openDemoModal} onGetStarted={handleGetStarted} />
            {/* <StudentChallenges /> */}
           
            <StudentSolutionSection />
            <StudentHowItWorks />
            <StudentSuccessStories />
            <StudentCTA onGetStarted={handleGetStarted} />
            
            <Footer />

            <BookADemo 
                isOpen={isDemoModalOpen} 
                onClose={closeDemoModal} 
            />
        </div>
    );
};

export default StudentSolution;
