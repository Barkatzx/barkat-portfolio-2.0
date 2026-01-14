"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCode,
  FaCogs,
  FaInfinity,
  FaLightbulb,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaShoppingCart,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const services = [
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "MVP Development",
    subtitle:
      "Transform ideas into launch-ready products with cutting-edge tech stacks, built for validation and scale.",
    tags: ["Startup", "React", "Node.js", "Fast-track"],
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.2)",
    duration: "4-6 weeks",
    link: "/services/mvp",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Custom Applications",
    subtitle:
      "Bespoke web applications with intuitive interfaces and robust backends, tailored to your exact needs.",
    tags: ["Full Stack", "Tailored", "Scalable"],
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59, 130, 246, 0.2)",
    duration: "Custom",
    link: "/services/custom",
  },
  {
    icon: <FaWordpress className="w-8 h-8" />,
    title: "Business Systems",
    subtitle:
      "Professional WordPress ecosystems designed as business assets, easy to manage and built to grow.",
    tags: ["WordPress", "Business", "CMS"],
    gradient: "from-emerald-500 to-teal-400",
    glow: "rgba(16, 185, 129, 0.2)",
    duration: "2-4 weeks",
    link: "/services/business",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    title: "Commerce Solutions",
    subtitle:
      "High-performing e-commerce systems with seamless checkout and scalable product architecture.",
    tags: ["WooCommerce", "Revenue", "Scale"],
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249, 115, 22, 0.2)",
    duration: "3-5 weeks",
    link: "/services/commerce",
  },
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: "UI/UX Design",
    subtitle:
      "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
    tags: ["Design", "UI/UX", "Figma"],
    gradient: "from-rose-500 to-red-400",
    glow: "rgba(244, 63, 94, 0.2)",
    duration: "2-3 weeks",
    link: "/services/ui",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Performance & Security",
    subtitle:
      "Optimize speed and secure your platform with enterprise-grade security measures.",
    tags: ["Security", "Optimization", "Stability"],
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139, 92, 246, 0.2)",
    duration: "Ongoing",
    link: "/services/performance",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Growth Analytics",
    subtitle:
      "Data-driven insights and analytics to track performance and optimize user journeys.",
    tags: ["Analytics", "Data", "Growth"],
    gradient: "from-indigo-500 to-blue-400",
    glow: "rgba(99, 102, 241, 0.2)",
    duration: "Custom",
    link: "/services/growth",
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Innovation Lab",
    subtitle:
      "Experimental development and proof-of-concept projects using emerging technologies.",
    tags: ["R&D", "Innovation", "POC"],
    gradient: "from-yellow-500 to-orange-400",
    glow: "rgba(234, 179, 8, 0.2)",
    duration: "Variable",
    link: "/services/innnovation",
  },
];

const techStack = [
  { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js" },
  { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind" },
  { icon: <SiNodedotjs className="w-6 h-6" />, name: "Node.js" },
  { icon: <FaBrain className="w-6 h-6" />, name: "AI/ML" },
  { icon: <FaCogs className="w-6 h-6" />, name: "Microservices" },
  { icon: <FaInfinity className="w-6 h-6" />, name: "Scalability" },
];

// Predefined particle positions (deterministic - same on server and client)
const particlePositions = [
  { x: "10%", y: "20%" },
  { x: "30%", y: "40%" },
  { x: "50%", y: "10%" },
  { x: "70%", y: "30%" },
  { x: "90%", y: "60%" },
  { x: "20%", y: "80%" },
  { x: "40%", y: "90%" },
  { x: "60%", y: "70%" },
  { x: "80%", y: "50%" },
  { x: "15%", y: "35%" },
];

export default function ServicesShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Magnetic effect
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".service-card");
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          const maxDistance = 200;

          if (distance < maxDistance) {
            const strength = (1 - distance / maxDistance) * 0.2;
            const dx = (centerX - x) * strength;
            const dy = (centerY - y) * strength;

            (card as HTMLElement).style.transform =
              `translate(${dx}px, ${dy}px)`;
          } else {
            (card as HTMLElement).style.transform = "translate(0, 0)";
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative container mx-auto overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_80%_80%,rgba(56,189,248,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_20%_30%,rgba(168,85,247,0.05),transparent)]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Fixed Floating Particles (no random values) */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: pos.x,
              top: pos.y,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-widest">
              What We Deliver
            </span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="font-[Recoleta] text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Digital Craftsmanship
            </span>
            <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#80d8ff]">
              for Visionaries
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Where innovation meets impeccable execution. We transform complex
            challenges into elegant digital solutions that propel your business
            forward.
          </p>
        </motion.div>

        {/* Tech Stack Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-5">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-white/80 group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="service-card group relative h-full"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Glass Morphism Overlay */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 p-6 md:p-8">
                  {/* Icon Container */}
                  <div
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="text-white text-2xl">{service.icon}</div>

                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:animate-ping group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-sans text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/70 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs font-medium text-white/50">
                      {service.duration}
                    </span>

                    {/* Arrow Button */}
                    <button
                      className="relative w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group/btn overflow-hidden"
                      onClick={() => (window.location.href = service.link)}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
                      />
                      <FaArrowRight className="relative z-10 w-4 h-4 text-white/70 group-hover/btn:text-white transition-colors transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10"
                  style={{ background: service.glow }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
