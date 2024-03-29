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
              <Route   path="singUp"  element={<SignUp/>} />
              <Route index path="login" element={<Login/>} />
              <Route  path="contactUs" element={<Appointment/>} />
              <Route  path="courses" element={<Courses />} /> 
              <Route  path="course/:courseId" element={<CourseDetail/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
