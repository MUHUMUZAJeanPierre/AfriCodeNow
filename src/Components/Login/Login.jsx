import { React, useState } from "react";
import axios from 'axios';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import img from '../../assets/logoNy.png'
import {Link} from 'react-router-dom'


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
  const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            toast.error('Please fill in all fields');
            return;
        }
        try {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios({
                method: 'POST',
                url: 'https://afri-code-back-end-zeo6.onrender.com/api/user/signIn',
                data: {
                    email: email,
                    password: password
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${token}`
                }
            });
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            toast.success(response.data.message);
            setTimeout(() => {
                if(response.data.role === "admin"){
                    console.log(token);
                    navigate('/dashboard/stats');
                } else {
                    navigate('/courses');
                }
            }, 3500);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center bg-[#05A2E5] ">
        <ToastContainer/>

        <div className="absolute -z-20 object-contain h-[100vh]">
        </div>
        <div className="flex items-center justify-center ">
          <div className=" flex flex-col items-center  lg:pt-[4rem] ">
            <div className="relative flex lg:w-full w-[100vw] bg-white  flex-col min-w-0 break-words   mb-6 shadow-lg rounded-lg  border-0">
              <div className="px-6 py-6 mb-0 rounded-t">
                <div className="flex flex-col items-center mb-3">
                  <div className="w-fit -mt-[4rem] ">
                    <img
                      src={img}
                      alt="Logo Image"
                      className="mt-6 lx:w-10 md:72 p-14"
                    />
                  </div>
                  <h6 className="font-[800px] text-slate-500 ">
                    LOGIN
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="mb-3 font-bold text-center text-blueGray-400"></div>
                <form className="font-sora">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-slate-500 "
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
                      className="block mb-2 text-xs font-bold uppercase text-slate-500"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                      />
                      <span className="ml-2 text-sm font-semibold text-slate-500">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <Link  className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-slate-300 uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-cyan-700 hover:bg-[#05A2E5] active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={handleLogin}
                      
                    >
                      {isLoading ? "Logging in ..." : "Log in "}
                    </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="flex   space-x-[16rem] relative">
              <div className="w-1/2 mb-[5rem]">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small className="text-white">Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/singUp" className="text-blueGray-200">
                  <small className="text-white ml-[5rem]">
                    Register
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

 