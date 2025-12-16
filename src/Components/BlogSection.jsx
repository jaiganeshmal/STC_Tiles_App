import React from "react";
import { assets } from "../assets/global";

const articles = [
  {
    category: "Business",
    image: assets.blog1 ,
    title: "How to Remove Common Carpet Stains",
    date: "October 12, 2022",
    desc: "One of the most popular and timeless tile choices for kitchens and bathrooms",
  },
  {
    category: "Woodhard",
    image: assets.blog2 ,
    title: "Hardwood oak flooring at Simple Flooring",
    date: "October 12, 2022",
    desc: "One of the most popular and timeless tile choices for kitchens and bathrooms",
  },
  {
    category: "Flooring",
    image: assets.blog3 ,
    title: "Why choose vinyl plank over other flooring types?",
    date: "October 12, 2022",
    desc: "One of the most popular and timeless tile choices for kitchens and bathrooms",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-16">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Visiting Our Blog
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#392917] leading-snug">
          Articles daily updated latest articles <br className="hidden md:block" />
          directly from the blog
        </h2>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-md overflow-hidden
                       border border-gray-100 hover:border-[#392917]
                       hover:shadow-2xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover
                           group-hover:scale-105 transition-transform duration-500"
              />

              {/* CATEGORY */}
              <span
                className="absolute top-4 left-4 bg-white text-xs font-semibold
                           px-4 py-1 rounded-full shadow text-[#392917]"
              >
                {item.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {/* DATE */}
              <p className="text-sm text-gray-400 mb-2">
                {item.date}
              </p>

              {/* TITLE */}
              <h3
                className="text-lg font-bold text-[#392917]
                           group-hover:text-[#F37E21] transition mb-3"
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
