import React from 'react';
import './Company.scss';
import CompanyHero from './Sections/CompanyHero/CompanyHero';
import OurStory from './Sections/OurStory/OurStory';
import CompanySolution from './Sections/CompanySolution/CompanySolution';
import OurValues from './Sections/OurValues/OurValues';
import CompanyCTA from './Sections/CompanyCTA/CompanyCTA';
import Footer from '../../components/Footer/Footer';

const Company = () => {
    return (
        <div className="company-page">
            <CompanyHero />
            <OurStory />
            <CompanySolution />
            <OurValues />
            <CompanyCTA />
            <Footer />
        </div>
    );
};

export default Company;
