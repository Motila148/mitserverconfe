import React from 'react';
import "../LocalNavigation.css";

// Notice data array - Add new notices at the TOP of this array
const noticesData = [
    {
    title: "Admission Notice for First Year B.Tech Programme (JEE Category) 2026–27",
    pdfPath: "./Images/Notices/MIT_BTECH_JEE_2026.pdf",
    date: "June 8, 2026",
    isNew: true
    },
    {
    title: "Admission Notice for Academic Session 2026–27",
    pdfPath: "./Images/Notices/admission-notice-2026-27-v2.pdf",
    date: "May 25, 2026",
    isNew: false
    },
    {
    title: "Information Brochure for Academic Session 2026–27",
    pdfPath: "./Images/Notices/INFORMATION-BROCHURE-2026-27.pdf",
    date: "May 25, 2026",
    isNew: false
    },
    {
    title: "Notification Regarding Preponement of B.E./M.Tech Semester Examination",
    pdfPath: "./Images/Notices/Exam-preponed-notice.pdf",
    date: "May 25, 2026",
    isNew: false
    },
    {
    title: "Programme for 2nd Internal Assessment Test",
    pdfPath: "./Images/Notices/2nd_int_asses_2026.pdf",
    date: "April 10, 2026",
    isNew: false
    },
    {
    title: "Extension of Admission Last Date",
    pdfPath: "./Images/Notices/admission-extensionJan2026.pdf",
    date: "March 10, 2026",
    isNew: false
    },
    {
    title: "Notice for Payment of MIT Boys’ Hostel Admission Fee (2026)",
    pdfPath: "./Images/Notices/Hostel-accomodation090326.pdf",
    date: "March 10, 2026",
    isNew: false
    },
    {
    title: "Re-Admission Notification for Eligible B.E. Students",
    pdfPath: "./Images/Notices/Readmission2026.pdf",
    date: "February 27, 2026",
    isNew: false
    },

    {
    title: "Notice Regarding Payment of Admission Fee for Even Semester Courses 2026",
    pdfPath: "./Images/Notices/admissionjan2026.pdf",
    date: "February 1, 2026",
    isNew: false
    },
    {
    title: "Ph.D. Admission Result – January 2026",
    pdfPath: "./Images/Notices/phd-result-jan2026.pdf",
    date: "January 27, 2026",
    isNew: false
    },
    {
    title: "Notice: Pre-Ph.D. Engineering Personal Interview Schedule (2025–26)",
    pdfPath: "./Images/Notices/MIT-phd-result-2026.pdf",
    date: "January 12, 2026",
    isNew: false
    },
    {
    title: "Provisional List of Eligible Candidates for Ph.D. QET / Direct Interview",
    pdfPath: "./Images/Notices/notice-Ph.D.QET2025.pdf",
    date: "December 20, 2025",
    isNew: false
  },
  {
    title: "Commencement of Regular Classes for Even Semester (January 2026)",
    pdfPath: "./Images/Notices/notice-classstart-even-semester2026 .pdf",
    date: "December 20, 2025",
    isNew: false
  },
   {
    title: "Rescheduled Practical Programme – Dec 2025",
    pdfPath: "./Images/Notices/rescheduled-practical-dec2025.pdf",
    date: "November 11, 2025",
    isNew: false
  },
  {
    title: "End Sem Form Fill-up Extension – Dec 2025",
    pdfPath: "./Images/Notices/Form-fill-up-extension-dec2025.pdf",
    date: "November 11, 2025",
    isNew: false
  },
  {
    title: "End Semester Examination Schedule – December 2025",
    pdfPath: "./Images/Notices/Semester-exam-2025-dec-schedule.pdf",
    date: "October 18, 2025",
    isNew: false
  },
  {
    title: "Provisional Selection List for Admission to Pre-Ph.D. Programme (Visvesvaraya Ph.D. Scheme)",
    pdfPath: "./Images/Notices/pre-phd-visvesvaraya-scheme.pdf",
    date: "October 18, 2025",
    isNew: false
  },
  {
    title: "Hostel Allotment – Second List of Selected Hostellers",
    pdfPath: "./Images/Notices/New-hostel-list.pdf",
    date: "September 20, 2025",
    isNew: false
  },
  {
    title: "Manipur University Inter-College Sports Tournament Schedule 2025-26",
    pdfPath: "./Images/Notices/MUICT-2025-26.pdf",
    date: "September 20, 2025",
    isNew: false
  },
  {
    title: "Girls' Hostel Admission – List of Selected Students",
    pdfPath: "./Images/Notices/girl-hostel-new.pdf",
    date: "August 22, 2025",
    isNew: false
  },
  {
    title: "Girls' Hostel Admission (Existing Borders)",
    pdfPath: "./Images/Notices/girl-hostel-old.pdf",
    date: "August 22, 2025",
    isNew: false
  },
  {
    title: "Important: Last Date of Admission Extended till 29th August",
    pdfPath: "./Images/Notices/Admission-last-date-extension.pdf",
    date: "August 22, 2025",
    isNew: false
  },
  {
    title: "Student Induction Program Schedule – MIT Freshers",
    pdfPath: "./Images/Notices/NOTICE-SIP-2025.pdf",
    date: "August 18, 2025",
    isNew: false
  },
  {
    title: "Hostel Admission Notice for Existing Boarders of MIT Boys' Hostel (Marjing)",
    pdfPath: "./Images/Notices/HOSTELADMISSION18-7-2025-OLD.pdf",
    date: "August 18, 2025",
    isNew: false
  },
  {
    title: "MIT Boys' Hostel Room Allocation Notice",
    pdfPath: "./Images/Notices/Hostel accomodation2025 .pdf",
    date: "August 15, 2025",
    isNew: false
  },
  {
    title: "Walk-in Interview for the Post of Project Associate",
    pdfPath: "./Images/Notices/Notice for walk in Interview.pdf",
    date: "August 9, 2025",
    isNew: false
  },
  {
    title: "Branch Change Orders – B.E. 3rd Semester (2025)",
    pdfPath: "./Images/Notices/Branch_change.pdf",
    date: "August 4, 2025",
    isNew: false
  },
  {
    title: "List of Candidates Recommended for Admission Against Vacant Seats",
    pdfPath: "./Images/Notices/Admission Notice_Against Vacant_1-8-2025.pdf",
    date: "August 1, 2025",
    isNew: false
  },
  {
    title: "Online Application for Vacant B.E(Lateral Entry) Seats – 2025-26",
    pdfPath: "./Images/Notices/Notice_SpotBE_LE vacant_24-7-25.pdf",
    date: "July 24, 2025",
    isNew: false
  },
  {
    title: "Reallocation Notice – Admitted Students in B.E. Programs",
    pdfPath: "./Images/Notices/Reallocation notice_BE programme_24-7-25.pdf",
    date: "July 24, 2025",
    isNew: false
  },
  {
    title: "Admission Notice – Provisionally recommended candidates for M.Tech & B.E",
    pdfPath: "./Images/Notices/Admission Notice_MTech.BE2025_2026.pdf",
    date: "July 24, 2025",
    isNew: false
  },
  {
    title: "Online Application for Vacant Seats B.E & M.Tech – Academic Session 2025–26",
    pdfPath: "./Images/Notices/Notice_Spot_BE_MTECH vacant_23_7_25.pdf",
    date: "July 23, 2025",
    isNew: false
  },
  {
    title: "Counselling Schedule for Admission to B.E. & M.Tech. Programmes – Session 2025–2026",
    pdfPath: "./Images/Notices/notice_counselling_23.7.25.pdf",
    date: "July 17, 2025",
    isNew: false
  },
  {
    title: "Admission Notice – Provisionally Selected First-Year B.E. Students (Non-JEE)",
    pdfPath: "./Images/Notices/admission notice_BE_WL_8-7-25.pdf",
    date: "July 8, 2025",
    isNew: false
  },
  {
    title: "Reallocation Notice – B.E. First Semester (Non-JEE Category), MIT Imphal",
    pdfPath: "/Images/Notices/Reallocation notice_NON_JEE_8-7-25.pdf",
    date: "July 8, 2025",
    isNew: false
  },
  {
    title: "Admission Notice (Non-JEE) – Candidate List for B.E.",
    pdfPath: "./Images/Notices/Admission Notice_BE_Non-JEE Category_30-6-2025.pdf",
    date: "June 30, 2025",
    isNew: false
  },
  {
    title: "Branch Reallocation Notice for JEE Category Candidates - B.E. Session 2025-2026",
    pdfPath: "./Images/Notices/Notice_Reallotment_JEE_annexure_24-6-25.pdf",
    date: "June 24, 2025",
    isNew: false
  },
  {
    title: "EXTENDED ADMISSION NOTICE",
    pdfPath: "./Images/Notices/notice extended_11-6-25.pdf",
    date: "June 11, 2025",
    isNew: false
  },
  {
    title: "Press Release Notice for Admission Schedule Postponed for B.E. & M.Tech. Programmes (2025-2026)",
    pdfPath: "./Images/Notices/press release_9-6-25.pdf",
    date: "June 9, 2025",
    isNew: false
  },
  {
    title: "BE recommended candidates(JEE Qualified)",
    pdfPath: "./Images/Notices/admission notice with annexure-I_BE_JEE_6-6-25.pdf",
    date: "June 6, 2025",
    isNew: false
  },
  {
    title: "Extended admission notice for 2025-26",
    pdfPath: "./Images/Notices/notice extended_4-6-25.pdf",
    date: "June 4, 2025",
    isNew: false
  }
];

