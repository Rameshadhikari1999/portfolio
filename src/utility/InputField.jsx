import React from 'react'

const InputField = ({type, name, value, placeholder, onChange }) => {
  return (
    <div className="w-full relative group">
      <input 
        type={type} 
        name={name}
        placeholder={placeholder} 
        onChange={onChange}
        value={value}
        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:border-accent/50 focus:bg-white/10 focus:ring-4 focus:ring-accent/10" 
      />
    </div>
  )
}

export default InputField
