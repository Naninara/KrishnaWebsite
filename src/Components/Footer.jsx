import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
function Footer() {
  const socialLink = [
    { icon: <FaWhatsapp size={30} />, link: "https://wa.me/+918074187798" },

    {
      icon: <FaInstagram size={30} />,
      link: "https://instagram.com/krishna_photography_08?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      icon: <FaMapLocationDot size={30} />,
      link: "https://maps.app.goo.gl/EzkgyT2fhmQ7rV5A6",
    },
  ];
  return (
    <footer className="flex p-[20px]  flex-col gap-[10px]  items-center bg-black">
      <div className=" md:flex md:flex-row md:items-center md:justify-around justify-center flex flex-col w-full">
        <div className="">
          <h1 className="text-[24px] text-white">
            <b>Krishna Photography</b>
          </h1>
          <p className=" text-[12px] w-[180px] text-white">
            MMGM+P6P, Arjunudupalem, Andhra Pradesh 534217
          </p>
        </div>
        <div className="flex md:flex-col gap-[20px] md:gap-0 mt-[20px] md:mt-0 md:mr-[45px]">
          <p className="text-white text-center mb-3">Follow Us</p>
          <div className="flex gap-[20px]">
            {socialLink.map((ele) => {
              return (
                <a
                  href={ele.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:-translate-y-2 duration-500"
                >
                  {ele.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block">
          <p className="mb-[5px] text-center text-white">Quick Links</p>
          <ul className="text-center text-white">
            <li>Home</li>
            <li>Gallery</li>
            <li>Conatct</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
