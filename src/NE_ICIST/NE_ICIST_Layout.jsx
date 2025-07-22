import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/TopNavbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// This component provides the layout for the entire NE-ICIST conference section.
const NE_ICIST_Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="ne-icist-container">
        <Navbar />
        <main>
          {/* All nested conference routes will be rendered here */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NE_ICIST_Layout;