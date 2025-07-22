import "../LocalNavigation.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export function LeftNotification() {
  return (
    <div className="LeftNotification LocalNavigation">
      <div className="LeftNavigation_wrapper">
        <div className="LeftNavigation_Header">
          <h1>News and Notices</h1>
        </div>
        <div className="news_n_notices">

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/notice_counselling_23.7.25.pdf"
              target="_blank"
              rel=""
            >
              <b>Counselling Schedule for Admission to B.E. & M.Tech. Programmes – Session 2025–2026</b>
              <button className="new-button blinking">NEW</button>
            </a>
          </div>

           <div className="LeftNavigation_options">
            <a
              href=".\Images\Notices\admission notice_BE_WL_8-7-25.pdf"
              target="_blank"
              rel=""
            >
              <b>Admission Notice – Provisionally Selected First-Year B.E. Students (Non-JEE)</b>
              <button className="new-button blinking">NEW</button>
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="\Images\Notices\Reallocation notice_NON_JEE_8-7-25.pdf"
              target="_blank"
              rel=""
            >
              <b>Reallocation Notice – B.E. First Semester (Non-JEE Category), MIT Imphal</b>
              <button className="new-button blinking">NEW</button>
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/Admission Notice_BE_Non-JEE Category_30-6-2025.pdf"
              target="_blank"
              rel=""
            >
              <b>Admission Notice (Non-JEE) – Candidate List for B.E.</b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/Notice_Reallotment_JEE_annexure_24-6-25.pdf"
              target="_blank"
              rel=""
            >
              <b>Branch Reallocation Notice for JEE Category Candidates - B.E. Session 2025-2026</b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/notice extended_11-6-25.pdf"
              target="_blank"
              rel=""
            >
              <b>EXTENDED ADMISSION NOTICE</b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>

  <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/press release_9-6-25.pdf"
              target="_blank"
              rel=""
            >
              <b> Press Release  Notice for Admission Schedule Postponed for B.E. & M.Tech. Programmes (2025-2026)
 </b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/admission notice with annexure-I_BE_JEE_6-6-25.pdf"
              target="_blank"
              rel=""
            >
              <b>BE recommended candidates(JEE Qualified) </b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>
          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/notice extended_4-6-25.pdf"
              target="_blank"
              rel=""
            >
              <b>Extended admission notice for 2025-26</b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/new admission notice_BE&MTech_2025.pdf"
              target="_blank"
              rel=""
            >
              <b>New admission notice for 2025-26</b>
              {/* <button className="new-button blinking">NEW</button> */}
            </a>
          </div>

          <div className="LeftNavigation_options">
            <b>
              Admission form link: <br />
              <a
                href="https://manipurunivadm.samarth.edu.in/"
                style={{ color:"#4169E1" }}
                target="_blank"
                rel=""
              >
                https://manipurunivadm.samarth.edu.in
              </a>
            </b>
          </div>

          {/* <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/Boys Hostel admission 11 02 25.pdf"
              target="_blank"
              rel=""
            >
              Boys' Hostel Admission
            </a>
          </div>

          <div className="LeftNavigation_options">
            <a
              href="./Images/Notices/Girls Hostel Admission.pdf"
              target="_blank"
              rel=""
            >
              Girls' Hostel Admission
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