// Notice Item Component
const NoticeItem = ({ number, title, pdfPath, date, isNew }) => (
  <div className="LeftNavigation_options">
    <a href={pdfPath} target="_blank" rel="">
      <div className="notice-header">
        <b>{number}. {title}</b>
        {isNew && <button className="new-button blinking">NEW</button>}
      </div>
      <div className="notice-date">Posted: {date}</div>
    </a>
  </div>
);

export function LeftNotification() {
  return (
    <div className="LeftNotification LocalNavigation">
      <div className="LeftNavigation_wrapper">
        <div className="LeftNavigation_Header">
          <h1>News and Notices</h1>
        </div>
        <div className="news_n_notices">
          {/* Render all notices from data */}
          {noticesData.map((notice, index) => (
            <NoticeItem
              key={index}
              number={index + 1}
              title={notice.title}
              pdfPath={notice.pdfPath}
              date={notice.date}
              isNew={notice.isNew}
            />
          ))}

          {/* Admission form link */}
          <div className="LeftNavigation_options">
            <b>
              Admission form link: <br />
              <a
                href="https://manipurunivadm.samarth.edu.in/"
                style={{ color: "#4169E1" }}
                target="_blank"
                rel=""
              >
                https://manipurunivadm.samarth.edu.in
              </a>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}