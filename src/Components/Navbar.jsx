import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { assets, navlinks } from "../assets/global";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to update background color of navbar
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Social links
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/shakeeltradingcorporation/" },
    { Icon: FaLinkedinIn, url: "https://www.instagram.com/shakeel_trading_corporation/" },
    { Icon: FaInstagram, url: "https://www.instagram.com/yourpage" },
    { Icon: FaMapMarkerAlt, url: "https://goo.gl/maps/yourlocation" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-black" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">
         {/* LOGO IMAGE + TEXT */}
          <div className="flex items-end space-x-2 cursor-pointer">
            <img src={assets.logo} alt="Logo" className="h-14 md:h-16 object-contain" loading="lazy" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl">
                Shakeel Trading
              </span>
              <span className="text-white -mt-1 text-sm md:text-base">
                Corporation
              </span>
            </div>
          </div>


          {/* DESKTOP NAV LINKS */}
          <ul className="hidden md:flex items-center space-x-10 text-white font-semibold text-lg">
            {navlinks.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-orange-500 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-4 text-white">
            {/* DESKTOP SOCIAL ICONS */}
            <div className="hidden md:flex items-center space-x-4 text-lg">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* HAMBURGER - MOBILE */}
            <div
              className="md:hidden text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg
          transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <ul className="flex flex-col items-center space-y-7 py-10 text-white text-xl font-semibold">
            {navlinks.map((item, index) => (
              <li
                key={index}
                className="hover:text-orange-500 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex space-x-6 pt-6 text-xl">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
