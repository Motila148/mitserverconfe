import { Footer } from "../../../Footer/Footer";
import { Navbar } from "../../../Navbar/Navbar";
import "../Administration.css";

function Principal() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        {/* CORRECTED: Use the universal .container class for alignment */}
        <div className="container">

          <section className="hero-section">
            <div className="hero-image-container">
              <img
                src="./Images/Principal/principal-new.jpg"
                alt="Professor Th. Suresh Singh, Principal of MIT"
              />
            </div>
            <div className="hero-text-container">
              <h1 className="hero-title">
                Prof. Thokchom Suresh Singh
              </h1>
              <p className="hero-designation">
                Principal i/c (w.e.f: 24th September, 2025)
              </p>
              <p className="hero-designation hero-designation--secondary">
                Member Secretary, Governing Body of MIT
              </p>
            </div>
          </section>

          {/* This wrapper holds the biography */}
          <div className="page-layout-wrapper">

            <article className="primary-content-card">
              <h2>About the Principal</h2>
              <p>
                <strong>Prof. Thokchom Suresh Singh </strong> completed his B.E (Civil Engineering) from NITK (formerly Karnataka Regional Engineering College, M.E (Structural Engineering) from IIT Roorkee  (formerly University of Roorkee) and Ph.D from Jadavpur University Kolkata. He has 35 years of experience in teaching and research in addition to 2 years of field experience in planning, design and supervision of civil engineering structures. Prof. Th Suresh Singh has published more than 50 papers in reputed journals and conferences. His areas of interest include alkali activated materials, geopolymer applications, bacterial concrete and blended concrete materials. He is a Fellow of IEI (India) and member of ACI (IC), ASCE(IS), IGS and ISCMS
              </p>
            </article>

            {/* If you wanted a sidebar here, you would add <aside className="sidebar-content">...</aside> */}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Principal;