import { Footer } from "../../Footer/Footer";
import { Navbar } from "../../Navbar/Navbar";
import { LeftDownload } from "../MainContent/LocalNavigation/Left_Download/LeftDownload";
import { LeftInformation } from "../MainContent/LocalNavigation/Left_Information/LeftInformation";
import { LeftNotification } from "../MainContent/LocalNavigation/Left_Notice/LeftNotification";
import "./AICTEVAANI.css";

function AICTEVAANI() {
  return (
    <div className="AICTEVAANI_container">
      <Navbar />

      <div className="AICTEVAANI_align">
        <div className="AICTEVAANI_wrapper">
          <div className="AICTEVAANI_Header_container">
            <h2 className="AICTEVAANI_Header">AICTE VAANI :</h2>
          </div>
          <div className="AICTEVAANI_body">
            <div className="AICTEVAANI_main">
                <div className="text_box AICTEVAANI_text_box">
                    <h2>AICTE-VAANI WORKSHOP (2 Days)</h2>

                    <p><strong>Topic:</strong> “Emerging Trends in Semiconductor Technology and Applications”</p>

                    <p>
                    <strong>Dates:</strong> Thursday, October 09, 2025 – Friday, October 10, 2025<br />
                    <strong>Time:</strong> 9:00 AM – 5:00 PM<br />
                    <strong>Venue:</strong> MIT, MU Campus
                    </p>

                    <p>
                    The Department of Electronics and Communication Engineering, Manipur Institute of Technology, Manipur University is organizing a 2-day workshop on “Emerging Trends in Semiconductor Technology and Applications”, in Manipuri from 9 to 10 October 2025.
                    </p>

                    <p>
                    Sponsored by the AICTE-VAANI scheme, this event promotes the dissemination of technical knowledge in regional languages. The scheme supports AICTE-approved institutions in organizing Conferences/Seminars/Workshops in 22 Indian languages to achieve the <strong>Viksit Bharat 2047</strong> vision.
                    </p>

                    <p>
                    India’s language diversity includes 122 major languages and over 1500 others. Educating in native languages boosts accessibility and learning. This workshop is part of AICTE’s commitment to encouraging innovation, collaboration, and regional inclusion in technical education.
                    </p>

                    <h3>Attachments:</h3>
                    <ul className="attachment-list">
                    <li>
                        <a
                        href=".\Images\AICTEVAANI\WORKSHOP-ON-SEMICONDUCTOR_2178379226_MIT.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        VAANI Workshop Brochure
                        </a>
                    </li>
                    <li>
                        {/* <a
                        href="https://tint.edu.in/images/2024/vaani/VAANI%20Banner_English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Manipuri Banner
                        </a> */}
                    </li>
                    <li>
                        <a
                        href=".\Images\AICTEVAANI\AICTE_VAANI_Schedule_MIT_update_9_7_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Tentative Schedule
                        </a>
                    </li>
                    </ul>

                    <h3>Contact:</h3>
                    <p>
                    <strong>Coordinator:</strong> Dr. Khomdram Jolson Singh, Associate Prof. (ECE), MIT, MU Campus<br />
                    <strong>Co-Coordinator:</strong> Dr. Romesh Laishram, Associate Prof. (ECE), MIT, MU Campus<br />
                    <strong>Department:</strong> Electronics & Communication Engineering, MIT, MU Campus<br />
                    <strong>Website:</strong>{' '}
                    <a href="https://mitimphal.manipuruniv.ac.in/" target="_blank" rel="noopener noreferrer">
                        mitimphal.manipuruniv.ac.in
                    </a><br />
                    <strong>Email:</strong>{' '}
                    <a href="mailto:jolly4u2@rediffmail.com">jolly4u2@rediffmail.com</a><br />
                    <strong>Phone:</strong> +91-8974878111
                    </p>
                    <br />
                    <a href=".\Images\AICTEVAANI\WORKSHOP-ON-SEMICONDUCTOR_2178379226_MIT.pdf" target="blank"><b>2 Days Workshop on Emerging Trends in Semiconductor Technology and Applications </b></a>
                    <br />
                    <a href=".\Images\AICTEVAANI\AICTE_VAANI_Schedule_MIT_update_9_7_2025.pdf" target="blank"><b>Schedule for the workshop on “Emerging Trends in Semiconductor Technology and Applications</b></a>

                </div>
                </div>

            <div className="AICTEVAANI_right">
              <LeftNotification />
              <LeftInformation />
              <LeftDownload />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AICTEVAANI;
