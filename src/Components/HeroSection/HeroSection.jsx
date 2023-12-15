import React from "react";
import Hero_image from "../Assets/Hero_image.png";
function HeroSection() {
  return (
    <div className="flex flex-col bg-black h-screen  w-full justify-evenly pt-4 items-center md:flex-row ">
      <div className=" text-white  text-5xl flex flex-col  items-center font-monstreaat font-bold">
        <h1>Krishna</h1>
        <h1>Photography</h1>
      </div>
      <div className="max-w-xs md:max-w-lg ">
        <img src={Hero_image} alt="" />
      </div>
      <div>
        <p className="text-white   max-w-sm p-2 text-center text-xl font-monstreaat">
          Hi! I am Krishna I am Photographer. I'll take the stunning images at
          your Wedding, Birthday functions etc.. I capture the moments comes
          through Lens.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
