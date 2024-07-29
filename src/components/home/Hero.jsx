import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import heroImg from "../../assets/images/image.png";
import Buttons from "../../utility/Buttons";
import { FaDownload } from "react-icons/fa";
import HeroIcon from "../../utility/HeroIcon";

const Hero = () => {
  return (
    <div id="home" className="w-screen h-screen ">
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
      <div className="absolute bottom-20 left-10 flex items-center gap-5">
        <HeroIcon Icon={FaFacebook} link="https://www.facebook.com/" />
        <HeroIcon Icon={FaGithub} link="https://github.com/" />
        <HeroIcon Icon={FaLinkedin} link="https://www.linkedin.com/" />
      </div>
      <div className="absolute bottom-0 left-5">
        <Buttons title="Download CV" Icon={FaDownload} />
      </div>
    </div>
  );
};

export default Hero;
