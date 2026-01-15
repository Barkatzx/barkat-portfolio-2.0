"use client";

import Glass from "@/components/ui/Glass";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaLightbulb,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaShoppingCart,
  FaWordpress,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "MVP Development",
    subtitle:
      "We help founders and startups turn ideas into real, usable products. From defining core features to building a scalable architecture, we focus on speed, clarity, and validation—so you can test your idea with real users and move forward confidently.",
    tags: [
      "Startup",
      "Product Validation",
      "Fast Launch",
      "Scalable Architecture",
    ],
    gradient: "from-purple-500 to-pink-500",
    duration: "4-6 weeks",
    link: "/services/mvp",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Custom Applications",
    subtitle:
      "We help founders and startups turn ideas into real, usable products. From defining core features to building a scalable architecture, we focus on speed, clarity, and validation—so you can test your idea with real users and move forward confidently.",
    tags: [
      "Business Systems",
      "Custom Workflows",
      "Secure & Scalable",
      "Automation",
    ],
    gradient: "from-blue-500 to-cyan-400",
    duration: "Custom",
    link: "/services/custom",
  },
  {
    icon: <FaWordpress className="w-8 h-8" />,
    title: "Business Systems",
    subtitle:
      "We build structured, SEO-ready websites using modern CMS solutions that are easy to manage and built to grow. From marketing sites to content-driven platforms, we focus on speed, clarity, and conversion—so your website actually supports your business goals.",
    tags: [
      "SEO-Ready",
      "High Performance",
      "Easy Management",
      "Conversion-Focused",
    ],
    gradient: "from-emerald-500 to-teal-400",
    duration: "2-4 weeks",
    link: "/services/business",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    title: "Commerce Solutions",
    subtitle:
      "We design and develop reliable e-commerce systems with optimized checkout flows, secure payments, and scalable product management. Whether you’re launching or optimizing an existing store, we focus on performance and revenue—not templates.",
    tags: [
      "Revenue-Driven",
      "Optimized Checkout",
      "Scalable Store",
      "Secure Payments",
    ],
    gradient: "from-orange-500 to-amber-400",
    duration: "3-5 weeks",
    link: "/services/commerce",
  },
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: "UI/UX Design",
    subtitle:
      "We create clean, functional interfaces that guide users effortlessly through your product. Our design process balances usability, aesthetics, and business goals—ensuring your platform feels professional and works intuitively from day one.",
    tags: [
      "User-Centered",
      "Conversion-Focused",
      "Product Design",
      "Usability",
    ],
    gradient: "from-rose-500 to-red-400",
    duration: "2-3 weeks",
    link: "/services/uiux",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Performance & Security",
    subtitle:
      "We provide continuous optimization, security hardening, and technical support to ensure your platform remains stable and performant. This service is ideal for businesses that want peace of mind and a long-term technical partner.",
    tags: [
      "Speed Optimization",
      "Security",
      "Reliability",
      "Long-Term Support",
    ],
    gradient: "from-violet-500 to-purple-400",
    duration: "Ongoing",
    link: "/services/performance",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Growth Analytics",
    subtitle:
      "We implement analytics and tracking systems that reveal how users interact with your platform. By turning data into clear insights, we help you optimize user journeys, improve conversions, and measure real performance.",
    tags: [
      "Data-Driven",
      "Data-Driven",
      "User Insights",
      "Performance Tracking",
      "Optimization",
    ],
    gradient: "from-indigo-500 to-blue-400",
    duration: "Custom",
    link: "/services/growth",
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Innovation Lab",
    subtitle:
      "We help businesses explore new ideas, features, or technologies through focused proof-of-concept development. This allows you to test feasibility before committing to full-scale development.",
    tags: [
      "Idea Testing",
      "Rapid Prototyping",
      "Low Risk",
      "Technical Validation",
    ],
    gradient: "from-yellow-500 to-orange-400",
    duration: "Variable",
    link: "/services/innnovation",
  },
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
      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
            <span className="text-sm text-white/80">What We Deliver</span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="font-[Recoleta] text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Engineering Digital Products for
              <br />
              Growth-Focused Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We design and build scalable digital platforms that solve real
            business problems. By combining thoughtful design with robust
            engineering, we turn complex requirements into clean, reliable
            systems that support growth, performance, and long-term success.
          </p>
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
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Card Container */}
              {/* Background Gradient */}
              <Glass variant="blue" className="p-6 h-full">
                {/* Icon Container */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <div className="text-white text-2xl">{service.icon}</div>
                </div>

                {/* Service Title */}
                <h3 className="font-[Recoleta] text-xl text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mb-6">{service.subtitle}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xs text-white/50">
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
                    <FaArrowRight className="relative z-10 w-4 h-4 text-white/70 group-hover/btn:text-white transition-colors transition-transform" />
                  </button>
                </div>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
