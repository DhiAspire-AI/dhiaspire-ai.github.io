import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './Page404.scss';

const Page404 = () => {
  return (
    <div className="page-404">
      <div className="content">
        <h1 className="error-code">404</h1>
        <h2 className="title">Page Not Found</h2>
        <p className="description">
          Oops! The page you're looking for doesn't exist or has been moved. 
          We're still building some parts of our platform.
        </p>
        <div className="actions">
          <Link to="/" className="back-home">
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          <button onClick={() => window.history.back()} className="go-back">
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
      <div className="background-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </div>
  );
};

export default Page404;
