import React, { useState, useEffect, useRef } from 'react'
import Slider from './Slider'
import {slides} from '../../assets/contants/index'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef();
  const [direction, setDirection] = useState("forward");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.from(".service-header", {
      scrollTrigger: {
        trigger: ".service-header",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 1
    });
  }, { scope: container });

  const nextSlide = (index) => {
    if (typeof index === 'number') {
      setCurrentSlide(index);
      return;
    }
    setCurrentSlide((prev) => (prev + 1) % (slides.length - slidesToShow + 1));
  };
  
  return (
    <div id='services' ref={container} className="w-full py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="service-header space-y-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-accent" />
            <p className='text-sm font-semibold uppercase tracking-widest text-accent'>My Services</p>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>
            Solutions I <span className="text-accent underline decoration-accent/20 underline-offset-8">Provide</span>
          </h1>
        </div>

        {/* Slider Section */}
        <div className="relative z-10">
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
    </div>
  )
}

export default Services
