import React from 'react'

const InputField = ({type, name, value, placeholder, onChange }) => {
  return (
    <>
      <input 
      type={type} 
      name={name}
      placeholder={placeholder} 
      onChange={onChange}
      value={value}
      className="w-full p-3 text-base font-Poppins text-gray-300 font-medium outline-none border-[0.5px] border-gray-500 bg-transparent rounded focus:border-gray-50" 
      />
    </>
  )
}

export default InputField
