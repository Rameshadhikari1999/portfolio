import React from 'react'
import heroImg1 from '../../assets/images/image.png'
import heroImg2 from '../../assets/images/hero.png'
import heroImg3 from '../../assets/images/image.png'
import Slider from './Slider'

const Services = () => {
  
  return (
    <div id='services' className="w-full h-screen bg-secondary p-5 ">
      <p className='text-sm pl-5 py-5 text-gray-400'>|| Services</p>
      <h1 className='text-3xl pl-5 py-2 capitalize font-Poppins text-gray-300 font-medium'>Service provide for</h1>

      {/* slicer section */}
      <div className='container mx-auto'>
        <Slider/>
      </div>

      
      
    </div>
  )
}

export default Services
