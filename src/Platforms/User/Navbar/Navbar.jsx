import React, { useState, useEffect } from "react";
// NOTE: If you are using React Router for navigation, you should import Link
// import { Link } from "react-router-dom";

// Import your dropdown components
import { Administration_drop } from "../Main_Page/Administration/Administration_drop";
import { Department_drop } from "../Main_Page/Department/Department_drop";
import { Facility_drop } from "../Main_Page/Facility/Facility_drop";
import { FeePayment_Drop } from "../Main_Page/Fee_Payment/FeePayment_Drop";
import { Information_drop } from "../Main_Page/Information/Information_drop";

// Import the CSS file
import "./Navbar.css";

// A single source of truth for all navigation items makes maintenance easy.
const navItems = [
  { type: 'link', label: 'Home', href: '/' },
  { type: 'dropdown', label: 'Administration', component: <Administration_drop /> },
  { type: 'dropdown', label: 'Department', component: <Department_drop /> },
  { type: 'dropdown', label: 'Facility', component: <Facility_drop /> },
  { type: 'dropdown', label: 'Information', component: <Information_drop /> },
  { type: 'dropdown', label: 'Fee Payment', component: <FeePayment_Drop /> },
  { type: 'link', label: 'Exam', href: 'https://www.manipuruniv.ac.in/examform2021/', external: true },
  { type: 'link', label: 'Conference', href: '/Conference' },
  { type: 'link', label: 'NIRF', href: '/NIRF' },
  { type: 'link', label: 'AICTE VAANI', href: '/AICTEVAANI' },
  { type: 'link', label: 'Contact Us', href: '/Contact_Us' },
];

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to determine if we're on mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (label) => {
    // Only handle dropdown clicks on mobile
    if (isMobile) {
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (isMobile) {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* --- THIS IS THE LINE TO CHANGE --- */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'menu-is-open' : ''}`}
          onClick={handleMobileMenuToggle} 
          aria-expanded={isMobileMenuOpen} 
          aria-controls="navbar-menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        
        <div id="navbar-menu" className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <a 
                  key={item.label}
                  href={item.href}
                  className="nav-item nav-link"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              );
            }

            if (item.type === 'dropdown') {
              const isActive = activeDropdown === item.label;
              return (
                <div key={item.label} className={`nav-item dropdown-parent ${isActive && isMobile ? 'active' : ''}`}>
                  <button 
                    className="dropdown-toggle" 
                    onClick={() => handleDropdownToggle(item.label)} 
                    aria-expanded={isActive && isMobile}
                  >
                    <span>{item.label}</span>
                    {isMobile && (
                      <span className="dropdown-arrow">{isActive ? '▲' : '▼'}</span>
                    )}
                  </button>
                  <div className="dropdown-content">
                    {item.component}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </nav>
  );
}