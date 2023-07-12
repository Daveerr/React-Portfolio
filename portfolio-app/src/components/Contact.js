import React from "react";

const contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0c131d] text-white flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/46f5a8a5-6d01-4c72-8100-5b0cb2016fac"
        className="max-w-[600px] flex-col flex w-full"
      >
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#bdb2ff] text-[#ffffffd6]">
            Contact Me
          </p>
          <p className="text-[#ffffffd6] py-4 text-xl">
            Fill out form below or email me at - Daviderrr10@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ffffffd6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
          required // Needs to have input
        ></input>
        <input
          className="text-black my-4 p-2 bg-[#ffffffd6]"
          type="email"
          placeholder="Email"
          name="email"
          required={true} // Needs to have input
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" //  email validation
        ></input>
        <textarea
          className="text-black bg-[#ffffffd6] p-2"
          name="message"
          rows="15"
          placeholder="Message"
          required // Needs to have input
        ></textarea>
        <button className="text-white hover:text-black px-4 py-3   border-2 hover:bg-[#bdb2ff] hover:border-[#bdb2ff] my-5 mx-auto flex ">
          Lets work
        </button>
      </form>
    </div>
  );
};

export default contact;
