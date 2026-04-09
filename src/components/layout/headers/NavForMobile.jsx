import React, { useEffect } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { menu } from '../../../assets/contants';
import NavItem from './NavItem';

const NavForMobile = ({openNav, handleCloseNav}) => {
  
  return (
    <>
    <nav className={`fixed top-0 right-0 h-screen transition-all duration-500 ease-in-out glass z-50 ${openNav ? 'w-[75vw] translate-x-0' : 'w-0 translate-x-full opacity-0'}`}>
        <div className='flex flex-col h-full p-8'>
            <div 
              className='self-end p-2 rounded-full glass hover:bg-white/10 text-3xl cursor-pointer transition-colors mb-12'
              onClick={handleCloseNav}
            >
              <IoCloseSharp />
            </div>

            <ul className='flex flex-col gap-8'>
                {menu.map((item) => (
                    <NavItem key={item.id} item={item} onClick={handleCloseNav} />
                ))}
            </ul>
        </div>
    </nav>

    </>
  )
}

export default NavForMobile
