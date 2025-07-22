import React from "react";
import { Route, Routes } from "react-router-dom";

// --- Main College Site Pages ---
import Home from "../../Platforms/User/Home";
import SiteContactUs from "../../Platforms/User/Main_Page/ContactUs/ContactUs"; // Renamed to avoid conflict
import ViceChancellor from "../../Platforms/User/Main_Page/Administration/ViceChancellor/ViceChancellor";
import Principal from "../../Platforms/User/Main_Page/Administration/Principal/Principal";
import Hostel_admin from "../../Platforms/User/Main_Page/Administration/Hostel Administration/Hostel_admin";
import Ins_admin from "../../Platforms/User/Main_Page/Administration/Institute Administration/Ins_admin";
import BSC_dept from "../../Platforms/User/Main_Page/Department/BSC/BSC_dept";
import CE_dept from "../../Platforms/User/Main_Page/Department/CE/CE_dept";
import CSE_dept from "../../Platforms/User/Main_Page/Department/CSE/CSE_dept";
import ECE_dept from "../../Platforms/User/Main_Page/Department/ECE/ECE_dept";
import EE_dept from "../../Platforms/User/Main_Page/Department/EE/EE_dept";
import ME_dept from "../../Platforms/User/Main_Page/Department/ME/ME_dept";
import HF from "../../Platforms/User/Main_Page/Facility/Facility_Container/HF";
import IF from "../../Platforms/User/Main_Page/Facility/Facility_Container/IF";
import LF from "../../Platforms/User/Main_Page/Facility/Facility_Container/LF";
import LL from "../../Platforms/User/Main_Page/Facility/Facility_Container/LL";
import Campus from "../../Platforms/User/Main_Page/Information/Information_Container/Campus";
import Classroom from "../../Platforms/User/Main_Page/Information/Information_Container/Classroom";
import FDP from "../../Platforms/User/Main_Page/Information/Information_Container/FDP";
import FSC from "../../Platforms/User/Main_Page/Information/Information_Container/FSC";
import MD from "../../Platforms/User/Main_Page/Information/Information_Container/MD";
import Placement from "../../Platforms/User/Main_Page/Information/Information_Container/Placement";
import Ragging from "../../Platforms/User/Main_Page/Information/Information_Container/Ragging";
import Teachers from "../../Platforms/common/Teachers/TeachersMain";
// import Conference from "../../Platforms/User/Main_Page/Conference/Conference"; // <-- REMOVED this old import
import NIRF from "../../Platforms/User/Main_Page/NIRF/NIRF";
import CE_14th from "../../Platforms/User/Main_Page/Information/Information_Container/placement_table/CE_14th";
import CE_15th from "../../Platforms/User/Main_Page/Information/Information_Container/placement_table/CE_15th";
import CE_16th from "../../Platforms/User/Main_Page/Information/Information_Container/placement_table/CE_16th";
import OGR_footer from "../../Platforms/User/Footer/Online_grievance_redressal";
import AICTEVAANI from "../../Platforms/User/Main_Page/AICTE VAANI/AICTEVAANI";




// --- Import the new Conference Layout and its pages ---
import NE_ICIST_Layout from "../../../NE_ICIST/NE_ICIST_Layout";
import ConferenceHome from "../../../NE_ICIST/pages/Home/Home";
import Registration from "../../../NE_ICIST/pages/Registration/Registration";
import ImportantDates from "../../../NE_ICIST/pages/Registration/ImportantDates";
import Schedule from "../../../NE_ICIST/pages/Schedule/Schedule";
import Accommodations from "../../../NE_ICIST/components/Accomodation/Accomodation";
import Gallery from "../../../NE_ICIST/components/Gallary/Gallary";
import ConferenceContactUs from "../../../NE_ICIST/pages/ContactUs/ContactUs";

// Import Committee Pages
import Org from '../../../NE_ICIST/components/Committee/Org';
import AdvisoryCommittee from '../../../NE_ICIST/components/Committee/AdvisoryCommittee';
import SubAdvisoryCommittee from '../../../NE_ICIST/components/Committee/SubAdvisoryCommittee';
import SubCommittees from '../../../NE_ICIST/components/Committee/SubCommitteeMembers';

function MainRouter() {
  return (
    <Routes>
      {/* --- Main College Site Routes --- */}
      <Route index element={<Home />} />
      <Route path="Teachers" element={<Teachers />} />
      <Route path="Contact_Us" element={<SiteContactUs />} /> {/* Use renamed component */}
      <Route path="Vice-Chancellor" element={<ViceChancellor />} />
      <Route path="Principal_0" element={<Principal />} />
      <Route path="Institute_Administration" element={<Ins_admin />} />
      <Route path="Hostel_admin_0" element={<Hostel_admin />} />
      <Route path="BSC_dept" element={<BSC_dept />} />
      <Route path="CE_dept" element={<CE_dept />} />
      <Route path="CSE_dept" element={<CSE_dept />} />
      <Route path="ECE_dept" element={<ECE_dept />} />
      <Route path="EE_dept" element={<EE_dept />} />
      <Route path="ME_dept" element={<ME_dept />} />
      <Route path="Hostel_Facility" element={<HF />} />
      <Route path="Internet_Facility" element={<IF />} />
      <Route path="Library_Facility" element={<LF />} />
      <Route path="Language_Lab" element={<LL />} />
      <Route path="Campus" element={<Campus />} />
      <Route path="Classroom_0" element={<Classroom />} />
      <Route path="Faculty_Development_Program" element={<FDP />} />
      <Route path="Fire_Safety_Certificate" element={<FSC />} />
      <Route path="Mandatory_Disclosures" element={<MD />} />
      <Route path="Placement" element={<Placement />} />
      <Route path="Ragging" element={<Ragging />} />
      {/* <Route path="Conference" element={<Conference />} /> */} {/* <-- REMOVED this conflicting route */}
      <Route path="NIRF" element={<NIRF />} />
      <Route path="Placement/CE_14th" element={<CE_14th />} />
      <Route path="Placement/CE_15th" element={<CE_15th />} />
      <Route path="Placement/CE_16th" element={<CE_16th />} />
      <Route path="OGR_footer" element={<OGR_footer />} />
      <Route path="AICTEVAANI" element={<AICTEVAANI />} />

      {/* --- Add the New, Fully Integrated Conference Routes Here --- */}
      <Route path="ne-icist" element={<NE_ICIST_Layout />}>
        <Route index element={<ConferenceHome />} />
        <Route path="Paper_submission" element={<Registration />} />
        <Route path="Important_dates" element={<ImportantDates />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="Accomodation" element={<Accommodations />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="ContactUs" element={<ConferenceContactUs />} />
        
        <Route path="Committee/organizer" element={<Org />} />
        <Route path="Committee/advisory" element={<AdvisoryCommittee />} />
        <Route path="Committee/sub-advisory" element={<SubAdvisoryCommittee />} />
        <Route path="Committee/sub-committee" element={<SubCommittees />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;