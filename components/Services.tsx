"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaShoppingCart, FaWordpress } from "react-icons/fa";
import { FaBug } from "react-icons/fa6";
import { SiGitconnected } from "react-icons/si";

const services = [
  {
    icon: <FaCode className="w-10 h-10" />,
    title: "Full Stack Superpowers",
    subtitle:
      "I craft high-performance web apps like your favorite coffee – with React, Node.js, Express, and MongoDB, delivering a slick front-end and bulletproof back-end. ☕🚀",
  },
  {
    icon: <FaWordpress className="w-8 h-8" />,
    title: "WordPress Solutions",
    subtitle:
      "Need a standout theme or a plugin that works? I create custom WordPress solutions—from theme tweaks to Elementor magic, making your site run like butter! 🪄✨",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    title: "WooCommerce Magic",
    subtitle:
      "I create high-converting WooCommerce stores with seamless payments and custom features, designed to boost sales and wow your customers! I ensure it’s designed to sell💰✨",
  },
  {
    icon: <SiGitconnected className="w-8 h-8" />,
    title: "The API Connector",
    subtitle:
      "I make your site smarter, not harder, by integrating seamless APIs and connecting your site to top-tier third-party services for enhanced functionality and performance. 💡🔗",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Turbo Mode",
    subtitle:
      "I speed up your website like a Formula 1 car, optimizing load times, boosting SEO, and enhancing security for a seamless and lightning-fast user experience. 🏎️💨",
  },
  {
    icon: <FaBug className="w-8 h-8" />,
    title: "The Code Doctor",
    subtitle:
      "I’m prescribing bug fixes to keep your site healthy, ensuring smooth performance, error-free code, and a hassle-free experience for your users. Regular update keeps your site well! 🩺",
  },
];

export default function Services() {
  return (
    <section className="px-5 md:px-20 py-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[Recoleta] text-3xl md:text-4xl font-bold mb-4">
            Services For Your Business 🚀
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Comprehensive solutions tailored to your specific business needs and
            goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f9f6f3] hover:bg-sky-400 hover:text-white rounded-xl p-4 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col p-4">
                <div className="mb-4 text-sky-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-[Recoleta] font-bold text-2xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 text-xl">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
