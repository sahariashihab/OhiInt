import { motion } from "framer-motion";
import Icon from "./Icon";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const headerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const headerItemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1.1, ease: EASE_OUT_EXPO },
    },
};

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.25,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
};

export default function Services() {
    const items = [
        {
            icon: "directions_boat",
            title: "Maritime Transport",
            description:
                "Full-service FCL and LCL shipping to major ports worldwide.",
        },
        {
            icon: "flight",
            title: "Air Transport",
            description:
                "Fast and efficient air freight solutions for urgent cargo worldwide.",
        },
        {
            icon: "local_shipping",
            title: "Road Transport",
            description:
                "National and European road transport with our own fleet and trusted partners.",
        },
        {
            icon: "warehouse",
            title: "Storage and Logistics",
            description:
                "Integrated warehousing and logistics management solutions to optimize your supply chain.",
        },
        {
            icon: "fact_check",
            title: "Customs Clearance",
            description:
                "Full-service customs clearance and international trade consulting.",
        },
        {
            icon: "inventory_2",
            title: "Special Cargo",
            description:
                "Transportation of special and oversized cargo, and turnkey industrial projects.",
        },
        {
            icon: "moving",
            title: "Changes",
            description:
                "Residential and commercial removals with vans and specialized personnel in Portugal.",
        },
    ];
    return (
        <section className="section-padding" id="services">
            <div className="bg-secondary/30 overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        variants={headerContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.span
                            variants={headerItemVariants}
                            className="text-accent text-sm font-light tracking-[0.2em] uppercase inline-block"
                        >
                            Our Services
                        </motion.span>

                        <motion.h2
                            variants={headerItemVariants}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-primary mt-3 mb-6"
                        >
                            Complete Logistics Solutions
                        </motion.h2>

                        <motion.div
                            variants={headerItemVariants}
                            className="flex justify-center"
                        >
                            <motion.div
                                className="divider"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 1.2,
                                    ease: EASE_OUT_EXPO,
                                    delay: 0.4,
                                }}
                                style={{ originX: 0.5, originY: 0.5 }}
                            />
                        </motion.div>

                        <motion.p
                            variants={headerItemVariants}
                            className="text-gray-600 font-light mt-6 max-w-2xl mx-auto"
                        >
                            We offer a full range of transport and logistics
                            services to meet all the needs of your international
                            business.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {items.map((s, i) => (
                            <motion.div
                                key={s.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    borderColor: "rgba(31, 58, 95, 0.35)",
                                    transition: {
                                        type: "spring",
                                        stiffness: 240,
                                        damping: 18,
                                    },
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 will-change-transform hover:shadow-2xl"
                            >
                                {/* Glow halo on hover */}
                                <motion.div
                                    aria-hidden
                                    className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary/10 blur-2xl"
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: EASE_OUT_EXPO,
                                    }}
                                />

                                {/* Icon tile */}
                                <motion.div
                                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 overflow-hidden relative"
                                    whileHover={{
                                        backgroundColor: "#1f3a5f",
                                        scale: 1.08,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 18,
                                        },
                                    }}
                                >
                                    <motion.span
                                        className="text-primary group-hover:text-white"
                                        whileHover={{ color: "#ffffff" }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Icon name={s.icon} size={24} />
                                    </motion.span>
                                </motion.div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-semibold tracking-tight text-primary">
                                    {s.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6 text-sm leading-7 text-gray-600">
                                    {s.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
