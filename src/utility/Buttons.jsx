import React from 'react'


const Buttons = ({Icon, title, onClick}) => {
  return (
    <button 
        onClick={onClick}
        className="btn-primary group relative overflow-hidden"
    >
      <span className="relative z-10 font-semibold">{title}</span>
      {Icon && <Icon className="relative z-10 text-xl group-hover:translate-x-1 transition-transform" />}
    </button>
  )
}

export default Buttons
