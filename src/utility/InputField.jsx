import React from 'react'

const InputField = ({ name, type }) => {
  return (
    <>
      <input className="w-full p-3 text-base font-Poppins text-gray-300 font-medium outline-none border-[0.5px] border-gray-500 bg-transparent rounded focus:border-gray-50" placeholder={name} type={type} />
    </>
  )
}

export default InputField
