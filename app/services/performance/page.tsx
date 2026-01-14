"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBolt,
  FaChartLine,
  FaCheckCircle,
  FaClipboardCheck,
  FaCloud,
  FaCode,
  FaCogs,
  FaDatabase,
  FaEye,
  FaGlobe,
  FaHistory,
  FaLock,
  FaMobileAlt,
  FaNetworkWired,
  FaRobot,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaSync,
  FaUsers,
} from "react-icons/fa";
import {
  SiAuth0,
  SiCloudflare,
  SiDatadog,
  SiGooglesearchconsole,
} from "react-icons/si";

const performanceMetrics = [
  {
    metric: "Page Load Time",
    value: "< 1s",
    description: "Lightning-fast page rendering",
    improvement: "300% faster",
    icon: <FaBolt className="w-6 h-6" />,
    color: "from-[#00a8ff] to-[#4dc3ff]",
  },
  {
    metric: "Core Web Vitals",
    value: "100/100",
    description: "Perfect Google performance score",
    improvement: "SEO ranking boost",
    icon: <FaChartLine className="w-6 h-6" />,
    color: "from-[#4dc3ff] to-[#0097e6]",
  },
  {
    metric: "Uptime",
    value: "99.99%",
    description: "Enterprise-grade reliability",
    improvement: "< 5 min downtime/year",
    icon: <FaServer className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#0062a3]",
  },
  {
    metric: "Security Score",
    value: "A+",
    description: "Industry-leading security",
    improvement: "Zero breaches",
    icon: <FaLock className="w-6 h-6" />,
    color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
  },
];

const performanceServices = [
  {
    category: "Performance Optimization",
    items: [
      {
        title: "Core Web Vitals Audit",
        description: "Comprehensive analysis of LCP, FID, CLS scores",
        icon: <FaChartLine className="w-6 h-6" />,
        features: [
          "Performance audit",
          "Opportunity analysis",
          "Action plan",
          "Monitoring setup",
        ],
        metrics: ["60% score improvement", "Faster page loads"],
      },
      {
        title: "Image & Asset Optimization",
        description: "Advanced compression and modern format conversion",
        icon: <FaGlobe className="w-6 h-6" />,
        features: [
          "WebP conversion",
          "Lazy loading",
          "CDN optimization",
          "Caching strategy",
        ],
        metrics: ["80% smaller images", "Faster loading"],
      },
      {
        title: "Code & Bundle Optimization",
        description: "JavaScript bundle analysis and optimization",
        icon: <FaCode className="w-6 h-6" />,
        features: [
          "Tree shaking",
          "Code splitting",
          "Minification",
          "Bundle analysis",
        ],
        metrics: ["70% smaller bundles", "Faster execution"],
      },
    ],
  },
  {
    category: "Security Services",
    items: [
      {
        title: "Security Audit & Penetration Testing",
        description:
          "Comprehensive security assessment and vulnerability testing",
        icon: <FaShieldAlt className="w-6 h-6" />,
        features: [
          "Vulnerability scanning",
          "Penetration testing",
          "Security report",
          "Remediation plan",
        ],
        metrics: ["Zero vulnerabilities", "Compliance ready"],
      },
      {
        title: "DDoS Protection & WAF",
        description:
          "Enterprise-grade Web Application Firewall and DDoS mitigation",
        icon: <FaNetworkWired className="w-6 h-6" />,
        features: [
          "DDoS protection",
          "WAF rules",
          "Bot management",
          "Rate limiting",
        ],
        metrics: ["100% attack prevention", "Zero downtime"],
      },
      {
        title: "Data Protection & Encryption",
        description: "End-to-end encryption and data security measures",
        icon: <FaLock className="w-6 h-6" />,
        features: [
          "SSL/TLS implementation",
          "Data encryption",
          "Secure APIs",
          "Compliance checks",
        ],
        metrics: ["GDPR ready", "HIPAA compliant"],
      },
    ],
  },
];

