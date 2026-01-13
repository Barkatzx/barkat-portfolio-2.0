"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

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

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How long does it take to complete a typical project?",
      answer:
        "Project timelines vary based on complexity. A landing page typically takes 1-2 weeks, business websites 2-4 weeks, and custom web applications 1-3 months. I provide detailed timelines during our initial consultation.",
      category: "general",
    },
    {
      id: 2,
      question: "What technologies do you primarily work with?",
      answer:
        "I specialize in modern technologies including Next.js, React, TypeScript, Node.js, and WordPress. For databases, I work with MongoDB, PostgreSQL, and Firebase. I also have experience with Flutter for mobile applications.",
      category: "technical",
    },
    {
      id: 3,
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes, all projects include post-launch support. For standard projects, I offer 1-3 months of free support. Extended support plans and maintenance packages are available for long-term collaboration.",
      category: "support",
    },
    {
      id: 4,
      question: "What is your pricing structure?",
      answer:
        "I offer transparent pricing starting at $500 for landing pages, $1,200+ for business websites, and $2,500+ for e-commerce solutions. Custom web applications are quoted based on specific requirements. Hourly rates are available for smaller tasks.",
      category: "pricing",
    },
    {
      id: 5,
      question: "Can you work with existing designs or codebases?",
      answer:
        "Absolutely! I can work with your existing designs, Figma files, or codebases. I'm experienced in code refactoring, optimization, and adding new features to existing projects.",
      category: "technical",
    },
    {
      id: 6,
      question: "How do you ensure project quality and testing?",
      answer:
        "I follow industry best practices including unit testing, integration testing, and end-to-end testing. All code undergoes code review and performance optimization. I also conduct thorough cross-browser and cross-device testing.",
      category: "technical",
    },
    {
      id: 7,
      question: "Do you provide hosting and deployment services?",
      answer:
        "Yes, I can handle hosting setup, domain configuration, SSL certificates, and deployment. I work with platforms like Vercel, Netlify, AWS, and traditional hosting providers based on your needs.",
      category: "support",
    },
    {
      id: 8,
      question: "What is your revision and feedback process?",
      answer:
        "I follow an iterative process with regular check-ins. Each phase includes review periods for feedback. I offer unlimited revisions during the design phase and reasonable revisions during development to ensure complete satisfaction.",
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

  // Glass effect styles
  const glassEffect = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  };

  const glassEffectHover = {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
  };

  const blueGlassEffect = {
    background: "rgba(59, 130, 246, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(59, 130, 246, 0.25)",
    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15)",
  };

  const getCategoryColor = (category: FAQItem["category"]) => {
    switch (category) {
      case "general":
        return "bg-blue-500/20 border-blue-500/30";
      case "technical":
        return "bg-purple-500/20 border-purple-500/30";
      case "pricing":
        return "bg-emerald-500/20 border-emerald-500/30";
      case "support":
        return "bg-amber-500/20 border-amber-500/30";
      default:
        return "bg-blue-500/20 border-blue-500/30";
    }
  };

  const getCategoryIconColor = (category: FAQItem["category"]) => {
    switch (category) {
      case "general":
        return "text-blue-400";
      case "technical":
        return "text-purple-400";
      case "pricing":
        return "text-emerald-400";
      case "support":
        return "text-amber-400";
      default:
        return "text-blue-400";
    }
  };

  return (
    <section className="container mx-auto relative py-10 px-4 overflow-hidden">
      {/* Background Glass Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            style={glassEffect}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-sm" />
              <div className="relative w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <span className="text-sm font-medium text-blue-400">
              Frequently Asked Questions
            </span>
          </motion.div>

          <h2 className="font-[Recoleta] text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Get Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Questions Answered
            </span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Find quick answers to common questions about my services, process,
            and collaboration
          </p>
        </motion.div>

        {/* Category Filter with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div style={glassEffect} className="rounded-2xl p-2">
            <div className="flex flex-wrap justify-center gap-2">
              {["all", "general", "technical", "pricing", "support"].map(
                (category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setActiveCategory(category as FAQItem["category"] | "all")
                    }
                    style={activeCategory === category ? blueGlassEffect : {}}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                      activeCategory === category
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {category === "all" ? "All Questions" : category}
                  </motion.button>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                style={openItem === item.id ? glassEffectHover : glassEffect}
                className="rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    {/* Question Icon with Glass Effect */}
                    <div
                      style={glassEffect}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryColor(item.category)}`}
                    >
                      <FaQuestionCircle
                        className={`text-xl ${getCategoryIconColor(item.category)}`}
                      />
                    </div>

                    <div className="text-left">
                      <h3 className="font-[Recoleta] text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(item.category)} ${getCategoryIconColor(item.category)}`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chevron Icon with Glass Effect */}
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={glassEffect}
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:border-blue-500/30 transition-all duration-300"
                  >
                    <FaChevronDown className="text-white/70 group-hover:text-blue-400 transition-colors duration-300" />
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
                      <div
                        style={blueGlassEffect}
                        className="m-4 p-6 rounded-xl border-t border-white/10"
                      >
                        <p className="text-white/80 leading-relaxed">
                          {item.answer}
                        </p>

                        {/* Decorative elements */}
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full bg-blue-500/50"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-blue-400/70 font-medium">
                            Helpful Information
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
