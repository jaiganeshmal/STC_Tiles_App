import React, { lazy, Suspense } from "react";
import Loader from "../Components/Loader";

/* LAZY IMPORTS */
const HeroCarousel = lazy(() => import("../Components/HeroSlider"));
const ContactBanner = lazy(() => import("../Components/ContactBanner"));
const WhyChooseUs = lazy(() => import("../Components/WhyChooseUs"));
const ExpertFlooring = lazy(() => import("../Components/ExpertFlooring"));
const Services = lazy(() => import("../Components/Services"));
const OurProduct = lazy(() => import("../Components/OurProduct"));
const OurProcess = lazy(() => import("../Components/OurProcess"));
const ProjectsSection = lazy(() => import("../Components/ProjectsSection"));
const ProjectCTA = lazy(() => import("../Components/ProjectCTA"));
const ContactSection = lazy(() => import("../Components/ContactSection"));
const TestimonialSlider = lazy(() => import("../Components/TestimonialSlider"));
const BlogSection = lazy(() => import("../Components/BlogSection"));

const Home = () => {
    return (
        <Suspense fallback={<Loader />}>
            <HeroCarousel />
            <ContactBanner />
            <WhyChooseUs />
            <ExpertFlooring />
            <Services />
            <OurProduct />
            <OurProcess />
            <ProjectsSection />
            <ProjectCTA />
            <ContactSection />
            <TestimonialSlider />
            <BlogSection />
        </Suspense>
    );
};

export default Home;
