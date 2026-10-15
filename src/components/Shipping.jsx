import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
};

const logoVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.96, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
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

export default function Shipping() {
    const prefersReducedMotion = useReducedMotion();

    const lines = {
        OOCL: "/line/OOCL.jpeg",
        SITC: "/line/SITC.jpeg",
        MAERSK: "/line/MAERSK.jpeg",
        "CMA-CGM": "/line/CMA-CGM.jpeg",
        "HAPAG-LLOYD": "/line/HAPAG-LLOYD.jpeg",
        HMM: "/line/HMM.jpeg",
        COSCO: "/line/COSCO.jpeg",
        ONE: "/line/ONE.jpeg",
    };

    return (
        <section
            className="py-24 bg-white border-b border-gray-200 overflow-hidden"
            id="companies"
        >
            <motion.div
                className="container-custom"
                id=""
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.p
                    className="text-center text-gray-500 text-lg tracking-[0.2em] uppercase mb-4 font-light"
                    variants={headingVariants}
                >
                    Our Shipping Line Partners
                </motion.p>

                <motion.p
                    variants={headerItemVariants}
                    className="text-gray-600 font-light mt-6 mb-10 text-center"
                >
                    We offer a full range of transport and logistics services to
                    meet all the needs of your international business.
                </motion.p>

                <div className="overflow-hidden">
                    <motion.div
                        className="flex w-max items-center gap-8 md:gap-12"
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : { x: ["0%", "-50%"] }
                        }
                        transition={{
                            duration: 24,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[
                            ...Object.entries(lines),
                            ...Object.entries(lines),
                        ].map(([name, image], index) => (
                            <motion.div
                                key={`${name}-${index}`}
                                variants={logoVariants}
                                whileHover={
                                    prefersReducedMotion
                                        ? {}
                                        : {
                                              scale: 1.08,
                                              color: "var(--color-primary, #1f3a5f)",
                                              transition: {
                                                  type: "spring",
                                                  stiffness: 280,
                                                  damping: 16,
                                              },
                                          }
                                }
                                whileTap={{ scale: 0.97 }}
                                aria-hidden={index >= lines.length}
                                className="shrink-0 cursor-pointer will-change-transform"
                            >
                                <img
                                    src={image}
                                    alt={name}
                                    className="h-14 w-32 object-contain md:h-16"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
