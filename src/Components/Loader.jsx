import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">

        {/* LOGO / BRAND */}
        <div className="text-3xl font-extrabold tracking-widest text-[#392917]">
          <span className="text-[#F37E21]">S</span>TC
        </div>

        {/* ANIMATED RING */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-[#F37E21] border-r-[#F37E21] animate-spin"></div>
        </div>

        {/* LOADING TEXT */}
        <p className="text-sm uppercase tracking-[0.3em] text-[#392917]">
          Loading Experience
        </p>
      </div>
    </div>
  );
};

export default Loader;
