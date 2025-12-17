import React from "react";
import { assets } from "../assets/global";

const ContactSection = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 ">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={assets.conatct_img}
            alt="Interior Room"
            className="w-full h-full object-cover rounded-xl shadow-xl"
            loading="lazy"
          />

          {/* EXPERIENCE BADGE */}
          <div className="absolute -bottom-8 -left-8 bg-[#F37E21] text-white
                          w-40 h-40 rounded-full shadow-2xl
                          flex flex-col items-center justify-center">
            <h3 className="text-4xl font-extrabold leading-none">25</h3>
            <p className="text-sm mt-2 text-center leading-tight">
              Years of <br /> Experience
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-3">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#392917] mb-6 leading-tight">
            Let’s Create Something <br /> Great Together!
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Have a project in mind? Let’s discuss how we can help bring your
            flooring vision to life with quality and care.
          </p>

          {/* FORM */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-2xl border border-gray-300
                           focus:outline-none focus:border-[#F37E21]
                           focus:ring-2 focus:ring-[#F37E21]/20 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-2xl border border-gray-300
                           focus:outline-none focus:border-[#F37E21]
                           focus:ring-2 focus:ring-[#F37E21]/20 transition"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Message Details"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300
                         focus:outline-none focus:border-[#F37E21]
                         focus:ring-2 focus:ring-[#F37E21]/20 transition resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center
                         px-10 py-4 cursor-pointer rounded-full
                         bg-[#392917] text-white text-sm font-semibold uppercase
                         hover:bg-[#F37E21] transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
