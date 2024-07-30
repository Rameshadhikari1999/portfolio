import React, { useState, useEffect } from 'react'
import Slider from './Slider'
import {slides} from '../../assets/contants/index'
const Services = () => {

  const [direction, setDirection] = useState("forward");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, direction]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (direction === "forward") {
        if (prev === slides.length - slidesToShow) {
          setDirection("backward");
          return prev - 1;
        }
        return prev + 1;
      } else {
        if (prev === 0) {
          setDirection("forward");
          return prev + 1;
        }
        return prev - 1;
      }
    });
  };
  
  return (
    <div id='services' className="w-full h-screen bg-secondary p-5 ">
      <p className='text-sm pl-5 py-5 text-gray-400'>|| Services</p>
      <h1 className='text-3xl lg:text-5xl pl-5 py-2 capitalize font-Poppins text-gray-300 font-medium'>Service provide for</h1>

      {/* slicer section */}
      <div className='container mx-auto'>
        <Slider 
        data={slides} 
        page="services"
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        direction={direction}
        slidesToShow={slidesToShow}
        />
      </div>

      
      
    </div>
  )
}

export default Services
