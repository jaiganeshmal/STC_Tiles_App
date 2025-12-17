import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { assets } from "../assets/global";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 px-4 sm:px-6 lg:px-16">
            {/* ================= NEWSLETTER ================= */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-gray-800">
                <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                        Subscribe our newsletter to get the <br />
                        latest news & updates.
                    </h3>
                </div>

                <form className="w-full max-w-xl">
                    <div className="flex rounded-full overflow-hidden bg-white">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-6 py-4 text-gray-800 outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#F37E21] hover:bg-[#392917] cursor-pointer px-8 text-white font-semibold transition"
                        >
                            →
                        </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                        <input
                            type="checkbox"
                            id="privacy"
                            className="accent-[#F37E21]"
                        />
                        <label htmlFor="privacy">
                            I agree to the{" "}
                            <span className="text-[#F37E21] underline cursor-pointer">
                                Privacy Policy
                            </span>
                        </label>
                    </div>
                </form>
            </div>

            {/* ================= LINKS ================= */}
            <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-gray-400">
                {/* COMPANY */}
                <div>
                    <div className="flex items-end space-x-2 cursor-pointer">
                        <img src={assets.logo} 
                        alt="Logo" 
                        className="h-14 md:h-16 object-contain" 
                        loading="lazy"
                        />
                        <div className="flex flex-col">
                            <span className="text-[#F37E21] font-bold text-lg md:text-xl">
                                Shakeel Trading
                            </span>
                            <span className="text-white -mt-1 text-sm md:text-base">
                                Corporation
                            </span>
                        </div>
                    </div>
                    <p className="leading-relaxed mt-3">
                        Friends Plaza, Murree Rd، opposite <br /> Ojhri Camp, Shamsabad, Rawalpindi, 46000
                    </p>
                    <p className="mt-3 text-white font-medium">
                        +92 51 4575999
                    </p>
                    <p className="mt-3 text-white font-medium">
                        infogamil@gmail.com
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-5">
                        Services
                    </h4>
                    <ul className="space-y-3">
                        {[
                            "Flooring",
                            "Wood Floor",
                            "Woodhard",
                            "Tiles Setup",
                            "Carpet Setup",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="hover:text-[#F37E21] transition cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-5">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {[
                            "Contact Us",
                            "Member",
                            "Our Project",
                            "About Company",
                            "News Update",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="hover:text-[#F37E21] transition cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SOCIAL */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-5">
                        Get In Touch
                    </h4>
                    <div className="flex gap-4">
                        {[
                            { Icon: FaFacebookF, url: "https://www.facebook.com/shakeeltradingcorporation/" },
                            { Icon: FaInstagram, url: "https://www.instagram.com/shakeel_trading_corporation/" },
                            { Icon: FaTwitter, url: "https://twitter.com/yourpage" },
                            { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/yourpage" },
                        ].map(({ Icon, url }, i) => (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center
                   rounded-full bg-white text-black
                   hover:bg-[#F37E21] hover:text-white
                   transition"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="border-t border-gray-800 py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
                    <p>
                        © 2025 All Rights Reserved by{" "}
                        <span className="text-white font-medium">Shakeel Trading Corporation</span>
                    </p>

                    <div className="flex gap-4">
                        {["About Site", "Careers", "Privacy Policy"].map(
                            (item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="hover:text-[#F37E21] transition"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
