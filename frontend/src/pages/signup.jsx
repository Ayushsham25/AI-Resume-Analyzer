import React from 'react'
import bgVideo from '../assets/bg-video.mp4';
import "tailwindcss";
import { Brain, User, KeyRound, Mail } from 'lucide-react';
import { useState } from 'react';  
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';

// tracking form data and sending to backend
const signup = () =>{

    // 1 state to store form data
    const [formData, setFormData] = useState({
        username:'',
        gmail:'',
        password:'',
    });

    // navigation hook
    const navigate = useNavigate();

// tracking input fields of form

const handleChnage = (e) =>{
    const {name, value} = e.target;
    setFormData((prevFormData)=>({
        ...prevFormData,
        [name]: value,
    }));
};

// handling submit
 const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
        const response =  await axios.post('http://localhost:4110/api/signup', formData);
        

        // redirecting to login page after successful signup
        if(response.status === 200){
            alert('signup successful');
            navigate('/login');
        }
    //    console log ko remove karna hai
        // console.log({formData});

        setFormData({ username:'', gmail:'', password:'',});
   } catch (error) {
        if (error.response && error.response.data) {
            console.log("🔥 ASLI ERROR YAHAN HAI:", error.response.data);
            alert(error.response.data.message || "Validation Error!");
        } else {
            // Yahan se error.response.data hata diya hai kyunki network error me wo nahi hota
            console.error("System Error:", error.message);
            alert("Network connection check karein!");
        }
    }

 };



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
            <div >
                {/* 3. Your Content (Ab parent container ke ANDAR hai aur z-20 lagaya hai) */}
                <div className="relative z-20 p-8 text-center ">
                    <div className=' border-4 border-dark-400 rounded-xl w-150 h-130 mt-14 flex flex-col items-center justify-center ml-110 backdrop-blur-sm  '>
                        <Brain className='h-15 w-15 ' />

                        <h3 className=' w-45'> Ai Resume Analyzer</h3>

                        <br />
                        <br />

                        {/* input feilds */}
                          <form >
                        <label className='text-xl text-gray-500 mr-70 flex items-center justify-center gap-4'>{<User className='h-6 w-6  ' />}Enter username</label>
                        <input type="text" placeholder="Enter username" name='username' value={formData.username}  required 
                               onChange={handleChnage}

                            className=' text-white h-10 w-119 p-5 mt-2 border-2 border-gray-500 rounded-md'
                        ></input>

                        <label className='text-xl text-gray-500 mr-78 flex items-center justify-center gap-4 mt-5'>{<Mail className='h-6 w-6  ' />}Enter Gmail</label>
                        <input type="text" placeholder="Enter Gmail" name='gmail' value={formData.gmail} required 
                               onChange={handleChnage}
                            className='text-white h-10 w-119 p-5 mt-2 border-2 border-gray-500 rounded-md'
                        ></input>

                        <label className='text-xl text-gray-500 mr-70 flex items-center justify-center gap-4 mt-5'>{<KeyRound className='h-6 w-6  ' />}Enter Password</label>
                        <input type="password" placeholder="Enter password atleast 6 characters" name='password' value={formData.password}   required
                            onChange={handleChnage}

                            className='text-white h-10 w-119 p-5 mt-2 border-2 border-gray-500 rounded-md'
                        ></input>

                        <button className='bg-blue-500 text-white w-120 px-4 py-2 mt-6 rounded-md hover:bg-blue-600 transition-colors duration-300'
                        onClick={handleSubmit}>Sign Up</button>
                    </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default signup
