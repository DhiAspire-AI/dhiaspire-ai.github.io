import React from 'react';
import './Company.scss';
import Footer from '../../components/Footer/Footer';

const Company = () => {
    return (
        <div className="company-page">
            <div style={{ padding: '100px 40px', minHeight: '60vh' }}>
                <h1>Company Page</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Company;
