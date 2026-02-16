import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Solutions from '../pages/Solutions/Solutions';
import Platform from '../pages/Platform/Platform';
import Resources from '../pages/Resources/Resources';
import Company from '../pages/Company/Company';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
        </Routes>
    );
};

export default AppRoutes;
