import { Footer } from "../../../Footer/Footer";
import { Navbar } from "../../../Navbar/Navbar";
import { LeftDownload } from "../../MainContent/LocalNavigation/Left_Download/LeftDownload";
import { LeftInformation } from "../../MainContent/LocalNavigation/Left_Information/LeftInformation";
import { LeftNotification } from "../../MainContent/LocalNavigation/Left_Notice/LeftNotification";
import "./Inst_administration.css";

// A reusable PDF icon component
const PdfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 384 512" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
);


function Ins_admin() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        <div className="container">
          <div className="page-layout-wrapper">
            
            {/* Main content area */}
            <article className="primary-content-card">
              <h2>Institute Administration</h2>
              <p>
                The Institute is managed by a Governing Body headed by the
                Hon’ble Vice Chancellor, Manipur University.
              </p>

              {/* Section for Governing Body Structure */}
              <h3>Structure of the Governing Body</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Position (Ex-officio)</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Vice-Chancellor</td><td>Chairman</td></tr>
                    <tr><td>2</td><td>Registrar</td><td>Member</td></tr>
                    <tr><td>3</td><td>One member nominated by the Vice-Chancellor</td><td>Member</td></tr>
                    <tr><td>4</td><td>Finance Officer</td><td>Member</td></tr>
                    <tr><td>5</td><td>Two members of the Executive Council nominated by it</td><td>Member</td></tr>
                    <tr><td>6</td><td>Dean School of Engineering</td><td>Member</td></tr>
                    <tr><td>7</td><td>One member not connected with the University</td><td>Member</td></tr>
                    <tr><td>8</td><td>One Professor of the Institute, by rotation</td><td>Member</td></tr>
                    <tr><td>9</td><td>One Associate Professor of the Institute, by rotation</td><td>Member</td></tr>
                    <tr><td>10</td><td>One nominee of the AICTE</td><td>Member</td></tr>
                    <tr><td>11</td><td>The Director of the Institute</td><td>Member Secy</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Section for Governing Body Members */}
              <h3>Governing Body Members (as on 26/10/2021)</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name & Professional Background</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Prof. N. Lokendra Singh, Vice-Chancellor, Manipur University</td><td>Chairman</td></tr>
                    <tr><td>2</td><td>Prof. W. Chandbabu Singh, Registrar, Manipur University</td><td>Member</td></tr>
                    <tr><td>3</td><td>Prof. A. RajmaniSingha, Finance Officer, Manipur University</td><td>Member</td></tr>
                    <tr><td>4</td><td>Prof. S. Ibotombi Singh, Dean, School of Human & Environmental Science</td><td>Member</td></tr>
                    <tr><td>5</td><td>Prof. K. Yugindro Singh, Dean, School of Mathematical & Physical Sciences</td><td>Member</td></tr>
                    <tr><td>6</td><td>Prof. R.K. Hemakumar Singh, Dean, School of Engineering</td><td>Member</td></tr>
                    <tr><td>7</td><td>Prof. N.C. Shivaprakash, Dept. of Instrumentation, IISc Bangalore</td><td>Member</td></tr>
                    <tr><td>8</td><td>Dr. Th. Suresh Singh, Associate Professor, CE Deptt., MIT</td><td>Member</td></tr>
                    <tr><td>9</td><td>Dr. S. Jitu Singh, Assistant Professor(S3), CSE Deptt., MIT</td><td>Member</td></tr>
                    <tr><td>10</td><td>Prof. N. Basanta Singh, Principal i/c, MIT, Imphal</td><td>Member Secy</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Section for Proceedings Links */}
              <h3>Proceedings of the BoG/GB Meetings</h3>
              <ul className="document-list">
                <li><a href="http://mitimphal.in/uploads/media/m1485613996.pdf" target="_blank" rel="noopener noreferrer"><PdfIcon />Proceedings of 5th GB meeting held on 08-05-2013</a></li>
                <li><a href="http://mitimphal.in/uploads/media/m1485614074.pdf" target="_blank" rel="noopener noreferrer"><PdfIcon />Proceedings of Special GB meeting held on 06-09-2014</a></li>
                <li><a href="http://mitimphal.in/uploads/media/m1485614145.pdf" target="_blank" rel="noopener noreferrer"><PdfIcon />Proceedings of 6th GB meeting held on 25-06-2015</a></li>
                <li><a href="http://mitimphal.in/uploads/media/m1485614203.pdf" target="_blank" rel="noopener noreferrer"><PdfIcon />Proceedings of 7th GB meeting held on 07-12-2015</a></li>
                {/* Add other links similarly */}
              </ul>
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

export default Ins_admin;