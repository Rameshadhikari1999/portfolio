import React from 'react'
import { Link } from 'react-scroll'
import './style.css'
const NavItem = ({item}) => {
  return (
    <li  className='w-full text-xl px-4'>
                    <Link
                        className='w-fit h-fit  rounded-md text-center block p-3 hover:text-orange-5200 cursor-pointer text-white hover:bg-secondary'
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{item.name}</Link>
                </li>
  )
}

export default NavItem
