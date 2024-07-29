import React, { useState, useEffect } from 'react';
import { TbPlayerTrackNext } from "react-icons/tb";
import {slides} from '../../assets/contants/index'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [direction, setDirection] = useState('forward');

//   const slides = [
//     "Slide 1: Lorem ipsum dolor sit amet.",
//     "Slide 2: Consectetur adipiscing elit.",
//     "Slide 3: Integer molestie lorem at massa.",
//     "Slide 4: Facilisis in pretium nisl aliquet.",
//     "Slide 5: Nulla volutpat aliquam velit.",
//   ];

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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, direction]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (direction === 'forward') {
        if (prev === slides.length - slidesToShow) {
          setDirection('backward');
          return prev - 1;
        }
        return prev + 1;
      } else {
        if (prev === 0) {
          setDirection('forward');
          return prev + 1;
        }
        return prev - 1;
      }
    });
  };



  return (
    <div className="w-full h-full">
    <div className="w-full flex items-center justify-center overflow-hidden">
      <div className="flex transition-transform  ease-in-out duration-1000" style={{ transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)` }}>
        {slides.map((Slide, index) => (
          <div
            key={index}
            className={`w-full md:w-1/${slidesToShow} p-2 flex-shrink-0`}
          >
            <div className="w-1/2 md:w-full h-full items-center justify-center bg-primary p-5 text-white mx-auto rounded-md">
              <Slide.Icon size={100} className='pl-5' />
              <h1 className='text-xl p-5'>{Slide.title}</h1>
              {Slide.skils.map((skill) => (
                  
              <div key={skill.id} className='flex items-center gap-5  justify-start pl-10'>
                <TbPlayerTrackNext size={25}  />
                <p  className='text-base'>{skill.name}</p>
                </div>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    </div>
    <ul className='mt-10 w-1/2 mx-auto flex items-center justify-center gap-5'>
        {slides.map((_, index) => (
            <li
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
            ></li>
        ))}
      
    </ul>
    </div>
  );
};

export default Slider;
