import React from "react";
import { Link } from "react-scroll";

export const Homepage = () => {
  return (
    <div name="home" className="w-full h-screen flex[35%] bg-[#0c131d]">
      {/*container bio*/}
      <div className="max-w-[1000px] justify-center mx-auto px-8 flex flex-col h-full">
        <p className="text-[#f0f7ee] text-xl">Hi, my name is</p>
        <h1 className="text-[#bdb2ff] text-4xl sm:text-7xl font-bold ">
          {" "}
          David Rodriguez
        </h1>
        <h2 className="text-[#d4dfd1] text-4xl sm:text-7xl font-bold">
          {" "}
          Im a Full Stack
        </h2>
        <h2 className="text-[#d4dfd1] text-4xl sm:text-7xl font-bold">
          {" "}
          Developer.
        </h2>
        <p className="text-[#d4dfd1] py-4 text-3xl">
          Im a full-stack web developer who loves building websites from the
          ground up.{" "}
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="border-2 text-white px-6 py-3 my-2 hover:bg-[#bdb2ff] hover:border-[#bdb2ff] hover:text-black">
              My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
