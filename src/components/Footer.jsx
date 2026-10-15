import { motion } from "framer-motion";
import Icon from "./Icon";
import SocialIcon from "./SocialIcons";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
};

export default function Footer() {
    return (
        <footer className="gradient-bg text-white">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="container-custom py-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    <motion.div variants={slideUpVariants}>
                        <img
                            alt="Footer logo"
                            className="h-14 w-auto object-contain mb-4 brightness-0 invert"
                            src="/logo.png"
                        />
                        <p className="text-white/60 font-light mb-6">
                            Global logistics solutions with excellence and
                            commitment.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                <SocialIcon name="facebook" size={18} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                <SocialIcon name="instagram" size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={slideUpVariants}>
                        <h4 className="text-sm font-medium tracking-wider uppercase mb-4">
                            Contacts
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:+8801912500316`}
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors font-light text-sm"
                                >
                                    <Icon
                                        name="phone"
                                        filled={false}
                                        size={16}
                                    />
                                    +8801912500316
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:info@ohiinternational.com.bd`}
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors font-light text-sm"
                                >
                                    <Icon
                                        name="mail"
                                        filled={false}
                                        size={16}
                                    />
                                    info@ohiinternational.com.bd
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/60 font-light text-sm">
                                    <Icon
                                        name="location_on"
                                        size={16}
                                        filled={false}
                                        className="shrink-0 mt-0.5"
                                    />
                                    <span className="min-w-0 wrap-break-word">
                                        <a
                                            href="https://maps.app.goo.gl/zHkht8kGY2XNx5xM6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="wrap-break-word hover:text-white transition-colors"
                                        >
                                            Sheba House Plot # 34,Road
                                            #46,Gulshan North C/A, Gulshan-2,
                                            Dhaka-1212
                                        </a>
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-start gap-3 text-white/60 font-light text-sm">
                                    <Icon
                                        name="location_on"
                                        size={16}
                                        filled={false}
                                        className="shrink-0 mt-0.5"
                                    />
                                    <span className="min-w-0 wrap-break-word">
                                        Century Tower, 4th Floor, Agrabad Access
                                        Road, Chattogram
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>

            <div className="bg-black/20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        ease: EASE_OUT_EXPO,
                        delay: 0.3,
                    }}
                    className="container-custom py-6"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-white/50 text-sm font-light">
                            © 2026 Ohi International all rights reserved
                        </p>
                        <a
                            href="https://enigmanite.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Developed by Enigmanite"
                            className="flex items-center gap-2 text-white/50 text-sm font-light hover:text-white transition-colors"
                        >
                            <span>Developed by</span>
                            <img
                                src="/Enigmanite.png"
                                alt="Enigmanite"
                                className="h-7 w-28 object-cover object-center bg-transparent"
                            />
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
