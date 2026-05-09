
import { Brain, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    // 1. Check karein ki user logged in hai ya nahi
    const loggedInUser = localStorage.getItem('user');

    // 2. Logout function banayein
    const handleLogout = () => {
        // Browser ki memory se user ko hata do
        localStorage.removeItem('user');
        alert("you where Logged Out!");
        // Wapas login page par bhej do
        navigate('/login');
    };

    return (
        // Sticky aur top-0 add kiya taaki yeh top par fix rahe
        <nav className='bg-linear-to-r from-gray-400 to-gray-500 shadow-sm border-b border-gray-200 sticky top-0 z-50'>
            <div className='w-full  px-4 sm:px-6 lg:px-12'>

                {/* Flex container items ko horizontal row mein arrange karne ke liye */}
                <div className='flex items-center justify-between h-16'>

                    {/* Logo aur Title ek group mein */}
                    <div className='flex items-center text-white'>
                        <Brain className='mr-2 h-7 w-7' />
                        <Link to="/home" className='font-bold text-xl tracking-wide hover:text-zinc-950'>NexAI</Link>
                    </div>

                    {/* Login / Signup Buttons */}
                    {!loggedInUser ? (
                        <>
                    <div className='flex space-x-4 ml-280'>
                        <Link
                            to="/login"
                            className='border-2 rounded-lg text-gray-600 bg-green-500 border-gray-600 hover:bg-indigo-300 px-4 py-2 font-medium transition-all'
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className='bg-cyan-500 text-gray-600 rounded-lg hover:bg-indigo-400 px-4 py-2 font-medium transition-all shadow-sm'
                        >
                            SignUp
                        </Link>
                    </div>
                    </>
                    ):(
                        <>

                        <div className='ml-250'> 
                            <User2 className='h-6 w-6 text-black' /> <p className='text-black '>{JSON.parse(localStorage.getItem('user')).username}</p>
                        </div>
                        <button
                        className='border-2 ml-1 rounded-lg text-white bg-red-500 border-gray-600 hover:bg-indigo-300 px-4 py-2 font-medium transition-all'
                        onClick={handleLogout}

                        >Logout</button>
                        </>
                        
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;