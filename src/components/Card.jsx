import React from "react";

function Card({text,title,img}) {
  return (
    <div className="bg-[#01352c] flex opacity-40 h-[300px] w-[300px] rounded p-3 flex-col items-center">
      <div className=" h-[150px] rounded-full  bg-cover bg-center w-[270px]" style={{ backgroundImage: `url(${img})` }}></div>
      <h1 className="text-center font-bold">{title}</h1>
      <h1 className="text-[12px] text-white text-center">{text}</h1>
    </div>
  );
}

export default Card;
