import { Link } from "react-router-dom";
import logo from "../../assets/logoNy.png";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setTimeout(() => {
        setIsScrolled(true);
      }, 1000);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarClass = isScrolled ? "bg-white " : "bg-whiteScroll ";

  return (
    <>
      <div
        className={`flex items-center justify-between w-full p-4 font-serif ${navbarClass} navContainer`}
      >
        <div style={{ color: "black  " }} className="text-xl font-normal ">
          <Link
            to="/"
            className="flex flex-row inline-block gap-4 "
            style={{ fontWeight: "500" }}
          >
            <img
              src={logo}
              style={{
                width: 40,
                height: 40,
                color: "blue",
                backgroundColor: "transparent",
              }}
            />
            <p
              style={{ fontSize: 30, marginTop: 5 }}
              className="text-[#12AEE7]"
            >
              AFRI Tech
            </p>
          </Link>
        </div>

        <div
          className="hidden font-serif font-normal lg:flex lg:space-x-4"
          style={{ color: "black" }}
        >
          <Link to="/">
            <a
              href=""
              className="px-2 font-sans text-[#12AEE7] hover:text-[#103741] uppercase"
              style={{ fontWeight: "500" }}
            >
              Home
            </a>
          </Link>
          <Link to="/about">
            <a
              href=""
              className="px-2 font-sans text-[#12AEE7] hover:text-[#103741] uppercase"
              style={{ fontWeight: "500" }}
            >
              About Us
            </a>
          </Link>
          <Link to="/courses">
            <a
              href=""
              className="px-2 font-sans text-[#12AEE7] hover:text-[#103741] uppercase"
              style={{ fontWeight: "500" }}
            >
              All Courses
            </a>
          </Link>

          {/* <Link to="/login">
            <a
              href=""
              className="px-2 font-sans text-[#12AEE7] hover:text-[#103741] uppercase "
              style={{ fontWeight: "500", fontSize: 17 }}
            >
              Classes
            </a>
          </Link> */}
          <Link to="/contactUs">
            <a
              href=""
              className="px-2 font-sans text-[#12AEE7]  hover:text-[#103741] uppercase"
              style={{ fontWeight: "500" }}
            >
              Contact Us
            </a>
          </Link>
          {/* <Link to="/training">
            <a
              href=""
              className="px-2 font-sans text-[#12AEE7]  hover:text-[#103741] uppercase"
              style={{ fontWeight: "500" }}
            >
              TRAINING
            </a>
          </Link> */}
        </div>

        <div className="py-1.5 text-xl text-black-600 rounded-3xl px-6 font-bold bg-[#12AEE7] hover:bg-[#103741]  ">
          <Link to="singUp" className="flex gap-3 justify-evenly ">
            <p className="relative font-sans text-white text-[15px] uppercase">sign Up</p>
            <FaArrowRightLong className="w-3 font-bold text-white mt-[4.5px] " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
