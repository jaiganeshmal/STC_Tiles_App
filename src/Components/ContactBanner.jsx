import React from "react";

const ContactBanner = () => {
  return (
    <div className="bg-white p-4 sm:p-6">

      {/* INNER BOX – DESKTOP SAME */}
      <div className="w-full lg:w-[80%] mx-auto bg-[#FFF8EE] px-6 sm:px-10 lg:px-14 py-6 lg:py-4 -mt-36  md:-mt-28 z-30 rounded-md relative">

        {/* MAIN FLEX */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col sm:flex-row items-center gap-6 max-w-xl text-center sm:text-left">

            {/* ROUND CONTACT BADGE */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-[#F37E21] flex items-center justify-center text-white font-bold text-lg lg:text-xl text-center">
                CONTACT <br /> US
              </div>

              <div className="absolute inset-0 rounded-full border-8 sm:border-[10px] border-white/60"></div>
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B1E12] mb-2">
                How Can We <br /> Help You?
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Find out how you can get a landscape <br className="hidden sm:block" />
                that supports your goals
              </p>
            </div>
          </div>

          {/* CENTER DIVIDER – DESKTOP ONLY */}
          <div className="hidden lg:block w-px h-44 bg-gray-300"></div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center lg:items-start gap-2 max-w-lg text-center lg:text-left">

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B1E12]">
              Let’s Start Your <br /> Project
            </h3>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Make an appointment &amp; Start <br className="hidden sm:block" />
              your project today.
            </p>

            <button className="cursor-pointer mt-3 px-10 lg:px-12 py-3 bg-[#392917] text-white font-semibold rounded-full transition duration-300 hover:bg-[#F37E21]">
              PROJECT
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactBanner;
