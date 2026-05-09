import React from 'react';
import bgVideo from '../assets/bg-video.mp4';
import { Brain, User, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';   




function Login() {

// form data State
const [formData, setFormData] = useState({
    username:'',
    password:'',
})

// navigation hook
const navigate = useNavigate();

// tracking input fields of form using handleChnage function

const handleChnage = (e)=>{

    const {name, value} = e.target;

    setFormData((prevData)=>({
        ...prevData,
        [name]: value,
    }));
}

// handle submit button using handleSubmit function

const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
        
        const response = await axios.post('http://localhost:4110/api/login', formData);

        // handling response and navigaion
        if(response.status ===200){
            alert('login succesfull welcome ' + response.data.user.username);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/home');
        }
    }
    catch(error){
        if(error.response){
            alert(error.response.data.message || "Login failed!");
        }
        else{
            console.error("network error please check your connection", error.message);
            
        }
    }
}






    return (
        <>
            {/* 1. The Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                {/* Dhyan dein: Agar video public folder mein hai, toh path '/' se shuru hona chahiye */}
                <source src={bgVideo} type="video/mp4" />

            </video>

            {/* 2. Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <div className=''>
                {/* 3. Your Content (Ab parent container ke ANDAR hai aur z-20 lagaya hai) */}
                <div className="relative z-20 p-8 text-center ">
                    <div className=' border-4 border-dark-400 rounded-xl w-150 h-130 mt-14 flex flex-col items-center justify-center ml-110 backdrop-blur-sm  '>
                        <Brain className='h-15 w-15 ' />

                        <h3 className=' w-45'> Ai Resume Analyzer</h3>

                        <br />
                        <br />

                        <label className='text-xl text-gray-500 mr-70 flex items-center justify-center gap-4'>{<User className='h-6 w-6  ' />}Enter username</label>
                        <input type="text" placeholder="Enter username" name='username' value={formData.username} onChange={handleChnage} required
                            className=' text-white h-10 w-119 p-5 mt-2 border-2 border-gray-500 rounded-md '
                        ></input>

                        <label className='text-xl text-gray-500 mr-70 flex items-center justify-center gap-4 mt-5'>{<KeyRound className='h-6 w-6  ' />}Enter Password</label>
                        <input type="password" placeholder="Enter password" name='password' value={formData.password} onChange={handleChnage} required
                            className=' text-white h-10 w-119 p-5 mt-2 border-2 border-gray-500 rounded-md'
                        ></input>
                        <label className='text-sm text-gray-500 mr-68 flex items-center justify-center gap-4'> Minimum 6 characters Required</label>



         <button
          className=' w-120 h-10 mt-10 bg-green-900 rounded-md  hover:bg-green-400 hover:text-black '
          onClick={handleSubmit}
          >Login</button>
     
     </div>
   </div>


  </div>
        </>
    )
}

export default Login;
