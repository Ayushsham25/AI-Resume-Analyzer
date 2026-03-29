
import React, { useState } from 'react';
import bgVideoHome from '../assets/homepage.mp4';
import { Brain, Upload, Key, Briefcase, Layout, Zap, CheckCircle, Waves } from "lucide-react";

const Home = () => {

    const [files, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisData, setAnalysisData] = useState(null);

    // stimulating uplaod And Gemini api call

    const handleFileUpload = (e) => {
        e.preventDefault();
        setIsAnalyzing(true);

        //  Api delay
        setTimeout(() => {
            setIsAnalyzing(false);
            //  mock Data
            setAnalysisData({
                scores: {
                    overall: 8.4,
                    keywords: 9.2,
                    experience: 7.8,
                    formatting: 8.1
                },
                insight: "Strengthen your executive summary by highlighting your leadership in multi-cloud migrations. This is a high-priority keyword for your target roles.",
                strengths: [
                    { title: "Action-Oriented Verbs", desc: "Strong usage of 'led', 'architected', and 'spearheaded'." },
                    { title: "Technical Density", desc: "Balanced skill stack representation across all sections." },
                    { title: "Visual Hierarchy", desc: "Effective use of bolding for key professional milestones." }
                ],
                improvements: [
                    { title: "Quantify Achievement Data", desc: "Instead of 'Managed a large team,' try 'Managed a cross-functional team of 25+ engineers, resulting in a 15% increase in sprint velocity.'" },
                    { title: "Optimize Executive Summary", desc: "Reduce the length of your summary from 5 lines to 3 high-impact sentences focused on your unique value proposition." },
                    { title: "Update Contact Links", desc: "Ensure your LinkedIn and Portfolio links are hyperlinked and up to date for modern recruitment workflows." }
                ]
            });

        }, 2000);
    };



    return (
        // Fragment <></> hata diya kyunki ab ek hi parent div hai
        <div className="relative w-full h-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden  px-4 sm:px-6 lg:px-12">

            {/* 1. The Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                {/* Dhyan dein: Agar video public folder mein hai, toh path '/' se shuru hona chahiye */}
                <source src={bgVideoHome} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 2. Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* 3. Your Content (Ab parent container ke ANDAR hai aur z-20 lagaya hai) */}
            <div className="relative z-20 ">

                <main className=' max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>

                    {/* hero section */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 backdrop-blur-sm  ">
                        <div>
                            <h1 className=' text-5xl font-extrabold text-[#60a5fa] leading-tight mb-4'> NexAI  <br />
                                <span className=" italic text-slate-950 font-normal text-2xl ">An AI-powered tool that parses, evaluates, and scores resumes against job descriptions for optimal ATS compatibility.</span>
                            </h1>

                            <div className=' flex items-center space-x-3 text-sm text-gray-500'>
                                <div className=' flex -space-x-2 pb-[25px] pl-[50px]'>
                                    <div className='h-10 w-10 rounded-full bg-white border-2 border-gray-200 overflow-hidden flex items-center justify-center'>
                                        < Brain />
                                    </div>
                                    <span className=' pl-[20px] pt-[5px] pr-[30px] text-xl text-slate-950'>Powered by Gemini</span>
                                </div>

                                {/* 2) upload Dropzone */}

                                <div className='ml-100 mb-10 bg-slate-400 p-20 rounded-2xl shadow-sm- border border-gray-100 flex flex-col items-center justify-center text-center min-h-[300px]'>
                                    <div className=' w-80 h-30  bg-blue-50 rounded-full flex items-center justify-center mb-4'>

                                        <Upload className=' w-7 h-7 mr-2 text-blue-500' />

                                        <h3 className=' text-md font-bold mb-1 ml-2'>Upload Resume<br />PDF Only Max 10MB    <br /></h3>
                                        <label className=' bg-[#1e3a8a]  text-white ml-3 mr-3 pl-4 pr-4 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-900 transition font-medium'>Select File
                                            <input type="file" accept=".pdf" className='hidden' onChange={handleFileUpload} />
                                        </label>
                                        {isAnalyzing && <p className="mt-4 mr-2 text-sm text-blue-600 font-medium animate-pulse">Analyzing with Gemini</p>}



                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </main>
            </div >
        </div >


    );
};

export default Home 
