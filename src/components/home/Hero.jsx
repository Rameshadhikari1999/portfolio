import React from "react";
import { Fa5, FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import heroImg from "../../assets/images/image.png";
import Buttons from "../../utility/Buttons";
import { FaDownload } from "react-icons/fa";
import NextPrevBtn from "../../utility/NextPrevBtn";

const Hero = () => {
  const handleLink = (link) => {
    window.open(link);
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="w-full h-screen overflow-x-hidden">
      {/* content section  */}
      <div className="w-full h-full  md:flex md:items-center  relative">
        <div className="absolute top-1/3 left-[10%] ">
          <h1 className="font-extrabold text-xl  md:text-5xl  text-gray-300">
            <span className="text-green-500">Hellow! </span> I am,
          </h1>
          <h1 className=" text-2xl md:text-5xl text-gray-300 pl-3">
            Ramesh <span className="text-green-500">Prasad</span> Adhikari
          </h1>
          <p className="text-sm md:text-xl text-gray-300 pl-5">
            Frontend Developer
          </p>
        </div>
      </div>

      {/* icons section  */}
      <div className="absolute bottom-10 left-10">
        <div className=" flex items-center gap-5">
          <NextPrevBtn
            Icon={FaFacebook}
            onclick={() => handleLink("https://www.facebook.com/")}
          />
          <NextPrevBtn
            Icon={FaGithub}
            onclick={() => handleLink("https://github.com/Rameshadhikari1999/Rameshadhikari1999.git")}
          />
          <NextPrevBtn
            Icon={FaLinkedin}
            onclick={() => handleLink("https://www.linkedin.com/in/ramesh-prasad-adhikari")}
          />
        </div>
        <Buttons 
        title="Download CV" 
        Icon={FaDownload} 
        onClick={handleDownload}
        />
      </div>
      <div className="absolute bottom-0 right-10 md:right-20 w-1/3">
        <img
          src={heroImg}
          alt="hero"
          className="w-3/2 h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
