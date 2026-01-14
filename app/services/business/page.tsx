"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBuilding,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
  FaClipboardCheck,
  FaClock,
  FaCloud,
  FaCode,
  FaCogs,
  FaCubes,
  FaDatabase,
  FaFileInvoice,
  FaInfinity,
  FaLayerGroup,
  FaLock,
  FaMobileAlt,
  FaNetworkWired,
  FaRocket,
  FaShieldAlt,
  FaShoppingCart,
  FaSync,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { SiHubspot, SiSalesforce, SiWoo, SiWordpress } from "react-icons/si";

const businessSystems = [
  {
    category: "Content Management",
    systems: [
      {
        title: "Custom WordPress CMS",
        description:
          "Tailored content management systems built on WordPress for complete control",
        icon: <SiWordpress className="w-8 h-8" />,
        features: [
          "Custom post types",
          "Advanced fields",
          "Role management",
          "SEO optimized",
        ],
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Headless CMS Solutions",
        description: "Modern decoupled CMS for omnichannel content delivery",
        icon: <FaCubes className="w-8 h-8" />,
        features: ["API-first", "Multi-channel", "Scalable", "Future-proof"],
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
    ],
  },
  {
    category: "Commerce & Sales",
    systems: [
      {
        title: "WooCommerce Enterprise",
        description:
          "Scalable e-commerce solutions with custom workflows and integrations",
        icon: <SiWoo className="w-8 h-8" />,
        features: [
          "Custom checkout",
          "Inventory sync",
          "Payment gateways",
          "Tax automation",
        ],
        color: "from-[#0097e6] to-[#0062a3]",
      },
      {
        title: "Sales Automation",
        description: "Automated sales funnels and customer journey management",
        icon: <FaChartLine className="w-8 h-8" />,
        features: [
          "Lead scoring",
          "Email automation",
          "CRM integration",
          "Analytics",
        ],
        color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
      },
    ],
  },
  {
    category: "Operational Excellence",
    systems: [
      {
        title: "Process Automation",
        description:
          "Automate repetitive tasks and streamline business operations",
        icon: <FaCogs className="w-8 h-8" />,
        features: [
          "Workflow automation",
          "Approval systems",
          "Document generation",
          "Task routing",
        ],
        color: "from-[#4dc3ff] to-[#00a8ff]",
      },
      {
        title: "Data Integration Hub",
        description:
          "Connect disparate systems and create single source of truth",
        icon: <FaNetworkWired className="w-8 h-8" />,
        features: [
          "API integrations",
          "Data sync",
          "Real-time updates",
          "Error handling",
        ],
        color: "from-[#0097e6] to-[#4dc3ff]",
      },
    ],
  },
];

const integrationPartners = [
  {
    icon: <FaMicrosoft className="w-8 h-8" />,
    name: "Microsoft 365",
    category: "Productivity",
  },
  {
    icon: <SiSalesforce className="w-8 h-8" />,
    name: "Salesforce",
    category: "CRM",
  },
  {
    icon: <SiHubspot className="w-8 h-8" />,
    name: "HubSpot",
    category: "Marketing",
  },
  {
    icon: <FaShoppingCart className="w-8 h-8" />,
    name: "QuickBooks",
    category: "Accounting",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    name: "Slack",
    category: "Communication",
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    name: "Google Analytics",
    category: "Analytics",
  },
  {
    icon: <FaFileInvoice className="w-8 h-8" />,
    name: "Stripe",
    category: "Payments",
  },
  {
    icon: <FaBell className="w-8 h-8" />,
    name: "Zapier",
    category: "Automation",
  },
];

const implementationProcess = [
  {
    phase: "Analysis",
    title: "Business Process Mapping",
    description:
      "Understand current workflows and identify optimization opportunities",
    duration: "1-2 weeks",
    deliverables: [
      "Process diagrams",
      "Pain point analysis",
      "Requirement specs",
      "Success metrics",
    ],
    icon: <FaChartBar className="w-6 h-6" />,
  },
  {
    phase: "Design",
    title: "System Architecture",
    description:
      "Design scalable architecture with user experience at the forefront",
    duration: "2-3 weeks",
    deliverables: [
      "System architecture",
      "UI/UX designs",
      "Database design",
      "Integration plan",
    ],
    icon: <FaLayerGroup className="w-6 h-6" />,
  },
  {
    phase: "Development",
    title: "Agile Implementation",
    description: "Iterative development with continuous feedback and testing",
    duration: "4-12 weeks",
    deliverables: [
      "Core functionality",
      "Integration points",
      "User training",
      "Documentation",
    ],
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    phase: "Launch & Support",
    title: "Deployment & Optimization",
    description: "Smooth launch, user adoption, and ongoing optimization",
    duration: "Ongoing",
    deliverables: [
      "Production launch",
      "Performance monitoring",
      "Support system",
      "Optimization roadmap",
    ],
    icon: <FaRocket className="w-6 h-6" />,
  },
];

const businessBenefits = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Operational Efficiency",
    description: "Automate manual processes and reduce operational costs",
    metrics: ["40-60%", "cost reduction"],
    gradient: "from-[#00a8ff] to-[#4dc3ff]",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Team Productivity",
    description: "Empower teams with intuitive tools and streamlined workflows",
    metrics: ["3x", "productivity boost"],
    gradient: "from-[#4dc3ff] to-[#0097e6]",
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Data-Driven Decisions",
    description: "Transform raw data into actionable business insights",
    metrics: ["Real-time", "analytics"],
    gradient: "from-[#0097e6] to-[#0062a3]",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security with industry compliance",
    metrics: ["99.9%", "uptime guarantee"],
    gradient: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
  },
];

