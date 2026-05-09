import React, { useState } from 'react';
import bgVideoHome from '../assets/homepage.mp4';
import { Brain, Upload, Layout } from "lucide-react";
import axios from 'axios';

const Home = () => {
    const [file, setFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisData, setAnalysisData] = useState(null);

    // Simulating upload and API call
    const handleFileUpload = async (e) => {
       
 
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
       
        if (!selectedFile) {
        alert("select a file to upload");
        return;
    }
        
        const formData = new FormData();
        formData.append('file', selectedFile);

for (let [key, value] of formData.entries()) {
    console.log(`FormData Check -> ${key}:`, value);
}

           setIsAnalyzing(true);

        try{
           
            const res = await axios.post('https://ai-resume-analyzer-94pt.onrender.com/api/upload', formData, {
               withCredentials: true
            });

            setAnalysisData(res.data);
        }
        catch(error){
            console.error(error.message);
        }
        finally{
            setIsAnalyzing(false);
        }


        // API delay simulation
    //     setTimeout(() => {
    //         setIsAnalyzing(false);
    //         // Mock Data
    //         setAnalysisData({
    //             scores: {
    //                 overall: 8.4,
    //                 keywords: 9.2,
    //                 experience: 7.8,
    //                 formatting: 8.1
    //             },
    //             insight: " Default - Strengthen your executive summary by highlighting your leadership in multi-cloud migrations. This is a high-priority keyword for your target roles.",
    //             strengths: [
    //                 { title: "Action-Oriented Verbs", desc: "Strong usage of 'led', 'architected', and 'spearheaded'." },
    //                 { title: "Technical Density", desc: "Balanced skill stack representation across all sections." },
    //                 { title: "Visual Hierarchy", desc: "Effective use of bolding for key professional milestones." }
    //             ],
    //             improvements: [
    //                 { title: "Quantify Achievement Data", desc: "Instead of 'Managed a large team,' try 'Managed a cross-functional team of 25+ engineers, resulting in a 15% increase in sprint velocity.'" },
    //                 { title: "Optimize Executive Summary", desc: "Reduce the length of your summary from 5 lines to 3 high-impact sentences focused on your unique value proposition." },
    //                 { title: "Update Contact Links", desc: "Ensure your LinkedIn and Portfolio links are hyperlinked and up to date for modern recruitment workflows." }
    //             ]
    //         });
    //     }, 200000); // 200 seconds delay to simulate real API processing time
    };

    return (
        <div className="relative w-full h-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12">

            {/* 1. The Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={bgVideoHome} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 2. Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* 3. Your Content */}
            <div className="relative z-20 w-full">
                <main className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>

                    {/* hero section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16 backdrop-blur-sm">
                        
                        {/* Left Column: Intro and Upload */}
                        <div>
                            <h1 className='text-5xl font-extrabold text-[#60a5fa] leading-tight mb-4'> 
                                NexAI <br />
                                <span className="italic text-slate-100 font-normal text-2xl">
                                    An AI-powered tool that parses, evaluates, and scores resumes against job descriptions for optimal ATS compatibility.
                                </span>
                            </h1>

                            <div className='flex flex-col space-y-8 mt-8 text-sm text-gray-500'>
                                
                                <div className='flex items-center -space-x-2'>
                                    <div className='h-10 w-10 rounded-full bg-white border-2 border-gray-200 overflow-hidden flex items-center justify-center'>
                                        <Brain />
                                    </div>
                                    <span className='pl-6 text-xl text-slate-100'>Powered by Gemini</span>
                                </div>

                                {/* Upload Dropzone */}
                               
                                <div className='bg-slate-400/20 backdrop-blur-md p-10 rounded-2xl shadow-sm border border-gray-100/20 flex flex-col items-center justify-center text-center min-h-62.5 w-full max-w-md'>
                                    <div className='w-full flex flex-col items-center justify-center mb-4'>
                                        <Upload className='w-10 h-10 mb-4 text-blue-400' />
                                        <h3 className='text-lg text-white font-bold mb-10'>
                                            Upload Resume<br />
                                            <span className='text-sm font-normal text-slate-200'>PDF Only Max 10MB</span>
                                        </h3>
                                        <form  >
                                            <label className='bg-[#1e3a8a] text-white px-18 py-8  rounded-md cursor-pointer hover:bg-blue-900 transition font-medium shadow-lg'>
                                                {file ? file.name : "Select File"}
                                                <input  type="file" accept=".pdf" className='hidden ' onChange={handleFileUpload} />
                                            </label>
                                        </form>
                                            
                                        
                                        {isAnalyzing && (
                                            <p className="mt-6 text-md text-blue-300 font-medium animate-pulse">
                                                Analyzing with Gemini...
                                            </p>
                                        )}
                                    </div>
                                </div>  
                               
                            </div>
                        </div>

                        {/* Right Column: Analyzing Dashboard (Conditionally Rendered) */}
                        <div>
                            {analysisData && (
                                <div className='animate-fade-in-up bg-transparent p-8 rounded-2xl shadow-xl space-y-6'>
                                    <h2 className='text-2xl font-bold text-[#0043fc] border-b-2 border-[#0044ff] inline-block pb-1'>
                                        Analysis Dashboard
                                    </h2>
                                    
                                    {/* Top metric grid */}
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                        
                                        {/* Overall Score Card */}
                                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center'>
                                            <p className='text-gray-500 text-sm font-medium mb-2'>Overall Score</p>
                                            <p className='text-4xl font-extrabold text-blue-600'>{analysisData.scores.overall}/10</p>
                                        </div>

                                        {/* Keywords Score Card */}
                                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center'>
                                            <p className='text-gray-500 text-sm font-medium mb-2'>Keywords</p>
                                            <p className='text-4xl font-extrabold text-green-500'>{analysisData.scores.keywords}/10</p>
                                        </div>

                                        {/* Formatting Card */}
                                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                                            <div className='flex justify-between items-center mb-4'>
                                                <Layout className='w-5 h-5 text-[#1e3a8a]' />
                                                <span className='text-xs mr-22 font-bold text-[#1e3a8a] uppercase'>Formatting</span>
                                            </div>
                                            <div className='flex items-end space-x-2 mb-2'>
                                                <span className='text-4xl font-extrabold text-blue-600 pl-12 pt-8'>
                                                    {analysisData.scores.formatting}/10
                                                </span>
                                            </div>
                                        </div>

                                        {/* AI Insight Card */}
                                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                                            <div className='flex justify-between items-center mb-4'>
                                                <Brain className='w-5 h-5 text-[#1e3a8a]' />
                                                <span className='text-xs mr-25 font-bold text-[#1e3a8a] uppercase'>AI Insight</span>
                                            </div>
                                            <div className='flex items-end space-x-2'>
                                                <p className='text-sm font-medium text-gray-700'>
                                                    {analysisData.aiQuickInsight}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    {/* Improvement Suggestions */}
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-6">
                                        <h3 className="text-xl font-bold text-[#1e3a8a] mb-6">Improvement Suggestions</h3>
                                        <div className="space-y-6">
                                            {analysisData.improvementSuggestions.map((item, idx) => (
                                                <div key={idx} className="flex space-x-4">
                                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                        <span className="font-bold text-blue-600 text-sm">{idx + 1}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#1e3a8a] text-md">{item.title}</h4>
                                                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                </div>
                            )}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
