import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
