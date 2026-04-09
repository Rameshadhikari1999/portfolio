import React from "react";
import { IoMdMenu } from "react-icons/io";
import NavForMobile from "./NavForMobile";
import { menu } from "../../../assets/contants";
import NavItem from "./NavItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Buttons from "../../../utility/Buttons";
import { MdOutlineNavigateNext } from "react-icons/md";


const Header = () => {
const [openNav, setOpenNav] = React.useState(false);
const [showNav, setShowNav] = React.useState(window.innerWidth >= 1020);
const [disWidth, setDisWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setDisWidth(currentWidth);
      if (currentWidth < 1020) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from("#header", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    })
  })

  const handleOpenNav = () => setOpenNav(true);
  const handleCloseNav = () => setOpenNav(false);

  const handleHireMe = () => {
    const target = document.getElementById("contact");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      id="header" 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'}`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="flex-shrink-0">
          <h1 
            className="text-2xl md:text-3xl font-bold text-white cursor-pointer group flex items-center gap-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-accent underline-offset-4 decoration-2">Port</span>
            <span className="group-hover:text-accent transition-colors">Folio</span>
          </h1>
        </div>

        {showNav && (
          <ul className="flex items-center gap-4 text-white">
            {menu.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        )}

        <div className="flex items-center gap-4">
          {/* {showNav && (
            <button 
              onClick={handleHireMe}
              className="btn-primary transform hover:scale-105 active:scale-95"
            >
              Hire Me
              <MdOutlineNavigateNext className="text-xl" />
            </button>
          )} */}

          {!showNav && (
            <IoMdMenu
              className="text-4xl text-white cursor-pointer hover:text-accent transition-colors"
              onClick={handleOpenNav}
            />
          )}
        </div>
        
        <NavForMobile openNav={openNav} handleCloseNav={handleCloseNav} />
      </nav>
    </header>
  );
};

export default Header;
