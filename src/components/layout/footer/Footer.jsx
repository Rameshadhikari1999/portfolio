import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='w-full bg-primary h-10 flex items-center justify-center p-3 pb-10'>
        <p className='text-gray-400'>Made with ❤️ by Ramesh Adhikari © {date}  All Rights Reserved </p>
      
    </div>
  )
}

export default Footer
