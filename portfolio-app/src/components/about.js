import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-[#0c131d] text-[#ffffffd6]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex justify-center w-full h-screen ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 text-[#ffffffd6] border-[#bdb2ff]">
            About
          </p>
          <p className="text-[#ffffffd6] py-4 text-3xl">
            Welcome to my portfolio etc..
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
