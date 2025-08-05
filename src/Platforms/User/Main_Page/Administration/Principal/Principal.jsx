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
                src="./Images/Principal/principal.jpeg"
                alt="Professor N Basanta Singh, Principal of MIT"
              />
            </div>
            <div className="hero-text-container">
              <h1 className="hero-title">
                Professor N. Basanta Singh
              </h1>
              <p className="hero-designation">
                Principal i/c (w.e.f: 1st July, 2020)
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
                <strong>Prof. N. Basanta Singh</strong> was born in Imphal, Manipur, India. He received B-Tech degree from T.K.M. College of Engineering, Kerala, M.E from Thapar Institute of Engineering & Technology, Patiala and the Ph.D Degree from National Institute of Technology, Durgapur. He is a Professor in Department of Electronics & Communication Engineering, Manipur Institute of Technology, Manipur University, Manipur, India. He was the Head of the Department of Electronics & Communication Engineering, Manipur Institute of Technology during 2002-2008 and 2010-2014 and Coordinator of Industry-Institute-Interaction Cell (III Cell) of the institute from 2014. He is Member of IEEE, CSI, IETE and Life fellow of The Institution of Engineers (India). He has successfully organized four Refresher/Short Term Courses and one National Conference as Convener. He has attended more than 32 Workshops/ Refresher/Short Term Courses. He has published more than 64 (journal:41 & conference: 23) technical research papers in referred journals and conferences. His current research interest includes Modelling and Simulation of Semiconductor Devices.
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