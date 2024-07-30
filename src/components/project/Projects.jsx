import React, { useEffect, useState } from "react";
import { GrChapterPrevious } from "react-icons/gr";
import NextPrevBtn from "../../utility/NextPrevBtn";
import { GrChapterNext } from "react-icons/gr";
import Slider from "../services/Slider";
import { projects } from "../../assets/contants";

const Projects = () => {
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [currentSlide, direction]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (direction === "forward") {
        if (prev === projects.length - slidesToShow) {
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
    <div id="projects" className="mt-10 px-5 w-full   bg-secondary">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div>
          <p className="text-sm pl-5 py-5 text-gray-400">|| Awesome Portfolio</p>
          <h1 className="text-3xl lg:text-5xl pl-5 py-2 capitalize font-Poppins text-gray-300 font-medium">
            My Complete Projects
          </h1>
        </div>
        <div className="flex items-center justify-around pr-10">
          <NextPrevBtn Icon={GrChapterPrevious} onclick ={nextSlide} />
          <NextPrevBtn Icon={GrChapterNext} onclick ={nextSlide} />
        </div>
      </div>

      {/* slicer section */}
      <div className="relative overflow-y-hidden">
      {/* Full-width slider */}
      <div className="absolute bottom-0 left-0 w-full h-64 md:h-80 z-20">
        <Slider 
        data={projects}
        page="project"
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        direction={direction}
        slidesToShow={slidesToShow}
        />
      </div>
      
      {/* Content below the slider */}
      <div className="container mx-auto "> {/* Adjust the margin-top to match the height of the slider */}
        <div className="relative w-full h-96 grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <div className="relative w-full flex items-center justify-center bg-[url('./assets/images/img-3.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="absolute inset-0 bg-primary bg-opacity-95 rounded-md"></div>
            <div className="relative z-10 text-white p-5">
              {/* Content for the first image */}
            </div>
          </div>
        {slidesToShow === 1 ? null :  <div className="relative flex items-center justify-center bg-[url('./assets/images/img-9.jpg')] bg-cover bg-center bg-no-repeat rounded-md ">
            <div className="absolute inset-0 bg-primary bg-opacity-95 rounded-md"></div>
            <div className="relative z-10 text-white p-5">
              {/* Content for the second image */}
            </div>
          </div>}
        </div>
      </div>
    </div>

      {/* slicer section */}
    </div>
  );
};

export default Projects;
