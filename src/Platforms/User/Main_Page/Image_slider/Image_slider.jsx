import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import default styles
import './Image_slider.css'; // Import our custom styles

// --- Data-Driven Approach ---
// It's much easier to manage your slides this way.
const slideData = [
  {
    image: './Images/Main_page/img_1.jpg',
    caption: 'MIT WEEK 2018 OPENING CEREMONY (12th NOV, 2018)',
  },
  {
    image: './Images/Main_page/img_2.jpg',
    caption: 'DIGNITARIES AT THE VALEDICTORY FUNCTION OF MIT WEEK 2018 ON 17th NOV, 2018',
  },
  {
    image: './Images/Main_page/img_3.jpg',
    caption: "11TH GB Meeting MIT. With Prof. A.P. Pandey, Hon'ble V.C. M.U. Prof. A.K. Saxena, Mentor (AICTE-NEQIP) and other Members.",
  },
  {
    image: './Images/Main_page/img_4.jpg',
    caption: 'SPEECH FROM SHRI JARNAIL SINGH, ADMINISTRATOR, MANIPUR UNIVERSITY AT THE VALEDICTORY FUNCTION OF MIT WEEK 2018',
  },
  {
    image: './Images/Main_page/img_5.jpg',
    caption: 'Inauguration of AICTE sponsored 3-days Faculty Development Programme on “Universal Human Values',
  },
];

export function Image_slider() {
  return (
    <div className="image-slider-container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3500}       // Slightly longer interval
        transitionTime={600}  // Smoother transition
        showStatus={false}    // Hides the "1 of 5" status text
      >
        {/* Map over the slide data to generate slides dynamically */}
        {slideData.map((slide, index) => (
          <div key={index} className="slide-item">
            <img 
              src={slide.image} 
              // ACCESSIBILITY: Alt text describes the image for screen readers
              alt={slide.caption} 
            />
            <p className="legend">{slide.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
