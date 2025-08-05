import { Footer } from "../../../Footer/Footer";
import { Navbar } from "../../../Navbar/Navbar";
import "../Administration.css";

function ViceChancellor() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        {/* CORRECTED: Use the universal .container class for alignment */}
        <div className="container">
          
          <section className="hero-section">
            <div className="hero-image-container">
              <img
                src="./Images/Vice_Chancellor/MuVC.jpg"
                alt="Prof. Naorem Lokendra Singh, Vice-Chancellor of Manipur University"
              />
            </div>
            <div className="hero-text-container">
              <h1 className="hero-title">
                Prof. Naorem Lokendra Singh
              </h1>
              <p className="hero-designation">
                Vice-Chancellor, Manipur University
              </p>
              <p className="hero-designation hero-designation--secondary">
                Chairman, Governing Body of MIT
              </p>
            </div>
          </section>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ViceChancellor;