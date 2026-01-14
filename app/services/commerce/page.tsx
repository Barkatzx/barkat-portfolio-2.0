"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBox,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaCogs,
  FaCreditCard,
  FaExchangeAlt,
  FaFilter,
  FaGlobe,
  FaMobileAlt,
  FaPercent,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaShoppingCart,
  FaStore,
  FaSync,
  FaTags,
  FaTruck,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { SiPaypal, SiShopify, SiStripe, SiWoo } from "react-icons/si";

const commercePlatforms = [
  {
    platform: "WooCommerce",
    description: "Custom WordPress e-commerce solutions with complete control",
    icon: <SiWoo className="w-10 h-10" />,
    features: [
      "Full customization",
      "WordPress integration",
      "Cost-effective",
      "Scalable",
    ],
    bestFor: ["Growing businesses", "Content-driven sites", "Custom workflows"],
    color: "from-[#00a8ff] to-[#4dc3ff]",
  },
  {
    platform: "Shopify Plus",
    description: "Enterprise-grade commerce with advanced customization",
    icon: <SiShopify className="w-10 h-10" />,
    features: [
      "Headless options",
      "Global scalability",
      "App ecosystem",
      "24/7 support",
    ],
    bestFor: [
      "High-volume stores",
      "International brands",
      "Omnichannel retail",
    ],
    color: "from-[#4dc3ff] to-[#0097e6]",
  },
  {
    platform: "Custom Solutions",
    description: "Bespoke commerce platforms built from the ground up",
    icon: <FaCogs className="w-10 h-10" />,
    features: [
      "Complete ownership",
      "Custom architecture",
      "Unique features",
      "Future-proof",
    ],
    bestFor: [
      "Unique requirements",
      "Large enterprises",
      "Complex integrations",
    ],
    color: "from-[#0097e6] to-[#0062a3]",
  },
];

const features = [
  {
    category: "Shopping Experience",
    items: [
      {
        icon: <FaSearch />,
        title: "Smart Search",
        description: "AI-powered product discovery",
      },
      {
        icon: <FaFilter />,
        title: "Advanced Filters",
        description: "Customizable filtering options",
      },
      {
        icon: <FaTags />,
        title: "Dynamic Pricing",
        description: "Real-time pricing rules",
      },
      {
        icon: <FaUserCheck />,
        title: "Personalization",
        description: "Customer-specific experiences",
      },
    ],
  },
  {
    category: "Checkout & Payments",
    items: [
      {
        icon: <FaCreditCard />,
        title: "Secure Payments",
        description: "Multiple payment gateways",
      },
      {
        icon: <FaPercent />,
        title: "Promotions Engine",
        description: "Advanced discount systems",
      },
      {
        icon: <FaClipboardList />,
        title: "One-Click Checkout",
        description: "Streamlined purchase flow",
      },
      {
        icon: <FaExchangeAlt />,
        title: "Payment Plans",
        description: "Installment and subscription options",
      },
    ],
  },
  {
    category: "Operations & Fulfillment",
    items: [
      {
        icon: <FaTruck />,
        title: "Shipping Automation",
        description: "Real-time carrier integration",
      },
      {
        icon: <FaBox />,
        title: "Inventory Sync",
        description: "Multi-location stock management",
      },
      {
        icon: <FaBell />,
        title: "Order Management",
        description: "Centralized order processing",
      },
      {
        icon: <FaSync />,
        title: "Returns Portal",
        description: "Automated returns and exchanges",
      },
    ],
  },
];

const paymentGateways = [
  {
    icon: <SiStripe className="w-8 h-8" />,
    name: "Stripe",
    fees: "2.9% + $0.30",
    features: ["Global payments", "Subscription billing", "Advanced fraud"],
  },
  {
    icon: <SiPaypal className="w-8 h-8" />,
    name: "PayPal",
    fees: "2.9% + $0.30",
    features: ["Buyer protection", "One-touch payments", "International"],
  },
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    name: "Authorize.net",
    fees: "2.9% + $0.30",
    features: ["Recurring billing", "Advanced fraud", "Virtual terminal"],
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    name: "Braintree",
    fees: "2.9% + $0.30",
    features: ["Multi-currency", "Marketplace payments", "3D Secure"],
  },
];

const successMetrics = [
  {
    metric: "Conversion Rate",
    value: "3.5%",
    industryAvg: "1.8%",
    improvement: "94%",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    metric: "Average Order Value",
    value: "$125",
    industryAvg: "$85",
    improvement: "47%",
    icon: <FaShoppingCart className="w-6 h-6" />,
  },
  {
    metric: "Cart Abandonment",
    value: "25%",
    industryAvg: "69%",
    improvement: "64% reduction",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    metric: "Mobile Revenue",
    value: "65%",
    industryAvg: "45%",
    improvement: "44%",
    icon: <FaMobileAlt className="w-6 h-6" />,
  },
];

