"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLightbulb,
  FaLinkedin,
  FaRocket,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

const skills = [
  { name: "nextjs", label: "Next.js" },
  { name: "typescript", label: "TypeScript" },
  { name: "js", label: "JavaScript" },
  { name: "react", label: "React" },
  { name: "redux", label: "Redux" },
  { name: "nodejs", label: "Node.js" },
  { name: "express", label: "Express" },
  { name: "tailwind", label: "Tailwind" },
  { name: "bootstrap", label: "Bootstrap" },
  { name: "firebase", label: "Firebase" },
  { name: "wordpress", label: "WordPress" },
  { name: "php", label: "PHP" },
  { name: "mysql", label: "MySQL" },
  { name: "mongodb", label: "MongoDB" },
  { name: "docker", label: "Docker" },
  { name: "prisma", label: "Prisma" },
];

const values = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "Constantly exploring new technologies and approaches",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    description: "Working closely with clients to achieve their vision",
  },
];

const categories = [
  { name: "Front End", color: "text-[#00a8ff]" },
  { name: "Full Stack", color: "text-[#4dc3ff]" },
  { name: "WordPress", color: "text-[#80d4ff]" },
  { name: "Flutter", color: "text-[#b3e0ff]" },
];

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // New soothing blue color
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";
  const primaryColorDark = "#0097e6";

  // Liquid glass effect styles
  const liquidGlassStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    backdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.05) inset",
  };

  // Button style with soothing blue color
  const buttonStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: `0 8px 32px ${primaryColor}20, 0 2px 8px rgba(255, 255, 255, 0.1) inset`,
  };

  return (
    <main className="min-h-screen bg-black rounded-3xl overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-5 md:px-20 py-16 md:py-24">
        {/* Liquid Glass Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#00a8ff]/10 via-transparent to-[#00a8ff]/5 blur-3xl"
            style={{
              left: `${mousePosition.x * 0.01}px`,
              top: `${mousePosition.y * 0.01}px`,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={liquidGlassStyle}
          >
            <span className="w-2 h-2 bg-[#00a8ff] rounded-full"></span>
            <span className="text-sm font-semibold text-[#00a8ff]">
              About Me
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-[Recoleta] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Where Code Meets
              </span>
              <span className="block bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#80d4ff] bg-clip-text text-transparent mt-2">
                Creativity & Innovation
              </span>
            </h1>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {categories.map((category) => (
              <span
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${category.color} border border-white/10`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                }}
              >
                {category.name}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl">
              I&apos;m a Full Stack Developer who bridges logic and design to
              build powerful, user-focused web experiences. From clean code to
              creative interfaces, I love turning complex ideas into seamless
              digital solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={buttonStyle}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#00a8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border border-white/20 text-white/90 font-semibold rounded-xl hover:border-[#00a8ff]/50 hover:shadow-lg transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
              }}
            >
              <span className="flex items-center gap-2">
                Let&apos;s Work Together
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <span className="text-white/80 font-medium">Connect with me:</span>
            <div className="flex gap-3">
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/barkatzx",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/in/barkatzx",
                  label: "LinkedIn",
                },
                {
                  icon: <FaYoutube />,
                  href: "https://youtube.com/@BarkatUllahzx",
                  label: "YouTube",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span className="text-white/70 group-hover:text-[#00a8ff] transition-colors text-lg">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-5 md:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[Recoleta] text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              My Development Values
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              The principles that guide my approach to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="rounded-2xl hover:shadow-xl transition-all duration-500 p-6 h-full"
                  style={liquidGlassStyle}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                    }}
                  >
                    <div className="text-white text-2xl">{value.icon}</div>
                  </div>
                  <h3 className="font-[Recoleta] text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70">{value.description}</p>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div
                      className="h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-5 md:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={liquidGlassStyle}
            >
              <span className="w-2 h-2 bg-[#00a8ff] rounded-full"></span>
              <span className="text-sm font-semibold text-[#00a8ff]">
                Tech Stack
              </span>
            </div>
            <h2 className="font-[Recoleta] text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Technologies I Work With
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div
                  className="rounded-2xl border border-white/10 hover:border-[#00a8ff]/30 hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  }}
                >
                  <div className="w-16 h-16 relative mb-4">
                    <Image
                      src={`https://skillicons.dev/icons?i=${skill.name}`}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-[#00a8ff] transition-colors">
                    {skill.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl border border-white/10 shadow-lg max-w-3xl mx-auto"
              style={liquidGlassStyle}
            >
              <div className="text-left">
                <h3 className="font-[Recoleta] text-2xl font-bold text-white mb-2">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-white/70">
                  Let&apos;s discuss your project and how we can work together.
                </p>
              </div>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={buttonStyle}
              >
                Get In Touch
                <FaArrowRight className="inline-block ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
