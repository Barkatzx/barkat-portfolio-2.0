"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCheckCircle,
  FaLock,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

export default function PrivacyPolicyPage() {
  // Liquid glass style
  const glassStyle = (opacity: number = 0.1) => ({
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, ${opacity}) 0%, 
      rgba(255, 255, 255, ${opacity * 0.5}) 100%
    )`,
    backdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.2),
      0 1px 0 rgba(255, 255, 255, 0.05) inset
    `,
  });

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

  const privacyPrinciples = [
    {
      icon: <FaLock className="text-xl" />,
      title: "Data Minimization",
      description: "We only collect data necessary for providing our services",
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Security First",
      description:
        "Advanced encryption and security measures protect your data",
    },
    {
      icon: <FaUserShield className="text-xl" />,
      title: "Transparency",
      description: "Clear communication about how we use your information",
    },
    {
      icon: <FaCheckCircle className="text-xl" />,
      title: "Your Control",
      description: "You have full control over your personal data",
    },
  ];

  const privacyPoints = [
    "We never sell your personal data to third parties",
    "Your data is encrypted both in transit and at rest",
    "Regular security audits and vulnerability assessments",
    "GDPR and CCPA compliance standards",
    "Clear data retention policies",
    "Right to access, correct, and delete your data",
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
            style={glassStyle(0.15)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00a8ff] rounded-full blur-sm opacity-50" />
              <div className="relative w-3 h-3 bg-[#00a8ff] rounded-full" />
            </div>
            <span className="text-sm font-semibold text-[#00a8ff]">
              Privacy & Security
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-[Recoleta] text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Privacy Policy</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#80d4ff]">
              Your Data, Protected
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-12">
            We are committed to protecting your privacy and ensuring your
            personal data is handled with the utmost care and security.
          </p>

          {/* Last Updated */}
          <div
            style={glassStyle(0.1)}
            className="inline-block px-6 py-3 rounded-xl"
          >
            <span className="text-white/60 text-sm">Last Updated: </span>
            <span className="text-white font-medium">1st January 2026</span>
          </div>
        </motion.div>

        {/* Privacy Principles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {privacyPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              style={glassStyle(0.1)}
              className="rounded-2xl p-6 text-center hover:border-[#00a8ff]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                <div className="text-[#00a8ff]">{principle.icon}</div>
              </div>
              <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-white/60 text-sm">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                <FaLock className="text-[#00a8ff]" />
              </div>
              <div>
                <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-2">
                  Our Commitment to Privacy
                </h2>
                <p className="text-white/70">
                  At Barkat Ullah, we take your privacy seriously. This policy
                  outlines how we collect, use, and protect your personal
                  information when you use our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                <FaUserShield className="text-[#00a8ff]" />
              </div>
              Information We Collect
            </h2>

            <div className="space-y-4">
              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                  Personal Information
                </h3>
                <p className="text-white/70">
                  When you contact us or use our services, we may collect your
                  name, email address, phone number, and other information
                  necessary to provide our services.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                  Usage Data
                </h3>
                <p className="text-white/70">
                  We collect information about how you interact with our
                  website, including pages visited, time spent, and device
                  information to improve our services.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                  Cookies
                </h3>
                <p className="text-white/70">
                  We use cookies to enhance your experience, analyze site
                  traffic, and remember your preferences. You can control cookie
                  settings through your browser.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={blueGlassEffect}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              How We Use Your Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {privacyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#00a8ff]/20 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#00a8ff] rounded-full"></div>
                  </div>
                  <p className="text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                <FaShieldAlt className="text-[#00a8ff]" />
              </div>
              Data Security
            </h2>

            <div className="space-y-6">
              <p className="text-white/70">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Encryption</h3>
                  <p className="text-white/60 text-sm">
                    SSL/TLS encryption for all data transmission
                  </p>
                </div>
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">
                    Access Control
                  </h3>
                  <p className="text-white/60 text-sm">
                    Strict access controls and authentication
                  </p>
                </div>
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">
                    Regular Audits
                  </h3>
                  <p className="text-white/60 text-sm">
                    Security audits and vulnerability assessments
                  </p>
                </div>
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Data Backup</h3>
                  <p className="text-white/60 text-sm">
                    Regular encrypted backups of critical data
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              Your Privacy Rights
            </h2>

            <div className="space-y-4">
              <p className="text-white/70 mb-6">
                You have the following rights regarding your personal data:
              </p>

              <div className="space-y-3">
                {[
                  "Right to access your personal data",
                  "Right to correct inaccurate data",
                  "Right to delete your personal data",
                  "Right to restrict processing",
                  "Right to data portability",
                  "Right to object to processing",
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                      <FaCheckCircle className="text-[#00a8ff] text-sm" />
                    </div>
                    <span className="text-white/80">{right}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm mt-6">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:barkatullah.zx@gmail.com"
                  className="text-[#00a8ff] hover:underline"
                >
                  barkatullah.zx@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            style={blueGlassEffect}
            className="rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-4">
              Contact Us
            </h2>

            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or how we
              handle your data, please don't hesitate to contact us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:barkatullah.zx@gmail.com"
                style={glassEffect}
                className="px-6 py-3 rounded-xl font-semibold text-white hover:text-[#00a8ff] transition-colors duration-300"
              >
                Email Us
              </a>

              <Link
                href="/contact"
                style={glassEffect}
                className="px-6 py-3 rounded-xl font-semibold text-white hover:text-[#00a8ff] transition-colors duration-300"
              >
                Contact Form
              </Link>
            </div>

            <p className="text-white/50 text-sm mt-8">
              We typically respond to privacy-related inquiries within 24-48
              hours.
            </p>
          </motion.div>
        </div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            style={glassStyle(0.05)}
            className="inline-block px-6 py-4 rounded-xl"
          >
            <p className="text-white/50 text-sm">
              This Privacy Policy may be updated periodically. We encourage you
              to review this page regularly for any changes.
            </p>
          </div>

          <div className="mt-8">
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
