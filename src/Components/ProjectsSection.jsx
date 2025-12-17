import React from "react";
import { projects } from "../assets/global";



const ProjectsSection = () => {
    return (
        <section className="bg-[#FEF7F1] py-10 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
                        Our Projects
                    </p>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#392917] max-w-3xl leading-snug">
                            We have done more than{" "}
                            <span className="text-[#F37E21]">712+</span> flooring successful
                            project
                        </h2>

                        <button className="px-8 py-4 bg-[#392917] text-white font-semibold rounded-full
                               hover:bg-[#F37E21] transition duration-300">
                            More Project
                        </button>
                    </div>
                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white overflow-hidden
                         transition-all duration-300 hover:shadow-2xl"
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <p className="text-sm font-semibold text-[#F37E21] mb-2">
                                    {project.category}
                                </p>

                                <h3 className="text-lg font-bold text-[#392917] mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    Voluptate lecca laborum cupidatat. Curata turpis eu in mi
                                    bibendum.
                                </p>

                                {/* ARROW BUTTON */}
                                <button className="w-10 h-10 flex items-center justify-center
                                   rounded-full border border-gray-200
                                   group-hover:bg-[#392917]
                                   group-hover:border-[#392917]
                                   transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-[#392917] group-hover:text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
