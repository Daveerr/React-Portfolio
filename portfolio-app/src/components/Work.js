import React from "react";
import workday from "../assets/work-dayscreen.png";
import readme from "../assets/readme-gen.png";

export const work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-[#0c131d] text-[#ffffffd6]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ffffffd6] border-[#bdb2ff]">
            Work
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(${workday})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div
            style={{ backgroundImage: `url(${workday})` }}
            className="shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <button className="text-[#bdb2ff] bo">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
