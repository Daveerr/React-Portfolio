import React from "react";
import dave from "../assets/davepic.jpeg";
const about = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-[#0c131d] text-[#ffffffd6] px-4 pb-10"
    >
      <div className="max-w-[1000px] justify-center mx-auto px-8 flex flex-col h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 text-[#ffffffd6] border-[#bdb2ff]">
            About
          </p>

          <p className="text-[#bdb2ff] py-8 text-3xl ">
            Welcome to my portfolio, I'm David Rodriguez, a web developer based
            in Charlotte, NC. I love web development because it lets me combine
            my creativity, problem-solving skills, and passion for technology to
            build unique and exciting applications.
          </p>
          <p className="text-[#bdb2ff] py-8 text-3xl ">
            {" "}
            When I'm not glued to my computer, you'll likely find me at the gym
            or taking my dog for a walk.
          </p>
          <div className="text-[#bdb2ff] ">
            <img
              className="shadow-xl shadow-slate-700  border-4 border-gray-800"
              src={dave}
              alt=""
              style={{ width: "450px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
