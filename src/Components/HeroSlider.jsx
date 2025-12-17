import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { assets } from "../assets/global";

const HeroSlider = () => {
    const slides = [
        assets.slide1,
        assets.slide2,
        assets.slide3,
        assets.slide4,
    ];

    return (
        <section className="w-full h-screen relative">
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="w-full h-full"
            >
                {slides.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-screen relative overflow-hidden">
                            {/* IMAGE */}
                            <img
                                src={img}
                                alt="slide"
                                className="w-full h-full object-cover scale-110 animate-zoom"
                                loading="lazy"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* CONTENT */}
                            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                <div className="w-screen">

                                    {/* SUB HEADING */}
                                    <p className="text-gray-300 text-sm md:text-lg font-semibold md:mb-3 tracking-wide">
                                        A Complete Solution For Your Tiles Vision
                                    </p>

                                    {/* MAIN HEADING */}
                                    <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-6xl leading-tight mb-3">
                                        Welcome To Our STC <br />
                                        <span className="text-white">Tiles Solutions</span>
                                    </h1>

                                    {/* BUTTON */}
                                    <button className="px-8 py-3 text-lg md:text-xl bg-[#F37E21] text-white font-semibold rounded-4xl hover:bg-[#392917] duration-500 cursor-pointer">
                                        Our Services
                                    </button>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;
