"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaCogs,
  FaInfinity,
  FaLayerGroup,
  FaLightbulb,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaSync,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const applicationTypes = [
  {
    title: "Enterprise SaaS",
    description:
      "Scalable software solutions for business operations and team collaboration",
    icon: <FaServer className="w-8 h-8" />,
    features: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Analytics dashboard",
      "API integrations",
    ],
    color: "from-[#00a8ff] to-[#4dc3ff]",
  },
  {
    title: "Progressive Web Apps",
    description:
      "Native-like web applications with offline capabilities and push notifications",
    icon: <FaMobileAlt className="w-8 h-8" />,
    features: [
      "Offline functionality",
      "Push notifications",
      "Install to home screen",
      "Cross-platform",
    ],
    color: "from-[#4dc3ff] to-[#0097e6]",
  },
  {
    title: "Real-time Applications",
    description:
      "Interactive applications with live updates and collaborative features",
    icon: <FaSync className="w-8 h-8" />,
    features: [
      "WebSocket connections",
      "Live collaboration",
      "Instant updates",
      "Real-time analytics",
    ],
    color: "from-[#0097e6] to-[#0062a3]",
  },
  {
    title: "Data-Driven Dashboards",
    description:
      "Custom analytics platforms with interactive visualizations and reporting",
    icon: <FaChartLine className="w-8 h-8" />,
    features: [
      "Interactive charts",
      "Custom reporting",
      "Data exports",
      "Automated insights",
    ],
    color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: [
      {
        icon: <SiReact className="w-7 h-7" />,
        name: "React",
        description: "UI Library",
      },
      {
        icon: <SiNextdotjs className="w-7 h-7" />,
        name: "Next.js",
        description: "Full-stack framework",
      },
      {
        icon: <SiTypescript className="w-7 h-7" />,
        name: "TypeScript",
        description: "Type safety",
      },
      {
        icon: <SiTailwindcss className="w-7 h-7" />,
        name: "Tailwind CSS",
        description: "Styling",
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        icon: <SiNodedotjs className="w-7 h-7" />,
        name: "Node.js",
        description: "Runtime",
      },
      {
        icon: <FaServer className="w-7 h-7" />,
        name: "Express",
        description: "API framework",
      },
      {
        icon: <SiMongodb className="w-7 h-7" />,
        name: "MongoDB",
        description: "NoSQL database",
      },
      {
        icon: <SiPostgresql className="w-7 h-7" />,
        name: "PostgreSQL",
        description: "SQL database",
      },
    ],
  },
  {
    category: "Infrastructure",
    technologies: [
      {
        icon: <FaCloud className="w-7 h-7" />,
        name: "AWS/Azure",
        description: "Cloud hosting",
      },
      {
        icon: <FaRocket className="w-7 h-7" />,
        name: "Vercel",
        description: "Deployment",
      },
      {
        icon: <SiRedis className="w-7 h-7" />,
        name: "Redis",
        description: "Caching",
      },
      {
        icon: <FaShieldAlt className="w-7 h-7" />,
        name: "Security",
        description: "SSL, Auth, etc.",
      },
    ],
  },
];

const developmentProcess = [
  {
    phase: "1. Discovery",
    title: "Strategy & Planning",
    description:
      "Deep dive into your business needs, user personas, and technical requirements",
    deliverables: [
      "Product requirements",
      "Technical specification",
      "Project timeline",
      "Resource planning",
    ],
    duration: "1-2 weeks",
    icon: <FaLightbulb className="w-6 h-6" />,
  },
  {
    phase: "2. Design",
    title: "UI/UX & Architecture",
    description:
      "Creating intuitive interfaces and scalable system architecture",
    deliverables: [
      "Wireframes",
      "UI Design",
      "System architecture",
      "Database design",
    ],
    duration: "2-3 weeks",
    icon: <FaLayerGroup className="w-6 h-6" />,
  },
  {
    phase: "3. Development",
    title: "Agile Implementation",
    description:
      "Building in iterative sprints with continuous feedback and testing",
    deliverables: [
      "Backend APIs",
      "Frontend components",
      "Integration",
      "Testing suite",
    ],
    duration: "4-12 weeks",
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    phase: "4. Launch & Scale",
    title: "Deployment & Growth",
    description:
      "Production deployment, monitoring, and scaling infrastructure",
    deliverables: [
      "Production deployment",
      "Performance monitoring",
      "Analytics setup",
      "Scalability planning",
    ],
    duration: "Ongoing",
    icon: <FaRocket className="w-6 h-6" />,
  },
];

