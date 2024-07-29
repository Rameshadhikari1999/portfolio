import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [direction, setDirection] = useState('forward');

  const slides = [
    "Slide 1: Lorem ipsum dolor sit amet.",
    "Slide 2: Consectetur adipiscing elit.",
    "Slide 3: Integer molestie lorem at massa.",
    "Slide 4: Facilisis in pretium nisl aliquet.",
    "Slide 5: Nulla volutpat aliquam velit.",
  ];

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

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change slide every 3 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentSlide, direction]);

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

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (direction === 'forward') {
        if (prev === 0) {
          setDirection('backward');
          return prev + 1;
        }
        return prev - 1;
      } else {
        if (prev === slides.length - slidesToShow) {
          setDirection('forward');
          return prev - 1;
        }
        return prev + 1;
      }
    });
  };

  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden">
      
      <div className="flex transition-transform delay-1000 duration-1000" style={{ transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full md:w-1/${slidesToShow} p-2 flex-shrink-0`}
          >
            <div className="h-full bg-primary p-5 text-white mx-auto rounded-md flex items-center justify-center">
              {slide}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
