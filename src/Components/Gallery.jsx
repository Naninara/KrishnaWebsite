import { motion } from "framer-motion";
import React from "react";
function Gallery() {
  const data = [
    {
      name: "Wedding Shoots",
      subtext: "Where Love Meets Lens: Documenting Your Unforgettable Journey",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/hdvwrgzolzomaxibszte.jpg",
    },
    {
      name: "Half Saree Functions",
      subtext:
        "Cultural Elegance in Motion: Capturing the Beauty of Half Saree Ceremonies",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/pi04mi6vt6cqs9eyw050.jpg",
    },
    {
      name: "Couple Shoots",
      subtext:
        " Little Smiles, Big Stories: Creating Timeless Memories of Youth",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/vrdmyanvjuic15vqvctn.jpg",
    },
    {
      name: "Baby Shoots",
      subtext: "Where Love Meets Lens: Documenting Your Unforgettable Journey",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/iltnjxfu5qe7yhpo8lay.jpg",
    },
    {
      name: "Outdoor Shoots",
      subtext: "Every Click, Your Story: Tailored Photoshoots Just for You",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/lvaqtztwdlsciz8meajy.jpg",
    },
  ];
  return (
    <div className="overflow-hidden">
      {data.map((ele, index) => {
        return (
          <div
            className="h-auto w-full  flex  bg-black flex-col md:flex-row font-DM"
            key={index}
          >
            <motion.div
              className="flex justify-center items-center p-10  w-full md:w-1/2 "
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <img src={ele.img} alt="wedding" loading="lazy" />
            </motion.div>
            <motion.div
              className="flex justify-center items-center text-white flex-col gap-5 w-full md:w-1/2 overflow-auto"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className=" text-xl font-normal md:text-5xl">{ele.name}</h1>
              <h2 className=" text-center">{ele.subtext}</h2>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
