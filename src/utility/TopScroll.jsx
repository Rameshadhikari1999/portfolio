/* TopScroll.jsx */
import React from 'react';
import { FaChevronUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const TopScroll = () => {
  return (
    <Link 
      to='home' 
      smooth={true} 
      offset={-70} 
      duration={500} 
      className='fixed bottom-8 right-8 cursor-pointer shadow-xl glass p-4 rounded-full z-50 group hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20'
    >
      <div className="relative">
        <FaChevronUp size={20} className="text-white group-hover:-translate-y-1 transition-transform duration-300" />
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
};

export default TopScroll;
