import React from 'react';
import './Home.css';
import Themes from "./Themes";
import HighlightMarquee from '../../components/Marque/Marque';
import Banner from '../../components/Banner/Banner';
import ImportantDates from '../Registration/ImportantDates';
import HowToReach from '../../components/HowToReach/HowToReach';
import Gallery from '../../components/Gallary/Gallary';
import About from '../AboutUs/About';
import Accommodations from '../../components/Accomodation/Accomodation';

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <HighlightMarquee message="Call for Papers: Submit your abstract by 5ᵗʰ August 2025" />
      <section className="about-section">
        <div className="container">
          <h2 className="about-heading">About The Conference</h2>
          <p className="about-text">
            Northeast India has emerged as a significant hub for technological advancements... The primary objective of this conference is to promote research, encourage industry-academia collaboration, and explore sustainable solutions tailored to the unique geographical and infrastructural needs of the Northeast region. Topics such as disaster-resilient infrastructure, smart cities, AI applications, and green energy solutions will take center stage...
          </p>
        </div>
      </section>
      <ImportantDates />
      <Themes />
      <Accommodations />
      <HowToReach />
      <Gallery />
      <About />
    </div>
  );
};

export default Home;