import React from "react";
import Card from "./Card";
import img1 from "../assets/nap.jpg";
import img2 from "../assets/abc1.jpg";
import img3 from "../assets/honey.png"

function Products() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-center mt-3 sm:flex-wrap ">
      <div data-aos="slide-right" data-aos-duration="1000">
        <Card img={img1} title={"SANITARY COTTON NAPKINS"} text={"Kalai Naturals' F2 Sanitary Cotton Napkins are ultra-soft, 100% natural pads designed for comfort, hygiene, and skin protection. With anti-leak, breathable, and rash-free features, they offer safe, chemical-free care in XL to XXXL sizes."}/>
      </div>
      <div data-aos="slide-left" data-aos-duration="1000">
        <Card img={img2} title={"ABC BOOST"} text={"ABC Boost by Kalai Naturals is a natural health drink made from Apple, Beetroot, and Carrot—rich in fiber, iron, and vitamin A. This chemical-free blend supports digestion, immunity, and daily energy, reflecting Kalai Naturals’ commitment to clean, homemade wellness."} />
      </div>

      <div data-aos="slide-right" data-aos-duration="1000">
        <Card title={"HONEY"} img={img3}  text={"Kalai Naturals' homemade honey is a pure, chemical-free sweetener crafted with care to retain its natural richness and health benefits. Sourced without additives or preservatives, it offers a smooth, golden taste while supporting digestion, boosting immunity, and providing a natural energy lift. Whether used in tea, cooking, or daily wellness routines, this honey reflects Kalai Naturals’ commitment to authentic, wholesome living."} />
      </div>
    </div>
  );
}

export default Products;
