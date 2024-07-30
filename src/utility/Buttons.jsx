import React from 'react'


const Buttons = ({Icon, title, onClick}) => {
  return (
    <button 
        onClick={onClick}
        className="flex items-center justify-around text-xl border border-s-lime-100 bg-primary border-gray-400 px-3 py-3 my-4 rounded-md text-white hover:bg-gray-800">
          {title}
          <Icon />
          </button>
  )
}

export default Buttons
