import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './Page404.scss';

const Page404 = () => {
  const [email, setEmail] = useState('');

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Signing up with:', email);
    setEmail('');
  };

  return (
    <div className="launching-soon">
      <div className="content">
        <h1 className="main-title">We are Launching Soon!</h1>
        <p className="sub-title">
          AI-powered employability platform. Launching soon.<br />
          Be the first to know when this feature is ready!<br />
          Sign up now, We'll notify!
        </p>
        
        <form className="notify-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter Your Email Here" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn">
              <ArrowRight size={20} color="white" />
            </button>
          </div>
        </form>
      </div>

      {/* Atmospheric Background Effects from Figma */}
      <div className="bg-glow bg-glow-left"></div>
      <div className="bg-glow bg-glow-right"></div>
    </div>
  );
};

export default Page404;
