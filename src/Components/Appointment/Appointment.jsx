import { useState } from "react";
// import { Link } from "react-router-dom";
import img from "../../assets/happy.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Appointment = () => {
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [comment, setComment] = useState("");

  const handleComment = () => {
    axios({
      method: "POST",
      url: "https://afri-code-back-end-zeo6.onrender.com/api/user/addFeedback",
      data: {
        email: email,
        courseName: courseName,
        comment: comment,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTimeout(() => {
          toast.success("Comment successfully sent");
        }, 3000); 
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error sending comment");
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="bg-white py-28 sm:flex justify-evenly">
        <div
          style={{
            backgroundColor: "#264E84",
            width: 550,
            height: 500,
          }}
          className="rounded-[4px]"
        >
          <img
            src={img}
            className="bg-blue w-full h-full object-cover rounded-[4px] "
            alt="Some alt text "
          />
        </div>
        <div
          className=" rounded-[4px]"
          style={{
            gap: 18,
            backgroundColor: "#264E84",
            width: 600,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 18,
          }}
        >
          <h1 className="font-sans uppercase text-2xl text-center text-slate-300 font-[200px] ">
            Say something{" "}
          </h1>
          <div className="">
            <div className="relative w-full mb-3">
              <label
                className="block mb-2 text-xs font-bold text-white uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block mb-2 text-xs font-bold text-white uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
                course Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div>
              <textarea

                placeholder="say something"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="px-[12.5rem] py-[3rem] focus:outline-none focus:ring rounded-[8px]"
              ></textarea>
            </div>
          </div>
          <button
            type="button" 
            onClick={handleComment}
            className="flex justify-center items-center text-white font-[100px] text-xl gap-3 bg-cyan-700  h-14 rounded-[30px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
