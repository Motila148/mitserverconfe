import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="department_foot">
          <h4 className="dept_header">Department</h4>
          <ul>
            <li><a href="CE_dept">Department of Civil Engineering</a></li>
            <li><a href="ECE_dept">Department of Electronics & Communication Engineering</a></li>
            <li><a href="CSE_dept">Department of Computer Sciences & Engineering</a></li>
            <li><a href="BSC_dept">Department of Basic Sciences & Humanities</a></li>
            <li><a href="ME_dept">Department of Mechanical Engineering</a></li>
            <li><a href="EE_dept">Department of Electrical Engineering</a></li>
          </ul>
        </div>

        <div className="facility_foot">
          <h4 className="facility_header">Facility</h4>
          <ul>
            <li><a href="Library_Facility">Library Facility</a></li>
            <li><a href="Internet_Facility">Internet Facility</a></li>
            <li><a href="Hostel_Facility">Hostel Facility</a></li>
            <li><a href="Language_Lab">Language Lab</a></li>
          </ul>
        </div>

        <div className="information_footer">
          <h4 className="informationFooter_header">Information</h4>
          <ul>
            <li><a href="Fire_Safety_Certificate">Fire Safety Certificate</a></li>
            <li><a href="Mandatory_Disclosures">Mandatory Disclosures</a></li>
            <li><a href="Ragging">Ragging</a></li>
            <li><a href="Faculty_Development_Program">Faculty Development Program</a></li>
            <li><a href="Placement">Placement</a></li>
            <li><a href="Campus">Campus</a></li>
            <li><a href="Classroom_0">Classroom</a></li>
            <li><a href="https://manipuruniv.samarth.ac.in/index.php/pgportal/grievance-public/public/">Online Grievance Redressal</a></li>
          </ul>
        </div>

        <div className="address">
          <h4 className="address_header">Address</h4>
          <p>Manipur Institute of Technology</p>
          <p>(A Constitute College of Manipur University)</p>
          <p>Takyelpat, Imphal - 795001, Manipur, India</p>
        </div>
      </div>
    </div>
  );
}