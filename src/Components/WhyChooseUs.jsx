import React from "react";
import { FaTools, FaPaintBrush, FaHome } from "react-icons/fa";
import { assets } from "../assets/global";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-10 pb-24">
      
      {/* CONTAINER (FIXED) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center md:gap-16 gap-24">

          {/* LEFT IMAGE SIDE */}
          <div className="relative w-full lg:w-1/2">

            {/* MAIN IMAGE */}
            <img
              src={assets.aboutMain}
              alt="about"
              className="w-full object-cover rounded-md"
              loading="lazy"
            />

            {/* SMALL OVERLAY IMAGE */}
            <img
              src={assets.aboutSmall}
              alt="overlay"
              className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-64 h-52 object-cover border-8 border-white shadow-lg"
              loading="lazy"
            />
          </div>

          {/* RIGHT CONTENT SIDE */}
          <div className="w-full lg:w-1/2">

            {/* SUB HEADING */}
            <p className="text-sm font-semibold uppercase tracking-wider text-[#9B7F74] mb-3">
              Why Choose Us
            </p>

            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#392917] mb-6 leading-tight">
              About Shakeel Trading Corporation Solutions <br /> Flooring Company
            </h2>

            {/* PARAGRAPH */}
            <p className="text-black leading-relaxed py-6 border-y border-gray-200 mb-8">
              Slando is a full-service landscape company. Our established systems
              allow us to deliver industry-leading landscape solutions to
              commercial and residential clients.
            </p>

            {/* FEATURES */}
            <div className="flex flex-col gap-5">

              <div className="flex items-center gap-4">
                <FaTools className="text-2xl text-[#392917]" />
                <p className="font-bold text-[#392917]">
                  Hardwood Floor Repair
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPaintBrush className="text-2xl text-[#392917]" />
                <p className="font-bold text-[#392917]">
                  Custom projects with unique designs
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaHome className="text-2xl text-[#392917]" />
                <p className="font-bold text-[#392917]">
                  We bring our showroom to your home.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
