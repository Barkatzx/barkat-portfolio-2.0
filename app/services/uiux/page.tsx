"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowRight,
  FaBolt,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaCubes,
  FaEye,
  FaHandPointer,
  FaLayerGroup,
  FaMagic,
  FaMobileAlt,
  FaMousePointer,
  FaPaintBrush,
  FaPalette,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaSync,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { SiAdobexd, SiFigma, SiSketch } from "react-icons/si";

const designProcess = [
  {
    phase: "Discover",
    title: "Research & Analysis",
    description:
      "Deep dive into business goals, user needs, and market landscape",
    icon: <FaSearch className="w-6 h-6" />,
    deliverables: [
      "User personas",
      "Competitive analysis",
      "User interviews",
      "Market research",
    ],
    color: "from-[#00a8ff] to-[#4dc3ff]",
  },
  {
    phase: "Define",
    title: "Strategy & Planning",
    description: "Define information architecture and user journey mapping",
    icon: <FaBrain className="w-6 h-6" />,
    deliverables: [
      "User flows",
      "Site maps",
      "Content strategy",
      "Feature prioritization",
    ],
    color: "from-[#4dc3ff] to-[#0097e6]",
  },
  {
    phase: "Design",
    title: "Visual Creation",
    description:
      "Wireframing, prototyping, and visual design with brand consistency",
    icon: <FaPaintBrush className="w-6 h-6" />,
    deliverables: [
      "Wireframes",
      "High-fidelity designs",
      "Interactive prototypes",
      "Design systems",
    ],
    color: "from-[#0097e6] to-[#0062a3]",
  },
  {
    phase: "Deliver",
    title: "Handoff & Testing",
    description:
      "Developer handoff, user testing, and design system documentation",
    icon: <FaRocket className="w-6 h-6" />,
    deliverables: [
      "Design specs",
      "User testing",
      "Developer handoff",
      "Design system",
    ],
    color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
  },
];

const services = [
  {
    category: "User Experience",
    items: [
      {
        title: "User Research",
        description: "Understanding user behaviors, needs, and pain points",
        icon: <FaUser className="w-6 h-6" />,
        features: [
          "User interviews",
          "Surveys",
          "Persona creation",
          "Journey mapping",
        ],
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Information Architecture",
        description:
          "Structuring content for optimal findability and usability",
        icon: <FaLayerGroup className="w-6 h-6" />,
        features: [
          "Site mapping",
          "Content inventory",
          "Taxonomy",
          "Navigation design",
        ],
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
      {
        title: "Interaction Design",
        description: "Creating intuitive and engaging interactive experiences",
        icon: <FaHandPointer className="w-6 h-6" />,
        features: [
          "Micro-interactions",
          "Animation design",
          "Gesture design",
          "Feedback systems",
        ],
        color: "from-[#0097e6] to-[#0062a3]",
      },
    ],
  },
  {
    category: "User Interface",
    items: [
      {
        title: "Visual Design",
        description: "Crafting beautiful, brand-aligned visual interfaces",
        icon: <FaPalette className="w-6 h-6" />,
        features: [
          "UI design",
          "Visual hierarchy",
          "Typography",
          "Color systems",
        ],
        color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
      },
      {
        title: "Prototyping",
        description: "Interactive prototypes for testing and validation",
        icon: <FaMousePointer className="w-6 h-6" />,
        features: [
          "Clickable prototypes",
          "User testing",
          "Flow validation",
          "Stakeholder review",
        ],
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Design Systems",
        description: "Scalable design systems for consistent experiences",
        icon: <FaCubes className="w-6 h-6" />,
        features: [
          "Component libraries",
          "Style guides",
          "Design tokens",
          "Documentation",
        ],
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
    ],
  },
];

const tools = [
  {
    icon: <SiFigma className="w-8 h-8" />,
    name: "Figma",
    type: "Design & Prototyping",
  },
  {
    icon: <SiAdobexd className="w-8 h-8" />,
    name: "Adobe XD",
    type: "UI Design",
  },
  {
    icon: <SiSketch className="w-8 h-8" />,
    name: "Sketch",
    type: "Interface Design",
  },
  {
    icon: <FaMagic className="w-8 h-8" />,
    name: "Adobe Suite",
    type: "Visual Design",
  },
  {
    icon: <FaEye className="w-8 h-8" />,
    name: "UserTesting",
    type: "User Research",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    name: "Hotjar",
    type: "Analytics",
  },
];

const benefits = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Increased Conversions",
    description: "Intuitive designs that guide users to conversion points",
    metric: "Up to 40%",
    color: "from-[#00a8ff] to-[#4dc3ff]",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Enhanced Engagement",
    description: "Engaging experiences that keep users coming back",
    metric: "70% higher",
    color: "from-[#4dc3ff] to-[#0097e6]",
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: "Mobile Optimization",
    description: "Seamless experiences across all devices and screen sizes",
    metric: "100% responsive",
    color: "from-[#0097e6] to-[#0062a3]",
  },
  {
    icon: <FaBolt className="w-8 h-8" />,
    title: "Faster Development",
    description: "Clear design systems that accelerate development cycles",
    metric: "50% faster",
    color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
  },
];

