import React, { useState } from "react";

const ProjectCTA = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* CTA */}
            <section className="relative">
                <div className="max-w-5xl mx-auto -mt-18 px-4 relative z-20">
                    <div
                        className="relative overflow-hidden rounded-2xl px-8 sm:px-12 py-14 text-center
                       text-white shadow-2xl"
                        style={{
                            backgroundImage: "url(/images/wood-texture.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* overlay */}
                        <div className="absolute inset-0 bg-[#F37E21]/90"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
                                A Complete Solution for Your Flooring Vision.
                                <br />
                                We have done more than{" "}
                                <span className="text-[#392917]">562+</span> successful projects
                            </h2>

                            <p className="mb-8 text-white/90">
                                Schedule a free case evaluation or call us at{" "}
                                <span className="font-semibold">+88 17 12 48101</span>
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <button className="uppercase text-sm font-semibold border-b border-white">
                                    View all project
                                </button>

                                {/* PLAY BUTTON */}
                                <button
                                    onClick={() => setOpen(true)}
                                    className="w-12 h-12 rounded-full bg-[#392917]
                             flex items-center justify-center
                             hover:bg-black transition"
                                >
                                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
                    <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 z-50
                         w-10 h-10 rounded-full bg-white/90
                         flex items-center justify-center
                         text-black text-xl font-bold
                         hover:bg-red-500 hover:text-white transition cursor-pointer"
                            aria-label="Close video"
                        >
                            ✕
                        </button>

                        {/* VIDEO */}
                        <div className="relative w-full pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=1"
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCTA;
