"use client";

import { AnimatePresence, motion } from "framer-motion";
import { JSX, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaStore,
  FaTimes,
} from "react-icons/fa";

interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  icon: JSX.Element;
  features: string[];
  popular: boolean;
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    cms: string[];
  };
}

interface TechnologyOption {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "cms";
  icon?: string;
}

export default function PricingComponent() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<Record<string, string[]>>(
    {}
  );
  const [showTechModal, setShowTechModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      title: "Landing Page",
      description:
        "High-converting single page website for your product or service",
      price: "$500+",
      priceNote: "Starting at $500",
      icon: <FaGlobe className="text-2xl" />,
      features: [
        "1-3 Page Website",
        "Mobile Responsive Design",
        "SEO Optimization",
        "Contact Form Integration",
        "Social Media Integration",
        "1 Month Support",
        "Google Analytics Setup",
      ],
      popular: false,
      techStack: {
        frontend: ["React/Next.js", "Vue.js", "HTML/CSS/JS"],
        backend: ["Node.js", "Express", "Firebase"],
        database: ["MongoDB", "MySQL", "Supabase"],
        cms: ["WordPress", "Contentful", "Sanity"],
      },
    },
    {
      id: 2,
      title: "Business Website",
      description: "Professional multi-page website for your business",
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
        "3 Months Support",
        "Performance Optimization",
      ],
      popular: true,
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Python/Django", "PHP/Laravel"],
        database: ["PostgreSQL", "MongoDB", "Firebase"],
        cms: ["WordPress", "Strapi", "Prismic"],
      },
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Full-featured online store with payment integration",
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
        "6 Months Support",
      ],
      popular: false,
      techStack: {
        frontend: ["Next.js", "React", "Redux"],
        backend: ["Node.js", "Express", "Stripe API"],
        database: ["MongoDB", "PostgreSQL", "Redis"],
        cms: ["Shopify", "WooCommerce", "Custom"],
      },
    },
    {
      id: 4,
      title: "Web Application",
      description: "Custom web applications tailored to your needs",
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
        "12 Months Support",
      ],
      popular: false,
      techStack: {
        frontend: ["React", "Vue", "Angular"],
        backend: ["Node.js", "Python", "Java", ".NET"],
        database: ["Any Database"],
        cms: ["Custom Solution"],
      },
    },
  ];

  const technologyOptions: TechnologyOption[] = [
    // Frontend
    { id: "react", name: "React/Next.js", category: "frontend" },
    { id: "vue", name: "Vue.js", category: "frontend" },
    { id: "angular", name: "Angular", category: "frontend" },
    { id: "html", name: "HTML/CSS/JS", category: "frontend" },
    { id: "typescript", name: "TypeScript", category: "frontend" },

    // Backend
    { id: "node", name: "Node.js/Express", category: "backend" },
    { id: "python", name: "Python/Django", category: "backend" },
    { id: "php", name: "PHP/Laravel", category: "backend" },
    { id: "java", name: "Java/Spring", category: "backend" },
    { id: "dotnet", name: ".NET", category: "backend" },

    // Database
    { id: "mongodb", name: "MongoDB", category: "database" },
    { id: "postgres", name: "PostgreSQL", category: "database" },
    { id: "mysql", name: "MySQL", category: "database" },
    { id: "firebase", name: "Firebase", category: "database" },
    { id: "redis", name: "Redis", category: "database" },

    // CMS
    { id: "wordpress", name: "WordPress", category: "cms" },
    { id: "shopify", name: "Shopify", category: "cms" },
    { id: "strapi", name: "Strapi", category: "cms" },
    { id: "contentful", name: "Contentful", category: "cms" },
    { id: "custom", name: "Custom CMS", category: "cms" },
  ];

  const handlePlanSelect = (planId: number) => {
    setSelectedPlan(planId);
    const plan = pricingPlans.find((p) => p.id === planId);
    if (plan) {
      setSelectedTech({
        frontend: plan.techStack.frontend,
        backend: plan.techStack.backend,
        database: plan.techStack.database,
        cms: plan.techStack.cms,
      });
    }
  };

  const handleTechSelect = (category: string, tech: string) => {
    setSelectedTech((prev) => {
      const currentTechs = prev[category] || [];
      const isSelected = currentTechs.includes(tech);

      if (isSelected) {
        return {
          ...prev,
          [category]: currentTechs.filter((t) => t !== tech),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentTechs, tech],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      selectedPlan,
      selectedTech,
      formData,
    });
    // Handle form submission
    alert("Thank you! I'll get back to you soon with a quote.");
  };

  const selectedPlanData = selectedPlan
    ? pricingPlans.find((p) => p.id === selectedPlan)
    : null;

  // Liquid glass style
  const glassStyle = (opacity: number = 0.1) => ({
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, ${opacity}) 0%, 
      rgba(255, 255, 255, ${opacity * 0.5}) 100%
    )`,
    backdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.2),
      0 1px 0 rgba(255, 255, 255, 0.05) inset
    `,
  });

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={glassStyle(0.1)}
          >
            <span className="w-2 h-2 bg-[#00a8ff] rounded-full"></span>
            <span className="text-sm font-semibold text-[#00a8ff]">
              Pricing
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. All prices include
            consultation, development, and post-launch support.
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
              className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.id ? "ring-2 ring-[#00a8ff]" : ""
              }`}
              style={glassStyle(0.1)}
              onClick={() => handlePlanSelect(plan.id)}
            >
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
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                  <p className="text-sm text-white/60">{plan.priceNote}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
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

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {selectedPlan === plan.id ? "Selected" : "Select Plan"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Technology Selection Section */}
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="rounded-2xl p-8" style={glassStyle(0.15)}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Technology Stack for{" "}
                    <span className="text-[#00a8ff]">
                      {selectedPlanData?.title}
                    </span>
                  </h3>
                  <p className="text-white/70">
                    Select your preferred technologies or let me recommend the
                    best stack for your project.
                  </p>
                </div>
                <button
                  onClick={() => setShowTechModal(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a8ff]/20 to-transparent border border-[#00a8ff]/30 text-white font-semibold hover:from-[#00a8ff]/30 transition-all"
                >
                  Customize Tech Stack
                </button>
              </div>

              {/* Selected Tech Display */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["frontend", "backend", "database", "cms"].map((category) => (
                  <div key={category} className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3 capitalize">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTech[category]?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 text-white text-sm rounded-full border border-[#00a8ff]/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {(!selectedTech[category] ||
                        selectedTech[category].length === 0) && (
                        <span className="text-white/50 text-sm">
                          Not selected
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8"
          style={glassStyle(0.15)}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Get Your Custom Quote
          </h3>
          <p className="text-white/70 mb-8">
            Fill in the details and I'll provide a personalized quote within 24
            hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">
                  Estimated Budget *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:border-[#00a8ff] transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="$500-$1,000">$500 - $1,000</option>
                  <option value="$1,000-$2,500">$1,000 - $2,500</option>
                  <option value="$2,500-$5,000">$2,500 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                  <option value="custom">Custom Budget</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2">
                  Project Timeline *
                </label>
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:border-[#00a8ff] transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2">
                Project Details
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#00a8ff] transition-colors"
                placeholder="Tell me about your project requirements, goals, and any specific features you need..."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="text-white/70 text-sm">
                {selectedPlan ? (
                  <>
                    Selected:{" "}
                    <span className="text-[#00a8ff] font-semibold">
                      {selectedPlanData?.title}
                    </span>
                    {selectedPlanData?.price !== "Custom" && (
                      <span className="ml-2">
                        ({selectedPlanData?.priceNote})
                      </span>
                    )}
                  </>
                ) : (
                  "No plan selected"
                )}
              </div>
              <button
                type="submit"
                disabled={!selectedPlan}
                className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: !selectedPlan
                    ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                    : "linear-gradient(135deg, #00a8ff 0%, #4dc3ff 100%)",
                  color: "white",
                }}
              >
                Get Custom Quote
                <FaArrowRight />
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Technology Selection Modal */}
      <AnimatePresence>
        {showTechModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowTechModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              style={glassStyle(0.2)}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Select Your Technology Stack
                </h3>
                <button
                  onClick={() => setShowTechModal(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-white/70" />
                </button>
              </div>

              <div className="space-y-8">
                {["frontend", "backend", "database", "cms"].map((category) => (
                  <div key={category}>
                    <h4 className="text-white font-semibold text-lg mb-4 capitalize border-b border-white/10 pb-2">
                      {category} Technologies
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {technologyOptions
                        .filter((tech) => tech.category === category)
                        .map((tech) => {
                          const isSelected = selectedTech[category]?.includes(
                            tech.name
                          );
                          return (
                            <motion.button
                              key={tech.id}
                              type="button"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() =>
                                handleTechSelect(category, tech.name)
                              }
                              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                                isSelected
                                  ? "bg-gradient-to-r from-[#00a8ff]/20 to-[#4dc3ff]/10 border border-[#00a8ff]/40"
                                  : "bg-white/5 border border-white/10 hover:bg-white/10"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-white font-medium">
                                  {tech.name}
                                </span>
                                {isSelected && (
                                  <FaCheck className="text-[#00a8ff]" />
                                )}
                              </div>
                            </motion.button>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedTech({
                      frontend: selectedPlanData?.techStack.frontend || [],
                      backend: selectedPlanData?.techStack.backend || [],
                      database: selectedPlanData?.techStack.database || [],
                      cms: selectedPlanData?.techStack.cms || [],
                    });
                  }}
                  className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  Reset to Default
                </button>
                <button
                  onClick={() => setShowTechModal(false)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] text-white font-semibold"
                >
                  Apply Selection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
