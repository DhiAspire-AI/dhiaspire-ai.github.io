import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import BookADemo from "../BookADemo/BookADemo";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const location = useLocation();

  /* ✅ Improved Scroll Hide Logic (Stable) */
  useEffect(() => {
    let lastScroll = 0;

    const controlNavbar = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  /* Lock body scroll when mobile menu or demo modal is open */
  useEffect(() => {
    if (isMenuOpen || isDemoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isDemoModalOpen]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" ? "active" : "";
    return location.pathname.startsWith(path) ? "active" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <nav className={`navbar ${!isVisible ? "navbar--hidden" : ""}`}>
      <div className="navbar-container">

        {/* LEFT */}
        <div className="nav-section nav-section--left">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/assets/DHI-Logo-White.svg"
              alt="DhiAspire"
              className="logo-img"
            />
          </Link>
        </div>

        {/* OVERLAY */}
        <div
          className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        />

        {/* CENTER MENU */}
        <div className={`nav-menu-wrapper ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive("/")} onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className={`dropdown ${isSolutionsOpen ? "open" : ""}`}>
              <div
                className={`dropdown-trigger ${isActive("/solutions")}`}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                Solutions <ChevronDown size={16} className={`chevron ${isSolutionsOpen ? "rotated" : ""}`} />
              </div>

              <ul className="dropdown-menu">
                <li>
                  <Link to="/solutions/student" onClick={closeMenu}>
                    For Students
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/college" onClick={closeMenu}>
                    For College
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/platform" className={isActive("/platform")} onClick={closeMenu}>
                Platform
              </Link>
            </li>

            <li>
              <Link to="/resources" className={isActive("/resources")} onClick={closeMenu}>
                Resources
              </Link>
            </li>

            <li>
              <Link to="/company" className={isActive("/company")} onClick={closeMenu}>
                Company
              </Link>
            </li>
          </ul>

          {/* MOBILE ACTIONS */}
          <div className="auth-buttons auth-buttons--mobile">
            <Link to="/404" className="btn-signin" onClick={closeMenu}>
              Sign In
            </Link>
            <button className="btn-book-demo" onClick={() => { closeMenu(); openDemoModal(); }}>
              Book a Demo
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="nav-section nav-section--right">
          <div className="auth-buttons auth-buttons--desktop">
            <Link to="/404" className="nav-signin-link">
              Sign In
            </Link>
            <button className="btn-book-demo" onClick={openDemoModal}>
              Book a Demo
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* RENDER MODAL HERE SO NAVBAR CAN MANAGE IT INDEPENDENTLY */}
      <BookADemo isOpen={isDemoModalOpen} onClose={closeDemoModal} />

    </nav>
  );
};

export default Navbar;