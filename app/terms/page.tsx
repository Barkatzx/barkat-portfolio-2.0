"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBook,
  FaCheckCircle,
  FaFileContract,
  FaGavel,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";

export default function TermsAndConditionsPage() {
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

  const keyPoints = [
    {
      icon: <FaFileContract className="text-xl" />,
      title: "Clear Agreements",
      description: "Transparent terms for all services",
    },
    {
      icon: <FaUserCheck className="text-xl" />,
      title: "User Rights",
      description: "Your rights and responsibilities clearly defined",
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Legal Protection",
      description: "Comprehensive legal safeguards",
    },
    {
      icon: <FaGavel className="text-xl" />,
      title: "Fair Practices",
      description: "Ethical and fair business practices",
    },
  ];

  const importantClauses = [
    "Acceptance of terms when using our services",
    "Intellectual property rights and usage",
    "Limitation of liability and warranties",
    "Payment terms and conditions",
    "Project scope and deliverables",
    "Termination and cancellation policies",
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
              Legal Terms
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-[Recoleta] text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Terms &</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#80d4ff]">
              Conditions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-12">
            Please read these terms carefully before using our services. By
            accessing or using our services, you agree to be bound by these
            terms.
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

        {/* Key Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              style={glassStyle(0.1)}
              className="rounded-2xl p-6 text-center hover:border-[#00a8ff]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                <div className="text-[#00a8ff]">{point.icon}</div>
              </div>
              <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-white/60 text-sm">{point.description}</p>
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
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10 p-4">
                <FaBook className="text-[#00a8ff]" />
              </div>
              <div>
                <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-2">
                  Agreement to Terms
                </h2>
                <p className="text-white/70">
                  By accessing and using the services provided by Barkat Ullah
                  ("we," "us," or "our"), you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Important Clauses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={blueGlassEffect}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                <FaGavel className="text-[#00a8ff]" />
              </div>
              Important Clauses
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {importantClauses.map((clause, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#00a8ff]/20 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#00a8ff] rounded-full"></div>
                  </div>
                  <p className="text-white/80">{clause}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              1. Service Terms
            </h2>

            <div className="space-y-6">
              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                  Scope of Services
                </h3>
                <p className="text-white/70">
                  We provide web development, design, and consulting services as
                  outlined in individual project agreements. Each project will
                  have specific terms, deliverables, and timelines agreed upon
                  before commencement.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                  Project Agreements
                </h3>
                <p className="text-white/70">
                  All projects require a signed agreement outlining scope,
                  deliverables, timeline, payment terms, and intellectual
                  property rights. Verbal agreements are not binding until
                  formalized in writing.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <h3 className="font-[Recoleta] text-xl font-semibold text-white mb-2">
                  Revisions & Changes
                </h3>
                <p className="text-white/70">
                  Revisions are included as specified in project agreements.
                  Significant changes to project scope may require additional
                  time and cost, which will be communicated and agreed upon in
                  writing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              2. Intellectual Property
            </h2>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">
                    Client Materials
                  </h3>
                  <p className="text-white/60 text-sm">
                    You retain ownership of materials you provide
                  </p>
                </div>
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">
                    Delivered Work
                  </h3>
                  <p className="text-white/60 text-sm">
                    Final work transferred upon full payment
                  </p>
                </div>
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Our Tools</h3>
                  <p className="text-white/60 text-sm">
                    Development tools and frameworks remain ours
                  </p>
                </div>
                <div style={glassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">
                    Third-Party Assets
                  </h3>
                  <p className="text-white/60 text-sm">
                    Licenses for third-party assets are your responsibility
                  </p>
                </div>
              </div>

              <p className="text-white/70">
                Upon receipt of full payment, ownership of the final
                deliverables is transferred to you, subject to any third-party
                licenses. We retain the right to display completed work in our
                portfolio unless otherwise specified in writing.
              </p>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={blueGlassEffect}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              3. Payment Terms
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                  <FaCheckCircle className="text-[#00a8ff] text-sm" />
                </div>
                <span className="text-white/80">
                  50% deposit required to begin work
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                  <FaCheckCircle className="text-[#00a8ff] text-sm" />
                </div>
                <span className="text-white/80">
                  Balance due upon project completion
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                  <FaCheckCircle className="text-[#00a8ff] text-sm" />
                </div>
                <span className="text-white/80">
                  Late payments may incur additional fees
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                  <FaCheckCircle className="text-[#00a8ff] text-sm" />
                </div>
                <span className="text-white/80">
                  All prices in USD unless otherwise specified
                </span>
              </div>

              <p className="text-white/60 text-sm mt-6 pl-11">
                We reserve the right to withhold delivery of final work until
                full payment is received. Refunds are handled on a case-by-case
                basis as outlined in individual agreements.
              </p>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              4. Limitation of Liability
            </h2>

            <div className="space-y-4">
              <p className="text-white/70">
                To the fullest extent permitted by law, our total liability for
                any claims arising from or related to our services shall not
                exceed the total amount paid by you for the specific services
                giving rise to the claim.
              </p>

              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <p className="text-white/60 text-sm">
                  We are not liable for any indirect, incidental, consequential,
                  or punitive damages, including but not limited to loss of
                  profits, data, or business opportunities.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-[#00a8ff]/30">
                <p className="text-white/60 text-sm">
                  You agree to indemnify and hold us harmless from any claims,
                  damages, or expenses arising from your use of our services or
                  violation of these terms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            style={glassStyle(0.1)}
            className="rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-6">
              5. Termination & Cancellation
            </h2>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div style={blueGlassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">By Client</h3>
                  <p className="text-white/80 text-sm">
                    Written notice required for cancellation
                  </p>
                </div>
                <div style={blueGlassEffect} className="p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">By Us</h3>
                  <p className="text-white/80 text-sm">
                    May terminate for non-payment or breach
                  </p>
                </div>
              </div>

              <p className="text-white/70">
                Either party may terminate services with written notice. Upon
                termination, you are responsible for payment for work completed
                up to the termination date. Deposits for cancelled projects are
                non-refundable for work already completed.
              </p>
            </div>
          </motion.div>

          {/* Contact & Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            style={blueGlassEffect}
            className="rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl font-bold text-white mb-4">
              Agreement & Contact
            </h2>

            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
              These terms constitute the entire agreement between you and Barkat
              Ullah regarding the use of our services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:barkatullah.zx@gmail.com"
                style={glassEffect}
                className="px-6 py-3 rounded-xl font-semibold text-white hover:text-[#00a8ff] transition-colors duration-300"
              >
                Questions? Email Us
              </a>

              <Link
                href="/contact"
                style={glassEffect}
                className="px-6 py-3 rounded-xl font-semibold text-white hover:text-[#00a8ff] transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>

            <p className="text-white/50 text-sm mt-8">
              We reserve the right to modify these terms at any time. Continued
              use of our services after changes constitutes acceptance of the
              modified terms.
            </p>
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div style={glassStyle(0.05)} className="px-6 py-4 rounded-xl">
            <p className="text-white/50 text-sm">
              These Terms & Conditions are effective as of the last updated date
              above.
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
