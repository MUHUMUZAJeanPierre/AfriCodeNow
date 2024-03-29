import { React, useState } from "react";
import axios from 'axios';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


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
            localStorage.setItem("token", response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/courses');
            }, 3000);
        } catch (error) {
            console.log(error);
            toast.error('An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-full bg-blue-600 py-[5rem] bg-gradient-br from-blue-500 to-[#12AEE7]">
            <ToastContainer />
            <div className="flex justify-center ">
                <div className="bg-white w-[540px] h-[540px] flex flex-col justify-center items-center rounded-3xl">
                    <p style={{ fontWeight: '500' }} className="font-sans text-4xl font-semibold text-[#12AEE7]">
                        Welcome
                    </p>
                    <br />
                    <span className="flex gap-2 border-[2px] border-gray-200 bg-white  rounded-xl w-[70%] h-14 pl-[20px]">
                        <MdOutlineEmail style={{ fontSize: 20 }} className="mt-[15px] text-[#12AEE7]" />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email Address"
                            className="w-full h-full text-blue-400 focus:outline-none rounded-xl"
                        />
                    </span>{" "}
                    <br />
                    <span className="flex gap-2 border-[2px] border-gray-200 bg-white  rounded-xl w-[70%] h-14 pl-[20px]">
                        <RiLockPasswordFill style={{ fontSize: 20 }} className="mt-[15px] text-[#12AEE7]" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Your Password"
                            className="w-full h-full text-blue-400 focus:outline-none rounded-xl"
                        />
                    </span>{" "}
                    <br />
                    <br />
                    <span className="flex gap-2 justify-center bg-[#12AEE7] border-red-500 rounded-[30px] w-[70%] h-14 pl-[20px]">
                        <button style={{ fontWeight: '500', color: 'white' }} className="font-sans text-xl font- focus:outline-none" onClick={handleLogin}>
                            {" "}
                            Login
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

 