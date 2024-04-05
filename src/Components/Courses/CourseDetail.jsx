import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const params = useParams();

  const handleFetchCourseDetail = () => {
    axios({
      method: "GET",
      url: `https://afri-code-back-end-zeo6.onrender.com/api/course/findCourse/?id=${params.courseId}`,
    })
      .then((response) => {
        console.log(response.data.course);
        setCourseDetail(response.data.course);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleFetchCourseDetail();
  }, []);

  return (
    <div>
        <div className="mt-[7rem] m-10 ">
          <p style={{fontWeight: '500'}} className="my-3  text-center uppercase text-[#12AEE7]">{courseDetail.courseTitles}</p>
          <h2 className="">{courseDetail.content}</h2>
        </div>
    </div>
  );
};

export default CourseDetail;
