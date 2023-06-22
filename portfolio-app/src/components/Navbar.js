import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0c131d] text-[#ffffffd6]">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>
      {/* nav bar menu */}
      <div>
        <ul className="hidden md:flex">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
          <li>Skills</li>
        </ul>
      </div>

      {/* nav bar functionality */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile nav */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0c131d] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text text-4xl">About Me</li>
        <li className="py-6 text text-4xl">Portfolio</li>
        <li className="py-6 text text-4xl">Contact Me</li>
        <li className="py-6 text text-4xl">Skills</li>
      </ul>

      {/* icons for contact */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a9bdc]">
            <a
              className="flex justify-between items-center w-full text-grey"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#545454]">
            <a
              className="flex justify-between items-center w-full text-grey"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a3b18a]">
            <a
              className="flex justify-between items-center w-full text-grey"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
