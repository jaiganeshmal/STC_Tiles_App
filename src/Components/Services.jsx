import React from "react";
import { assets } from "../assets/global";

const Services = () => {
  const services = [
    {
      icon: assets.service1,
      title: "Carpet Removal",
      desc:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen tum nibh, ut fermentum",
    },
    {
      icon: assets.service2,
      title: "Kitchen Strip Outs",
      desc:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen tum nibh, ut fermentum",
    },
    {
      icon: assets.service3,
      title: "Timber Floor Removal",
      desc:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen tum nibh, ut fermentum",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#323232] mb-6">
            Services We Provide
          </h2>

          <p className="text-[#323232] leading-relaxed text-base">
            Our design services starts and ends with a best in class experience
            strategy that builds brands.
          </p>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-10 text-center rounded-xl
                         border border-gray-100
                         transition-all duration-300
                         hover:border-[#392917]
                         hover:-translate-y-2
                         hover:shadow-2xl"
            >
              {/* ICON */}
              <div className="flex justify-center mb-8">
                <div className="w-28 h-28 rounded-full bg-[#FEF7F1] flex items-center justify-center
                                group-hover:scale-110 transition">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#392917] mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#392917] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;
