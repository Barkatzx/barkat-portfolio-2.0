"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaChevronDown,
  FaCogs,
  FaHeadset,
  FaLayerGroup,
  FaQuestionCircle,
  FaTag,
} from "react-icons/fa";
import Glass from "./ui/Glass";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "general" | "technical" | "pricing" | "support";
}

export default function FAQComponent() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    FAQItem["category"] | "all"
  >("all");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on scope and complexity. Launch websites typically take 1–2 weeks, growth-focused business websites 2–4 weeks, and custom digital systems or web applications usually range from 4–12 weeks. A clear timeline is defined during the discovery and planning phase before development begins.",
      category: "general",
    },
    {
      id: 2,
      question: "What technologies do you use?",
      answer:
        "We work with modern, production-ready technologies selected based on project needs. Our core stack includes Next.js, React, TypeScript, Node.js, and WordPress for CMS-driven platforms. We also work with scalable databases and cloud infrastructure to ensure performance, security, and long-term maintainability.",
      category: "technical",
    },
    {
      id: 3,
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes. Every project includes post-launch support to ensure a smooth handover. Ongoing maintenance, performance monitoring, and feature enhancements are available through flexible support and retainer plans for teams that require long-term partnership.",
      category: "support",
    },
    {
      id: 4,
      question: "How does pricing work?",
      answer:
        "Pricing is transparent and scope-based. Projects typically start from defined baseline budgets for launch websites, business platforms, and e-commerce solutions. Custom applications and complex systems are quoted after discovery. Final pricing reflects requirements, integrations, and delivery timelines.",
      category: "pricing",
    },
    {
      id: 5,
      question: "Can you work with existing designs or codebases?",
      answer:
        "Absolutely. We frequently collaborate with existing teams and assets. This includes working from Figma designs, improving legacy codebases, refactoring for performance, or extending existing platforms with new features.",
      category: "technical",
    },
    {
      id: 6,
      question: "How do you ensure quality and reliability?",
      answer:
        "Quality is built into the process. Every project follows structured development practices, performance optimization, and thorough testing across devices and browsers. Code is written with scalability, security, and long-term maintainability in mind.",
      category: "technical",
    },
    {
      id: 7,
      question: "Do you handle hosting and deployment?",
      answer:
        "Yes. We manage deployment, hosting configuration, SSL setup, and production readiness. Platforms are selected based on performance and scalability requirements, ensuring a stable and secure launch environment.",
      category: "support",
    },
    {
      id: 8,
      question: "How does feedback and revision work?",
      answer:
        "Our process is collaborative and structured. Projects are delivered in phases with defined feedback checkpoints. Revisions are handled efficiently during each stage to ensure alignment, clarity, and high-quality outcomes without unnecessary delays.",
      category: "general",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const getCategoryIcon = (category: FAQItem["category"] | "all") => {
    switch (category) {
      case "all":
        return FaLayerGroup;
      case "general":
        return FaQuestionCircle;
      case "technical":
        return FaCogs;
      case "pricing":
        return FaTag;
      case "support":
        return FaHeadset;
      default:
        return FaQuestionCircle;
    }
  };

  const categoryData = [
    { id: "all", label: "All Questions", count: faqItems.length },
    {
      id: "general",
      label: "General",
      count: faqItems.filter((item) => item.category === "general").length,
    },
    {
      id: "technical",
      label: "Technical",
      count: faqItems.filter((item) => item.category === "technical").length,
    },
    {
      id: "pricing",
      label: "Pricing",
      count: faqItems.filter((item) => item.category === "pricing").length,
    },
    {
      id: "support",
      label: "Support",
      count: faqItems.filter((item) => item.category === "support").length,
    },
  ];

  return (
    <section>
      <div className="container mx-auto max-w-7xl">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <span className="text-sm text-white/80">Knowledge Base</span>
            </div>
          </motion.div>

          <h1 className="font-[Recoleta] text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Question and Answer
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Detailed insights about our services, process, and how we
            collaborate to deliver exceptional results
          </p>
        </motion.div>

        {/* Modern Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categoryData.map((category) => {
              const Icon = getCategoryIcon(
                category.id as FAQItem["category"] | "all"
              );
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredCategory(category.id)}
                  onHoverEnd={() => setHoveredCategory(null)}
                  onClick={() =>
                    setActiveCategory(
                      category.id as FAQItem["category"] | "all"
                    )
                  }
                  className="relative min-w-[160px]"
                >
                  <Glass
                    variant="white"
                    className={`px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 group ${isActive ? "border-blue-500/30" : ""}`}
                  >
                    {/* Icon */}
                    <div className="relative">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? "bg-white/5" : "bg-white/[0.02]"} group-hover:bg-white/5 transition-all duration-300`}
                      >
                        <Icon
                          className={`text-lg ${isActive ? "text-blue-400" : "text-white/40"} group-hover:text-white/60 transition-colors duration-300`}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-medium ${isActive ? "text-white" : "text-white/70"} group-hover:text-white transition-colors duration-300`}
                        >
                          {category.label}
                        </span>
                      </div>
                      <div className="text-xs text-white/40 mt-1">
                        {category.count}{" "}
                        {category.count === 1 ? "question" : "questions"}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-full"
                      />
                    )}
                  </Glass>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Glass
                variant="white"
                className={`h-full rounded-xl overflow-hidden transition-all duration-300 ${openItem === item.id ? "border-blue-500/30" : ""}`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 flex items-start justify-between group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-blue-400 to-cyan-600`}
                      />
                      <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {item.category}
                      </span>
                    </div>

                    <div className="text-left">
                      <h3 className="font-[Recoleta] text-xl text-white group-hover:text-blue-400 transition-colors duration-300 mb-2 pr-8">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.02] group-hover:bg-white/5 ml-4 flex-shrink-0"
                  >
                    <FaChevronDown className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-3 border-l-2 border-blue-500/30">
                          <p className="text-white/70 leading-relaxed">
                            {item.answer}
                          </p>

                          {/* Elegant separator */}
                          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                            <div className="flex gap-1">
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500/50 to-blue-400/50"
                                />
                              ))}
                            </div>
                            <span className="text-xs font-medium text-blue-400/70">
                              Detailed Answer
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
