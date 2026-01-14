"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaCloud,
  FaCode,
  FaCogs,
  FaDatabase,
  FaDollarSign,
  FaLayerGroup,
  FaLightbulb,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const theme = {
  primary: "#00a8ff",
  primaryLight: "#4dc3ff",
  primaryDark: "#0097e6",
};

const timelineSteps = [
  {
    week: "Week 1",
    title: "Discovery & Strategy",
    description:
      "Deep dive into your vision, market analysis, and feature prioritization",
    icon: <FaLightbulb className="w-6 h-6" />,
    deliverables: [
      "Product Strategy Doc",
      "Feature Roadmap",
      "User Stories",
      "Tech Stack Selection",
    ],
    gradient: `from-[${theme.primaryDark}] to-[${theme.primary}]`,
  },
  {
    week: "Week 2-3",
    title: "Design & Architecture",
    description:
      "UI/UX design, system architecture, and database schema finalization",
    icon: <FaCode className="w-6 h-6" />,
    deliverables: [
      "Wireframes",
      "UI Design",
      "System Architecture",
      "API Design",
    ],
    gradient: `from-[${theme.primary}] to-[${theme.primaryLight}]`,
  },
  {
    week: "Week 4-6",
    title: "Core Development",
    description:
      "Building core features with clean, scalable code and real testing",
    icon: <FaDatabase className="w-6 h-6" />,
    deliverables: [
      "Backend API",
      "Frontend UI",
      "Authentication",
      "Core Features",
    ],
    gradient: `from-[${theme.primaryLight}] via-[${theme.primary}] to-[${theme.primaryDark}]`,
  },
  {
    week: "Week 7-8",
    title: "Testing & Launch",
    description:
      "Comprehensive testing, deployment, and preparation for user feedback",
    icon: <FaRocket className="w-6 h-6" />,
    deliverables: [
      "Beta Testing",
      "Production Deployment",
      "Analytics Setup",
      "Launch Strategy",
    ],
    gradient: `from-[${theme.primaryDark}] to-[#0062a3]`,
  },
];

const techStack = [
  {
    icon: <SiNextdotjs className="w-8 h-8" />,
    name: "Next.js 15",
    description: "Full-stack React framework",
  },
  {
    icon: <SiTypescript className="w-8 h-8" />,
    name: "TypeScript",
    description: "Type-safe development",
  },
  {
    icon: <SiTailwindcss className="w-8 h-8" />,
    name: "Tailwind CSS",
    description: "Utility-first styling",
  },
  {
    icon: <SiReact className="w-8 h-8" />,
    name: "React 19",
    description: "Latest React features",
  },
  {
    icon: <SiNodedotjs className="w-8 h-8" />,
    name: "Node.js",
    description: "Backend runtime",
  },
  {
    icon: <SiMongodb className="w-8 h-8" />,
    name: "MongoDB",
    description: "NoSQL database",
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    name: "Responsive",
    description: "Mobile-first design",
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    name: "Vercel",
    description: "Production hosting",
  },
];

const mvpFeatures = [
  {
    category: "Core Functionality",
    icon: <FaCogs className="w-6 h-6" />,
    features: [
      "User authentication & authorization",
      "CRUD operations for main entities",
      "Basic search & filtering",
      "User dashboard",
      "Email notifications",
    ],
  },
  {
    category: "Technical Foundation",
    icon: <FaLayerGroup className="w-6 h-6" />,
    features: [
      "Scalable architecture",
      "Secure API endpoints",
      "Database design",
      "Error handling",
      "Performance optimization",
    ],
  },
  {
    category: "User Experience",
    icon: <FaMobileAlt className="w-6 h-6" />,
    features: [
      "Responsive mobile design",
      "Intuitive navigation",
      "Fast loading times",
      "Clean UI/UX",
      "Basic analytics",
    ],
  },
];

const benefits = [
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "Time to Market",
    description: "Launch in 8 weeks instead of 6+ months",
    metric: "70% faster",
  },
  {
    icon: <FaDollarSign className="w-8 h-8" />,
    title: "Cost Efficiency",
    description: "Validate ideas before heavy investment",
    metric: "60% cheaper",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "User Validation",
    description: "Real feedback from real users early on",
    metric: "Real data",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Investor Ready",
    description: "Working prototype to secure funding",
    metric: "Proof of concept",
  },
];

const successStories = [
  {
    name: "SaaS Platform",
    description: "Raised $500K with MVP built in 8 weeks",
    category: "B2B SaaS",
    result: "Funded",
  },
  {
    name: "Marketplace App",
    description: "10K users in first 3 months post-launch",
    category: "Marketplace",
    result: "Scaled",
  },
  {
    name: "AI Tool",
    description: "Acquired within 12 months of MVP launch",
    category: "AI/ML",
    result: "Acquired",
  },
  {
    name: "Health Tech",
    description: "Successfully pivoted based on MVP feedback",
    category: "Health Tech",
    result: "Validated",
  },
];

