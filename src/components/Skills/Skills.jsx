import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "Laravel", color: "#FF2D20" },
  { name: "React JS", color: "#61DAFB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Bootstrap", color: "#7952B3" },
  { name: "Git", color: "#F05032" },
];

const Skills = () => {
  const container = useRef();
  const [skills] = useState([
    { name: "Laravel", value: 80 },
    { name: "React JS", value: 50 },
    { name: "JavaScript", value: 60 },
    { name: "Tailwind CSS", value: 70 },
    { name: "Bootstrap", value: 80 },
    { name: "Git", value: 70 },
  ]);

  useGSAP(() => {
    skills.forEach((skill, index) => {
      gsap.fromTo(
        `.skill-bar-${index}`,
        { width: "0%" },
        {
          width: `${skill.value}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.skill-item-${index}`,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.from(".skills-header", {
      scrollTrigger: {
        trigger: ".skills-header",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },opacity: 0,
      y: 30,
      duration: 1,
    });

    gsap.from(".tech-badge", {
      scrollTrigger: { trigger: ".tech-badges", start: "top 85%" },
      opacity: 0,
      scale: 0.8,
      stagger: 0.07,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, { scope: container });

  return (
    <div id="skills" ref={container} className="w-full py-24 px-6 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Header + Tech Stack */}
        <div className="skill-header space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Abilities</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              My Special{" "}
              <span className="text-accent underline decoration-accent/20 underline-offset-8">Skill Field</span>{" "}
              Here.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Continuously evolving my toolkit to stay at the forefront and deliver exceptional digital solutions.
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Tech Stack</p>
            <div className="tech-badges flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="tech-badge flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-card border transition-all duration-300 cursor-default text-white/90 hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ 
                    borderColor: `${tech.color}40`,
                    backgroundColor: `${tech.color}10`,
                  }}
                >
                  <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Skill Bars */}
        <div className="space-y-8 lg:pt-[60px]">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-item-${index} space-y-3`}>
              <div className="flex justify-between items-end">
                <p className="text-lg font-medium text-white tracking-wide">{skill.name}</p>
                <span className="text-accent font-bold text-lg">{skill.value}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
                <div
                  className={`skill-bar-${index} h-full rounded-full bg-gradient-to-r from-accent to-violet shadow-[0_0_15px_rgba(99,102,241,0.5)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
