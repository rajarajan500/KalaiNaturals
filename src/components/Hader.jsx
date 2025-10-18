import React from "react";

function Hader() {
  return (
    <div className="h-[200px] shadow-md sm:h-[300px] opacity-50 pt-8 flex flex-col absalute border">
      <i className="fa-solid fa-leaf text-[100px] delay-1000 absolute animate-fadein  z-[-10] opacity-0 text-[#5c715e] sm:opacity-20 xl:left-[1200px] sm:left-[260px] sm:top-[50px] sm:text-[200px]  left-[110px] top-[40px]  "></i>
      <h1 className="text-center text-[#a2c11c] font-bold mt-2 text-4xl sm:text-7xl">
        KALAI ORGANICS
      </h1>
      <h1 className="font-bold text-[#a2c11c] text-center  sm:text-2xl">AND</h1>
      <h1 className="font-bold text-[#a2c11c] text-center text-4xl sm:text-7xl">
        NATURALS
      </h1>
    </div>
  );
}

export default Hader;
