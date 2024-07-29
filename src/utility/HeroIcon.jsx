import React from 'react'

const HeroIcon = ({Icon ,link}) => {
  return (
    <div 
      className=" w-10 h-10 p-3  shadow-sm shadow-white hover:bg-secondary hover:scale-110 transition-all ease-in-out duration-100 rounded-full cursor-pointer  flex items-center justify-center"
      >
        <Icon
          onClick={() => window.open(link)}
          className="text-white"
        />
      </div>
  )
}

export default HeroIcon
