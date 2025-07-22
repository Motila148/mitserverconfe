import React from "react";
import { Footer } from "../../../User/Footer/Footer";
import { Navbar } from "../../../User/Navbar/Navbar";
import { LeftDownload } from "../../Main_Page/MainContent/LocalNavigation/Left_Download/LeftDownload";
import { LeftInformation } from "../../Main_Page/MainContent/LocalNavigation/Left_Information/LeftInformation";
import { LeftNotification } from "../../Main_Page/MainContent/LocalNavigation/Left_Notice/LeftNotification";
import "./Conference.css";

// --- Data for Conferences ---
// This makes it easy to add more conferences later
const internationalConferences = [
  {
    title: "NORTH EAST INTERNATIONAL CONFERENCE ON Innovation in Science and Technology (NE-ICIST 2025)",
    date: "9-11 December 2025",
    href: "https://jocular-wisp-6a5493.netlify.app/", // Replace with the actual conference website URL
  },
];

const nationalConferences = [
  {
    title: "National Conference on Innovations in Science and Technology 2017",
    date: "20-21 March 2017",
    href: "#", // Replace with the actual link
  },
];

const stateConferences = [
    // You can add state-level conferences here in the future
];


function Conference() {
  return (
    <div className="conference-page">
      <Navbar />
      <div className="conference-container">
        <div className="conference-header">
          <h1>Conferences</h1>
        </div>

        <div className="conference-body-layout">
          {/* --- Main Content Area --- */}
          <main className="conference-main-content">
            {/* International Section */}
            <section className="conference-category">
              <h2 className="category-title">International</h2>
              <div className="conference-list">
                {internationalConferences.map((conf, index) => (
                  <a
                    key={index}
                    href={conf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="conference-card"
                  >
                    <div className="conference-details">
                      <p className="conference-title">{conf.title}</p>
                      {conf.date && <span className="conference-date">{conf.date}</span>}
                    </div>
                    <span className="conference-link-icon">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* National Section */}
            <section className="conference-category">
              <h2 className="category-title">National</h2>
              <div className="conference-list">
                {nationalConferences.map((conf, index) => (
                  <a
                    key={index}
                    href={conf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="conference-card"
                  >
                    <div className="conference-details">
                      <p className="conference-title">{conf.title}</p>
                      {conf.date && <span className="conference-date">{conf.date}</span>}
                    </div>
                    <span className="conference-link-icon">→</span>
                  </a>
                ))}
              </div>
            </section>

             {/* State Section (optional, will only show if you add data) */}
             {stateConferences.length > 0 && (
                <section className="conference-category">
                    <h2 className="category-title">State</h2>
                    <div className="conference-list">
                        {/* Map over state conferences here */}
                    </div>
                </section>
             )}
          </main>

          {/* --- Right Sidebar --- */}
          <aside className="conference-sidebar">
            <LeftNotification />
            <LeftInformation />
            <LeftDownload />
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Conference;