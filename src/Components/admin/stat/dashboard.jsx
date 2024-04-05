import React from "react";
import HeaderStats from "./header/header";

 

export default function Dashboard() {
  return (
    <>
      <div className=" ml-[15rem]">
        <HeaderStats />
      </div>

      <div className="flex flex-wrap ">
        <div className="w-full xl:w-1/2 px-4 h-[65vh]">
          
        </div>
        <div className="w-full   h-[65vh]   lg:w-1/2 mb-12 xl:mb-0 px-4">
          
        </div>
      </div>
    </>
  );
}
