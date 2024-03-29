import "../../index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import slidesData from "../Slides/Slide";
import { IoLibraryOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img from "../../assets/e-learning_app.jpg";
import teacher from "../../assets/teacher.png";
import slides from '../Slide/Slides.js'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

// import { FaArrowRight } from "react-icons/fa";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

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
      <div className="relative w-full h-screen bg-image pt-[35rem] overflow-hidden">
        <div className="absolute text-white top-1/2 left-1/2">
          <h1 className="font-serif text-4xl">
            Make bright future for your tech with us
          </h1>
          <p>{slidesData[slideIndex].text}</p>
        </div>

        <FaArrowLeft
          className="absolute text-white cursor-pointer top-1/2 left-4"
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute text-white cursor-pointer top-1/2 right-4"
          onClick={nextSlide}
        />

        <div className="absolute flex justify-center w-full transform -translate-x-1/2 bottom-4 left-1/2">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className={`mx-1 w-3 h-3 rounded-full ${
                slideIndex === idx ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
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
        </div>
      </div>
      <div className="justify-center py-7">
        <h1 className="flex justify-center font-serif text-4xl text-[#12AEE7]">
          School Facilities
        </h1>
        <p className="flex justify-center mt-4">
          At AfriTech(TechLearn), we are committed to providing you with the
          best online learning experience in the field of information
          technology.
        </p>
        <p className="flex justify-center">
          Our platform provides a robust set of facilities meticulously crafted
          to bolster your learning experience and propel your advancement in the
          realm of IT.{" "}
        </p>
      </div>

      <div className="flex-row w-full py-5 sm:flex justify-evenly">
        <div className="flex flex-col items-center transition-all duration-200 delay-100 group">
          <div className="w-[100px] h-[100px] rounded-full bg-[#ecabbb] flex justify-center items-center mx-auto group-hover:bg-yellow-500 transition-all duration-500">
            <IoLibraryOutline className="w-10 h-10 text-[#FE5D37] group-hover:text-white" />
          </div>
          <div className="bg-[#ecabbb] sm:w-[260px] h-[260px] px-3 py-3 rounded-full flex flex-col justify-center items-center group-hover:bg-yellow-500 transition-all duration-500">
            <h1 className="font-serif text-2xl font-bold text-center text-[#FE5D37] group-hover:text-white">
              Virtual Labs
            </h1>
            <p className="font-serif text-center group-hover:text-white">
              Highlight our virtual labs and simulations, providing a secure
              online space for students to hone technical skills.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center transition-all duration-200 delay-100 group">
          <div className="w-[100px] h-[100px] rounded-full bg-[#a9d99e] group-hover:bg-green-500 flex justify-center items-center mx-auto">
            <IoLibraryOutline className="w-10 h-10 text-green-500 group-hover:text-white" />
          </div>
          <div className="bg-[#a9d99e] group-hover:bg-green-500 sm:w-[260px] h-[260px] px-3 py-3 rounded-full flex flex-col justify-center items-center">
            <h1 className="font-serif text-2xl font-bold text-center text-green-500 group-hover:text-white ">
              Online Discussion
            </h1>
            <p className="text-center group-hover:text-white font-cursive">
              Emphasize the community spirit on our platforms, enabling students
              to exchange knowledge and insights freely.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center transition-all duration-200 delay-100 group">
          <div className="w-[100px] h-[100px] rounded-full bg-[#FC7060] group-hover:bg-yellow-500 flex justify-center items-center mx-auto transition-all duration-200 delay-100">
            <IoLibraryOutline className="w-10 h-10 text-yellow-500 group-hover:text-white" />
          </div>
          <div className="bg-[#FC7060] group-hover:bg-yellow-500 sm:w-[260px] h-[260px] px-3 py-3 rounded-full flex flex-col justify-center items-center transition-all duration-200 delay-100 pt-10">
            <h1 className="font-sans text-2xl font-bold text-center text-yellow-400 group-hover:text-white">
              Live Webinar& Q/A Session
            </h1>
            <p className="text-center group-hover:text-white">
              Emphasize the value of direct engagement with instructors and the
              opportunity for immediate clarification.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center transition-all duration-500 delay-200 group">
          <div className="w-[100px] h-[100px] rounded-full bg-[#91d1f4] group-hover:bg-[#12AEE7] flex justify-center items-center mx-auto transition-all duration-500 delay-200">
            <IoLibraryOutline className="w-10 h-10 text-blue-500 group-hover:text-white" />
          </div>
          <div className="bg-[#91d1f4] group-hover:bg-[#12AEE7] sm:w-[260px] h-[260px] px-3 py-3 rounded-full flex flex-col justify-center items-center transition-all duration-500 delay-200 pt-10">
            <h1 className="font-serif text-2xl font-bold text-center text-blue-500 group-hover:text-white">
              Performance Analytics
            </h1>
            <p className="text-center group-hover:text-white">
              Emphasize how these tools empower instructors to track engagement,
              pinpoint improvement areas, and offer tailored support.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col justify-around w-full gap-2 py-28 lg:flex sm:flex-row">
        <div className=" sm:w-[36rem] flex flex-col justify-center items-center ">
          <h1 className="font-serif text-4xl">
            Learn More About Our Work And Our Cultural Activities
          </h1>
          <p className="mt-5">
            While our primary focus is on providing a comprehensive range of
            facilities to support your learning journey and excel in IT, we also
            understand the importance of fostering a well-rounded experience.
            Beyond our educational offerings, we encourage exploration of our
            cultural activities to enrich your overall experience on our
            platform.
          </p>
          <p className="mt-5">
            These activities serve as opportunities for community engagement,
            creative expression, and personal growth, complementing the rigorous
            academic curriculum we provide. By participating in our cultural
            activities, you can further immerse yourself in our vibrant learning
            community and develop a holistic skill set that extends beyond
            technical expertise.
          </p>
          <div className="flex flex-row justify-between w-full mt-10">
            <button className="bg-[#12AEE7] text-white font-sans py-5 px-14   rounded-full text-center font-semibold">
              Read More
            </button>
            <div className="flex flex-row items-center gap-4 justify-evenly">
              <div>
                <img src={img} className="w-[50px] h-[50px] rounded-full" />
              </div>
              <div>
                <p className="text-[#12AEE7] font-semibold">MUHUMUZA JP</p>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-[22rem] h-[22rem] group-hover:border-[10px] group-hover:border-[#12AEE7] relative bg-image-two mt-5 sm:mt-0">
          <div className="relative flex justify-between gap-10 ">
            <div className="group">
              <div className="w-[13rem] h-[13rem] flex justify-center items-center object-cover rounded-full top-[11.1rem] left-[10.5rem] absolute border-[10px] group-hover:border-4 group-hover:border-[#12AEE7] group-hover:border-[10px]">
                <img
                  src={img}
                  className="w-[12rem] h-[12rem] rounded-full items-center"
                />
              </div>
            </div>
            <div className="group">
              <div className="w-[13rem] h-[13rem] flex justify-center items-center object-cover rounded-full top-[11.1rem] right-[10.5rem] absolute border-[10px] group-hover:border-4 group-hover:border-[#12AEE7] group-hover:border-[10px]">
                <img
                  src={img}
                  className="w-[12rem] h-[12rem] rounded-full items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center py-12 sm:flex">
        <div
          style={{
            backgroundColor: "#ABD0E4",
            width: 580,
            height: 380,
            // borderWidth: 1,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderColor: "black",
            // borderRadius: 20,
          }}
        >
          <img
            src={teacher}
            className="bg-blue w-full h-full object-cover rounded-[20px] "
            alt="Some alt text "
          />
        </div>
        <div
          //   className="rounded-[20px]"
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            gap: 18,
            backgroundColor: "#ABD0E4",
            width: 580,
            height: 380,
            borderWidth: 1,
            // borderColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: 18,
          }}
        >
          <h1 className="font-serif text-4xl text-center text-white">
            Become A Teacher
          </h1>
          <p className="text-[15px]">
            Join our initiative to empower women in tech by becoming a volunteer
            teacher today! Share your expertise and passion for IT by teaching
            online courses tailored to support women in their journey to excel
            in technology. Together, let's make a meaningful impact and bridge
            the gender gap in the tech industry.
          </p>
          <Link className="flex justify-center text-white text-xl gap-3 items-center bg-[#12AEE7] w-[98%] h-14 rounded-[30px]">
            <a className="">Get Started Now</a>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="justify-center py-12 sm:flex">
        <div
          //   className="rounded-[10px]"
          style={{
            gap: 18,
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "#ABD0E4",
            width: 600,
            height: 400,
            borderWidth: 1,
            borderColor: "#ABD0E4",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 18,
          }}
        >
          <h1 className="font-serif text-4xl text-center text-white">
            Make Appointment
          </h1>
          <div className="flex flex-wrap gap-4">
            <input
              placeholder="Guardian Name"
              className="px-11 py-2 h-[50px] border border-solid border-gray-300 rounded-sm"
              style={{ color: "#999", outline: "none" }}
              onFocus={(e) => (e.target.style.border = "none")}
            />
            <input
              placeholder="Guardian Email"
              className="px-11 py-2 h-[50px] border border-solid border-gray-300 rounded-sm"
              style={{ color: "#999", outline: "none" }}
              onFocus={(e) => (e.target.style.border = "none")}
            />
            <input
              placeholder="student Name"
              className="px-11 py-2 h-[50px] border border-solid border-gray-300 rounded-sm"
              style={{ color: "#999", outline: "none" }}
              onFocus={(e) => (e.target.style.border = "none")}
            />
            <input
              placeholder="student Email"
              className="px-11 py-2 h-[50px] border border-solid border-gray-300 rounded-sm"
              style={{ color: "#999", outline: "none" }}
              onFocus={(e) => (e.target.style.border = "none")}
            />
            <textarea
              placeholder="Message"
              className="  focus:border-white-600 outline-none  flex-grow h-[100px] px-10 py-2 border border-gray-300 rounded resize-y font-sans text-base leading-normal text-gray-700"
            ></textarea>
          </div>

          <Link className="flex justify-center items-center text-white font-semibold text-xl gap-3 bg-[#12AEE7]  h-14 rounded-[30px]">
            Submit
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "#12AEE7",
            width: 580,
            height: 400,
            borderWidth: 1,
            // borderColor: "#12AEE7",
            // borderRadius: 10,
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <img
            src={img}
            className="bg-blue w-full h-full object-cover rounded-[10px] "
            alt="Some alt text "
          />
        </div>
      </div>

      <div className=" py-7 sm:py-7 md:h-[45rem]">
        <h1 className="font-serif text-4xl text-center text-[#12AEE7]">
          Our Teachers
        </h1>
        <p className="flex justify-center mt-4 text-xl">
          Empowering IT Success: Explore Our Features
        </p>
        <div className="py-10 sm:flex justify-evenly">
          <div className="w-[15rem] h-[30rem] bg-blue-900 rounded-[500rem] bg-image-two">
            <div className="group w-[14rem] bg-[#ABD0E4] relative left-28 rounded-full">
              <div className="mt-56 w-[14rem] h-[14rem] rounded-full border-8 group-hover:border-[#12AEE7] flex items-center justify-center">
                <span className="text-xl font-bold text-center text-white">
                MUHUMUZA  JP
                   <p className="text-[#12AEE7]">Software Engineer</p>
                </span><br/> <br/>
                <span>
                    
                </span>
                
              </div>
            </div>
          </div>

          <div className="w-[15rem] h-[30rem] bg-blue-900 rounded-[500rem] bg-image-two">
            <div className="group w-[14rem] bg-[#ABD0E4] relative left-28 rounded-full ">
              {/* Custom content instead of img */}
              <div className="mt-56 w-[14rem] h-[14rem] rounded-full border-8 group-hover:border-[#12AEE7] flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  Peggy DUSHIME <br/>
                   <p className="text-[#12AEE7]">UI/UX Designer</p>
                </span>
              </div>
            </div>
          </div>

          <div className="w-[15rem] h-[30rem] bg-blue-900 rounded-[500rem] bg-image-two">
            <div className="group w-[14rem] bg-[#ABD0E4] relative left-28 rounded-full ">
              {/* Custom content instead of img */}
              <div className="mt-56 w-[14rem] h-[14rem] rounded-full border-8 group-hover:border-[#12AEE7] flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  Pacifique ISHIMWE <br/>
                 <p className="text-[#12AEE7]"> Full stack developer</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="font-serif text-4xl text-center uppercase text-[#12AEE7] py-7">
          Our partenership
        </h1>
        <p className="font-sans text-xl text-center">
          We showcase our dedication to fostering impactful partnerships that
          advance our mission. 
        </p>
        <p className="font-sans text-xl text-center">
           Join us in creating impactful partnerships that drive positive change
          and expand access to technology worldwide. 
        </p>
        j
        <div className="justify-center text-center sm:flex Carouselo lg:flex-row">
        <div className="sm:flex justify-evenly">
           <MdKeyboardArrowLeft
              className="arrow arrow-left right-[20rem] lg:right-[69rem] mt-[6.5rem] cursor-pointer hover:text-gray-300"
              onClick={prevSlide}
            />
            {slides.map((item, idx) =>
              item.images.map((item) => (
                <img    
                  src={item.image}
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                />
              ))
            )}
            <MdKeyboardArrowRight
              className="arrow arrow-right  left-[12rem] lg:left-[69rem] mt-[6.5rem]  bg-white-00 rounded-full"
              onClick={nextSlide}
            /> 
        </div>

            
            <span className="indicators">
              {slides.map((__, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                ></button>
              ))}
            </span>
          </div>

          
      </div>
    </>
  );
}

export default Home;
