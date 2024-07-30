import React from "react";
import { Link } from "react-scroll";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { contactInfo } from "../../assets/contants";
import NextPrevBtn from "../../utility/NextPrevBtn";
import { Fa5, FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import InputField from "../../utility/InputField";
import Buttons from "../../utility/Buttons";
import { IoSend } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div id="contact" className="mt-10  px-5 w-full h-fit  bg-secondary mb-10">
      <p className="text-sm pl-5 py-5 text-gray-400">|| Contact Us</p>
      <div className=" p-5 w-full flex items-center justify-center ">
        <div className="text-center bg-primary rounded-full text-xl  p-5 capitalize font-Poppins text-gray-300 font-medium">
          <Link
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="hover:text-white cursor-pointer"
            to="home"
          >
            Home
          </Link>{" "}
          || <span>Contact</span>
        </div>
      </div>
      <div className="w-3/4 mx-auto h-96 bg-white rounded-md">
        <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={10}
          >
            <Marker position={{ lat: 51.505, lng: -0.09 }} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="w-[90%] mx-auto flex justify-around gap-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-primary h-96 md:-translate-y-40 z-10 p-5">
          {contactInfo.map((Info) => (
            <div className="w-full md:2/3 lg:w-1/2 mx-auto h-20 bg-secondary py-5 px-2 flex  items-center my-3">
              <div className="mr-2">
                <Info.icon size={30} className="text-gray-500" />
              </div>
              <div>
                <p className="text-base  font-Poppins text-gray-500">
                  {Info.name}
                </p>
                <p className="text-base  font-Poppins text-gray-500">
                  {Info.link}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 ">
          <p className="text-sm pl-5 py-5 text-gray-400">|| Contact Me</p>
          <h2 className="text-3xl lg:text-5xl pl-5 py-2  font-Poppins text-gray-300 font-medium">
            If you have any porject or need help. Contact me
          </h2>
          <p className="text-sm p-5 text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae eos ullam harum necessitatibus neque, quibusdam fugit
            sunt magni, repellendus veritatis illo rem porro, accusamus
            nesciunt. Omnis obcaecati a temporibus id.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex justify-around gap-10 flex-col md:flex-row">
        <div className="w-full h-fit md:w-1/2 bg-primary  p-5">
          <h4 className="text-xl lg:text-3xl pl-5 py-2  font-Poppins text-gray-300 font-medium">
            Follow Me
          </h4>
          <div className="flex items-center justify-center gap-10">
            <NextPrevBtn Icon={FaFacebook} onclick={() => {}} />
            <NextPrevBtn Icon={FaGithub} onclick={() => {}} />
            <NextPrevBtn Icon={FaLinkedin} onclick={() => {}} />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5">
            <div className="w-full flex items-center justify-around gap-5 flex-col md:flex-row my-5">
              <InputField name={"Full Name"} type={"text"} />
              <InputField name={"Email"} type={"email"} />
            </div>
            <div className="w-full flex items-center justify-around gap-5 flex-col md:flex-row my-5">
              <InputField name={"Phone"} type={"number"} />
              <InputField name={"Subject"} type={"text"} />
            </div>
            <div className="w-full flex items-center justify-around gap-5 flex-col md:flex-row my-5">
              <textarea name="message" id="message" placeholder="Message"
              className="w-full p-3 text-base font-Poppins text-gray-300 font-medium outline-none border-[0.5px] border-gray-500 bg-transparent rounded focus:border-gray-50"
              ></textarea>
            </div>
            <div className="w-full">
              <Buttons
                Icon={IoSend}
                title={"Send"}
                onClick={() => {}}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
