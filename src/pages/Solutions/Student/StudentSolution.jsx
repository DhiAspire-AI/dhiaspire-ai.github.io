import React from 'react';
import StudentHero from './Sections/StudentHero/StudentHero';
import StudentChallenges from './Sections/StudentChallenges/StudentChallenges';
import Footer from '../../../components/Footer/Footer';
import './StudentSolution.scss';

const StudentSolution = () => {
    return (
        <div className="student-solution">
            <StudentHero />
            <StudentChallenges />
            
            {/* Additional sections will be added here */}
            
            <Footer />
        </div>
    );
};

export default StudentSolution;
