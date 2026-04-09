import React, { useState, useRef } from "react";
import { contactInfo } from "../../assets/contants";
import NextPrevBtn from "../../utility/NextPrevBtn";
import { FaFacebook, FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa6";
import InputField from "../../utility/InputField";
import Buttons from "../../utility/Buttons";
import { IoSend } from "react-icons/io5";
import Alert from "../../utility/Alert";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactUs = () => {
  const container = useRef();
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setUserMessage({ ...userMessage, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setAlert(false);
  };

  useGSAP(() => {
    gsap.utils.toArray(".contact-animate").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
      });
    });
  }, { scope: container });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (
      userMessage.name === "" ||
      userMessage.email === "" ||
      userMessage.phone === "" ||
      userMessage.message === ""
    ) {
      setMsg({ type: "error", message: "Please fill all the fields" });
      setAlert(true);
      return;
    }
    setMsg({ type: "success", message: "Message sent successfully!" });
    setAlert(true);
    setUserMessage({ name: "", email: "", phone: "", message: "", subject: "" });
  };

  const handleSocialLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="contact" ref={container} className="w-full min-h-screen py-24 px-6 relative overflow-hidden">
      <Alert alert={alert} message={msg} handleClose={handleClose} />

      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="contact-animate space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact Me
            </p>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Let's{" "}
            <span className="text-accent underline decoration-accent/20 underline-offset-8">
              Connect
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Location Card */}
        <div className="contact-animate">
          <a
            href="https://maps.google.com/?q=Kathmandu,Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="block group glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:border-accent/30 transition-all duration-500"
          >
            <div className="relative h-[220px] bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center overflow-hidden">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Decorative circles */}
              <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/20" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-accent/10" />
              <div className="absolute w-[100px] h-[100px] rounded-full border border-accent/20" />
              {/* Pulse rings */}
              <div className="absolute w-8 h-8 rounded-full bg-accent/30 animate-ping" />
              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="p-4 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <FaMapPin size={28} className="text-accent" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl">Kathmandu, Nepal</p>
                  <p className="text-accent text-sm mt-1 group-hover:underline">View on Google Maps →</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div className="contact-animate space-y-6">
              <h2 className="text-3xl font-bold text-white">Have a Project in Mind?</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                being part of your visions. Let's build something extraordinary
                together.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((Info, index) => (
                <div
                  key={index}
                  className="contact-animate glass-card p-6 rounded-2xl flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Info.icon size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {Info.name}
                    </p>
                    <p className="text-white font-medium truncate">{Info.link}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-animate space-y-6">
              <h3 className="text-xl font-bold text-white">Follow Me</h3>
              <div className="flex gap-4">
                <NextPrevBtn
                  Icon={FaFacebook}
                  onclick={() => handleSocialLink("https://www.facebook.com/")}
                />
                <NextPrevBtn
                  Icon={FaGithub}
                  onclick={() =>
                    handleSocialLink("https://github.com/Rameshadhikari1999")
                  }
                />
                <NextPrevBtn
                  Icon={FaLinkedin}
                  onclick={() =>
                    handleSocialLink(
                      "https://www.linkedin.com/in/ramesh-prasad-adhikari"
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-animate glass-card p-8 md:p-12 rounded-3xl relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
            <form onSubmit={handleSendMessage} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={userMessage.name}
                  onChange={handleChange}
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={userMessage.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={userMessage.phone}
                  onChange={handleChange}
                />
                <InputField
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={userMessage.subject}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="How can I help you?"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:border-accent/50 focus:bg-white/10 focus:ring-4 focus:ring-accent/10 resize-none"
                value={userMessage.message}
                onChange={handleChange}
              />
              <div className="pt-2">
                <Buttons Icon={IoSend} title="Send Message" onClick={handleSendMessage} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
