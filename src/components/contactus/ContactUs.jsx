import React, { useState } from "react";
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
import Alert from "../../utility/Alert";

const ContactUs = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState({
    type : "",
    message : ""
  });

  const handleChange = (e) => {
    setUserMessage({ ...userMessage, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setAlert(false);
  }
  const handleSendMessage = async(e) => {
    e.preventDefault();
    if(userMessage.name === "" || userMessage.email === "" || userMessage.phone === "" || userMessage.message === ""){
      setMsg({type : "error", message : "Please fill all the fields"});
      setAlert(true);
      return
    }
    else if(!userMessage.email.includes("@")){
      setMsg({type : "error", message : "Please enter a valid email"});
      setAlert(true);
      return
    }
    else if(userMessage.phone.length !== 10){
      setMsg({type : "error", message : "Please enter a valid phone number"});
      setAlert(true);
      return
    }
    else{
      setAlert(false);
    }
    console.log(userMessage);
    

  // try {
  //     const response = await fetch('https://script.google.com/macros/s/AKfycbxM4Op6uS8XSkKgzAgOSCq4q3urPMR6jcNOa9YWQ8zx83_gsANpxagQYMjcyQGXmZRI/exec', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...userMessage }),
  //     });

  //     const result = await response.json();
  //     if (response.ok) {
  //       setMsg({type : "success", message : "Message sent successfully"});
  //       setAlert(true);
  //       setUserMessage({name : "", email : "", phone : "", message : ""});
  //     } else {
  //       setMsg({type : "error", message : `Form submission failed: ${result.error}`}); 
  //     }
  //   } catch (error) {
  //     setMsg({type : "error", message : `Form submission failed: ${error.message}`}); 
  //   }
      
  setMsg({type : "success", message : "Message sent successfully"});
  setAlert(true);
  setUserMessage({name : "", email : "", phone : "", message : "", subject : ""});
  };

  return (
    <div id="contact" className="mt-10  px-5 w-full h-fit  bg-secondary mb-10 overflow-x-hidden">

      <Alert alert={alert}  message={msg} handleClose={handleClose} />


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
          {contactInfo.map((Info, index) => (
            <div key={index} className="w-full md:2/3 lg:w-1/2 mx-auto h-20 bg-secondary py-5 px-2 flex  items-center my-3">
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

      <div className="w-full md:w-[90%] mx-auto flex justify-around gap-10 flex-col md:flex-row">
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
            <InputField
              type={"text"}
              name={"name"}
              placeholder={"Full Name"}
              value={userMessage.name}
              onChange={handleChange}
            />
            <InputField
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              value={userMessage.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex items-center justify-around gap-5 flex-col md:flex-row my-5">
            <InputField
              type={"number"}
              name={"phone"}
              placeholder={"Phone"}
              value={userMessage.phone}
              onChange={handleChange}
            />
            <InputField
              type={"text"}
              name={"subject"}
              placeholder={"Subject"}
              value={userMessage.subject}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex items-center justify-around gap-5 flex-col md:flex-row my-5">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full p-3 text-base font-Poppins text-gray-300 font-medium outline-none border-[0.5px] border-gray-500 bg-transparent rounded focus:border-gray-50"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-full">
            <Buttons 
            Icon={IoSend} 
            title={"Send"} 
            onClick={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
