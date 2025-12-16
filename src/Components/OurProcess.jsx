import React from "react";
import { assets } from "../assets/global";

const OurProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Color Board",
      icon: assets.process1,
      bg: "bg-[#FBF5E8]",
    },
    {
      step: "02",
      title: "Dimension",
      icon: assets.process2,
      bg: "bg-[#F9EEEE]",
    },
    {
      step: "03",
      title: "Installation",
      icon: assets.process3,
      bg: "bg-[#EEF6FA]",
    },
    {
      step: "04",
      title: "Finishing",
      icon: assets.process4,
      bg: "bg-[#F8F3EA]",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Our Process
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A3723]">
            Our Concrete Finishing Services
          </h2>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-10">

          {steps.map((item, index) => (
            <div key={index} className="text-center relative">

              {/* STEP NUMBER */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-black text-white
                                flex items-center justify-center font-bold">
                  {item.step}
                </div>
              </div>

              {/* ICON CIRCLE */}
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center
                            ${item.bg} mb-8`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#4A3723]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurProcess;
