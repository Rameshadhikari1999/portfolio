import React from "react";

const NextPrevBtn = ({ Icon, onclick }) => {
  return (
    <button 
      onClick={onclick} 
      className="p-4 flex items-center justify-center text-xl glass rounded-full text-white hover:bg-accent hover:border-accent transition-all duration-300 transform hover:scale-110 active:scale-90"
    >
      <Icon />
    </button>
  );
};

export default NextPrevBtn;
