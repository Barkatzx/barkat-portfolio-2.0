"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCheckCircle,
  FaClipboardCheck,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaDollarSign,
  FaEye,
  FaFilter,
  FaGlobe,
  FaLightbulb,
  FaMagic,
  FaMobileAlt,
  FaMousePointer,
  FaPowerOff,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaSync,
  FaUsers,
} from "react-icons/fa";
import { GiAmplitude } from "react-icons/gi";
import { PiLineSegmentsBold } from "react-icons/pi";
import { SiGoogleanalytics, SiMixpanel, SiTableau } from "react-icons/si";

const analyticsServices = [
  {
    category: "User Analytics",
    items: [
      {
        title: "User Behavior Analysis",
        description:
          "Track how users interact with your product and identify patterns",
        icon: <FaUsers className="w-6 h-6" />,
        metrics: [
          "User journeys",
          "Feature adoption",
          "Retention rates",
          "Churn analysis",
        ],
        tools: ["Mixpanel", "Amplitude", "Heap"],
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Conversion Optimization",
        description:
          "Analyze and optimize conversion funnels for maximum results",
        icon: <FaMousePointer className="w-6 h-6" />,
        metrics: [
          "Funnel analysis",
          "Drop-off points",
          "Conversion rates",
          "A/B testing",
        ],
        tools: ["Google Optimize", "Optimizely", "VWO"],
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
      {
        title: "Cohort Analysis",
        description: "Track user behavior over time and identify trends",
        icon: <FaChartBar className="w-6 h-6" />,
        metrics: [
          "Retention cohorts",
          "Revenue cohorts",
          "Feature adoption cohorts",
          "LTV analysis",
        ],
        tools: ["Amplitude", "Mixpanel", "Chartio"],
        color: "from-[#0097e6] to-[#0062a3]",
      },
    ],
  },
  {
    category: "Business Intelligence",
    items: [
      {
        title: "Revenue Analytics",
        description: "Comprehensive revenue tracking and forecasting",
        icon: <FaDollarSign className="w-6 h-6" />,
        metrics: [
          "MRR/ARR tracking",
          "Churn prediction",
          "LTV calculation",
          "Revenue forecasting",
        ],
        tools: ["ChartMogul", "ProfitWell", "Baremetrics"],
        color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
      },
      {
        title: "Product Analytics",
        description: "Deep insights into product usage and feature performance",
        icon: <FaCogs className="w-6 h-6" />,
        metrics: [
          "Feature usage",
          "Performance metrics",
          "User feedback analysis",
          "Product KPIs",
        ],
        tools: ["Pendo", "Productboard", "Hotjar"],
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Predictive Analytics",
        description: "AI-powered forecasting and trend prediction",
        icon: <FaBrain className="w-6 h-6" />,
        metrics: [
          "Churn prediction",
          "Growth forecasting",
          "Trend analysis",
          "Anomaly detection",
        ],
        tools: ["Google BigQuery", "Amazon Forecast", "Azure ML"],
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
    ],
  },
];

const analyticsPlatforms = [
  {
    icon: <SiGoogleanalytics className="w-8 h-8" />,
    name: "Google Analytics",
    type: "Web Analytics",
    tier: "Enterprise",
  },
  {
    icon: <SiMixpanel className="w-8 h-8" />,
    name: "Mixpanel",
    type: "Product Analytics",
    tier: "Advanced",
  },
  {
    icon: <GiAmplitude className="w-8 h-8" />,
    name: "Amplitude",
    type: "Behavior Analytics",
    tier: "Enterprise",
  },
  {
    icon: <SiTableau className="w-8 h-8" />,
    name: "Tableau",
    type: "Business Intelligence",
    tier: "Enterprise",
  },
  {
    icon: <FaPowerOff className="w-8 h-8" />,
    name: "Power BI",
    type: "Data Visualization",
    tier: "Advanced",
  },
  {
    icon: <PiLineSegmentsBold className="w-8 h-8" />,
    name: "Segment",
    type: "Customer Data Platform",
    tier: "Enterprise",
  },
];

const growthMetrics = [
  {
    metric: "Conversion Rate",
    before: "1.8%",
    after: "3.5%",
    improvement: "+94%",
    description: "Average improvement in conversion rates",
    icon: <FaChartLine className="w-6 h-6" />,
  },
  {
    metric: "Customer Acquisition Cost",
    before: "$45",
    after: "$28",
    improvement: "-38%",
    description: "Reduction in customer acquisition costs",
    icon: <FaDollarSign className="w-6 h-6" />,
  },
  {
    metric: "User Retention",
    before: "25%",
    after: "42%",
    improvement: "+68%",
    description: "Increase in 30-day user retention",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    metric: "Revenue Growth",
    before: "15% MoM",
    after: "32% MoM",
    improvement: "+113%",
    description: "Acceleration in monthly revenue growth",
    icon: <FaRocket className="w-6 h-6" />,
  },
];

const implementationProcess = [
  {
    phase: "Data Strategy",
    title: "Goals & Metrics Definition",
    description: "Define business goals and key performance indicators",
    duration: "1-2 weeks",
    deliverables: [
      "KPI framework",
      "Data requirements",
      "Success metrics",
      "Reporting structure",
    ],
    icon: <FaClipboardCheck className="w-6 h-6" />,
  },
  {
    phase: "Data Integration",
    title: "Tool Implementation & Setup",
    description: "Set up analytics tools and data pipelines",
    duration: "2-4 weeks",
    deliverables: [
      "Tool configuration",
      "Data pipelines",
      "Tracking implementation",
      "Quality assurance",
    ],
    icon: <FaDatabase className="w-6 h-6" />,
  },
  {
    phase: "Insights & Dashboards",
    title: "Analysis & Visualization",
    description: "Create dashboards and generate actionable insights",
    duration: "2-3 weeks",
    deliverables: [
      "Custom dashboards",
      "Insights reports",
      "Alert systems",
      "Recommendations",
    ],
    icon: <FaChartBar className="w-6 h-6" />,
  },
  {
    phase: "Optimization",
    title: "Continuous Improvement",
    description: "Ongoing optimization and strategic guidance",
    duration: "Ongoing",
    deliverables: [
      "Monthly reviews",
      "A/B testing",
      "Growth experiments",
      "Strategy updates",
    ],
    icon: <FaSync className="w-6 h-6" />,
  },
];

const features = [
  {
    category: "Data Collection & Processing",
    items: [
      {
        icon: <FaDatabase />,
        title: "Event Tracking",
        description: "Comprehensive user event collection",
      },
      {
        icon: <FaCloud />,
        title: "Data Warehousing",
        description: "Centralized data storage and processing",
      },
      {
        icon: <FaFilter />,
        title: "Data Cleansing",
        description: "Automated data quality assurance",
      },
      {
        icon: <FaSync />,
        title: "Real-time Processing",
        description: "Instant data processing and updates",
      },
    ],
  },
  {
    category: "Analysis & Insights",
    items: [
      {
        icon: <FaSearch />,
        title: "Advanced Segmentation",
        description: "Deep user segmentation capabilities",
      },
      {
        icon: <FaChartPie />,
        title: "Custom Reports",
        description: "Tailored reporting and analysis",
      },
      {
        icon: <FaBell />,
        title: "Predictive Alerts",
        description: "AI-powered anomaly detection",
      },
      {
        icon: <FaMagic />,
        title: "Automated Insights",
        description: "Machine learning-generated insights",
      },
    ],
  },
  {
    category: "Visualization & Reporting",
    items: [
      {
        icon: <FaEye />,
        title: "Interactive Dashboards",
        description: "Real-time interactive dashboards",
      },
      {
        icon: <FaGlobe />,
        title: "Multi-channel Reporting",
        description: "Cross-platform analytics",
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile Access",
        description: "Mobile-optimized dashboards",
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure Sharing",
        description: "Role-based access and sharing",
      },
    ],
  },
];

const successStories = [
  {
    company: "SaaS Platform",
    industry: "B2B Software",
    challenge: "High churn rate and unclear user behavior patterns",
    solution: "Comprehensive user analytics with predictive churn modeling",
    results: [
      "Churn reduced by 40%",
      "Feature adoption increased 3x",
      "LTV increased by 65%",
    ],
    timeline: "3 months",
  },
  {
    company: "E-commerce Brand",
    industry: "Retail",
    challenge: "Low conversion rates and inefficient marketing spend",
    solution: "Conversion optimization with attribution modeling",
    results: [
      "Conversion rate doubled",
      "CAC reduced by 35%",
      "ROAS increased by 120%",
    ],
    timeline: "2 months",
  },
  {
    company: "Mobile App",
    industry: "Health & Fitness",
    challenge: "Low user retention and engagement",
    solution: "Behavioral analytics with personalized recommendations",
    results: [
      "30-day retention +75%",
      "Daily active users 2.5x",
      "In-app purchases +90%",
    ],
    timeline: "4 months",
  },
];

export default function GrowthAnalyticsPage() {
  const [activeService, setActiveService] = useState<number | null>(null);
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Data Visualization Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.primary}20 2%, transparent 2%),
                             radial-gradient(circle at 75% 75%, ${theme.primaryLight}20 2%, transparent 2%)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Animated Graphs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[200px] border-t-2 border-r-2 border-[#00a8ff]/30 rounded-tr-2xl"
          style={{
            clipPath:
              "polygon(0% 100%, 10% 80%, 20% 60%, 30% 40%, 40% 30%, 50% 50%, 60% 70%, 70% 40%, 80% 20%, 90% 60%, 100% 100%)",
          }}
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[150px] border-t-2 border-l-2 border-[#4dc3ff]/30 rounded-tl-2xl"
          style={{
            clipPath:
              "polygon(0% 100%, 15% 40%, 30% 60%, 45% 20%, 60% 50%, 75% 30%, 90% 80%, 100% 100%)",
          }}
        />
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
              Data-Driven Growth Solutions
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Transform Data Into
            </span>
            <br />
            <span style={gradientText}>Growth Insights</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            We turn complex data into actionable insights that drive measurable
            business growth. From analytics implementation to strategic
            optimization, we help you make data-driven decisions.
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
                Get Free Analytics Audit
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

        {/* Growth Metrics */}
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
                Measurable Growth Impact
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Typical improvements our clients achieve with data-driven
              strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthMetrics.map((metric, index) => (
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

                  {/* Metric Comparison */}
                  <div className="flex items-baseline justify-between mb-2">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: theme.primaryLight }}
                    >
                      {metric.after}
                    </div>
                    <div className="text-sm text-white/50 line-through">
                      {metric.before}
                    </div>
                  </div>

                  {/* Metric Name */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </h3>

                  {/* Improvement */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                      color: theme.primaryLight,
                    }}
                  >
                    <FaArrowRight className="w-3 h-3 rotate-45" />
                    {metric.improvement}
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Comprehensive Analytics Services</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end analytics solutions for every aspect of your business
            </p>
          </div>

          <div className="space-y-8">
            {analyticsServices.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                    }}
                  >
                    {catIndex === 0 ? (
                      <FaChartLine
                        className="w-5 h-5"
                        style={{ color: theme.primaryLight }}
                      />
                    ) : (
                      <FaDollarSign
                        className="w-5 h-5"
                        style={{ color: theme.primaryLight }}
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() =>
                        setActiveService(serviceIndex + catIndex * 3)
                      }
                      onMouseLeave={() => setActiveService(null)}
                      className="group"
                    >
                      <div
                        className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                        style={{
                          ...cardStyle,
                          borderColor:
                            activeService === serviceIndex + catIndex * 3
                              ? `${theme.primary}40`
                              : `${theme.primary}20`,
                        }}
                      >
                        {/* Service Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                            }}
                          >
                            <div className="text-white text-xl">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {service.title}
                            </h4>
                            <p className="text-white/60 text-sm">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="mb-6">
                          <div className="text-sm font-medium text-white/50 mb-2">
                            Key Metrics
                          </div>
                          <div className="space-y-1">
                            {service.metrics.map((metric, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ background: theme.primaryLight }}
                                />
                                <span className="text-white/70">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tools */}
                        <div
                          className="pt-4 border-t"
                          style={{ borderColor: `${theme.primary}20` }}
                        >
                          <div className="text-sm font-medium text-white/50 mb-2">
                            Tools We Use
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full"
                                style={{
                                  background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                                  border: `1px solid ${theme.primary}20`,
                                  color: theme.primaryLight,
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Platforms */}
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
                Enterprise Analytics Platforms
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We work with industry-leading analytics tools and platforms
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 mb-8"
            style={{
              border: `1px solid ${theme.primary}30`,
              background: `linear-gradient(135deg, ${theme.primary}08, ${theme.primaryDark}04)`,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {analyticsPlatforms.map((platform, index) => (
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
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                        color: theme.primaryLight,
                      }}
                    >
                      {platform.icon}
                    </div>
                    <div className="font-semibold text-white mb-1">
                      {platform.name}
                    </div>
                    <div className="text-xs text-white/60 mb-2">
                      {platform.type}
                    </div>
                    <div
                      className="text-xs px-2 py-1 rounded-full inline-block"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                        color: theme.primaryLight,
                      }}
                    >
                      {platform.tier}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Advanced Analytics Features</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive capabilities for data-driven decision making
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
                      <FaLightbulb
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
                Our Analytics Implementation Process
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Structured approach for successful analytics implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationProcess.map((phase, index) => (
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
                        Phase {index + 1} • {phase.duration}
                      </div>
                      <h3 className="font-semibold text-white">
                        {phase.phase}
                      </h3>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-white/60 text-sm">{phase.description}</p>
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
                          <FaCheckCircle
                            className="w-3 h-3"
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
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Data-Driven Success Stories</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real businesses achieving extraordinary growth through analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
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
                  {/* Company & Industry */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {story.company}
                      </h3>
                      <div className="text-sm text-white/50">
                        {story.industry}
                      </div>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                        color: theme.primaryLight,
                      }}
                    >
                      {story.timeline}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-white/50 mb-1">
                        Challenge
                      </div>
                      <p className="text-white/70 text-sm">{story.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/50 mb-1">
                        Solution
                      </div>
                      <p className="text-white/70 text-sm">{story.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    {story.results.map((result, i) => (
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
                Ready to Unlock Your Growth Potential?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Get a free analytics assessment and discover how data-driven
              insights can accelerate your business growth.
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
                Download Analytics Guide
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaChartLine className="w-4 h-4" />
                  <span>Free Analytics Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBrain className="w-4 h-4" />
                  <span>Growth Strategy Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4" />
                  <span>No Commitment Required</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
