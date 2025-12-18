import React from "react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen bg-[#FFF8EE] flex items-center justify-center px-4 pt-32">

      {/* NAVBAR VISIBILITY GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-xl">

        <h1 className="text-[120px] md:text-[160px] font-extrabold text-[#F37E21] leading-none">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-[#392917] mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          The page you are looking for might have been removed,
          had its name changed or is temporarily unavailable.
        </p>

        <a
          href="/"
          className="inline-block px-10 py-3 rounded-full bg-[#392917] text-white font-semibold
                     hover:bg-[#F37E21] transition duration-300"
        >
          Back to Home
        </a>
      </div>

    </section>
  );
};

export default NotFound;