const caseStudies = [
  {
    industry: "Manufacturing",
    challenge: "Manual inventory tracking causing stockouts and overstock",
    solution:
      "Custom inventory management with real-time tracking and predictive ordering",
    results: [
      "30% reduction in inventory costs",
      "99% order accuracy",
      "Real-time visibility",
    ],
    duration: "10 weeks",
  },
  {
    industry: "Professional Services",
    challenge:
      "Disconnected systems causing billing errors and client frustration",
    solution: "Integrated CRM, project management, and billing system",
    results: ["50% faster billing", "100% accuracy", "Client portal access"],
    duration: "8 weeks",
  },
  {
    industry: "Healthcare",
    challenge: "Paper-based patient records causing inefficiencies and errors",
    solution:
      "HIPAA-compliant patient management system with telemedicine integration",
    results: ["70% faster processing", "Zero data errors", "Remote access"],
    duration: "12 weeks",
  },
];

const systemFeatures = [
  {
    category: "Core Features",
    features: [
      {
        icon: <FaUserTie />,
        title: "Role-based Access",
        description: "Granular permissions for different user roles",
      },
      {
        icon: <FaSync />,
        title: "Real-time Sync",
        description: "Instant data synchronization across all systems",
      },
      {
        icon: <FaChartLine />,
        title: "Advanced Analytics",
        description: "Custom dashboards and business intelligence",
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile Ready",
        description: "Fully responsive design for all devices",
      },
    ],
  },
  {
    category: "Security & Compliance",
    features: [
      {
        icon: <FaLock />,
        title: "Enterprise Security",
        description: "End-to-end encryption and security protocols",
      },
      {
        icon: <FaShieldAlt />,
        title: "Compliance Ready",
        description: "GDPR, HIPAA, SOC2 compliance features",
      },
      {
        icon: <FaClock />,
        title: "Audit Trails",
        description: "Complete activity logging and audit trails",
      },
      {
        icon: <FaBell />,
        title: "Alert Systems",
        description: "Real-time notifications for critical events",
      },
    ],
  },
  {
    category: "Scalability & Support",
    features: [
      {
        icon: <FaInfinity />,
        title: "Scalable Architecture",
        description: "Designed to grow with your business",
      },
      {
        icon: <FaCloud />,
        title: "Cloud Native",
        description: "Built for modern cloud infrastructure",
      },
      {
        icon: <FaCogs />,
        title: "Automated Updates",
        description: "Seamless updates without downtime",
      },
      {
        icon: <FaClipboardCheck />,
        title: "24/7 Support",
        description: "Round-the-clock technical support",
      },
    ],
  },
];

