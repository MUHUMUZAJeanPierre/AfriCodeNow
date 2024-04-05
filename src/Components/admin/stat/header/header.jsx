import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { CgPerformance } from "react-icons/cg";
import { useEffect } from "react";
import axios from "axios";
import CardStats from "../../cardStat/cardstat";




// components


export default function HeaderStats() {
  let token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const [courses ,setCourses] = useState([]);

      const fetchCourses = () => {
        setIsLoading(true);
        axios({
          method: "GET",
          url: "https://afri-code-back-end-zeo6.onrender.com/api/course/getAllCourse",
        })
          .then((response) => {
            setCourses(response.data.courses);
            console.log("response data", response.data.courses);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  // fetching Events
  const fetchEvent = () => {
     
    axios({
      url: "https://fablab-backend-api.onrender.com/event/getAllEvents",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
         
        console.log("events data", response.data.data);
        setEvents(response.data.data);
      })
      .catch((error) => {
        console.log(error.data);
        //setIsLoading(false);
      });
  };

  //applicants
  const [feedback, setFeedBack] = useState([]); 
  const fetchFeedBack = () => {
    axios({
      method: "GET",
      url: "https://afri-code-back-end-zeo6.onrender.com/api/user/allFeedback",
    })
      .then((response) => {
        setFeedBack(response.data.feedback);
        console.log("response data", response.data.feedback);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })

  }
  
  
  //fetch student
  const [student, setStudent] = useState([]);
  const fetchStudent = () => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "https://afri-code-back-end-zeo6.onrender.com/api/user/getAllStudent",
    })
      .then((response) => {
        setStudent(response.data.data);
        console.log("response data", response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCourses(),
    fetchFeedBack();
    fetchStudent();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative w-full bg-blue-500 md:pt-32 ">
        <div className="px-4 md:px-10  w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="COURSES"
                  statTitle={courses.length}
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron={`${courses.length} courses available`}
                  statIconName={<FaBook />}
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="FEEDBACK"
                  statTitle={feedback.length}
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron={`${feedback.length} we received from students`}
                  statIconName={<FcFeedback />}
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="STUDENTS"
                  statTitle={student.length}
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-orange-500"
                  statDescripiron={`${student.length} join the courses`}
                  statIconName={<LuUsers />}
                  statIconColor="bg-pink-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="Machines"
                  statTitle={machine.length}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName={<CgPerformance />}
                  statIconColor="bg-blue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
