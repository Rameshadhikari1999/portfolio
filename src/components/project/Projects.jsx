import React from "react";
import { GrChapterPrevious } from "react-icons/gr";
import NextPrevBtn from "../../utility/NextPrevBtn";
import { GrChapterNext } from "react-icons/gr";
import Slider from "../services/Slider";

const Projects = () => {
  return (
    <div id="projects" className="mt-10 px-5 w-full h-screen  bg-secondary">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div>
          <p className="text-sm pl-5 py-5 text-gray-400">||Awesome Portfolio</p>
          <h1 className="text-3xl lg:text-5xl pl-5 py-2 capitalize font-Poppins text-gray-300 font-medium">
            My Complete Projects
          </h1>
        </div>
        <div className="flex items-center justify-around pr-10">
          <NextPrevBtn Icon={GrChapterPrevious} />
          <NextPrevBtn Icon={GrChapterNext} />
        </div>
      </div>

      {/* slicer section */}
      <div className="relative">
      {/* Full-width slider */}
      <div className="absolute top-0 left-0 w-full h-64 md:h-80 z-50">
        <Slider />
      </div>
      
      {/* Content below the slider */}
      <div className="container mx-auto mt-64 md:mt-80"> {/* Adjust the margin-top to match the height of the slider */}
        <div className="relative w-full h-96 grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <div className="relative w-full flex items-center justify-center bg-[url('./assets/images/img-3.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
            <div className="relative z-10 text-white p-5">
              {/* Content for the first image */}
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-[url('./assets/images/img-9.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
            <div className="relative z-10 text-white p-5">
              {/* Content for the second image */}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* slicer section */}
    </div>
  );
};

export default Projects;
