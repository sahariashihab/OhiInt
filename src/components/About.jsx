import { motion } from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const imageColumnVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.55,
            delayChildren: 0.15,
        },
    },
};

const mainImageVariants = {
    hidden: { opacity: 0, x: -120, scale: 1.08, filter: "blur(10px)" },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1.8, ease: EASE_OUT_EXPO },
    },
};

const textColumnVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.28,
            delayChildren: 0.4,
        },
    },
};

const textItemVariants = {
    hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
    show: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 1.5, ease: EASE_OUT_EXPO },
    },
};

const featuresContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.22, delayChildren: 0.15 },
    },
};

const featureItemVariants = {
    hidden: { opacity: 0, x: 30, filter: "blur(6px)" },
    show: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 1.3, ease: EASE_OUT_EXPO },
    },
};

export default function About() {
    const features = [
        {
            title: "Global Experience",
            description:
                "Covered in over 120 countries with trusted partners across every continent.",
        },
        {
            title: "Advanced Technology",
            description:
                "Real-time tracking and a digital platform for complete management of your shipments.",
        },
    ];

    return (
        <section className="section-padding" id="about">
            <div className="bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="relative h-75 sm:h-100 md:h-125 order-2 md:order-1"
                            variants={imageColumnVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <motion.div
                                variants={mainImageVariants}
                                whileHover={{ scale: 1.03 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20,
                                }}
                                className="w-full h-full overflow-hidden will-change-transform"
                            >
                                <motion.img
                                    alt="Blue Logistics team in meeting"
                                    className="w-full h-full object-cover"
                                    src="/team-meeting.png"
                                    initial={{ scale: 1.12 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 3.6,
                                        ease: EASE_OUT_EXPO,
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                aria-hidden
                                className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent/60 hidden md:block"
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 1.5,
                                    ease: EASE_OUT_EXPO,
                                    delay: 0.9,
                                }}
                            />
                        </motion.div>

                        {/* Text column — slides in from the RIGHT */}
                        <motion.div
                            className="order-1 md:order-2"
                            variants={textColumnVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <motion.span
                                variants={textItemVariants}
                                className="text-accent text-sm font-light tracking-[0.2em] uppercase inline-block"
                            >
                                About Us
                            </motion.span>
                            <motion.h2
                                variants={textItemVariants}
                                className="heading-2 text-primary mt-3 mb-6"
                            >
                                Excellence in International Logistics
                            </motion.h2>
                            <motion.p
                                variants={textItemVariants}
                                className="text-gray-600 font-light leading-relaxed mb-8"
                            >
                                With over 8 years of experience, OHI
                                INTERNATIONAL is a leader in international
                                transport and integrated logistics solutions.
                                Our team of experts ensures that every shipment
                                arrives at its destination safely and on time.
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                                variants={featuresContainerVariants}
                            >
                                {features.map((f) => (
                                    <motion.div
                                        key={f.title}
                                        variants={featureItemVariants}
                                        whileHover={{
                                            x: 4,
                                            borderColor:
                                                "var(--color-accent, currentColor)",
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 18,
                                            },
                                        }}
                                        className="border-l-2 border-accent pl-4 will-change-transform"
                                    >
                                        <h4 className="text-primary font-medium mb-1">
                                            {f.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm font-light">
                                            {f.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
