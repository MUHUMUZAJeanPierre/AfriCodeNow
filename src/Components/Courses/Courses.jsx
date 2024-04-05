import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'

const Courses = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);
  const navigate = useNavigate();
  //handleFetchCourse

  const handleFetchCourse = ()=>{
    axios({
      method: 'GET',
      url: 'https://afri-code-back-end-zeo6.onrender.com/api/course/getAllCourse',
    }).then((response)=>{
      console.log(response.data.courses)
      setSearchTerm(response.data.courses);
     
    }).catch((error)=>{
      console.error(error);
    })
  }

  
  useEffect(()=>{
    handleFetchCourse();
    handleCardClick()
  }, []);
  

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleCardClick = () => {
    const token = localStorage.getItem("token") || null;
      console.log(token)
      if(!token){
        navigate('/login')
      }
  };

  return (
    <div>
      <div
        style={{ background: "#F8FAFA", paddingLeft: "8rem", paddingTop:100, paddingBottom: 100}}
        className="w-full h-full pt-[6rem]"
      >
        {/* <div className="flex justify-end ">
          <input
            type="text"
            // value={searchTerm}
            onChange={handleSearch}
            className="h-[3.5rem] pl-4 pr-[10rem] rounded-[35px] border-2 border-white-600 focus:border-white-600 outline-none"
          />
          <div>
            <IoMdSearch
              size={10}
              style={{ backgroundColor: "#12AEE7" }}
              className="text-white w-10 h-[3.5rem] mr-[6rem] bg-white ml-[-2rem] rounded-r-3xl  "
            />
          </div>
        </div> */}
        <div className="flex justify-start content-start gap-6 flex-wrap mt-[2rem] ">
          {searchTerm.map((course) => (
            <Link
              to={`/course/${course._id}`}
              key={course.id}
              className=" bg-white w-[20rem] h-[25rem] block px-4 py-2 shadow-xl rounded-md border-2  ease-in-out duration-300 hover:scale-105 transition-all"
            > 
              <div className="w-[18rem] h-[14rem]">
                
              <img
                src={course.posterPath}
                alt=""
                className="object-cover w-full mx-auto "
              />
              </div>
              <h2
                style={{ color: "#00DCFF"}}
                className="flex text-[15px] justify-start m-2 font-semibold text-center bg-white mt-[4rem]" 
              >
                {" "}
                AfriTech
              </h2>
              {/* <p className="border border-slate-400 "></p> */}
              {/* <p className="flex justify-end text-[#00DCFF]">50%</p> */}
              <h2 className="font-semibold text-left text-[15px]">
                {course.courseName}
              </h2>
              <p className="pt-2 font-light text-left text-[13px]">{course.courseTitles}</p>
            </Link>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Courses;