const securityFeatures = [
  {
    category: "Threat Prevention",
    items: [
      {
        icon: <FaEye />,
        title: "Real-time Monitoring",
        description: "24/7 security monitoring and alerting",
      },
      {
        icon: <FaRobot />,
        title: "AI Threat Detection",
        description: "Machine learning-based anomaly detection",
      },
      {
        icon: <FaSearch />,
        title: "Vulnerability Scanning",
        description: "Automated security scanning",
      },
      {
        icon: <FaBell />,
        title: "Security Alerts",
        description: "Instant notification of security events",
      },
    ],
  },
  {
    category: "Performance Features",
    items: [
      {
        icon: <FaBolt />,
        title: "Edge Caching",
        description: "Global CDN with edge computing",
      },
      {
        icon: <FaSync />,
        title: "Load Balancing",
        description: "Intelligent traffic distribution",
      },
      {
        icon: <FaDatabase />,
        title: "Database Optimization",
        description: "Query optimization and indexing",
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile Optimization",
        description: "Mobile-first performance tuning",
      },
    ],
  },
  {
    category: "Compliance & Monitoring",
    items: [
      {
        icon: <FaClipboardCheck />,
        title: "Compliance Audits",
        description: "GDPR, HIPAA, PCI DSS compliance",
      },
      {
        icon: <FaHistory />,
        title: "Audit Trails",
        description: "Complete activity logging",
      },
      {
        icon: <FaUsers />,
        title: "Access Control",
        description: "Role-based permissions system",
      },
      {
        icon: <FaCloud />,
        title: "Backup & Recovery",
        description: "Automated backups and disaster recovery",
      },
    ],
  },
];

const toolsPlatforms = [
  {
    icon: <SiCloudflare className="w-8 h-8" />,
    name: "Cloudflare",
    type: "Security & CDN",
  },
  {
    icon: <SiGooglesearchconsole className="w-8 h-8" />,
    name: "Google Lighthouse",
    type: "Performance Audit",
  },
  {
    icon: <SiAuth0 className="w-8 h-8" />,
    name: "Auth0",
    type: "Authentication",
  },
  {
    icon: <SiDatadog className="w-8 h-8" />,
    name: "Datadog",
    type: "Monitoring",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    name: "OWASP Tools",
    type: "Security Testing",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    name: "GTmetrix",
    type: "Performance Testing",
  },
];

const caseStudies = [
  {
    client: "FinTech Platform",
    challenge: "Slow API responses and security compliance requirements",
    solution: "Performance optimization + SOC2 compliance implementation",
    results: [
      "API response time -80%",
      "SOC2 compliance achieved",
      "Zero security incidents",
    ],
    impact: "4.8/5 customer satisfaction",
  },
  {
    client: "E-commerce Giant",
    challenge: "Black Friday traffic spikes and DDoS attacks",
    solution: "Scalable infrastructure + enterprise DDoS protection",
    results: [
      "Handled 500% traffic spike",
      "Zero downtime during attacks",
      "Page speed +60%",
    ],
    impact: "$2M+ saved revenue",
  },
  {
    client: "Healthcare Portal",
    challenge: "HIPAA compliance and mobile performance issues",
    solution: "HIPAA-compliant infrastructure + mobile optimization",
    results: [
      "HIPAA certification achieved",
      "Mobile load time -70%",
      "100% data security",
    ],
    impact: "Patient satisfaction +90%",
  },
];

const optimizationProcess = [
  {
    phase: "Assessment",
    title: "Comprehensive Audit",
    description: "Detailed analysis of performance and security posture",
    duration: "3-5 days",
    deliverables: [
      "Performance report",
      "Security assessment",
      "Risk analysis",
      "Action plan",
    ],
    icon: <FaSearch className="w-6 h-6" />,
  },
  {
    phase: "Implementation",
    title: "Strategic Optimization",
    description: "Targeted improvements and security enhancements",
    duration: "2-4 weeks",
    deliverables: [
      "Performance fixes",
      "Security patches",
      "Infrastructure updates",
      "Monitoring setup",
    ],
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    phase: "Testing",
    title: "Rigorous Validation",
    description: "Comprehensive testing and validation of improvements",
    duration: "1-2 weeks",
    deliverables: [
      "Load testing",
      "Security testing",
      "Performance validation",
      "Compliance checks",
    ],
    icon: <FaCheckCircle className="w-6 h-6" />,
  },
  {
    phase: "Monitoring",
    title: "Ongoing Protection",
    description: "Continuous monitoring and proactive maintenance",
    duration: "Ongoing",
    deliverables: [
      "24/7 monitoring",
      "Regular audits",
      "Performance reports",
      "Security updates",
    ],
    icon: <FaEye className="w-6 h-6" />,
  },
];

