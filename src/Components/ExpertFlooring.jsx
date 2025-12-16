import React from "react";
import { assets } from "../assets/global";

const ExpertFlooring = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-10">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#392917] leading-snug">
              Expert Flooring Installers
            </h2>

            {/* PARAGRAPH */}
            <p className="text-gray-700 leading-relaxed max-w-xl">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration
            </p>

            {/* STATS */}
            <div className="flex flex-col sm:flex-row items-center gap-6">

              {/* CARD 1 */}
              <div className="bg-white w-52 h-52 flex flex-col justify-center items-center text-center rounded-full shadow-sm">
                <h3 className="text-3xl font-extrabold text-[#392917]">
                  5k<span className="text-xl align-top">+</span>
                </h3>
                <p className="font-bold text-[#392917] mt-2">
                  Completed Projects
                </p>
                <p className="text-gray-600 text-sm">
                  5k complete work
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white w-52 h-52 flex flex-col justify-center items-center text-center rounded-full shadow-sm">
                <h3 className="text-3xl font-extrabold text-[#392917]">
                  30<span className="text-xl align-top">+</span>
                </h3>
                <p className="font-bold text-[#392917] mt-2">
                  Our Expert
                </p>
                <p className="text-gray-600 text-sm">
                  Expert Flooring worker
                </p>
              </div>

            </div>

            {/* TEXT + BUTTON */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <p className="text-[#392917] font-semibold">
                We can help you stand out your business
              </p>

              <button className="px-8 py-3 bg-white text-[#392917] font-semibold rounded-full border border-[#392917] hover:bg-[#392917] hover:text-white transition duration-300">
                Learn More
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 mx-auto">

            {/* IMAGE */}
            <img
              src={assets.expertImage}
              alt="expert flooring"
              className="w-full h-[480px] sm:h-[500px] md:h-[600px] object-cover rounded-md "
            />

            {/* OVERLAY BOX */}
            <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 border border-white px-4 sm:px-6 py-3 sm:py-4 bg-black/20">
              <h4 className="text-white font-bold text-base sm:text-2xl leading-snug">
                We Are Since 2006 ! <br />
                Over 200 Awards
              </h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertFlooring;
