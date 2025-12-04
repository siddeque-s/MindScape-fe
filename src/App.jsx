import { Route, Routes } from "react-router-dom";
import "./App.css";

import UserHome from "./pages/UserHome";
import Login from "./pages/Login";
import PublicHome from "./pages/PublicHome";
import Journal from "./pages/Jounal";
import Habits from "./pages/Habits";
import MoodTracker from "./pages/MoodTracker";
import Insights from "./pages/Insights";
import UserDoctorSupport from "./pages/UserDoctorSupport";
import UserProfile from "./pages/UserProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorAssignedPatients from "./pages/DoctorAssignedPatients";
import DoctorAssignedPatientDetails from "./pages/DoctorAssignedPatientDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUserManagement from "./pages/AdminUserManagement";
import AdminDoctorList from "./pages/AdminDoctorList";
import AdminDoctorAssignment from "./pages/AdminDoctorAssignment";
import DoctorProfile from "./pages/DoctorProfile";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/login" element={<Login />} />
        {/* userpages */}
        <Route path="/dashboard" element={<UserHome />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/moodTracker" element={<MoodTracker />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/doctor" element={<UserDoctorSupport />} />
        <Route path="/userProfile" element={<UserProfile />} />
        {/* doctor pages */}
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/assignedPatients" element={<DoctorAssignedPatients />} />
        <Route
          path="/assignedPatientDetails"
          element={<DoctorAssignedPatientDetails />}
        />
        <Route path="/doctorProfile" element={<DoctorProfile/>} />
        {/* admin */}
        <Route path="/adminDash" element={<AdminDashboard />} />
        <Route path="/adminUserManagement" element={<AdminUserManagement />} />
        <Route path="/adminDoctorList" element={<AdminDoctorList/>} />
        <Route path="/adminDoctorAssignment" element={<AdminDoctorAssignment/>} />
        <Route path="/adminProfile" element={<AdminProfile/>} />
      </Routes>
    </>
  );
}

export default App;
