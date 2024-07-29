import React,{ useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Skills = () => {

  const [skills, setSkills] = useState([
    { name: "Frontend Development", value: 70 },
    { name: "Backend Development", value: 50 },
    { name: "Website Development", value: 80 },
    { name: "Others", value: 40 },
  ]);
  const [animatedValues, setAnimatedValues] = useState(
    skills.map(() => 0)
  );
  
  useGSAP(() => {
    skills.forEach((skill, index) => {
      const progressBar = { value: 0 };
      gsap.fromTo(
        `#progress-${index}`,
        { value: 0 },
        {
          value: skill.value,
          scrollTrigger: {
            trigger: `#skill-${index}`,
            start: "top bottom",
            end: "top top",
            scrub: true,
            toggleActions: "play none none reverse",
            onUpdate: (self) => {
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.round(self.progress * 100);
                return newValues;
              });
            },
          },
          duration: 1,
          ease: "none",
        }
      );
    });
  }, [skills]);
  return (
    <div id="skills" className="mt-10 px-5 w-full  bg-secondary">
      <p className="text-sm pl-5 py-5 text-gray-400">|| Skills</p>
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl lg:text-5xl p-5 py-2 capitalize font-Poppins text-gray-300 font-medium">
            My Special Skill Field Here.
          </h1>
        </div>
        <div className="w-full md:w-1/2">
        {skills.map((skill, index) => (
        <div
          key={index}
          id={`skill-${index}`}
          className="w-full mx-auto my-4 h-20 p-5 capitalize bg-primary"
        >
          <p className="text-base text-gray-400 text-start">
            {skill.name}
            <span className="float-right">{animatedValues[index]}%</span>
          </p>
          <progress
            id={`progress-${index}`}
            className="w-full h-1 bg-white"
            value={0}
            max="100"
          ></progress>
        </div>
      ))}
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
