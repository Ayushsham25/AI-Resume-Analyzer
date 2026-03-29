import React from 'react';
import bgVideoHome from '../assets/homepage.mp4';
import { Brain, upload, key, briefcase, Layout, zap, CheckCircle } from "lucide-react";

const Home = () => {

    const [files, setFile] = usestate(null);
    const [isAnalyzing, setIsAnalyzing] = usestate(false);
    const [analysisData, setAnalysisData] = usestate(null);

    // stimulating uplaod And Gemini api call

    const handleFileUpload = (e) => {
        e.preventDefault();
        setIsAnalyzing(true);

        //  Api delay
        setTimeout(() => {
            setAnalysisData(false);
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



        return (
            // Fragment <></> hata diya kyunki ab ek hi parent div hai
            <div className="relative w-full h-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden w-full  px-4 sm:px-6 lg:px-12">

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
                <div className="relative z-20 p-8 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Home Page</h1>
                    <p className="text-xl text-gray-200">Welcome to the AI Resume Analyzer.</p>
                </div>

            </div>
        );
    };
};
export default Home;
