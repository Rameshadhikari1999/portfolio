/* Footer.jsx */
import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-divider", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
      scaleX: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
    });

    gsap.from(".footer-item", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <footer ref={container} className="w-full relative py-12 px-6 overflow-hidden">
      {/* Divider */}
      <div className="footer-divider max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12 opacity-30 origin-center" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Brand/Logo Section */}
        <div className="footer-item flex flex-col items-center md:items-start space-y-4">
          <div className="text-2xl font-bold italic tracking-tighter text-white">
            PORT<span className="text-accent">FOLIO</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
            Crafting digital experiences with precision and passion. Building the future of the web, one pixel at a time.
          </p>
        </div>

        {/* Social and Navigation Section */}
        <div className="footer-item flex flex-col items-center gap-6">
          {/* <div className="flex items-center gap-6">
            {[
              { icon: <FaGithub />, link: "#", label: "Github" },
              { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
              { icon: <FaTwitter />, link: "#", label: "Twitter" },
              { icon: <FaEnvelope />, link: "mailto:hello@example.com", label: "Email" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/5 shadow-lg shadow-black/20"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div> */}
          <nav className="flex gap-8 text-sm text-gray-400 font-medium">
            {["Home", "Services", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-white cursor-pointer transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-item max-w-7xl mx-auto mt-12 text-center text-gray-500 text-xs border-t border-white/5 pt-8">
        © {currentYear} Portfolio. All rights reserved. Designed with ❤️ for excellence.
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