export default function BusinessSystemsPage() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // const theme = {
  //   primary: "#00a8ff",
  //   primaryLight: "#4dc3ff",
  //   primaryDark: "#0097e6",
  // };

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#00a8ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#0097e6]/10 rounded-full blur-3xl" />

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 48%, ${theme.primary}20 50%, transparent 52%)`,
              backgroundSize: "50px 50px",
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
              Business Systems Solutions
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span style={gradientText}>With Smart Systems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            We design, build, and integrate custom business systems that
            streamline operations, empower teams, and drive growth. From CRM to
            ERP, we create solutions that work for you.
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
                Get System Assessment
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
              View Case Studies
            </button>
          </div>
        </motion.div>

        {/* Business Benefits */}
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
                Transform Your Business Operations
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Experience tangible improvements across your entire organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="h-full rounded-2xl p-6 text-center transition-all duration-500 group-hover:scale-[1.02]"
                  style={cardStyle}
                >
                  {/* Icon with Gradient */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                    }}
                  >
                    <div className="text-white text-2xl">{benefit.icon}</div>
                  </div>

                  {/* Metrics */}
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: theme.primaryLight }}
                  >
                    {benefit.metrics[0]}
                  </div>
                  <div className="text-sm text-white/50 mb-3">
                    {benefit.metrics[1]}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Comprehensive Business Systems</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Tailored solutions for every aspect of your business operations
            </p>
          </div>

          <div className="space-y-8">
            {businessSystems.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                    }}
                  >
                    <FaBuilding
                      className="w-5 h-5"
                      style={{ color: theme.primaryLight }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Systems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.systems.map((system, sysIndex) => (
                    <motion.div
                      key={sysIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: sysIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div
                        className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                        style={cardStyle}
                      >
                        {/* System Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                            }}
                          >
                            <div className="text-white text-2xl">
                              {system.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {system.title}
                            </h4>
                            <p className="text-white/60 text-sm">
                              {system.description}
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          {system.features.map((feature, i) => (
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

                        {/* Bottom accent */}
                        <div
                          className="mt-6 pt-4 border-t transition-all duration-300"
                          style={{ borderColor: `${theme.primary}20` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration Partners */}
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
                Seamless Integration Ecosystem
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Connect with the tools your business already uses
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 mb-8"
            style={{
              border: `1px solid ${theme.primary}30`,
              background: `linear-gradient(135deg, ${theme.primary}08, ${theme.primaryDark}04)`,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrationPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div
                    className="rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                    style={{
                      border: `1px solid ${theme.primary}20`,
                      background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 mx-auto">
                      <div style={{ color: theme.primaryLight }}>
                        {partner.icon}
                      </div>
                    </div>
                    <div className="font-semibold text-white mb-1">
                      {partner.name}
                    </div>
                    <div className="text-xs text-white/50">
                      {partner.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Implementation Process */}
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
                Proven Implementation Process
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Structured approach ensuring success from day one
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 opacity-30"
              style={{
                background: `linear-gradient(to bottom, ${theme.primary}, ${theme.primaryLight}, ${theme.primaryDark})`,
              }}
            />

            <div className="space-y-8">
              {implementationProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  onMouseEnter={() => setActiveProcess(index)}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-900 z-10 transition-all duration-300"
                    style={{
                      background:
                        activeProcess === index
                          ? theme.primary
                          : `${theme.primary}40`,
                      borderColor:
                        activeProcess === index
                          ? `${theme.primary}80`
                          : "transparent",
                      boxShadow:
                        activeProcess === index
                          ? `0 0 20px ${theme.primary}80`
                          : "none",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div
                      className={`rounded-2xl p-6 transition-all duration-500 ${activeProcess === index ? "scale-[1.02]" : ""}`}
                      style={{
                        border: `1px solid ${activeProcess === index ? `${theme.primary}40` : `${theme.primary}20`}`,
                        background:
                          activeProcess === index
                            ? `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`
                            : `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                      }}
                    >
                      {/* Phase Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={accentStyle}
                        >
                          <div className="text-white text-xl">{step.icon}</div>
                        </div>
                        <div>
                          <div
                            className="text-sm font-medium"
                            style={{ color: theme.primaryLight }}
                          >
                            {step.phase} • {step.duration}
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 mb-6">{step.description}</p>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-sm"
                          >
                            <FaCheckCircle
                              className="w-4 h-4"
                              style={{ color: theme.primaryLight }}
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
          </div>
        </motion.div>

        {/* System Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Enterprise-Grade Features</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Built with the needs of modern businesses in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemFeatures.map((category, catIndex) => (
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
                      <FaCogs
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
                    {category.features.map((feature, featIndex) => (
                      <motion.div
                        key={featIndex}
                        onMouseEnter={() =>
                          setHoveredFeature(featIndex + catIndex * 4)
                        }
                        onMouseLeave={() => setHoveredFeature(null)}
                        className={`flex items-start gap-4 p-3 rounded-lg transition-all duration-300 ${
                          hoveredFeature === featIndex + catIndex * 4
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
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">
                            {feature.title}
                          </div>
                          <div className="text-sm text-white/60">
                            {feature.description}
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
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Industry Success Stories
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transforming businesses across industries
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
                  {/* Industry Tag */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                      color: theme.primaryLight,
                    }}
                  >
                    {study.industry}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-white/50 mb-2">
                        Challenge
                      </div>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/50 mb-2">
                        Solution
                      </div>
                      <p className="text-white/70 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-medium text-white/50">
                      Results
                    </div>
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

                  {/* Duration */}
                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: `${theme.primary}20` }}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/50">Implementation</span>
                      <span
                        className="font-medium"
                        style={{ color: theme.primaryLight }}
                      >
                        {study.duration}
                      </span>
                    </div>
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
                Ready to Transform Your Business Systems?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Schedule a free business systems assessment and discover how we
              can optimize your operations.
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
                  Book Free Assessment
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
                Download Whitepaper
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>Free Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4" />
                  <span>No Sales Pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="w-4 h-4" />
                  <span>ROI Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
