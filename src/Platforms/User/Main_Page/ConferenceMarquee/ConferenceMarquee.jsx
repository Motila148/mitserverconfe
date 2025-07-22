import React from 'react';
import './ConferenceMarquee.css';

/**
 * A scrolling announcement bar component.
 * @param {object} props - The component props.
 * @param {string} props.message - The main text to display.
 * e.g., "Announcing the North East International Conference on Innovation in Science and Technology (NE-ICIST 2025)!"
 * @param {string} props.link - The URL for the conference website.
 * @param {string} props.linkText - The text for the clickable link. e.g., "Click here to visit the website."
 */
const ConferenceMarquee = ({ message, link, linkText }) => {
  return (
    <div className="conference-marquee-container">
      <div className="marquee-content">
        {/* The text is duplicated to create a seamless scrolling loop */}
        <p className="marquee-text">
          {message}
          <a href={link} target="_blank" rel="noopener noreferrer" className="marquee-link">
            {linkText}
          </a>
        </p>
        <p className="marquee-text" aria-hidden="true">
          {message}
          <a href={link} target="_blank" rel="noopener noreferrer" className="marquee-link">
            {linkText}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ConferenceMarquee;