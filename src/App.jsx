import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login"
import Footer from "./Components/Footer/Footer";
import Appointment from "./Components/Appointment/Appointment";
import "./index.css";
import Courses from "./Components/Courses/Courses";
import CourseDetail from "./Components/Courses/CourseDetail";
// import DashboardLayout from "./Components/admin/navbar";
import Dashboard from "./Components/admin/stat/dashboard";
import AdminNavbar from "./Components/admin/adminNavbar";
import ProgramDash from "./Components/admin/program/programDash";
import AddProgramForm from "./Components/admin/program/addProgram";
import EditProgramCardSettings from "./Components/admin/program/editprogram";
import Student from "./Components/admin/cardStat/Student";
import CardTableAfriCodeNow from "./Components/admin/cardStat/CardTableAfriCodeNow";
import CardTableFeedBack from "./Components/admin/cardStat/CardTableFeedBack";
import Feedback from "./Components/admin/cardStat/Feedback";
import About from "./Components/About/About";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> 
              <Route   path="about"  element={<About/>} />
              <Route  path="contactUs" element={<Appointment/>} />
              <Route  path="courses" element={<Courses />} /> 
              <Route  path="course/:courseId" element={<CourseDetail/>} />
            </Route>
            <Route>
              <Route   path="singUp"  element={<SignUp/>} />
              <Route index path="login" element={<Login/>} />
              <Route path="/dashboard" element={<AdminNavbar></AdminNavbar> }  />
              <Route path="/dashboard/stats" index element={<AdminNavbar><Dashboard /></AdminNavbar>} />
              <Route path="/dashboard/programDash" element={<AdminNavbar><ProgramDash /></AdminNavbar>} />
              <Route path="/dashboard/AddProgramForm" element={<AdminNavbar><AddProgramForm /></AdminNavbar>} />
              <Route path="/dashboard/editProgram/:id" element={<AdminNavbar><EditProgramCardSettings /></AdminNavbar>} />
              <Route path="/dashboard/Student" element={<AdminNavbar><CardTableAfriCodeNow/></AdminNavbar>} />
              <Route path="/dashboard/FeedBack" element={<AdminNavbar><CardTableFeedBack/></AdminNavbar>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
