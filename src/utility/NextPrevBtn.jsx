import React from "react";

const NextPrevBtn = ({ Icon }) => {
  return (
    <button className="px-5 py-5 flex items-center justify-around text-2xl border-[0.5px] bg-primary border-gray-500 rounded-full text-white hover:bg-white hover:text-gray-700 mx-2 ">
      <Icon />
    </button>
  );
};

export default NextPrevBtn;
