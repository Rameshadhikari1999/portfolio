import React from 'react'


const Buttons = ({Icon, title}) => {
  return (
    <button 
        onClick={() => alert("Hire me")}
        className="flex items-center justify-around text-xl border border-s-lime-100 bg-primary border-gray-400 px-5 py-3 my-4 rounded-full text-white hover:bg-gray-800">
          {title}
          <Icon />
          </button>
  )
}

export default Buttons
