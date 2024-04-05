/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./siderNav/siderNav";
import Navbar from "./navbar/navbar";
import FooterAdmin from "./footeradmin/footerAdmin";



export default function DashboardLayout() {
  // const [open, setOpen] = useState(true);
  // const token = localStorage.getItem("token");
  // const status = localStorage.getItem("status");

  // const userString = localStorage.getItem("user");
  // const user = JSON.parse(userString);
  // const navigate = useNavigate();
   
  // const openDash = ()=>{
  //   setOpen(true);
  // }
  // const closeDash =()=>{
  //   setOpen(false);
  // };
  
  return (
    <>
    {open  && (
      <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100 ">
        <Navbar />
        <div className="px-4  md:px-10 mx-auto w-full -m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
      </>
    )}
      
    </>
  );
}
