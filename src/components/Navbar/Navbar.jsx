import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.scss';

const Navbar = ({ COLORS }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const navItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Features',
      href: '#features',
    },
    {
      name: 'Students',
      href: '#students',
      dropdown: [
        { label: 'Career Readiness Path', href: '#career-path' },
        { label: 'Mock Interviews', href: '#mock-interviews' },
        { label: 'Resume Builder', href: '#resume-builder' },
        { label: 'Coding Practice', href: '#coding-practice' },
        { label: 'AI Career Mentor', href: '#ai-mentor' },
      ],
    },
    {
      name: 'Colleges',
      href: '#colleges',
      dropdown: [
        { label: 'Student Tracking', href: '#tracking' },
        { label: 'Placement Workflow', href: '#workflow' },
        { label: 'Readiness Analytics', href: '#analytics' },
        { label: 'Recruiter Collaboration', href: '#collaboration' },
        { label: 'AI Insights Hub', href: '#insights' },
      ],
    },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-md bg-opacity-95 shadow-lg z-50 transition-all duration-300"
      style={{ backgroundColor: COLORS.NAVY_PRIMARY }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        <a
          href="/"
          className="flex items-center gap-2 rounded-sm"
          style={{ color: COLORS.ACCENT_GREEN }}
        >
          <img
            src="https://dhiaspire-ai.github.io/assets/DhiAspire.webp"
            alt="DhiAspire logo"
            className="w-12 h-12 object-contain drop-shadow-md"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-3xl font-extrabold tracking-tight">
              DhiAspire AI
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: '#d1d5db' }} // light gray caption color
            >
              Aspirations to Achievements
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-medium font-medium relative">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <a href={item.href} className="nav-link">
                {item.name}
                {item.dropdown && (
                  <ChevronDown size={14} className="ml-1 mt-0.5" />
                )}
              </a>

              {/* Dropdown */}
              {item.dropdown && (
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transform transition-all duration-300 ease-out z-50 p-1">
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        className="dropdown-item group/item"
                        style={{
                          color: 'white',
                          '--hover-color': COLORS.ACCENT_GREEN,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = COLORS.ACCENT_GREEN)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = 'white')
                        }
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <button
          className="hidden lg:block px-6 py-2 rounded-full font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundColor: COLORS.ACCENT_GREEN,
            color: COLORS.NAVY_DARK,
          }}
        >
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none p-2 rounded-md hover:bg-opacity-10"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMobile}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-330 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: COLORS.NAVY_DARK }}
      >
        <div className="px-6 pb-4 space-y-4 flex flex-col items-start">
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium w-full py-2 border-b border-gray-700 last:border-b-0 text-gray-200 hover:text-white"
              >
                {item.name}
              </a>

              {/* Mobile Dropdown */}
              {item.dropdown && (
                <div className="pl-4">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm py-1 text-gray-400 hover:text-gray-200"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            className="w-full mt-4 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
            style={{
              backgroundColor: COLORS.ACCENT_GREEN,
              color: COLORS.NAVY_DARK,
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
