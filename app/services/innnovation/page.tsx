"use client";

import { theme } from "@/components/lib/theme";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaCogs,
  FaCubes,
  FaDatabase,
  FaFlask,
  FaGlobe,
  FaHandshake,
  FaInfinity,
  FaLightbulb,
  FaMagic,
  FaMobileAlt,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaSync,
  FaUsers,
} from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
} from "react-icons/si";

const innovationAreas = [
  {
    category: "Emerging Technologies",
    projects: [
      {
        title: "AI & Machine Learning",
        description: "Building intelligent systems that learn and adapt",
        icon: <FaBrain className="w-8 h-8" />,
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
        status: "Active R&D",
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Blockchain Solutions",
        description:
          "Developing decentralized applications and smart contracts",
        icon: <SiBlockchaindotcom className="w-8 h-8" />,
        technologies: ["Ethereum", "Solana", "Smart Contracts", "Web3"],
        status: "Pilot Projects",
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
      {
        title: "AR/VR Experiences",
        description: "Creating immersive digital experiences",
        icon: <FaGlobe className="w-8 h-8" />,
        technologies: ["Unity", "Three.js", "WebXR", "Spatial Computing"],
        status: "Concept Phase",
        color: "from-[#0097e6] to-[#0062a3]",
      },
    ],
  },
  {
    category: "Digital Innovation",
    projects: [
      {
        title: "Progressive Web Apps",
        description:
          "Next-generation web applications with native capabilities",
        icon: <FaMobileAlt className="w-8 h-8" />,
        technologies: [
          "Service Workers",
          "WebAssembly",
          "Push API",
          "Offline First",
        ],
        status: "Production Ready",
        color: "from-[#00a8ff] via-[#4dc3ff] to-[#0097e6]",
      },
      {
        title: "Real-time Systems",
        description: "Building systems with millisecond response times",
        icon: <FaSync className="w-8 h-8" />,
        technologies: [
          "WebSockets",
          "WebRTC",
          "GraphQL Subscriptions",
          "Redis",
        ],
        status: "Advanced Prototyping",
        color: "from-[#00a8ff] to-[#4dc3ff]",
      },
      {
        title: "Serverless Architecture",
        description:
          "Building scalable systems with zero infrastructure management",
        icon: <FaCloud className="w-8 h-8" />,
        technologies: [
          "AWS Lambda",
          "Cloud Functions",
          "Edge Computing",
          "FaaS",
        ],
        status: "Production Ready",
        color: "from-[#4dc3ff] to-[#0097e6]",
      },
    ],
  },
];

const labProcess = [
  {
    phase: "Ideation",
    title: "Concept Discovery",
    description:
      "Exploring emerging trends and identifying innovation opportunities",
    duration: "2-4 weeks",
    activities: [
      "Trend analysis",
      "Idea generation",
      "Feasibility study",
      "Concept validation",
    ],
    icon: <FaLightbulb className="w-6 h-6" />,
  },
  {
    phase: "Prototyping",
    title: "Rapid Development",
    description: "Building functional prototypes to validate concepts",
    duration: "4-8 weeks",
    activities: [
      "MVP development",
      "User testing",
      "Technical validation",
      "Iteration cycles",
    ],
    icon: <FaFlask className="w-6 h-6" />,
  },
  {
    phase: "Testing",
    title: "Validation & Refinement",
    description: "Rigorous testing and refinement of prototypes",
    duration: "2-4 weeks",
    activities: [
      "Performance testing",
      "Security audit",
      "User feedback",
      "Market validation",
    ],
    icon: <FaSearch className="w-6 h-6" />,
  },
  {
    phase: "Scaling",
    title: "Production Deployment",
    description: "Preparing successful innovations for production",
    duration: "4-12 weeks",
    activities: [
      "Production planning",
      "Team training",
      "Documentation",
      "Go-to-market strategy",
    ],
    icon: <FaRocket className="w-6 h-6" />,
  },
];

const techStack = [
  {
    icon: <SiReact className="w-8 h-8" />,
    name: "React",
    category: "Frontend",
    expertise: "Advanced",
  },
  {
    icon: <SiNextdotjs className="w-8 h-8" />,
    name: "Next.js",
    category: "Full Stack",
    expertise: "Expert",
  },
  {
    icon: <SiNodedotjs className="w-8 h-8" />,
    name: "Node.js",
    category: "Backend",
    expertise: "Expert",
  },
  {
    icon: <SiPython className="w-8 h-8" />,
    name: "Python",
    category: "AI/ML",
    expertise: "Advanced",
  },
  {
    icon: <SiTensorflow className="w-8 h-8" />,
    name: "TensorFlow",
    category: "Machine Learning",
    expertise: "Advanced",
  },
  {
    icon: <FaRobot className="w-8 h-8" />,
    name: "AI APIs",
    category: "Artificial Intelligence",
    expertise: "Expert",
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    name: "NoSQL/SQL",
    category: "Databases",
    expertise: "Expert",
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    name: "Cloud Native",
    category: "Infrastructure",
    expertise: "Expert",
  },
];

const innovationMetrics = [
  {
    metric: "Prototypes Built",
    value: "150+",
    description: "Successful proof-of-concepts developed",
    icon: <FaFlask className="w-6 h-6" />,
    trend: "↑ 40% YoY",
  },
  {
    metric: "Patents Filed",
    value: "12",
    description: "Proprietary technologies and methodologies",
    icon: <FaShieldAlt className="w-6 h-6" />,
    trend: "↑ 300%",
  },
  {
    metric: "Client Projects",
    value: "85+",
    description: "Innovation projects for enterprise clients",
    icon: <FaHandshake className="w-6 h-6" />,
    trend: "↑ 60% YoY",
  },
  {
    metric: "Success Rate",
    value: "92%",
    description: "Prototypes that reach production",
    icon: <FaChartLine className="w-6 h-6" />,
    trend: "Industry leading",
  },
];

const successStories = [
  {
    client: "Healthcare Tech",
    innovation: "AI-powered Diagnostic Tool",
    challenge: "Need for faster, more accurate preliminary diagnoses",
    solution: "Machine learning model trained on medical imaging data",
    impact: [
      "95% accuracy rate",
      "80% faster diagnosis",
      "FDA approval pending",
    ],
    timeline: "6 months",
  },
  {
    client: "Financial Services",
    innovation: "Blockchain Settlement System",
    challenge: "Slow and expensive cross-border transactions",
    solution: "Private blockchain network for instant settlements",
    impact: [
      "90% cost reduction",
      "Real-time settlements",
      "Enhanced security",
    ],
    timeline: "9 months",
  },
  {
    client: "Retail Giant",
    innovation: "AR Shopping Experience",
    challenge: "Low online conversion rates for furniture",
    solution: "Augmented reality room visualization tool",
    impact: [
      "45% increase in conversions",
      "60% reduction in returns",
      "Enhanced CX",
    ],
    timeline: "4 months",
  },
];

const labFeatures = [
  {
    category: "Innovation Capabilities",
    items: [
      {
        icon: <FaMagic />,
        title: "Rapid Prototyping",
        description: "Fast iteration from concept to prototype",
      },
      {
        icon: <FaRobot />,
        title: "AI Integration",
        description: "Seamless AI/ML implementation",
      },
      {
        icon: <FaCubes />,
        title: "Modular Architecture",
        description: "Scalable and reusable components",
      },
      {
        icon: <FaPaintBrush />,
        title: "Design Thinking",
        description: "User-centered innovation approach",
      },
    ],
  },
  {
    category: "Technical Excellence",
    items: [
      {
        icon: <FaCode />,
        title: "Clean Code",
        description: "Maintainable and scalable codebases",
      },
      {
        icon: <FaDatabase />,
        title: "Data Science",
        description: "Advanced analytics and insights",
      },
      {
        icon: <FaCloud />,
        title: "Cloud Native",
        description: "Modern cloud infrastructure",
      },
      {
        icon: <FaSync />,
        title: "DevOps Automation",
        description: "Automated deployment pipelines",
      },
    ],
  },
  {
    category: "Collaboration & Output",
    items: [
      {
        icon: <FaUsers />,
        title: "Cross-functional Teams",
        description: "Diverse expertise collaboration",
      },
      {
        icon: <FaChartBar />,
        title: "Metrics-driven",
        description: "Data-informed innovation decisions",
      },
      {
        icon: <FaInfinity />,
        title: "Continuous Learning",
        description: "Ongoing research and development",
      },
      {
        icon: <FaCheckCircle />,
        title: "Quality Assurance",
        description: "Rigorous testing and validation",
      },
    ],
  },
];

export default function InnovationLabPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 48%, ${theme.primary}20 50%, transparent 52%),
                             linear-gradient(0deg, transparent 48%, ${theme.primary}20 50%, transparent 52%)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#00a8ff]/30 rounded-lg"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-[#4dc3ff]/30 rounded-full"
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
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={accentStyle}
            />
            <span className="text-sm font-medium tracking-widest uppercase">
              Innovation Lab
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Where Ideas Become
            </span>
            <br />
            <span style={gradientText}>Digital Reality</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Our innovation lab explores cutting-edge technologies and builds
            tomorrow's digital solutions today. From AI to blockchain, we
            prototype the future.
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
                Start Innovation Project
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
              View Lab Portfolio
            </button>
          </div>
        </motion.div>

        {/* Innovation Metrics */}
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
                Innovation Lab Impact
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Track record of successful innovation and prototyping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationMetrics.map((metric, index) => (
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

                  {/* Trend */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ color: theme.primaryLight }}
                  >
                    <FaChartLine className="w-3 h-3" />
                    {metric.trend}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation Areas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span style={gradientText}>Focus Areas & Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Exploring the frontiers of technology and digital innovation
            </p>
          </div>

          <div className="space-y-8">
            {innovationAreas.map((category, catIndex) => (
              <div key={catIndex}>
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
                  <h3 className="text-2xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() =>
                        setActiveProject(projectIndex + catIndex * 3)
                      }
                      onMouseLeave={() => setActiveProject(null)}
                      className="group"
                    >
                      <div
                        className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02]"
                        style={{
                          ...cardStyle,
                          borderColor:
                            activeProject === projectIndex + catIndex * 3
                              ? `${theme.primary}40`
                              : `${theme.primary}20`,
                        }}
                      >
                        {/* Project Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
                            }}
                          >
                            <div className="text-white text-2xl">
                              {project.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {project.title}
                            </h4>
                            <p className="text-white/60 text-sm">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="text-sm font-medium text-white/50 mb-2">
                            Technologies
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
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

                        {/* Status */}
                        <div
                          className="pt-4 border-t"
                          style={{ borderColor: `${theme.primary}20` }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-white/50">Status</div>
                            <div
                              className="px-3 py-1 text-xs rounded-full font-medium"
                              style={{
                                background: `linear-gradient(135deg, ${theme.primary}20, ${theme.primaryLight}10)`,
                                color: theme.primaryLight,
                              }}
                            >
                              {project.status}
                            </div>
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

        {/* Lab Process */}
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
                Innovation Development Process
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Structured methodology for systematic innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <div
                    className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 transform translate-x-1/2 opacity-30"
                    style={{
                      background: `linear-gradient(90deg, ${theme.primary}, ${theme.primaryLight})`,
                    }}
                  />
                )}

                <div
                  className="h-full rounded-2xl p-6 transition-all duration-500 group-hover:scale-[1.02] relative z-10"
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

                  {/* Activities */}
                  <div>
                    <div className="text-sm text-white/50 mb-2">
                      Key Activities
                    </div>
                    <div className="space-y-1">
                      {phase.activities.map((activity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <FaCheckCircle
                            className="w-3 h-3"
                            style={{ color: theme.primaryLight }}
                          />
                          <span className="text-white/70">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <span style={gradientText}>Advanced Technology Stack</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Cutting-edge tools and technologies powering our innovation
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 mb-8"
            style={{
              border: `1px solid ${theme.primary}30`,
              background: `linear-gradient(135deg, ${theme.primary}08, ${theme.primaryDark}04)`,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {techStack.map((tech, index) => (
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
                      {tech.icon}
                    </div>
                    <div className="font-semibold text-white mb-1 text-sm">
                      {tech.name}
                    </div>
                    <div className="text-xs text-white/50 mb-2">
                      {tech.category}
                    </div>
                    <div
                      className="text-xs px-2 py-1 rounded-full inline-block"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}10, ${theme.primaryDark}05)`,
                        color: theme.primaryLight,
                      }}
                    >
                      {tech.expertise}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lab Features */}
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
                Innovation Lab Capabilities
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive capabilities for breakthrough innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labFeatures.map((category, catIndex) => (
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
              <span style={gradientText}>Innovation Success Stories</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Breakthrough innovations that transformed businesses
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
                  {/* Client & Innovation */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {story.client}
                      </h3>
                      <div className="text-sm text-white/60">
                        {story.innovation}
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

                  {/* Impact */}
                  <div className="space-y-2">
                    {story.impact.map((result, i) => (
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
                Ready to Innovate Together?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Let's explore the future together. Share your innovation challenge
              and we'll create a custom R&D plan to bring your vision to life.
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
                  Schedule Innovation Session
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
                Download Innovation Portfolio
              </button>
            </div>

            <div className="mt-8 text-white/40 text-sm">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <FaFlask className="w-4 h-4" />
                  <span>Free Innovation Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBrain className="w-4 h-4" />
                  <span>Technology Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRocket className="w-4 h-4" />
                  <span>Prototype Development</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
