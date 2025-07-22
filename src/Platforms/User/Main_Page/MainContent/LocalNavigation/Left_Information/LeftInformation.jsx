import "../LocalNavigation.css";

export function LeftInformation() {
  return (
    <div className="LeftInformation LocalNavigation">
      <div className="LeftNavigation_wrapper">
        <div className="LeftNavigation_Header">
          <h1>Information</h1>
          <div className="line"></div>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="https://www.aicte-india.org/feedback/" target="_blank" rel="noopener noreferrer" className="external-link">
            AICTE Feedback
          </a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Fire_Safety_Certificate">Fire Safety Certificate</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Mandatory_Disclosures">Mandatory Disclosures</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Ragging">Ragging</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Faculty_Development_Program">Faculty Development Program</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Placement">Placement</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Campus">Campus</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="Classroom_0">Classroom</a>
        </div>
        
        <div className="LeftNavigation_options">
          <a href="https://manipuruniv.samarth.ac.in/index.php/pgportal/grievance-public/public/" target="_blank" rel="noopener noreferrer" className="external-link">
            Online Grievance Redressal
          </a>
        </div>
      </div>
    </div>
  );
}
