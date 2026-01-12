"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaShoppingCart,
  FaWordpress,
} from "react-icons/fa";
import { FaBug } from "react-icons/fa6";
import { SiGitconnected } from "react-icons/si";

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Full Stack Superpowers",
    subtitle:
      "Building lightning-fast web apps with React, Node.js, Express, and MongoDB – sleek front-end, rock-solid back-end.",
    emoji: "☕🚀",
  },
  {
    icon: <FaWordpress className="w-8 h-8" />,
    title: "WordPress Solutions",
    subtitle:
      "Custom WordPress themes, plugins, and Elementor designs that make your site run effortlessly.",
    emoji: "🪄✨",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    title: "WooCommerce Magic",
    subtitle:
      "High-converting WooCommerce stores with seamless payments and custom features designed to boost sales.",
    emoji: "💰✨",
  },
  {
    icon: <SiGitconnected className="w-8 h-8" />,
    title: "The API Connector",
    subtitle:
      "Integrate seamless APIs and connect your site to top-tier third-party services for enhanced functionality.",
    emoji: "💡🔗",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Turbo Mode",
    subtitle:
      "Speed up your website with optimization, boosting load times, SEO, and security for lightning-fast performance.",
    emoji: "🏎️💨",
  },
  {
    icon: <FaBug className="w-8 h-8" />,
    title: "The Code Doctor",
    subtitle:
      "Bug fixes and performance optimization to keep your site healthy with error-free code and smooth performance.",
    emoji: "🩺",
  },
];

export default function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // New soothing blue color
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";
  const primaryColorDark = "#0097e6";

  // Liquid glass effect styles
  const liquidGlassStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    backdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.05) inset",
  };

  // Button style with soothing blue color
  const buttonStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: `0 8px 32px ${primaryColor}20, 0 2px 8px rgba(255, 255, 255, 0.1) inset`,
  };

  // Fixed gradient position for hydration safety
  const gradientStyle = isClient
    ? {
        left: `${mousePosition.x * 0.01}px`,
        top: `${mousePosition.y * 0.01}px`,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    : {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      };

  return (
    <section className="relative overflow-hidden bg-black px-4 md:px-8 lg:px-10 py-12 md:py-24">
      {/* Liquid Glass Background Elements - Fixed for hydration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={gradientRef}
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#00a8ff]/10 via-transparent to-[#00a8ff]/5 blur-3xl"
          style={gradientStyle}
        />
        {/* Static background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Section Label */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={liquidGlassStyle}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                }}
              />
              <span className="text-sm font-semibold text-[#00a8ff]">
                Services
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-[Recoleta] text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Empowering Your Digital Journey
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              From blazing-fast full stack apps to tailored WordPress solutions,
              I deliver scalable, high-performance digital experiences that grow
              with your business.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Main Card */}
              <div
                className="relative rounded-2xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
                style={liquidGlassStyle}
              >
                {/* Blue Hover Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative p-6 md:p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div
                    className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                    }}
                  >
                    <div className="text-white text-xl md:text-2xl">
                      {service.icon}
                    </div>

                    {/* Hover Effect Circle */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-[Recoleta] text-2xl text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm md:text-base mb-6 flex-grow">
                    {service.subtitle}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-xl md:text-2xl">
                        {service.emoji}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-white/60">
                        Learn more
                      </span>
                    </div>
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <FaArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white/70 group-hover:text-[#00a8ff]" />
                    </div>
                  </div>
                </div>

                {/* Hover Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                  }}
                />
              </div>

              {/* Floating Blue Glow on Hover */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
