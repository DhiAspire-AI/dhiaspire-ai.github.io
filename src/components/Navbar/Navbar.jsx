import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img
            src="/assets/DHI-Logo-White.svg"
            alt="DhiAspire Logo"
            className="logo-img"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              className={isActive('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="dropdown">
            <div
              className={`dropdown-trigger ${isActive('/solutions')}`}
            >
              Solutions <ChevronDown size={16} />
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/solutions/student"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Students
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/college"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For College
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/platform"
              className={isActive('/platform')}
              onClick={() => setIsMenuOpen(false)}
            >
              Platform
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={isActive('/resources')}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/company"
              className={isActive('/company')}
              onClick={() => setIsMenuOpen(false)}
            >
              Company
            </Link>
          </li>
        </ul>

        <div className="auth-buttons desktop-only">
          <Link to="/login" className="btn-signin">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
