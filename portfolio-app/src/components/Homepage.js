import React from "react";

export const Homepage = () => {
  return (
    <div className="w-full h-screen flex[35%] bg-[#1b3a4b]">
      <div className="max-w-[1000] justify-center mx-auto px-8 flex flex-col h-full">
        <p className="text-[#9d4edd]">Hi, my name is</p>
        <h1 className="text-[#e5e5e5]"> David Rodriguez</h1>
        <h1> Im a Full Stack Developer.</h1>
        <p>
          Im a full-stack web developer who loves building websites from the
          ground up.{" "}
        </p>
      </div>
    </div>
  );
};
export default Homepage;
