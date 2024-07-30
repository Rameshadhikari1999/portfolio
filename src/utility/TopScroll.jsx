import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';

const TopScroll = () => {
  return (
    <Link to='home' smooth={true} offset={-70} duration={500} className='fixed bottom-32 right-5 cursor-pointer shadow bg-primary border-[0.5px] border-gray-50 p-5 rounded-full z-50'>
      <FaArrowUp size={25} />
    </Link>
  )
}

export default TopScroll