const caseStudies = [
  {
    client: "FinTech Platform",
    challenge: "Complex financial dashboard causing user confusion",
    solution: "Simplified interface with progressive disclosure",
    results: [
      "User errors reduced by 65%",
      "Task completion time -40%",
      "Customer satisfaction 4.8/5",
    ],
    metrics: "300% ROI",
  },
  {
    client: "Healthcare App",
    challenge: "Low adoption rates among elderly users",
    solution: "Accessibility-focused redesign with larger touch targets",
    results: [
      "Adoption increased by 200%",
      "User retention +80%",
      "Accessibility compliance AA",
    ],
    metrics: "5-star rating",
  },
  {
    client: "E-commerce Store",
    challenge: "High cart abandonment on mobile checkout",
    solution: "Streamlined one-page checkout with saved payment info",
    results: [
      "Mobile conversions +120%",
      "Checkout time -60%",
      "Cart abandonment -45%",
    ],
    metrics: "$1.2M revenue",
  },
];

const deliverables = [
  {
    type: "Strategy",
    items: [
      "User personas & journey maps",
      "Competitive analysis report",
      "Information architecture",
      "Content strategy plan",
    ],
  },
  {
    type: "Design",
    items: [
      "Wireframes & prototypes",
      "High-fidelity UI designs",
      "Interactive prototypes",
      "Design system documentation",
    ],
  },
  {
    type: "Testing",
    items: [
      "Usability testing reports",
      "A/B testing results",
      "Accessibility audit",
      "Performance metrics",
    ],
  },
];

export default function UIUXDesignPage() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00a8ff]/10 via-[#4dc3ff]/5 to-transparent rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-[#0097e6]/10 via-[#00a8ff]/5 to-transparent rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, ${theme.primary}10 1px, transparent 1px), 
                             linear-gradient(${theme.primary}10 1px, transparent 1px)`,
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
              UI/UX Design Excellence
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Design That
            </span>
            <br />
            <span style={gradientText}>Connects & Converts</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            We create intuitive, beautiful digital experiences that users love
            and businesses thrive on. From research to implementation, we craft
            designs that drive results.
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
                Start Design Project
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
              View Design Portfolio
            </button>
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
                Why Great Design Matters
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Measurable impact on your business success
            </p>
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
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                    }}
                  >
                    <div className="text-white text-2xl">{benefit.icon}</div>
                  </div>

                  {/* Metric */}
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: theme.primaryLight }}
                  >
                    {benefit.metric}
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

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Our Design Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A proven methodology for creating exceptional user experiences
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
              {designProcess.map((step, index) => (
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
                            {step.phase}
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
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Comprehensive Design Services
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              End-to-end design solutions for every stage of your project
            </p>
          </div>

          <div className="space-y-8">
            {services.map((category, catIndex) => (
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
                      <FaUser
                        className="w-5 h-5"
                        style={{ color: theme.primaryLight }}
                      />
                    ) : (
                      <FaPalette
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
                        setHoveredService(serviceIndex + catIndex * 3)
                      }
                      onMouseLeave={() => setHoveredService(null)}
                      className="group"
                    >
                      <div
                        className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                        style={{
                          ...cardStyle,
                          borderColor:
                            hoveredService === serviceIndex + catIndex * 3
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

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
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
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Industry-Standard Tools</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We use the best tools to deliver exceptional results
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
              {tools.map((tool, index) => (
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
                        {tool.icon}
                      </div>
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

        {/* Deliverables */}
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
                Comprehensive Deliverables
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Everything you need for successful implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((type, index) => (
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
                  {/* Type Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                      }}
                    >
                      <FaCode
                        className="w-5 h-5"
                        style={{ color: theme.primaryLight }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {type.type}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: theme.primaryLight }}
                        />
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <span style={gradientText}>Design Impact Stories</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transforming businesses through exceptional design
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
                  {/* Client & Metrics */}
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
                      {study.metrics}
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
                Ready to Transform Your Digital Experience?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Schedule a free design consultation and discover how we can create
              exceptional user experiences for your business.
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
                  Book Free Consultation
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
                View Design Portfolio
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>Free Design Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-4 h-4" />
                  <span>User Research Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSync className="w-4 h-4" />
                  <span>Iterative Process</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