const benefits = [
  {
    title: "Tailored Solutions",
    description:
      "Built specifically for your unique business processes and requirements",
    icon: <FaTools className="w-8 h-8" />,
  },
  {
    title: "Future-Proof",
    description:
      "Scalable architecture designed to grow with your business needs",
    icon: <FaInfinity className="w-8 h-8" />,
  },
  {
    title: "Ownership & Control",
    description:
      "Complete ownership of source code and infrastructure decisions",
    icon: <FaUsers className="w-8 h-8" />,
  },
  {
    title: "Competitive Edge",
    description:
      "Unique features and capabilities that set you apart from competitors",
    icon: <FaChartLine className="w-8 h-8" />,
  },
];

const caseStudies = [
  {
    title: "Healthcare Management System",
    challenge:
      "Needed HIPAA-compliant patient management with real-time updates",
    solution:
      "Built secure PWA with real-time notifications and offline capability",
    results: [
      "60% faster patient processing",
      "99.9% uptime",
      "HIPAA compliant",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  },
  {
    title: "E-commerce Analytics Platform",
    challenge:
      "Required custom analytics for multi-store e-commerce operations",
    solution:
      "Data warehouse with real-time dashboards and predictive analytics",
    results: [
      "40% increase in conversions",
      "Real-time inventory tracking",
      "Automated reporting",
    ],
    tech: ["Next.js", "Python", "BigQuery", "Redis"],
  },
  {
    title: "Educational Collaboration Tool",
    challenge:
      "Needed interactive platform for remote student-teacher collaboration",
    solution: "Real-time whiteboard with video chat and document sharing",
    results: ["10K+ active users", "95% satisfaction rate", "Seamless scaling"],
    tech: ["React", "Node.js", "WebRTC", "MongoDB"],
  },
];

export default function CustomApplicationsPage() {
  const [activeProcess, setActiveProcess] = useState(0);

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
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0097e6]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00a8ff]/5 via-transparent to-[#4dc3ff]/5 rounded-full blur-3xl" />
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
              Custom Development
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Bespoke Software
            </span>
            <br />
            <span style={gradientText}>Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Transform complex business challenges into elegant, scalable digital
            solutions. We build custom applications that drive efficiency,
            innovation, and growth.
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
                Start Your Project
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

        {/* What We Build */}
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
                Types of Applications We Build
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From simple web apps to complex enterprise systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicationTypes.map((app, index) => (
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
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={accentStyle}
                  >
                    <div className="text-white text-2xl">{app.icon}</div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {app.title}
                  </h3>
                  <p className="text-white/60 mb-6">{app.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
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
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Modern Technology Stack</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Built with cutting-edge technologies for performance and
              scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

                  {/* Technologies */}
                  <div className="space-y-4">
                    {category.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                          }}
                        >
                          <div style={{ color: theme.primaryLight }}>
                            {tech.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {tech.name}
                          </div>
                          <div className="text-sm text-white/60">
                            {tech.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
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
                Our Development Process
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transparent, collaborative, and results-driven approach
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
              {developmentProcess.map((step, index) => (
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

        {/* Benefits */}
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
                Why Choose Custom Development
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
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
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                    style={accentStyle}
                  >
                    <div className="text-white text-2xl">{benefit.icon}</div>
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
              <span style={gradientText}>Success Stories</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real-world solutions for diverse business challenges
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
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-white/50 mb-2">
                      Challenge
                    </div>
                    <p className="text-white/70 text-sm">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-white/50 mb-2">
                      Solution
                    </div>
                    <p className="text-white/70 text-sm">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-white/50 mb-2">
                      Results
                    </div>
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <FaCheckCircle
                            className="w-3 h-3"
                            style={{ color: theme.primaryLight }}
                          />
                          <span className="text-white/70">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-sm font-medium text-white/50 mb-2">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                            border: `1px solid ${theme.primary}20`,
                            color: theme.primaryLight,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
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
                Ready to Build Your Solution?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Let's discuss your custom application requirements and create a
              tailored solution.
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
                  Schedule Consultation
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
                Request Proposal
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4" />
                  <span>Dedicated Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="w-4 h-4" />
                  <span>Performance Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
