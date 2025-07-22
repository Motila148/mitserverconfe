import React from 'react';
import './Registration.css';

// Data for Registration Fees
const feeData = [
  { icon: '🎓', category: 'Research Scholar and Students', inr: '₹5,000/-', usd: '$150' },
  { icon: '👨‍🏫', category: 'Academicians', inr: '₹7,000/-', usd: '$250' },
  { icon: '💼', category: 'Industry & Professional', inr: '₹10,000/-', usd: '$350' },
];

// New step-by-step instructions for CMT portal
const submissionSteps = [
  "Log in to Microsoft CMT with your credentials and click the 'Create New Submission' button.",
  "Fill in the required details, including the paper title, abstract, and all author information.",
  "Upload your complete paper in PDF format as per the conference formatting guidelines.",
  "Assign appropriate keywords to your submission to categorize your work.",
];

// New detailed guidelines for authors
const authorGuidelines = [
    "All submitted papers must be original, unpublished, and not under consideration elsewhere.",
    "Papers should be written in clear and proper English, starting with a title, abstract, and keywords.",
    "Regular papers should be 4 to 5 pages. Up to 2 additional pages are allowed with extra charges.",
    "The similarity index for a submitted article must be as per the conditions of the publication group.",
    "It is highly recommended that authors comply with the stated formatting guidelines.",
    "Each manuscript may have a maximum of 5 authors."
];


const Registration = () => {
  return (
    <div className="submission-container">
      <h2>Paper Submission & Guidelines</h2>
      <p>
        We are excited to welcome authors to submit their technical papers for the <strong>North East International Conference on Innovation in Science and Technology(NE-ICIST 2025)</strong>. Please adhere to the instructions outlined below to ensure a smooth submission process.
      </p>

      <hr />

      {/* ===================================
          SUBMISSION SYSTEM
      ==================================== */}
      <section id="submission-system">
        <h3>Submit Your Paper</h3>
        <p>
          To submit your paper, please use the official conference link for the Conference Management Toolkit (Microsoft CMT).
        </p>
        <a 
          href="https://cmt3.research.microsoft.com/NEIAIS2025" 
          className="btn btn-primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Submit on Microsoft CMT 🔗
        </a>

        <h4 className="sub-heading">How to Submit via CMT</h4>
        <ol className="instructions-list">
            {submissionSteps.map((step, index) => (
            <li key={index}>{step}</li>
            ))}
        </ol>
      </section>
      
      <hr />
      
      {/* ===================================
          AUTHOR GUIDELINES
      ==================================== */}
      <section id="author-guidelines">
        <h3>Author's Guidelines</h3>
        <ul className="guidelines-list">
            {authorGuidelines.map((guideline, index) => (
                <li key={index}>{guideline}</li>
            ))}
        </ul>
      </section>
      
      <hr />

      {/* ===================================
          PREPARATION & TEMPLATES
      ==================================== */}
      <section id="paper-preparation">
        <h3>Templates & Agreements</h3>
        <p>
          Prepare your paper using the official template. 
          {/*After receiving an acceptance e-mail, you must submit the required agreements to <strong>neiaisummit@manipuruniv.ac.in</strong>.*/}
        </p>
        <ul className="links-list">
          <li><a href="./Pdf/Word_Sample_template.docx" className="link-button" download>📄 Download Paper Template (Word)</a></li>
          {/*<li><a href="/path-to-your/brochure.pdf" className="link-button" download>ℹ️ Download Conference Brochure</a></li>*/}
          <li><a href="./Pdf/Copyright-Form.pdf" className="link-button" download>©️ Download Publishing Agreement</a></li>
          <li><a href="./Pdf/Permission-guidelines.zip" className="link-button" download>📋 Download Permission Guideline</a></li>
        </ul>
      </section>

      <hr />

      {/* ===================================
          REVIEW PROCESS
      ==================================== */}
      <section id="review-process">
        <h3>Review Process</h3>
        <p>Our review process follows a <strong>single-blind policy</strong> with a strong emphasis on quality. Key criteria include:</p>
        <ol className="criteria-list">
          <li><strong>Contribution & Novelty:</strong> The originality and significance of the work.</li>
          <li><strong>Structure:</strong> The clarity and organization of the paper.</li>
          <li><strong>Evidence:</strong> The strength of the experimental or theoretical evidence.</li>
          <li><strong>Scope:</strong> Relevance to the conference themes.</li>
          <li><strong>References:</strong> Appropriate citation of related work.</li>
        </ol>
        <p>Decisions are based on a scoring mechanism from <strong>+3 (Strong Accept)</strong> to <strong>-3 (Strong Reject)</strong>. Papers with an average score below 0 will be rejected.</p>
      </section>

      <hr />
      
      {/* ===================================
          REGISTRATION FEES
      ==================================== */}
      <section id="registration-fees">
        <h2>Registration Fees</h2>
        <div className="table-container">
            <table className="fees-table">
            <thead>
                <tr>
                <th>Participants</th>
                <th>National/SAARC (INR)</th>
                <th>Foreign (USD)</th>
                </tr>
            </thead>
            <tbody>
                {feeData.map((item, index) => (
                <tr key={index}>
                    <td>
                    <div className="participant-type">
                        <span className="participant-icon">{item.icon}</span>
                        <span>{item.category}</span>
                    </div>
                    </td>
                    <td>{item.inr}</td>
                    <td>{item.usd}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className="fee-note">
            <p>* The registration fee is exclusive of GST.</p>
        </div>
        <a 
          href="https://forms.gle/your-registration-link"
          className="btn btn-secondary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Proceed to Registration 
        </a>
      </section>
    </div>
  );
};

export default Registration;