import React from "react";

const ContactBanner = () => {
  return (
    <>
      {/* OUTER WRAPPER */}
      <div className=" bg-white p-6">

        {/* INNER BORDER BOX */}
        <div className="w-[80%] mx-auto bg-[#FFF8EE] px-14 py-4 -mt-28 z-30 rounded-md relative ">

          {/* MAIN FLEX */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-6 max-w-xl">

              {/* ROUND CONTACT BADGE */}
              <div className="relative">
                <div className="w-36 h-36 rounded-full bg-[#F37E21] flex items-center justify-center text-white font-bold text-xl text-center">
                  CONTACT <br /> US
                </div>
                {/* light ring */}
                <div className="absolute inset-0 rounded-full border-[10px] border-white/60"></div>
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-4xl font-extrabold text-[#2B1E12] mb-2">
                  How Can We <br /> Help You?
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Find out how you can get a landscape <br />
                  that supports your goals
                </p>
              </div>
            </div>

            {/* CENTER DIVIDER */}
            <div className="hidden lg:block w-px h-44 bg-gray-300"></div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-2 max-w-lg">

              <h3 className="text-4xl font-extrabold text-[#2B1E12]">
                Let’s Start Your <br /> Project
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                Make an appointment &amp; Start <br />
                your project today.
              </p>

              <button className="mt-3 w-fit px-12 py-3 bg-[#392917] text-white font-semibold rounded-full transition duration-300 hover:bg-[#F37E21]">
                PROJECT
              </button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default ContactBanner;
