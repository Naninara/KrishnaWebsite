import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdPhone } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);
  const array = [
    { id: 1, link: "home" },
    { id: 2, link: "gallery" },
    { id: 3, link: "contact" },
  ];
  return (
    <div className="flex  justify-between items-center h-20 w-full sticky top-0 bg-black text-white px-5 z-10 font-DM">
      <div className="font-signature text-4xl m-2 z-20">
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/v1703352695/Krishna%20Photography/zjru4aqjytie4yhyvz40.png"
          alt="logo"
          width="75"
        />
      </div>
      <div className="flex gap-5 items-center justify-center">
        <ul className="hidden md:flex gap-20">
          {array.map((ele) => {
            return (
              <li
                key={ele.id}
                className="capitalize cursor-pointer hover:scale-125 duration-200"
              >
                <Link to={ele.link} smooth={true} delay={0.5} offset={-500}>
                  {" "}
                  {ele.link}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className=" flex items-center gap-2 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          onClick={() => {
            window.location.href = "tel:+918074187798";
          }}
        >
          Call Me <MdPhone />
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2  bg-green-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Hold On!
          </span>
        </button>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer z-10 md:hidden sm:block"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-black gap-10 z">
          {array.map((ele) => {
            return (
              <li
                key={ele.id}
                className="capitalize hover:scale-125 duration-200 z-20"
              >
                <Link
                  to={ele.link}
                  smooth
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  {" "}
                  {ele.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
