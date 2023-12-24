import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Corousal() {
  const images = [
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/jdokl3hfqn8ry8x1voau.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/xg8ctqc5xwkjy1amn4lz.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/wk3txeeeatugbahfvr3o.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/pi04mi6vt6cqs9eyw050.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/bg6qrs35wgdzcokur9zl.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/iwwvdpykg5avkbomeui8.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/lvaqtztwdlsciz8meajy.jpg",
    "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/mem9vsoqjk8askshvgzj.jpg",
  ];
  const [slide, setSlide] = useState(0);

  const next = () => {
    slide === images.length - 1 ? setSlide(0) : setSlide(slide + 1);
  };
  const prev = () => {
    slide === 0 ? setSlide(images.length - 1) : setSlide(slide - 1);
  };

  return (
    <>
      <div className="bg-black flex-col  font-Dm text-white  font-DM flex w-full items-center justify-center pb-5  pt-5  md:flex-row ">
        <h1
          name="gallery"
          className="mb-4 text-5xl tracking-tight font-normal text-center text-gray-900 dark:text-white p-2md:border-b-2"
        >
          Gallery And Our Services{" "}
        </h1>
      </div>
      <div className=" group flex overflow-hidden  w-auto h-auto justify-center items-center relative lg:h-screen ">
        <div
          className="flex  transition-transform ease-out duration-1000 cursor-pointer relative"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {images.map((ele, index) => {
            return (
              <>
                <img src={ele} alt="photoshoot" />
              </>
            );
          })}
        </div>
        <div className="absolute flex justify-between w-full pl-6 pr-6">
          <button
            className="cursor-pointer duration-200 p-3  bg-slate-300 hover:-translate-x-1 scale-125 rounded-full "
            onClick={prev}
          >
            {<FaChevronLeft size={20} />}
          </button>
          <button
            className="cursor-pointer duration-200 p-3 bg-slate-300 hover:translate-x-1 scale-125 rounded-full "
            onClick={next}
          >
            {<FaChevronRight size={20} />}
          </button>
        </div>
      </div>
    </>
  );
}

export default Corousal;
