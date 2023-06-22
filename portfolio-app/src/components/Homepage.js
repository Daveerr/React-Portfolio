import React from "react";

export const Homepage = () => {
  return (
    <div className="w-full h-screen flex[35%] bg-[#1b2a41]">
      {/*container bio*/}
      <div className="max-w-[1000px] justify-center mx-auto px-8 flex flex-col h-full">
        <p className="text-[#a05af6] text-xl">Hi, my name is</p>
        <h1 className="text-[#c08ab6] text-4xl sm:text-7xl font-bold ">
          {" "}
          David Rodriguez
        </h1>
        <h2 className="text-[#a47d9d] text-4xl sm:text-7xl font-bold">
          {" "}
          Im a Full Stack
        </h2>
        <h2 className="text-[#a47d9d] text-4xl sm:text-7xl font-bold">
          {" "}
          Developer.
        </h2>
        <p className="text-[#a47d9d] py-4 text-3xl">
          Im a full-stack web developer who loves building websites from the
          ground up.{" "}
        </p>
      </div>
    </div>
  );
};
export default Homepage;
