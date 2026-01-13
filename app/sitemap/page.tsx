"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaBlog,
  FaCode,
  FaCog,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileContract,
  FaHome,
  FaProjectDiagram,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaUser,
} from "react-icons/fa";

export default function SitemapPage() {
  const glassEffect = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  };

  const blueGlassEffect = {
    background: "rgba(0, 168, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 168, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 168, 255, 0.15)",
  };

  const sitemapData = [
    {
      category: "Main Navigation",
      icon: <FaHome />,
      color: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400",
      items: [
        {
          name: "Home",
          path: "/",
          icon: <FaHome className="text-sm" />,
          description: "Landing page with services and portfolio",
        },
        {
          name: "About",
          path: "/about",
          icon: <FaUser className="text-sm" />,
          description: "Information about me and my skills",
        },
        {
          name: "Projects",
          path: "/projects",
          icon: <FaProjectDiagram className="text-sm" />,
          description: "Portfolio of completed work",
        },
        {
          name: "Blog",
          path: "/blogs",
          icon: <FaBlog className="text-sm" />,
          description: "Articles and tutorials",
        },
        {
          name: "Contact",
          path: "/contact",
          icon: <FaEnvelope className="text-sm" />,
          description: "Get in touch with me",
        },
      ],
    },
    {
      category: "Services",
      icon: <FaCode />,
      color: "from-purple-500/20 to-purple-600/10",
      iconColor: "text-purple-400",
      items: [
        {
          name: "Full Stack Development",
          path: "/#services",
          icon: <FaCode className="text-sm" />,
          description: "Custom web applications",
        },
        {
          name: "WordPress Solutions",
          path: "/#services",
          icon: <FaCog className="text-sm" />,
          description: "WordPress development",
        },
        {
          name: "E-commerce Development",
          path: "/#services",
          icon: <FaProjectDiagram className="text-sm" />,
          description: "Online stores",
        },
        {
          name: "API Integration",
          path: "/#services",
          icon: <FaCode className="text-sm" />,
          description: "Third-party integrations",
        },
      ],
    },
    {
      category: "Legal Pages",
      icon: <FaFileContract />,
      color: "from-emerald-500/20 to-emerald-600/10",
      iconColor: "text-emerald-400",
      items: [
        {
          name: "Privacy Policy",
          path: "/privacy",
          icon: <FaShieldAlt className="text-sm" />,
          description: "Data protection policy",
        },
        {
          name: "Terms & Conditions",
          path: "/terms",
          icon: <FaFileContract className="text-sm" />,
          description: "Service terms",
        },
        {
          name: "Sitemap",
          path: "/sitemap",
          icon: <FaSitemap className="text-sm" />,
          description: "Current page",
        },
      ],
    },
    {
      category: "External Links",
      icon: <FaExternalLinkAlt />,
      color: "from-amber-500/20 to-amber-600/10",
      iconColor: "text-amber-400",
      items: [
        {
          name: "GitHub",
          path: "https://github.com/barkatzx",
          icon: <FaExternalLinkAlt className="text-sm" />,
          description: "Code repositories",
          external: true,
        },
        {
          name: "LinkedIn",
          path: "https://linkedin.com/in/barkatzx",
          icon: <FaExternalLinkAlt className="text-sm" />,
          description: "Professional profile",
          external: true,
        },
        {
          name: "Upwork",
          path: "https://upwork.com/freelancers/barkatzx",
          icon: <FaExternalLinkAlt className="text-sm" />,
          description: "Hire me on Upwork",
          external: true,
        },
        {
          name: "YouTube",
          path: "https://www.youtube.com/@BarkatUllahzx",
          icon: <FaExternalLinkAlt className="text-sm" />,
          description: "Tutorials and demos",
          external: true,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-2xl"></div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Glass Effect Badge */}
          <motion.div
            style={glassEffect}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00a8ff] rounded-full blur-sm opacity-50" />
              <div className="relative w-3 h-3 bg-[#00a8ff] rounded-full" />
            </div>
            <span className="text-sm font-semibold text-[#00a8ff]">
              Website Navigation
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-[Recoleta] text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Website</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#80d4ff]">
              Sitemap
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-12">
            Explore all pages and sections of this website. Find exactly what
            you're looking for with our organized navigation structure.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { label: "Total Pages", value: "12+", color: "text-blue-400" },
              { label: "Categories", value: "4", color: "text-purple-400" },
              {
                label: "External Links",
                value: "8+",
                color: "text-emerald-400",
              },
              { label: "Last Updated", value: "Now", color: "text-amber-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                style={blueGlassEffect}
                className="px-6 py-3 rounded-xl"
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Sitemap Content */}
        <div className="space-y-12">
          {sitemapData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  style={glassEffect}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}
                >
                  <div className={`text-2xl ${category.iconColor}`}>
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h2 className="font-[Recoleta] text-2xl md:text-3xl text-white">
                    {category.category}
                  </h2>
                  <p className="text-white/60 text-sm">
                    {category.items.length} pages in this category
                  </p>
                </div>
              </div>

              {/* Pages Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {"external" in item && item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-2xl p-6 hover:border-[#00a8ff]/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                              <div className={category.iconColor}>
                                {item.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-[#00a8ff] transition-colors duration-300">
                                {item.name}
                              </h3>
                              <p className="text-white/60 text-sm">
                                External Link
                              </p>
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <FaExternalLinkAlt className="text-white/40 text-xs" />
                          </div>
                        </div>
                        <p className="text-white/70 text-sm mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <span className="truncate">{item.path}</span>
                        </div>
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        style={glassEffect}
                        className="group block rounded-2xl p-6 hover:border-[#00a8ff]/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              style={glassEffect}
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                            >
                              <div className={category.iconColor}>
                                {item.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-[#00a8ff] transition-colors duration-300">
                                {item.name}
                              </h3>
                              <p className="text-white/60 text-sm">
                                Internal Page
                              </p>
                            </div>
                          </div>
                          <div
                            style={glassEffect}
                            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-[#00a8ff]/10 transition-all duration-300"
                          >
                            <FaArrowRight className="text-white/40 group-hover:text-[#00a8ff] text-xs transition-colors duration-300" />
                          </div>
                        </div>
                        <p className="text-white/70 text-sm mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <span className="truncate">{item.path}</span>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Website Structure Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div style={blueGlassEffect} className="rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Website Structure Overview
            </h2>

            <div className="relative">
              {/* Home as Center */}
              <div className="flex flex-col items-center mb-12">
                <div
                  style={glassEffect}
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mb-4"
                >
                  <FaHome className="text-3xl text-[#00a8ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Home</h3>
                <p className="text-white/60 text-sm">
                  Central Navigation Point
                </p>
              </div>

              {/* Main Sections */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "About",
                    icon: <FaUser />,
                    color: "border-blue-500/30",
                  },
                  {
                    name: "Projects",
                    icon: <FaProjectDiagram />,
                    color: "border-purple-500/30",
                  },
                  {
                    name: "Blog",
                    icon: <FaBlog />,
                    color: "border-emerald-500/30",
                  },
                  {
                    name: "Contact",
                    icon: <FaEnvelope />,
                    color: "border-amber-500/30",
                  },
                ].map((section, index) => (
                  <div key={section.name} className="text-center">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 border ${section.color}`}
                    >
                      <div className="text-white/70 text-xl">
                        {section.icon}
                      </div>
                    </div>
                    <h4 className="font-medium text-white">{section.name}</h4>
                  </div>
                ))}
              </div>

              {/* Connecting Lines (Visual) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search & Navigation Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div style={glassEffect} className="rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FaSitemap className="text-[#00a8ff]" />
              Navigation Tips
            </h3>
            <ul className="space-y-3">
              {[
                "Use the main menu for quick access to primary pages",
                "Check the footer for legal pages and external links",
                "Each project page has related work suggestions",
                "Blog posts are categorized for easy filtering",
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00a8ff] mt-2"></div>
                  <span className="text-white/70 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={glassEffect} className="rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FaSearch className="text-[#00a8ff]" />
              Quick Search
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Can't find what you're looking for? Try these:
            </p>
            <div className="space-y-2">
              {[
                { label: "Pricing", path: "/#pricing" },
                { label: "Services", path: "/#services" },
                { label: "Testimonials", path: "/#testimonials" },
                { label: "FAQ", path: "/#faq" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="flex items-center justify-between text-white/80 hover:text-[#00a8ff] transition-colors duration-300 py-2 border-b border-white/10 last:border-0"
                >
                  <span>{item.label}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div style={glassEffect} className="px-6 py-4 rounded-xl">
            <p className="text-white/50 text-sm">
              This sitemap was last updated automatically. All links are
              verified regularly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="text-[#00a8ff] hover:text-[#4dc3ff] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#00a8ff] hover:text-[#4dc3ff] transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className="text-[#00a8ff] hover:text-[#4dc3ff] transition-colors duration-300 inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
