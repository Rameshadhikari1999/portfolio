import React, { useEffect, useState, useRef } from "react";
import { GrChapterPrevious, GrChapterNext } from "react-icons/gr";
import NextPrevBtn from "../../utility/NextPrevBtn";
import Slider from "../services/Slider";
import { projects } from "../../assets/contants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
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
    gsap.from(".projects-header", {
      scrollTrigger: {
        trigger: ".projects-header",
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
    setCurrentSlide((prev) => (prev + 1) % (projects.length - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (projects.length - slidesToShow + 1)) % (projects.length - slidesToShow + 1));
  };

  return (
    <div id="projects" ref={container} className="w-full py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="projects-header flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Portfolio</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Featured <span className="text-accent underline decoration-accent/20 underline-offset-8">Projects</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <NextPrevBtn Icon={GrChapterPrevious} onclick={prevSlide} />
            <NextPrevBtn Icon={GrChapterNext} onclick={nextSlide} />
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative z-10">
          <Slider 
            data={projects}
            page="project"
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            direction={direction}
            slidesToShow={slidesToShow}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
