import React from "react";

function Who() {
  return (
    <div className="pt-3 flex flex-col items-center justify-center text-[#004445]">
      <h1 data-aos="zoom-in" data-aos-delay="900" className="font-semibold sm:text-xl xl:text-3xl ">OUR BRAND :</h1>
      <div className="m-3 sm:m-[0px] border border-[#5c715e] rounded">
        <h1 data-aos="fade-in" data-aos-delay="1000" className=" sm:text-center px-3 animate-in fade-in duration-1000 delay-1000 font-light">
          Welcome to Kalai Naturals, where purity meets purpose. We’re dedicated
          to bringing you high-quality, organic products at fair prices—because
          we believe everyone deserves access to nature’s best. From our 100%
          natural sanitary cotton napkins (available in all sizes) to our pure
          homemade honey with zero chemicals, every product is crafted with care
          and integrity. We also offer ABC Boost in a variety of delicious
          flavors, made to energize and nourish without compromise. Need
          doorstep delivery? Just ask—we’re happy to arrange courier service to
          bring your favorite Kalai Naturals products straight to you.
        </h1>{" "}
        <div  className="flex flex-col sm:font-semibold mt-4  pl-2">
          <h1 data-aos="zoom-in-up" data-aos-delay="1000">Choose Kalai Naturals for:</h1>
          <h1 data-aos="zoom-in-up" data-aos-delay="1500">&#127793; Authentic, chemical-free ingredients</h1>
          <h1 data-aos="zoom-in-up" data-aos-delay="2000">&#128029; Pure homemade honey</h1>
          <h1 data-aos="zoom-in-up" data-aos-delay="2500">&#127800; Natural sanitary napkins in all sizes</h1>
          <h1 data-aos="zoom-in-up" data-aos-delay="3000">&#127865; ABC Boost in multiple flavors</h1>
          <h1 data-aos="zoom-in-up" data-aos-delay="3000">&#128667; Friendly and flexible delivery options</h1>
        </div>
      </div>
    </div>
  );
}

export default Who;
