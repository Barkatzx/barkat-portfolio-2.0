"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";
import {
  FaCheck,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";
import Glass from "./ui/Glass";

interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  icon: JSX.Element;
  features: string[];
  popular: boolean;
}

export default function PricingComponent() {
  const pricingPlans = [
    {
      id: 1,
      title: "Landing Page",
      description:
        "A focused, conversion-driven website designed to validate your offer and generate leads fast.",
      price: "$500+",
      priceNote: "Starting at $500",
      icon: <FaGlobe className="text-2xl" />,
      features: [
        "1-3 Page Website",
        "Mobile Responsive Design",
        "SEO Optimization",
        "Contact Form Integration",
        "Social Media Integration",
        "Google Analytics Setup",
        "Post-launch support included",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Business Website",
      description:
        "A scalable, professional website built to establish credibility, attract customers, and support long-term growth.",
      price: "$1,200+",
      priceNote: "From $1,200",
      icon: <FaStore className="text-2xl" />,
      features: [
        "5-10 Page Website",
        "Custom Design",
        "SEO Optimized",
        "Blog Integration",
        "Admin Dashboard",
        "Contact Management",
        "Performance Optimization",
        "Post-launch support included",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "E-commerce",
      description:
        "A revenue-ready e-commerce platform engineered for smooth checkout, operational efficiency, and scale.",
      price: "$2,500+",
      priceNote: "From $2,500",
      icon: <FaShoppingCart className="text-2xl" />,
      features: [
        "Product Management",
        "Shopping Cart",
        "Payment Gateway Integration",
        "User Accounts",
        "Order Management",
        "Inventory System",
        "Security Features",
        "Post-launch support included",
      ],
      popular: false,
    },
    {
      id: 4,
      title: "Web Application",
      description:
        "A fully custom digital system built to support your internal workflows, customers, or product vision.",
      price: "Custom",
      priceNote: "Get a quote",
      icon: <FaCode className="text-2xl" />,
      features: [
        "Custom Features",
        "User Authentication",
        "Real-time Features",
        "API Integration",
        "Scalable Architecture",
        "Advanced Security",
        "Performance Monitoring",
        "Post-launch support included",
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative py-10 px-4 container mx-auto rounded-3xl overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <span className="text-sm text-white/80">Pricing</span>
            </div>
          </motion.div>

          <h2 className="font-[Recoleta] text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>

          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Every project is scoped carefully. Final pricing depends on
            requirements, integrations, and timeline.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.id * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Glass variant="blue" className="p-5 h-full">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#00a8ff] to-[#4dc3ff]">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="font-[Recoleta] text-xl text-white">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-white/60">{plan.priceNote}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-white/80 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-[Recoleta] text-3xl text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-white/60 text-sm">USD</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <FaCheck className="text-[#00a8ff] text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={"/contact"}>
                  <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white bg-white/10 text-white/80 hover:bg-white/20">
                    Select Plan
                  </button>
                </Link>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
