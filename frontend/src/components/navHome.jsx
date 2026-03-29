import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

function Navbar() {
    return (
        // Sticky aur top-0 add kiya taaki yeh top par fix rahe
        <nav className='bg-linear-to-r from-gray-400 to-gray-500 shadow-sm border-b border-gray-200'>
            <div className='w-full  px-4 sm:px-6 lg:px-12'>

                {/* Flex container items ko horizontal row mein arrange karne ke liye */}
                <div className='flex items-center justify-between h-16'>

                    {/* Logo aur Title ek group mein */}
                    <div className='flex items-center text-white'>
                        <Brain className='mr-2 h-7 w-7' />
                        <Link to="/" className='font-bold text-xl tracking-wide hover:text-zinc-950'>AI Resume Analyzer</Link>
                    </div>

                    {/* Login / Signup Buttons */}
                    <div className='flex space-x-4'>
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

                </div>
            </div>
        </nav>
    );
}

export default NavHome;