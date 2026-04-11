import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Engineer",
    company: "IT Care Nepal",
    location: "Kathmandu, Bagmati",
    period: "April 2024 — Present",
    icon: FaBriefcase,
    type: "work",
    points: [
      "Developed and maintained web applications supporting internal business operations.",
      "Implemented modules for customer and staff data management ensuring integrity and security.",
      "Designed and optimized booking and attendance tracking features for improved efficiency.",
      "Integrated payroll and accounting functionalities to streamline financial workflows.",
      "Enhanced system performance by refactoring legacy code and optimizing database queries.",
      "Contributed to UI improvements using modern front-end technologies for seamless UX."
    ]
  },
  {
    role: "Software Engineer",
    company: "Fi Ellements",
    location: "Noida, Uttar Pradesh, India",
    period: "June 2023 — February 2024",
    icon: FaLaptopCode,
    type: "work",
    points: [
      "Built an attendance tracking admin panel that automatically captures staff images every 5 minutes.",
      "Developed a full-featured car showroom management system with inventory and sales modules.",
      "Designed and implemented RESTful APIs using Laravel for integration with the Ingo website.",
      "Built responsive UIs with React JS and Tailwind CSS to enhance usability and accessibility."
    ]
  },
  {
    role: "Bachelor of Computer Applications (BCA)",
    company: "RIMT University",
    location: "Mandi Gobindgarh, Punjab, India",
    period: "2018 — 2021",
    icon: FaGraduationCap,
    type: "education",
    points: [
      "Graduated with 8.54 CGPA on a 10-point scale."
    ]
  }
];

const Experience = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".exp-header", {
      scrollTrigger: { trigger: ".exp-header", start: "top 80%" },
      opacity: 0,
      y: 30,
      duration: 1,
    });

    gsap.from(".exp-item", {
      scrollTrigger: { trigger: ".exp-list", start: "top 80%" },
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".exp-line", {
      scrollTrigger: { trigger: ".exp-list", start: "top 80%" },
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.inOut",
    });
  }, { scope: container });

  return (
    <div id="experience" ref={container} className="w-full py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="exp-header space-y-4 mb-20 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Career Path</p>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            My <span className="text-accent underline decoration-accent/20 underline-offset-8">Experience</span> & Education.
          </h2>
        </div>

        <div className="exp-list relative pl-10 md:pl-0 max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="exp-line absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className={`exp-item relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-primary border-4 border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)] mt-2 md:mt-0">
                <exp.icon className="text-white text-lg" />
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-6 md:pl-0`}>
                <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors duration-300 relative group overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 text-gray-400 text-sm">
                    <span className="font-medium text-white/80">{exp.company}</span>
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                        <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 origin-center" />
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty Space for alignment on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
