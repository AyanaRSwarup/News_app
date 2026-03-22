import React from 'react'
import { Link } from "react-router-dom";
import { Newspaper } from 'lucide-react';
import ScrollVelocity from './pages/marquee/scroll';

const Navbar = () => {
  return (
    <div className='mt-10 font-serif border-b-2 border-b-gray-300 '>
        <div className='flex items-center justify-center gap-2 font-bold '>
            <Newspaper className='size-6.5'/>
            <h1 className=' text-black text-3xl'>DAILY NEWS</h1>
        </div>
        <nav className='flex justify-center gap-10 mt-4'>
            <Link className='bg-black p-2 rounded-sm pl-3 pr-3 text-white active:scale-90 mb-4' to='/'>All</Link>
            <Link className='bg-black p-2 rounded-sm pl-3 pr-3 text-white active:scale-90 mb-4' to='/entertainment'>Entertainment</Link>
            <Link className='bg-black p-2 rounded-sm pl-3 pr-3 text-white active:scale-90 mb-4' to='/tech'>Technology</Link>
            <Link className='bg-black p-2 rounded-sm pl-3 pr-3 text-white active:scale-90 mb-4' to='/health'>Health</Link>
            <Link className='bg-black p-2 rounded-sm pl-3 pr-3 text-white active:scale-90 mb-4' to='/sports'>Sports</Link>
        </nav>
    </div>
  )
}

export default Navbar