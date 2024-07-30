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

  useGSAP(() => {
    gsap.from("#header", {
      opacity: 1,
      y: -100,
      duration: 1,
      ease: "power3.out",
    })
  })
  const handleOpenNav = () => {
    setOpenNav(true);
  };
  const handleCloseNav = () => {
    setOpenNav(false);
}

  const handleHireMe = () => {
    window.scrollTo({
      top: document.getElementById("contact").offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header id="header" className="w-full  bg-primary opacity-1">
      <nav className="w-full  flex justify-between items-center px-3">
        <div className="w-1/4">
        <h1 className="w-fit inline-block text-3xl font-bold text-white pl-5 p-3 hover:text-green-500 rounded-md  shadow-sm cursor-pointer shadow-secondary">
          Port<span className="text-green-500 ">Folio</span>
        </h1>
        </div>

        <NavForMobile openNav={openNav} handleCloseNav={handleCloseNav}  />
        
        {showNav && 
        <ul className=" w-1/2 flex items-center justify-between flex-shrink flex-grow gap-2 text-white">
          {menu.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul> 
        }
        {
          showNav ?
          <div className="w-1/4 flex justify-end">
            <Buttons title={"Hire Me"} Icon={MdOutlineNavigateNext} onClick={handleHireMe}  />
          </div>
          :
        <IoMdMenu
          className="text-4xl text-white cursor-pointer lg:hidden"
          onClick={handleOpenNav}
        />}
        
      </nav>
    </header>
  );
};

export default Header;
