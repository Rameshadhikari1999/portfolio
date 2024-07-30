import React, { useState, useEffect } from "react";
import { TbPlayerTrackNext } from "react-icons/tb";

// currentSlide = { currentSlide };
// currentSlide = { currentSlide };
// currentSlide = { currentSlide };
const Slider = ({
  data,
  page,
  currentSlide,
  slidesToShow,
  direction,
  nextSlide,
}) => {
  return (
    <div className="w-full h-fit">
      <div className="w-full flex items-center justify-center overflow-hidden">
        <div
          className="flex transition-transform  ease-in-out duration-1000"
          style={{
            transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)`,
          }}
        >
          {page !== "services"
            ? data.map((project, index) => (
                <div
                  key={index}
                  className={` p-2 flex-shrink-0`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div
                    className={` w-1/2 md:w-full ${
                      page === "services" ? "bg-primary" : "bg-transparent"
                    }  p-5 text-white mx-auto rounded-md`}
                  >
                    <h1 className="text-xl lg:text-3xl p-5">{project.name}</h1>
                    <img onClick={() => window.open(project.link)} src={project.img} className="w-full md:w-1/2 h-48 mx-auto rounded-md cursor-pointer" alt={project.name} />
                  </div>
                </div>
              ))
            : // for services section only
              data.map((Slide, index) => (
                <div
                  key={index}
                  className={` p-2 flex-shrink-0`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div
                    className={`w-1/2 md:w-full ${
                      page === "services" ? "bg-primary" : "bg-transparent"
                    }  p-5 text-white mx-auto rounded-md`}
                  >
                    <Slide.Icon size={100} className="pl-5" />
                    <h1 className="text-xl p-5">{Slide.title}</h1>
                    {Slide.skils.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center gap-5  justify-start pl-10"
                      >
                        <TbPlayerTrackNext size={25} />
                        <p className="text-base">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
      <ul className="mt-10 w-1/2 mx-auto flex items-center justify-center gap-5">
        {page === "services" &&
          data
            .slice(0, data.length - 1)
            .map((_, index) => (
              <li
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? "bg-secondary md:bg-primary"
                    : "bg-gray-300"
                }`}
                onClick={nextSlide}
              ></li>
            ))}
      </ul>
    </div>
  );
};

export default Slider;