export default function MVPDevelopmentPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            style={{
              borderColor: `${theme.primary}40`,
              background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
              }}
            />
            <span className="text-sm text-white/80">
              MVP Development Program
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[Recoleta] text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Launch Your Vision
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#0097e6] bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight}, ${theme.primaryDark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              in 8 Weeks Flat
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/60 max-w-3xl mx-auto mb-10"
          >
            Transform your startup idea into a market-ready product with our
            accelerated MVP development program. Validate faster, iterate
            smarter, and scale confidently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
              }}
            >
              <div
                className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{
                  background: `linear-gradient(to bottom, ${theme.primaryLight}20, transparent)`,
                }}
              />
              <Link href="/contact">
                <span className="relative flex items-center gap-3 font-medium text-white text-lg">
                  Start Your MVP Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </Link>
            </button>

            <button
              className="px-8 py-4 rounded-xl border transition-all duration-300 hover:bg-white/5"
              style={{
                borderColor: `${theme.primary}40`,
                background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
              }}
            >
              View Case Studies
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {[
            { value: "6-8", label: "Weeks to Launch", icon: <FaClock /> },
            { value: "100+", label: "MVPs Built", icon: <FaRocket /> },
            {
              value: "$3M+",
              label: "Raised by Clients",
              icon: <FaChartLine />,
            },
            {
              value: "95%",
              label: "Client Satisfaction",
              icon: <FaCheckCircle />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                }}
              />

              <div
                className="relative backdrop-blur-sm p-6 text-center transition-all duration-500"
                style={{
                  border: `1px solid ${theme.primary}20`,
                  background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                  }}
                >
                  <div style={{ color: theme.primaryLight }}>{stat.icon}</div>
                </div>

                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: theme.primaryLight }}
                >
                  {stat.value}
                </div>

                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Why Build an MVP?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                {/* Card */}
                <div
                  className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                  style={{
                    border: `1px solid ${theme.primary}20`,
                    background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                    }}
                  />

                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                      }}
                    >
                      <div className="text-white text-2xl">{benefit.icon}</div>
                    </div>

                    {/* Metric */}
                    <div
                      className="text-2xl font-bold mb-2"
                      style={{ color: theme.primaryLight }}
                    >
                      {benefit.metric}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 flex-grow">
                      {benefit.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className="mt-6 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300"
                      style={{ borderColor: `${theme.primary}20` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
          ref={timelineRef}
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              8-Week MVP Development Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 opacity-30"
              style={{
                background: `linear-gradient(to bottom, ${theme.primary}, ${theme.primaryLight}, ${theme.primaryDark})`,
              }}
            />

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-900 z-10 transition-all duration-300"
                    style={{
                      background:
                        activeTimeline === index
                          ? theme.primary
                          : `${theme.primary}40`,
                      borderColor:
                        activeTimeline === index
                          ? `${theme.primary}80`
                          : "transparent",
                      boxShadow:
                        activeTimeline === index
                          ? `0 0 20px ${theme.primary}80`
                          : "none",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div
                      className={`rounded-2xl p-6 transition-all duration-500 ${activeTimeline === index ? "scale-[1.02]" : ""}`}
                      style={{
                        border: `1px solid ${activeTimeline === index ? `${theme.primary}40` : `${theme.primary}20`}`,
                        background:
                          activeTimeline === index
                            ? `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`
                            : `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                        boxShadow:
                          activeTimeline === index
                            ? `0 10px 40px ${theme.primary}20, 0 1px 0 ${theme.primary}10 inset`
                            : "none",
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                          }}
                        >
                          <div className="text-white text-xl">{step.icon}</div>
                        </div>
                        <div>
                          <div
                            className="text-sm font-medium"
                            style={{ color: theme.primaryLight }}
                          >
                            {step.week}
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-white/60 mb-6">{step.description}</p>

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

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Modern Tech Stack
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className="rounded-2xl p-6 text-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    border: `1px solid ${theme.primary}20`,
                    background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                      color: theme.primaryLight,
                    }}
                  >
                    <div className="text-3xl">{tech.icon}</div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-white/60 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              What's Included in Your MVP
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {mvpFeatures.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="rounded-2xl h-full p-6 transition-all duration-500 group-hover:scale-[1.02]"
                  style={{
                    border: `1px solid ${theme.primary}20`,
                    background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                      }}
                    >
                      <div style={{ color: theme.primaryLight }}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle
                          className="w-4 h-4 mt-1 flex-shrink-0"
                          style={{ color: theme.primaryLight }}
                        />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                  className="rounded-2xl p-6 h-full transition-all duration-500 group-hover:scale-[1.02]"
                  style={{
                    border: `1px solid ${theme.primary}20`,
                    background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                      color: theme.primaryLight,
                    }}
                  >
                    {story.category}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {story.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {story.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                      color: theme.primaryLight,
                    }}
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    {story.result}
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

          <div className="relative p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Ready to Launch Your MVP?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Schedule a free strategy session to discuss your idea and get a
              detailed project roadmap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(to bottom, ${theme.primaryLight}20, transparent)`,
                  }}
                />
                <span className="relative flex items-center gap-3 font-medium text-white text-lg">
                  Book Free Consultation
                  <FaArrowRight className="w-5 h-5" />
                </span>
              </button>

              <button
                className="px-8 py-4 rounded-xl border transition-all duration-300 hover:bg-white/5"
                style={{
                  borderColor: `${theme.primary}40`,
                  background: `linear-gradient(135deg, ${theme.primary}05, ${theme.primaryDark}02)`,
                }}
              >
                Download MVP Guide
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>NDA Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>45-min Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4" />
                  <span>No Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
