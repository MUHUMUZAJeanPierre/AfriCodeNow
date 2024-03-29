// import React from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/happy.png";

const Appointment = () => {
  return (
    <div>
      <div className="bg-white py-28 sm:flex justify-evenly">
        <div
          className="rounded-[20px]"
          style={{
            gap: 18,
            backgroundColor: "#EFCD9D",
            width: 550,
            height: 400,
            // borderWidth: 2,
            // borderColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 18,
          }}
        >
          <h1 className="font-serif text-4xl">Make Appointment</h1>
          <div className="flex flex-wrap gap-4">
            <input
              placeholder="Guardian Name"
              className="px-9 py-2 h-[50px]"
              style={{ color: "#999", fontStyle: "italic" }}
            />
            <input
              placeholder="Guardian Email"
              className="px-9 py-2 h-[50px]"
              style={{ color: "#999", fontStyle: "italic" }}
            />
            <input
              placeholder="student Name"
              className="px-9 py-2 h-[50px]"
              style={{ color: "#999", fontStyle: "italic" }}
            />
            <input
              placeholder="Student Age"
              className="px-9 py-2 h-[50px]"
              style={{ color: "#999", fontStyle: "italic" }}
            />
            <textarea className="flex-grow h-[100px] px-1 py-2 border border-gray-300 rounded resize-y font-sans text-base leading-normal text-gray-700"></textarea>
          </div>

          <Link className="flex justify-center items-center text-white font-semibold text-xl gap-3 bg-[#12AEE7]  h-14 rounded-[30px]">
            Submit
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: 550,
            height: 400,
            // borderWidth: 2,
            // borderColor: "black",
            borderRadius: 50,
          }}
        >
          <img
            src={img}
            className="bg-blue w-full h-full object-cover rounded-[20px] "
            alt="Some alt text "
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
