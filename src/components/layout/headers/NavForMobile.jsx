import React, { useEffect } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { menu } from '../../../assets/contants';
import NavItem from './NavItem';

const NavForMobile = ({openNav, handleCloseNav}) => {
  
  return (
    <>
    <nav className={openNav ? `w-[65vw] md:w-[40vw] h-screen translate-x-0 ease-in-out duration-300 bg-primary fixed top-0 right-0 text-white` : `w-[50vw] h-screen translate-x-[150%] ease-in-out duration-300 bg-secondary fixed top-0 right-0 text-white`}>

        <div 
        className='w-14 h-14 p-3 rounded-full bg-gray-900 hover:bg-gray-700 text-4xl absolute top-5 right-5 cursor-pointer'
        >
        <IoCloseSharp onClick={handleCloseNav}  />
        </div>

        <ul className='w-full flex flex-col gap-5 justify-center items-start mx-2 absolute top-[15%] left-0'>
            {menu.map((item) => (
                <NavItem key={item.id} item={item} onClick={handleCloseNav} />
            ))}
            
        </ul>
    </nav>

    </>
  )
}

export default NavForMobile
