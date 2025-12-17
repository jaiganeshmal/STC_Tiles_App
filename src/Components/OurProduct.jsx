import React from "react";
import { assets } from "../assets/global";

const OurProduct = () => {
  return (
    <section className="w-full bg-white py-14">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#392917] leading-snug mb-6">
              Our Flooring Hardwood, <br />
              Material Stone, Laminate, Carpet
            </h2>

            {/* PARAGRAPH */}
            <p className="text-gray-700 leading-relaxed max-w-xl mb-10">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration
            </p>

            {/* BUTTON */}
            <button
              className="px-10 py-4 cursor-pointer bg-[#F37E21] text-white font-semibold rounded-full
                         transition duration-300 hover:bg-[#392917]"
            >
              OUR PRODUCT
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">

            {/* MAIN IMAGE */}
            <img
              src={assets.productMain}
              alt="our product"
              className="w-full h-[450px] sm:h-[500px] object-cover rounded-lg"
              loading="lazy"
            />

            {/* SMALL IMAGE */}
            <img
              src={assets.productSmall}
              alt="product small"
              className="absolute right-6 -bottom-10 w-70 h-56 object-cover
                         border-8 border-white shadow-xl rounded-md"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurProduct;
