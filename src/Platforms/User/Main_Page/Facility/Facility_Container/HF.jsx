import { Footer } from "../../../Footer/Footer";
import { Navbar } from "../../../Navbar/Navbar";
import { LeftDownload } from "../../MainContent/LocalNavigation/Left_Download/LeftDownload";
import { LeftInformation } from "../../MainContent/LocalNavigation/Left_Information/LeftInformation";
import { LeftNotification } from "../../MainContent/LocalNavigation/Left_Notice/LeftNotification";
import "../Facility.css";

function HF() {
  return (
    <div className="Facility_container">
      <Navbar />

      <div className="Facility_align">
        <div className="Facility_Tittle">
          <h1>Facility</h1>
        </div>

        <div className="Facility_wrapper">
          <div className="Facility_Header_container">
            <h2 className="Facility_Header">Hostel Facility :</h2>
          </div>

          <div className="Facility_body">
            <div className="Facility_main">
              <div className="text_box facility_text_box">
                <h2>Information about Hostel Facility</h2>

                <p className="facility_text">
                  The Institute has one Boys’ Hostel having capacity of 100
                  students and one Girls' Hostel at M.U. Campus, Canchipur
                  having capacity of 100 students and are managed by two
                  wardens.
                </p>

                <div className="warden-table-container">
                  <table className="warden-table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="warden-details">
                            <strong>
                              i) Dr. Takhellambam Sonamani Singh
                            </strong>
                            <span>
                              Associate Prof., Department of Computer Science and Engineering
                            </span>
                          </div>
                        </td>
                        <td>Warden, Boys' Hostel</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="warden-details">
                            <strong>
                              ii) A. Balarampyari Devi
                            </strong>
                            <span>
                              Assistant Prof., Department of Electronics & Communication Engineering
                            </span>
                          </div>
                        </td>
                        <td>Warden, Girls' Hostel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>HOSTEL FEE</h3>
                <p>
                  As per the Hostel Fee Structure of Manipur University.
                </p>
              </div>
            </div>

            <div className="Facility_right">
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

export default HF;