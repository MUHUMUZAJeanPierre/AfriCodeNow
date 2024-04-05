import "../../index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import slidesData from "../Slides/Slide";
import { IoLibraryOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img from "../../assets/e-learning_app.jpg";
import teacher from "../../assets/teacher.png";
import slides from '../Slide/Slides.js';
import imgTwo from '../../assets/What-Are-the-Best-Free-Online-Learning-Platforms.webp'
import imgThree from '../../assets/e-learning.jpg'
import imgOne from '../../assets/logoNy.png'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  axios  from "axios";

// import { FaArrowRight } from "react-icons/fa";

function About() {
  const [slideIndex, setSlideIndex] = useState(0);
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
//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
//   };

//   const prevSlide = () => {
//     setSlideIndex((prevIndex) =>
//       prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const autoSlideInterval = setInterval(() => {
//       nextSlide();
//     }, 5000); // Change interval duration to 5000 milliseconds (5 seconds)
//     return () => clearInterval(autoSlideInterval);
//   }, []);



  const[slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlide((prevSlide) => prevSlide - 1 + (slides.length % slides.length));
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlideInterval);
  }, []);
  console.log(slides);
  return (
    <>
    <ToastContainer/>
      <div className="relative w-full h-screen about-container pt-[35rem] overflow-hidden">
        <div className="absolute text-center text-[#31B3E3]   top-[50%] left-[32%]">
          <h1 className="font-sans text-3xl ">
            {/* Make bright future for your tech with us */}
          </h1>
          {/* <p>{slidesData[slideIndex].text}</p> */}
        </div>

        {/* <FaArrowLeft
          className="absolute text-white cursor-pointer top-1/2 left-4"
          onClick={prevSlide}
        /> */}
        {/* <FaArrowRight
          className="absolute text-white cursor-pointer top-1/2 right-4"
          onClick={nextSlide}
        /> */}

        {/* <div className="absolute flex justify-center w-full transform -translate-x-1/2 bottom-4 left-1/2"> */}
          {/* {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className={`mx-1 w-3 h-3 rounded-full ${
                slideIndex === idx ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))} */}
        {/* </div> */}

        {/* <div className="absolute inset-0 flex items-center justify-center">
          {slidesData.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                slideIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.images.map((image, imgIdx) => (
                <img
                  key={imgIdx}
                  src={image.image}
                  alt={`Slide ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              ))}
            </div>
          ))}
        </div> */}
      </div>
      <div className="justify-center py-7">
        <h1 className="flex justify-center uppercase font-sans text-2xl text-[#12AEE7]">
          School Facilities
        </h1>
        <p className="flex justify-center mt-4 text-slate-400 text-[15px]">
          At AfriTech(TechLearn), we are committed to providing you with the
          best online learning experience in the field of information
          technology.
        </p>
        <p className="flex justify-center text-slate-400 text-[15px]">
          Our platform provides a robust set of facilities meticulously crafted
          to bolster your learning experience and propel your advancement in the
          realm of IT.{" "}
        </p>
      </div>

      <div className="flex-row w-full py-5 sm:flex justify-evenly">
        <div className="flex flex-col items-center transition-all duration-200 delay-100 group">
          <div className="w-[80px] h-[80px] rounded-full bg-[#ecabbb] flex justify-center items-center mx-auto group-hover:bg-yellow-500 transition-all duration-500">
            <IoLibraryOutline className="w-10 h-10 text-[#FE5D37] group-hover:text-white" />
          </div>
          <div className="bg-[#ecabbb] sm:w-[200px] h-[200px] px-3 py-3 rounded-full flex flex-col justify-center items-center group-hover:bg-yellow-500 transition-all duration-500">
            <h1 className="font-sans text-xl font-[500px] text-[11px] py-4 uppercase text-center text-[#FE5D37] group-hover:text-white">
              Virtual Labs
            </h1>
            <p className="font-serif text-[10px] text-center group-hover:text-white text-slate-500 ">
              Highlight our virtual labs and simulations, providing a secure
              online space for  to hone technical skills.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center transition-all duration-200 delay-100 group">
          <div className="w-[80px] h-[80px] rounded-full bg-[#a9d99e] group-hover:bg-green-500 flex justify-center items-center mx-auto">
            <IoLibraryOutline className="w-10 h-10 text-green-500 group-hover:text-white" />
          </div>
          <div className="bg-[#a9d99e] group-hover:bg-green-500 sm:w-[200px] h-[200px] px-3 py-3 rounded-full flex flex-col justify-center items-center">
            <h1 className="font-sans text-xl py-4 uppercase text-[11px] font-[100px] text-center text-green-500 group-hover:text-white ">
              Online Discussion
            </h1>
            <p className="text-center text-[10px] group-hover:text-white font-cursive text-slate-500">
              Emphasize the community spirit on our platforms, enabling students
              to exchange knowledge and insights freely.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center transition-all duration-200 delay-100 group">
          <div className="w-[80px] h-[80px] rounded-full bg-[#FC7060] group-hover:bg-yellow-500 flex justify-center items-center mx-auto transition-all duration-200 delay-100">
            <IoLibraryOutline className="w-10 h-10 text-yellow-500 group-hover:text-white" />
          </div>
          <div className="bg-[#FC7060] group-hover:bg-yellow-500 sm:w-[200px] h-[200px] px-3 py-12 rounded-full flex flex-col justify-center items-center transition-all duration-200 delay-100 pt-10">
            <h1 className="font-sans text-[11px] uppercase py-4 font-[100px] text-center text-yellow-400 group-hover:text-white">
              Live Webinar& Q/A 
            </h1>
            <p className="text-center group-hover:text-white text-slate-500 text-[11px]">
              Emphasize the value of direct engagement with instructors and the
              opportunity for immediate clarification.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center transition-all duration-500 delay-200 group">
          <div className="w-[80px] h-[80px] rounded-full bg-[#91d1f4] group-hover:bg-[#12AEE7] flex justify-center items-center mx-auto transition-all duration-500 delay-200">
            <IoLibraryOutline className="w-10 h-10 text-blue-500 group-hover:text-white" />
          </div>
          <div className="bg-[#91d1f4] group-hover:bg-[#12AEE7] sm:w-[200px] h-[200px] px-3 py-12 rounded-full flex flex-col justify-center items-center transition-all duration-500 delay-200 pt-10">
            <h1  className="font-sans uppercase text-[11px] py-4 font-[100px]  text-start text-blue-500 group-hover:text-white">
              Performance Analytics
            </h1>
            <p className="font-sans text-center text-slate-500 group-hover:text-white text-[10px]">
              Emphasize how these tools empower instructors to track engagement,
              pinpoint improvement areas, and offer tailored support.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col justify-around w-full gap-2 py-28 lg:flex sm:flex-row">
        <div className=" sm:w-[36rem] flex flex-col justify-center items-center ">
          <h1 className="font-sans text-2xl text-[#12AEE7]">
            Learn More About Our Work And Our Cultural Activities
          </h1>
          <p className="mt-5 text-slate-500 text-[12px]">
            While our primary focus is on providing a comprehensive range of
            facilities to support your learning journey and excel in IT, we also
            understand the importance of fostering a well-rounded experience.
            Beyond our educational offerings, we encourage exploration of our
            cultural activities to enrich your overall experience on our
            platform.
          </p>
          <p className="mt-5 text-slate-500 text-[12px]">
            These activities serve as opportunities for community engagement,
            creative expression, and personal growth, complementing the rigorous
            academic curriculum we provide. By participating in our cultural
            activities, you can further immerse yourself in our vibrant learning
            community and develop a holistic skill set that extends beyond
            technical expertise.
          </p>
          <div className="flex flex-row justify-between w-full mt-10">
            <button className="bg-[#12AEE7] text-white font-sans py-2 px-10   rounded-full text-center text-[12px]">
              Read More
            </button>
            <div className="flex flex-row items-center gap-4 justify-evenly">
              <div>
                <img src={imgOne} className="w-[50px] h-[50px] rounded-full" />
              </div>
              <div>
                <p className="text-[#12AEE7] font-semibold ">MUHUMUZA JP</p>
                <p className="text-slate-500 text-[12px]">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-[22rem] h-[22rem] group-hover:border-[10px] group-hover:border-[#12AEE7] relative bg-image-two mt-5 sm:mt-0">
          <div className="relative flex justify-between gap-10 ">
            <div className="group">
              <div className="w-[13rem] h-[13rem] flex justify-center items-center object-cover rounded-full top-[11.1rem] left-[10.5rem] absolute border-[10px] group-hover:border-4 group-hover:border-[#12AEE7] group-hover:border-[10px]">
                <img
                  src={imgTwo}
                  className="w-[12rem] h-[12rem] rounded-full items-center"
                />
              </div>
            </div>
            <div className="group">
              <div className="w-[13rem] h-[13rem] flex justify-center items-center object-cover rounded-full top-[11.1rem] right-[10.5rem] absolute border-[10px] group-hover:border-4 group-hover:border-[#12AEE7] group-hover:border-[10px]">
                <img
                  src={imgThree}
                  className="w-[12rem] h-[12rem] rounded-full items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-12 justify-evenly sm:flex">
        <div
          style={{
            backgroundColor: "#ABD0E4",
            width: 450,
            height: 350,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderColor: "black",
            // borderRadius: 20,
          }}
        >
          <img
            src={teacher}
            className="bg-blue w-full h-full object-cover rounded-[8px] "
            alt="Some alt text "
          />
        </div>
        <div
            // className="rounded-[20px]"
          style={{
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            // gap: 18,
            backgroundColor: "#ABD0E4",
            width: 450,
            height: 350,
            borderWidth: 1,
            // borderColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: 20,
          }}
        >
          <h1 className="font-sans text-xl text-center text-slate-200 ">
            Become A Teacher
          </h1>
          <p className="text-[12px] text-slate-500">
            Join our initiative to empower women in tech by becoming a volunteer
            teacher today! Share your expertise and passion for IT by teaching
            online courses tailored to support women in their journey to excel
            in technology. Together, lets make a meaningful impact and bridge
            the gender gap in the tech industry.
            
            Join our initiative to empower women in tech by becoming a volunteer
            teacher today! Share your expertise and passion for IT by teaching
            online courses tailored to support women in their journey to excel
            in technology. Together, lets make a meaningful impact and bridge
            the gender gap in the tech industry.
          </p>
        </div>
      </div>


      <div className=" py-5 sm:py-7 md:h-[45rem]">
        <h1 className="font-sans text-2xl text-center text-[#12AEE7]">
          Our Teachers
        </h1>
        <p className="flex justify-center mt-2 text-slate-500 text-[15px]">
          Empowering IT Success: Explore Our Features
        </p>
        <div className="py-10 sm:flex justify-evenly">
          <div className="w-[15rem] h-[30rem] bg-blue-900 rounded-[500rem] bg-image-Muhu">
            <div className="group w-[14rem] bg-[#11B0E5] relative left-28 rounded-full">
              <div className="mt-56 w-[14rem] h-[14rem] rounded-full border-8 group-hover:border-[#12AEE7] flex items-center justify-center">
                <span className=" font-[200px] text-center text-white">
                MUHUMUZA  JP
                   <p className="text-slate-500 ">Software Engineer</p>
                </span><br/> <br/>
                <span>
                    
                </span>
                
              </div>
            </div>
          </div>

          <div className="w-[15rem] h-[30rem] bg-blue-900 rounded-[500rem] bg-image-Three ">
            <div className="group w-[14rem] bg-[#7B8398] relative left-28 rounded-full ">
              {/* Custom content instead of img */}
              <div className="mt-56 w-[14rem] h-[14rem] rounded-full border-8 group-hover:border-[#12AEE7] flex items-center justify-center">
                <span className="font-[300px] text-white">
                  Peggy DUSHIME <br/>
                   <p className="text-[#12AEE7]">UI/UX Designer</p>
                </span>
              </div>
            </div>
          </div>

          <div className="w-[15rem] h-[30rem] bg-blue-900 rounded-[500rem] bg-image-One">
            <div className="group w-[14rem] bg-[#ABD0E4] relative left-28 rounded-full ">
              {/* Custom content instead of img */}
              <div className="mt-56 w-[14rem] h-[14rem] rounded-full border-8 group-hover:border-[#12AEE7] flex items-center justify-center">
                <span className=" text-white font-[200px]">
                  Pacifique ISHIMWE <br/>
                 <p className="text-[#12AEE7]"> Full stack developer</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default About;
