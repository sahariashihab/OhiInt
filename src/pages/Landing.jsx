import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useContent } from "../hooks/useContent";
import Trust from "../components/Trust";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Sectors from "../components/Sectors";
import WhyUs from "../components/WhyUs";
import Network from "../components/Network";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useEffect } from "react";

export default function Landing() {
    // TODO: Remove Fetch later.

    const { data, loading, error } = useContent();
    if (loading && !data) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Trust />
            <Stats />
            <About />
            <Services data={data.services} />
            <section className="section-padding bg-linear-to-br from-blue-950 via-blue-800 to-blue-600 relative overflow-hidden">
                {/* Decorative blur */}
                <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

                <Sectors data={data.sectors} />
            </section>
            <section id="services" className="section-padding">
                <WhyUs data={data.whyUs} />
            </section>
            <section id="network" className="section-padding">
                <Network data={data.network} />
            </section>
            <section id="insights" className="section-padding">
                <Testimonials data={data.testimonials} />
            </section>
            <section
                id="contactos"
                className="section-padding bg-linear-to-br from-blue-950 via-blue-800 to-blue-600 relative overflow-hidden"
            >
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src={data?.cta?.background}
                        alt="Night intermodal terminal"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary-light/80" />
                </div>
                <CTA data={data.cta} />
            </section>

            <section className="section-padding bg-linear-to-br from-blue-950 via-blue-800 to-blue-600 relative overflow-hidden text-white pb-0!">
                <Footer data={data.footer} />
            </section>
        </div>
    );
}
