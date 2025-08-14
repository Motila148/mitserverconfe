import { Footer } from "../../../Footer/Footer";
import { Navbar } from "../../../Navbar/Navbar";
import { LeftDownload } from "../../MainContent/LocalNavigation/Left_Download/LeftDownload";
import { LeftInformation } from "../../MainContent/LocalNavigation/Left_Information/LeftInformation";
import { LeftNotification } from "../../MainContent/LocalNavigation/Left_Notice/LeftNotification";
// Make sure to create and import the new CSS file
import "./hostel_administration.css";

// Reusable Icon Components for a nice visual touch
const BoysHostelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 448 512" fill="currentColor">
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16H224V224c0 53-43 96-96 96H48c-26.5 0-48 21.5-48 48s21.5 48 48 48H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V416h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-53 0-96-43-96-96c0-8.8 7.2-16 16-16s16 7.2 16 16c0 35.3 28.7 64 64 64h80c70.7 0 128-57.3 128-128V96h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V32z"/>
  </svg>
);

const GirlsHostelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 320 512" fill="currentColor">
    <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 192H232c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-48 84c0-11.2 3.5-21.6 9.6-30.4l-24-24c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l24 24C107.2 191.1 112 181.1 112 170.7V160c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v10.7c0 10.4 4.8 20.4 12.8 27.3l24-24c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-24 24c6.1 8.8 9.6 19.2 9.6 30.4c0 26.5-21.5 48-48 48H88c-26.5 0-48-21.5-48-48z"/>
  </svg>
);


function Hostel_admin() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        <div className="container">
          <div className="page-layout-wrapper">
            
            {/* Main content area */}
            <article className="primary-content-card">
              <h2>Hostel Administration</h2>
              <p>
                The Institute provides secure and comfortable accommodation with one Boys’ Hostel and one Girls' Hostel, each with a capacity of 100 students. Both facilities are managed by dedicated wardens to ensure a safe and supportive living environment.
              </p>

              {/* A grid container for our beautiful new cards */}
              <div className="warden-cards-container">
                
                {/* Card 1: Boys' Hostel Warden */}
                <div className="warden-card">
                  <div className="warden-card__icon-bg boys-hostel">
                    <BoysHostelIcon />
                  </div>
                  <h3 className="warden-card__name">Dr. S. Jitu Singh</h3>
                  <p className="warden-card__department">Associate Professor <br />Department of Computer Science and Engineering</p>

                  <p className="warden-card__role">Warden, Boys' Hostel</p>
                </div>

                {/* Card 2: Girls' Hostel Warden */}
                <div className="warden-card">
                  <div className="warden-card__icon-bg girls-hostel">
                    <GirlsHostelIcon />
                  </div>
                  <h3 className="warden-card__name">Dr. N. Ashalata Devi</h3>
                  <p className="warden-card__department">Asst. Prof. of Basic Sciences & Humanities</p>
                  <p className="warden-card__role">Warden, Girls' Hostel</p>
                </div>

              </div>
            </article>

            {/* Sidebar content */}
            <aside className="sidebar-content">
              <LeftNotification />
              <LeftInformation />
              <LeftDownload />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Hostel_admin;