const caseStudies = [
  {
    brand: "Luxe Fashion",
    industry: "Luxury Fashion",
    challenge: "Slow site speed and high cart abandonment on mobile",
    solution: "Headless WooCommerce with progressive web app features",
    results: [
      "Mobile conversions increased by 120%",
      "Site speed improved by 300%",
      "AOV increased by 45%",
    ],
    revenue: "+$2.5M",
  },
  {
    brand: "TechGadget Pro",
    industry: "Electronics",
    challenge: "Complex product configurations and international shipping",
    solution: "Custom Shopify Plus with multi-currency and shipping automation",
    results: [
      "International sales +80%",
      "Shipping errors reduced by 95%",
      "Support tickets -60%",
    ],
    revenue: "+$4.8M",
  },
  {
    brand: "Artisan Goods",
    industry: "Handmade Products",
    challenge: "Managing 500+ artisan sellers with different needs",
    solution: "Custom marketplace platform with vendor management",
    results: [
      "Seller onboarding time -70%",
      "Platform fees +200%",
      "Customer satisfaction 4.8/5",
    ],
    revenue: "+$1.2M",
  },
];

const implementationTimeline = [
  {
    phase: "Strategy & Planning",
    weeks: "1-2",
    focus: "Business goals, customer journey, tech stack",
    deliverables: [
      "Requirements doc",
      "Architecture plan",
      "Timeline",
      "Budget",
    ],
    icon: <FaChartLine className="w-5 h-5" />,
  },
  {
    phase: "Design & UX",
    weeks: "2-3",
    focus: "Customer experience, interface design, user flows",
    deliverables: ["Wireframes", "UI Design", "Prototypes", "User testing"],
    icon: <FaUsers className="w-5 h-5" />,
  },
  {
    phase: "Development",
    weeks: "6-12",
    focus: "Platform build, integration, testing",
    deliverables: [
      "Storefront",
      "Admin panel",
      "Integrations",
      "Testing suite",
    ],
    icon: <FaCogs className="w-5 h-5" />,
  },
  {
    phase: "Launch & Growth",
    weeks: "Ongoing",
    focus: "Performance optimization, marketing, analytics",
    deliverables: [
      "Launch plan",
      "Analytics setup",
      "SEO optimization",
      "Growth strategy",
    ],
    icon: <FaRocket className="w-5 h-5" />,
  },
];

