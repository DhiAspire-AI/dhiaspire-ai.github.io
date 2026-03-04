import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import StudentSolution from '../pages/Solutions/Student/StudentSolution';
import CollegeSolution from '../pages/Solutions/College/CollegeSolution';
import Platform from '../pages/Platform/Platform';
import Resources from '../pages/Resources/Resources';
import Company from '../pages/Company/Company';
import Page404 from '../components/Page404/Page404';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions/student" element={<StudentSolution />} />
            <Route path="/solutions/college" element={<CollegeSolution />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
            {/* Catch-all route for 404 page */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default AppRoutes;