export default function PerformanceSecurityPage() {
  const [activeTab, setActiveTab] = useState<"performance" | "security">(
    "performance"
  );
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
        {/* Security Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.primary}30 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-[#00a8ff]/20 via-transparent to-[#4dc3ff]/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-l from-[#0097e6]/20 via-transparent to-[#00a8ff]/10 rounded-full blur-3xl"
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
              Performance & Security Solutions
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Fast, Secure &
            </span>
            <br />
            <span style={gradientText}>Unbreakable</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            We optimize performance to lightning speeds while implementing
            enterprise-grade security. Because speed without security is risky,
            and security without speed is ineffective.
          </p>

          {/* Tab Navigation */}
          <div
            className="inline-flex p-1 rounded-xl mb-8"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
            }}
          >
            <button
              onClick={() => setActiveTab("performance")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "performance"
                  ? "text-white"
                  : "text-white/60 hover:text-white/80"
              }`}
              style={{
                background:
                  activeTab === "performance"
                    ? `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`
                    : "transparent",
              }}
            >
              <span className="flex items-center gap-2">
                <FaBolt className="w-4 h-4" />
                Performance
              </span>
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "security"
                  ? "text-white"
                  : "text-white/60 hover:text-white/80"
              }`}
              style={{
                background:
                  activeTab === "security"
                    ? `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})`
                    : "transparent",
              }}
            >
              <span className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4" />
                Security
              </span>
            </button>
          </div>
        </motion.div>

        {/* Performance Metrics */}
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
                Enterprise-Grade Metrics
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Performance and security benchmarks that exceed industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
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
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: theme.primaryLight }}
                  >
                    {metric.value}
                  </div>

                  {/* Metric Name */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-3">
                    {metric.description}
                  </p>

                  {/* Improvement */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ color: theme.primaryLight }}
                  >
                    <FaArrowRight className="w-3 h-3 rotate-45" />
                    {metric.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Comprehensive Services</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end solutions for performance optimization and security
              hardening
            </p>
          </div>

          <div className="space-y-8">
            {performanceServices.map((category, catIndex) => (
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
                      <FaBolt
                        className="w-5 h-5"
                        style={{ color: theme.primaryLight }}
                      />
                    ) : (
                      <FaShieldAlt
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
                      className="group"
                    >
                      <div
                        className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                        style={cardStyle}
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

                        {/* Features */}
                        <div className="mb-6">
                          <div className="text-sm font-medium text-white/50 mb-2">
                            Features
                          </div>
                          <div className="space-y-1">
                            {service.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ background: theme.primaryLight }}
                                />
                                <span className="text-white/70">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div
                          className="pt-4 border-t"
                          style={{ borderColor: `${theme.primary}20` }}
                        >
                          <div className="text-sm font-medium text-white/50 mb-1">
                            Results
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.metrics.map((metric, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full"
                                style={{
                                  background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                                  border: `1px solid ${theme.primary}20`,
                                  color: theme.primaryLight,
                                }}
                              >
                                {metric}
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

        {/* Features Grid */}
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
                Advanced Features
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive tools and capabilities for peak performance and
              security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((category, catIndex) => (
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

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Enterprise Tools & Platforms</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Industry-leading technologies for maximum performance and security
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
              {toolsPlatforms.map((tool, index) => (
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
                      {tool.icon}
                    </div>
                    <div className="font-semibold text-white mb-1">
                      {tool.name}
                    </div>
                    <div className="text-xs text-white/50">{tool.type}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Optimization Process */}
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
                Our 4-Phase Optimization Process
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Structured methodology for systematic improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {optimizationProcess.map((phase, index) => (
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
              <span style={gradientText}>
                Security & Performance Success Stories
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real businesses achieving extraordinary security and performance
              results
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
                  {/* Client & Impact */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {study.client}
                      </h3>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                        color: theme.primaryLight,
                      }}
                    >
                      {study.impact}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-white/50 mb-1">
                        Challenge
                      </div>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/50 mb-1">
                        Solution
                      </div>
                      <p className="text-white/70 text-sm">{study.solution}</p>
                    </div>
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
                Ready to Optimize & Secure Your Platform?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Get a free performance and security audit to identify
              opportunities for improvement.
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
                  Get Free Audit
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

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>Free Security Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBolt className="w-4 h-4" />
                  <span>Performance Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4" />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