export default function CommerceSolutionsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const gradientText = {
    background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight}, ${theme.primaryDark})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardStyle = {
    border: `1px solid ${theme.primary}20`,
    background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
  };

  const accentStyle = {
    background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
  };

  return (
    <div className="container mx-auto text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00a8ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0097e6]/10 rounded-full blur-3xl" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${theme.primary}30 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8"
            style={{
              border: `1px solid ${theme.primary}30`,
              background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={accentStyle}
            />
            <span className="text-sm font-medium tracking-widest uppercase">
              Commerce Solutions
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Drive Revenue with
            </span>
            <br />
            <span style={gradientText}>Intelligent Commerce</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            We build high-converting e-commerce experiences that blend beautiful
            design with powerful technology. From startup stores to enterprise
            marketplaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl overflow-hidden"
              style={accentStyle}
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-3 font-medium text-white text-lg">
                Get Free Store Audit
                <FaArrowRight className="w-5 h-5" />
              </span>
            </motion.button>

            <button
              className="px-8 py-4 rounded-xl border transition-all duration-300 hover:bg-white/5"
              style={{
                borderColor: `${theme.primary}40`,
                background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
              }}
            >
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Proven Performance Metrics
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our commerce solutions consistently outperform industry averages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                  style={cardStyle}
                >
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                    }}
                  >
                    <div style={{ color: theme.primaryLight }}>
                      {metric.icon}
                    </div>
                  </div>

                  {/* Metric Value */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: theme.primaryLight }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm text-white/50">
                      vs {metric.industryAvg} avg
                    </div>
                  </div>

                  {/* Metric Name */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </h3>

                  {/* Improvement */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                      color: theme.primaryLight,
                    }}
                  >
                    <FaArrowRight className="w-3 h-3 rotate-45" />
                    {metric.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Platform Solutions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose the right foundation for your commerce business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercePlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02] cursor-pointer ${
                    selectedPlatform === index
                      ? "ring-2 ring-offset-2 ring-offset-gray-900"
                      : ""
                  }`}
                  style={{
                    ...cardStyle,
                    borderColor:
                      selectedPlatform === index
                        ? `${theme.primary}60`
                        : `${theme.primary}20`,
                  }}
                  onClick={() => setSelectedPlatform(index)}
                >
                  {/* Platform Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={accentStyle}
                    >
                      <div className="text-white text-3xl">{platform.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {platform.platform}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-white/50 mb-3">
                      Key Features
                    </div>
                    <div className="space-y-2">
                      {platform.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm"
                        >
                          <FaCheckCircle
                            className="w-4 h-4"
                            style={{ color: theme.primaryLight }}
                          />
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div>
                    <div className="text-sm font-medium text-white/50 mb-3">
                      Best For
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {platform.bestFor.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                            border: `1px solid ${theme.primary}20`,
                            color: theme.primaryLight,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comprehensive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Comprehensive Commerce Features
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Everything you need to run a successful online store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full rounded-2xl p-6" style={cardStyle}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                      }}
                    >
                      <FaShoppingCart
                        className="w-5 h-5"
                        style={{ color: theme.primaryLight }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        onMouseEnter={() =>
                          setHoveredFeature(itemIndex + catIndex * 4)
                        }
                        onMouseLeave={() => setHoveredFeature(null)}
                        className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${
                          hoveredFeature === itemIndex + catIndex * 4
                            ? "bg-white/5"
                            : ""
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                            border: `1px solid ${theme.primary}20`,
                          }}
                        >
                          <div style={{ color: theme.primaryLight }}>
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">
                            {item.title}
                          </div>
                          <div className="text-sm text-white/60">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Gateways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Payment Gateway Integration
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Secure, flexible payment processing with industry leaders
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 mb-8"
            style={{
              border: `1px solid ${theme.primary}30`,
              background: `linear-gradient(135deg, ${theme.primary}08, ${theme.primaryDark}04)`,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {paymentGateways.map((gateway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className="rounded-xl p-4 h-full transition-all duration-300 hover:scale-105"
                    style={{
                      border: `1px solid ${theme.primary}20`,
                      background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                    }}
                  >
                    {/* Gateway Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                          color: theme.primaryLight,
                        }}
                      >
                        {gateway.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {gateway.name}
                        </div>
                        <div className="text-sm text-white/50">
                          {gateway.fees}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {gateway.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <FaCheckCircle
                            className="w-3 h-3"
                            style={{ color: theme.primaryLight }}
                          />
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                From Vision to Launch
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our structured approach ensures your store launches successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationTimeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                  style={cardStyle}
                >
                  {/* Phase Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={accentStyle}
                    >
                      <div className="text-white">{phase.icon}</div>
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: theme.primaryLight }}
                      >
                        {phase.weeks} weeks
                      </div>
                      <h3 className="font-semibold text-white">
                        {phase.phase}
                      </h3>
                    </div>
                  </div>

                  {/* Focus */}
                  <div className="mb-4">
                    <div className="text-sm text-white/50 mb-1">Focus</div>
                    <p className="text-white/70 text-sm">{phase.focus}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div className="text-sm text-white/50 mb-2">
                      Deliverables
                    </div>
                    <div className="space-y-1">
                      {phase.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: theme.primaryLight }}
                          />
                          <span className="text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Commerce Success Stories</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real businesses achieving extraordinary results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                  style={cardStyle}
                >
                  {/* Brand & Industry */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {study.brand}
                      </h3>
                      <div className="text-sm text-white/50">
                        {study.industry}
                      </div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                        color: theme.primaryLight,
                      }}
                    >
                      {study.revenue}
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-white/50 mb-1">
                      Challenge
                    </div>
                    <p className="text-white/70 text-sm">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-white/50 mb-1">
                      Solution
                    </div>
                    <p className="text-white/70 text-sm">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <FaCheckCircle
                          className="w-3 h-3"
                          style={{ color: theme.primaryLight }}
                        />
                        <span className="text-white/70">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            border: `1px solid ${theme.primary}30`,
            background: `linear-gradient(135deg, ${theme.primary}08, ${theme.primaryDark}04)`,
          }}
        >
          {/* Background glow */}
          <div
            className="absolute -inset-1 opacity-20 blur-xl"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
            }}
          />

          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Ready to Launch Your Store?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Get a free commerce strategy session and discover how we can help
              you build a high-converting online store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl overflow-hidden"
                style={accentStyle}
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3 font-medium text-white text-lg">
                  Book Free Strategy Session
                  <FaArrowRight className="w-5 h-5" />
                </span>
              </motion.button>

              <button
                className="px-8 py-4 rounded-xl border transition-all duration-300 hover:bg-white/5"
                style={{
                  borderColor: `${theme.primary}40`,
                  background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                }}
              >
                Get Pricing Guide
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>Free Store Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="w-4 h-4" />
                  <span>ROI Projection</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStore className="w-4 h-4" />
                  <span>90-Day Launch Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
