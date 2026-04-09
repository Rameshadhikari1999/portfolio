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
      <div className="w-full flex items-center justify-center overflow-hidden py-10">
        <div
          className="flex transition-all cubic-bezier(0.4, 0, 0.2, 1) duration-1000"
          style={{
            transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)`,
          }}
        >
          {page !== "services"
            ? data.map((project, index) => (
                <div
                  key={index}
                  className={`p-4 flex-shrink-0`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="glass-card group overflow-hidden rounded-2xl">
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        onClick={() => window.open(project.link)} 
                        src={project.img} 
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110" 
                        alt={project.name} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                         <button 
                           onClick={() => window.open(project.link)}
                           className="btn-primary text-sm py-2"
                         >
                           View Project
                         </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.name}</h3>
                    </div>
                  </div>
                </div>
              ))
            : // for services section only
              data.map((Slide, index) => (
                <div
                  key={index}
                  className={`p-4 flex-shrink-0`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="glass-card h-full p-8 rounded-2xl space-y-6 flex flex-col items-center text-center">
                    <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Slide.Icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{Slide.title}</h3>
                    <div className="space-y-3 w-full text-left">
                      {Slide.skils.map((skill) => (
                        <div
                          key={skill.id}
                          className="flex items-start gap-3 group/skill"
                        >
                          <TbPlayerTrackNext className="mt-1 text-accent flex-shrink-0 transition-transform group-hover/skill:translate-x-1" size={18} />
                          <p className="text-gray-400 text-sm leading-snug">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-4">
        {data.slice(0, data.length - slidesToShow + 1).map((_, index) => (
          <button
            key={index}
            onClick={() => nextSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-8 bg-accent" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
