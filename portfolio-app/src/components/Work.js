import React from "react";
import workday from "../assets/work-dayscreen.png";
import brick from "../assets/brick-that.png";
import calorie from "../assets/calorie-tracker.png";
import converse from "../assets/converse.png";

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${workday})` }}
            className="shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold tracking-wider text-black">
                Workday Scheduler
              </p>
              <a href="/">
                <button className="bg-[#bdb2ff] text-center rounded-lg px-4 py-3 text-black">
                  Demo
                </button>
              </a>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${brick})` }}
            className="shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold tracking-wider text-black">
                Brick That
              </p>
              <a href="/">
                <button className="bg-[#bdb2ff] text-center rounded-lg px-4 py-3 text-black">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${calorie})` }}
            className="shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold tracking-wider text-black">
                Calorie Tracker
              </p>
              <a href="/">
                <button className="bg-[#bdb2ff] text-center rounded-lg px-4 py-3 text-black">
                  Demo
                </button>
              </a>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${converse})` }}
            className="shadow-sm shadow-gray-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <p className="text-2xl font-bold tracking-wider text-black">
                HTML/CSS
              </p>
              <a href="/">
                <button className="bg-[#bdb2ff] text-center rounded-lg px-4 py-3 text-black">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
