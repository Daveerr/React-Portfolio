import React from "react";
import Logo from "../assets/DR.png";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#182825]">
      <div>
        <img src={Logo} alt="" style={{ width: "60px" }} />
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
