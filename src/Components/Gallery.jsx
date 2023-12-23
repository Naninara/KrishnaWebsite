import React from "react";

function Gallery() {
  const data = [
    {
      name: "Wedding Photoshoots",
      subtext: "Where Love Meets Lens: Documenting Your Unforgettable Journey",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/wk3txeeeatugbahfvr3o.jpg",
    },
    {
      name: "Child Photoshoots",
      subtext:
        " Little Smiles, Big Stories: Creating Timeless Memories of Youth",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/iwwvdpykg5avkbomeui8.jpg",
    },
    {
      name: "Marraige Shoots",
      subtext: "Where Love Meets Lens: Documenting Your Unforgettable Journey",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/pi04mi6vt6cqs9eyw050.jpg",
    },
    {
      name: "Photo Shoots",
      subtext: "Every Click, Your Story: Tailored Photoshoots Just for You",
      img: "https://res.cloudinary.com/dggryzgok/image/upload/v1703351546/Krishna%20Photography/lvaqtztwdlsciz8meajy.jpg",
    },
  ];
  return (
    <div>
      {data.map((ele, index) => {
        return (
          <div
            className="h-auto w-full  flex  bg-black flex-col md:flex-row font-DM"
            key={index}
          >
            <div className="flex justify-center items-center p-10  w-full md:w-1/2">
              <img src={ele.img} alt="wedding" />
            </div>
            <div className="flex justify-center items-center text-white flex-col gap-5 w-full md:w-1/2">
              <h1 className=" text-xl font-normal md:text-5xl">{ele.name}</h1>
              <h2 className=" text-center">{ele.subtext}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
