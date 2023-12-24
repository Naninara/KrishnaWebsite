import React from "react";

function Loader() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center flex-col">
      <div className=" h-36 w-36 bg-slate-300 rounded-full animate-ping gap-20"></div>
    </div>
  );
}

export default Loader;
