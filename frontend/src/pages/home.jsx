import React from 'react';
import bgVideo from '../assets/bg-video.mp4';

function Home() {
    return (
        // Fragment <></> hata diya kyunki ab ek hi parent div hai
        <div className="relative w-full h-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden">

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
}

export default Home;
