import React from "react";
import Logo from "../assets/DR.png";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#182825] text-white">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>
      {/* nav bar menu */}
      <div>
        <ul className="flex">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
          <li>Skills</li>
        </ul>
        {/* mobile nav */}
        <ul className="hidden">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
          <li>Skills</li>
        </ul>
      </div>
    </div>
  );
};
