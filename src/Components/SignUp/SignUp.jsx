import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignUp(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSignUp = async() => {
    if (!email.trim() ||!password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    try {
      await axios({
        method: 'POST',
        url: 'https://afri-code-back-end-zeo6.onrender.com/api/user/signup',
        data: {
          email: email,
          password: password
        }
      }).then((response)=>{
        console.log('response', response.newStudentCreated);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        toast.success(response.data.message);
        setTimeout(()=>{
          navigate('/login');
        })
      }, 3000)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('error');
    }
    
    
  }
    
    
  return (
    <>
    <ToastContainer/>
    <div className="w-full h-full bg-blue-500 py-[9rem] bg-gradient-br from-blue-200 to-[#12AEE7]">
      <div className="flex justify-center ">
        <div className="bg-white w-[470px] h-[520px] flex flex-col justify-center items-center rounded-3xl">
          <p style={{ fontWeight: '500' }} className="font-sans text-3xl font-semibold text-[#12AEE7]">
            Student SignUp
          </p>
          <p className="py-5 text-slate-500">Hey enter your details to create your account</p>
          
          <br />
          <span className="flex gap-2 border-[2px] border-gray-200 bg-white  rounded-xl w-[70%] h-14 pl-[20px]">
            <MdOutlineEmail style={{ fontSize: 20 }} className="mt-[15px] text-[#12AEE7]" />
            <input
              type='text'
              placeholder="Enter your Email"
              className="text-[#12AEE7] focus:outline-none w-full h-full rounded-xl "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>{" "}
          <br />
          <span className="flex gap-2 border-[2px] border-gray-200 bg-white  rounded-xl w-[70%] h-14 pl-[20px]">
            <RiLockPasswordFill style={{ fontSize: 20 }} className="mt-[15px] text-[#12AEE7]" />
            <input
              type='password'
              placeholder="Create Password"
              className="text-[#12AEE7] focus:outline-none rounded-xl w-full h-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span><br/>
          <span className="flex gap-2 border-[2px] border-gray-200 bg-white  rounded-xl w-[70%] h-14 pl-[20px]">
            <RiLockPasswordFill style={{ fontSize: 20 }} className="mt-[15px] text-[#12AEE7]" />
            <input
              type='password'
              
              placeholder="Confirm  Password"
              className="text-[#12AEE7] focus:outline-none rounded-xl w-full h-full"
            />
          </span>{" "}
          <br />
          <br />
          <span className="flex gap-2 justify-center bg-[#12AEE7] border-red-500 rounded-[30px] w-[70%] h-14 pl-[20px]">
            <button onClick={handleSignUp} style={{ fontWeight: '500', color: 'white' }} className="text-xl font- focus:outline-none">
              
              SignUp
            </button>
          </span>
          
        </div>
      </div>
    </div>
    </>
  );
}
