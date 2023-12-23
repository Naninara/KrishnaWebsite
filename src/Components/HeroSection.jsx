import React from "react";

function HeroSection() {
  return (
    <div
      className="flex flex-col bg-black h-screen
      w-full justify-evenly pt-4 items-center md:flex-row md:pb-40 "
    >
      <div className=" text-white  text-5xl flex flex-col  items-center font-DM font-normal w-1/3 gap-2">
        <h1>Krishna</h1>
        <h1>Photography</h1>
      </div>
      <div className="max-w-xs md:max-w-lg ">
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/v1703352430/Krishna%20Photography/zskqdpa6dspwbdpocgb1.png"
          alt="hero imgae"
        />
      </div>
      <div className="w-auto md:w-1/3">
        <p className="text-white   max-w-sm p-2 text-center text-xl font-DM">
          Hi! I am Krishna I am Photographer. I'll take the stunning images at
          your Wedding, Birthday functions etc.. I capture the moments comes
          through Lens.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
