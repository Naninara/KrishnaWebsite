import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
function Contact() {
  const socialLink = [
    { icon: <FaWhatsapp size={40} />, link: "https://wa.me/+918074187798" },
    {
      icon: <FaInstagram size={40} />,
      link: "https://instagram.com/krishna_photography_08?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      icon: <IoMail size={40} />,
      link: "mailto:Krishnaphotography949@gmail.com",
    },
    {
      icon: <FaMapLocationDot size={40} />,
      link: "https://maps.app.goo.gl/EzkgyT2fhmQ7rV5A6",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dg8vkoc",
        "template_yyzmbo4",
        e.target,
        "h6ibIsR2HZmayB2Px"
      )
      .then((response) => {
        alert("Email sent sucessfully!! we will get in touch");
      })
      .catch((err) => {
        alert("OOPS Something Went Wrong");
      });
  };
  return (
    <motion.div
      className="bg-black"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
        name="contact"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white font-DM sm:text-xl">
          Have An Event Or Something Don't Hesistate To Contact Us
        </p>
        <div className="text-white flex items-center justify-center gap-5 pb-10">
          {socialLink.map((ele) => {
            return (
              <a
                href={ele.link}
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-2 duration-500"
              >
                {ele.icon}
              </a>
            );
          })}
        </div>
        <form
          className="space-y-8"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Please Enter Your Name"
              required
            />
          </div>
          <div>
            <label
              for="contact"
              className="block mb-2 text-sm font-medium text-white"
            >
              Contact Details
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="yourname@gmail.com  ,  phonenumber"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let Us Know What Is Your Requirement"
              name="subject"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write More Information"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
