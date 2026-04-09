import React from 'react'
import { Link } from 'react-scroll'
import './style.css'
const NavItem = ({item, onClick}) => {
  return (
    <li className='w-full lg:w-auto list-none'>
        <Link
            className='nav-link block py-2 px-4 text-lg font-medium cursor-pointer'
            activeClass="text-accent !after:w-full"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onClick}
        >
          {item.name}
        </Link>
    </li>
  )
}

export default NavItem
