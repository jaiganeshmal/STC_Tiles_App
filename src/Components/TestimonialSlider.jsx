import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "../assets/global";



const TestimonialSlider = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-16 text-center">
      {/* HEADER */}
      <p className="text-sm uppercase tracking-widest text-gray-400">
        Testimonial
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-[#392917] leading-snug mt-2 mb-10">
        Here's what our satisfied <br /> clients are saying
      </h2>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white border border-gray-100 rounded-2xl p-8
                         shadow-sm hover:shadow-xl transition-all duration-300
                         text-left h-full"
            >
              {/* QUOTE ICON */}
              <div className="text-5xl text-[#F37E21] leading-none mb-4">
                ❝
              </div>

              {/* TEXT */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* CLIENT */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#F37E21]"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-[#392917]">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
