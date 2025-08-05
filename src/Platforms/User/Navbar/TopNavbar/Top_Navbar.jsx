import React, { useState, useEffect } from "react";
import "./Top_Navbar.css";

export function Top_Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata' // India Standard Time
      };
      const now = new Date();
      setCurrentDateTime(now.toLocaleString('en-IN', options));
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container">
      <header className="top-navbar">
        <div className="top-navbar__logo-wrapper">
          <img className="top-navbar__logo" src="./Images/CollageLogo.png" alt="Manipur Institute of Technology Logo" />
        </div>
        <div className="top-navbar__right-content">
          {/* The new date and time display */}
          <div className="top-navbar__datetime">
            {currentDateTime}
          </div>
          <div className="admin-panel">
            <button className="admin-panel__button" onClick={() => alert("Under Maintenance")}>
              Faculties
            </button>
            <button className="admin-panel__button" onClick={() => alert("Under Maintenance")}>
              Teachers
            </button>
          </div>
          <div className="theme-box">
            <button className="theme-box__button" onClick={() => alert("Under Maintenance")}>-</button>
            <button className="theme-box__button" onClick={() => alert("Under Maintenance")}>N</button>
            <button className="theme-box__button" onClick={() => alert("Under Maintenance")}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}