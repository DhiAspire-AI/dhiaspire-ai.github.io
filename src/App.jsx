import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
