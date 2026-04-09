import React, { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import heroImg from "../../assets/images/image.png";
import Buttons from "../../utility/Buttons";
import NextPrevBtn from "../../utility/NextPrevBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef();
  
  const handleLink = (link) => {
    window.open(link, "_blank");
  };


  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.from(".hero-text-child", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1
    })
    .from(".hero-image", {
      opacity: 0,
      x: 50,
      duration: 1.5
    }, "-=1")
    .from(".hero-socials", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.5");
  }, { scope: container });

  return (
    <div id="home" ref={container} className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h1 className="hero-text-child font-medium text-xl md:text-2xl text-accent">
              Hello! I am,
            </h1>
            <h2 className="hero-text-child text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
              Ramesh Adhikari
            </h2>
            <div className="hero-text-child flex items-center gap-4">
              <div className="h-[2px] w-12 bg-accent rounded-full" />
              <p className="text-xl md:text-2xl text-gray-400 font-light">
               Full Stack Developer & System Architect
              </p>
            </div>
            
            <p className="hero-text-child text-gray-400 max-w-lg leading-relaxed text-lg">
              Passionate Software Engineer with expertise in full-stack web development using Laravel, React JS, and Tailwind CSS. Proven ability to design RESTful APIs, optimize database performance, and deliver clean, maintainable code. Committed to building impactful digital solutions in collaborative, fast-paced environments.
            </p>

            <div className="hero-text-child pt-4 flex flex-wrap gap-4 items-center">
               <button 
                onClick={() => window.open('/Ramesh_Adhikari_Resume.pdf', '_blank')}
                className="btn-primary group relative overflow-hidden flex items-center gap-2"
               >
                 <span className="relative z-10 font-semibold">Download CV</span>
                 <FaDownload className="relative z-10 text-xl group-hover:translate-x-1 transition-transform" />
               </button>
               <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 font-semibold"
               >
                 View My Work
               </button>
            </div>

            {/* Socials */}
            <div className="hero-socials pt-8">
              <div className="flex items-center gap-4">
                <NextPrevBtn
                  Icon={FaFacebook}
                  onclick={() => handleLink("https://www.facebook.com/")}
                />
                <NextPrevBtn
                  Icon={FaGithub}
                  onclick={() => handleLink("https://gitlab.com/Ramesh199917")}
                />
                <NextPrevBtn
                  Icon={FaLinkedin}
                  onclick={() => handleLink("https://www.linkedin.com/in/ramesh-prasad-adhikari")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="hero-image z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
            <img
              src={heroImg}
              alt="Ramesh Prasad Adhikari"
              className="relative w-[300px] md:w-[450px] lg:w-[500px] aspect-square object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
