"use client";

import logo from "@/public/img/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { SiBuymeacoffee, SiFreelancer, SiUpwork } from "react-icons/si";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const hirePlatforms = [
    {
      href: "https://upwork.com/freelancers/barkatzx",
      icon: <SiUpwork />,
      label: "Upwork",
      badge: "Top Rated (Active)",
    },
    {
      href: "https://kwork.com/user/barkatzx",
      icon: <MdWorkspacePremium />,
      label: "Kwork",
      badge: "New",
    },
    {
      href: "https://freelancer.com/u/barkatzx",
      icon: <SiFreelancer />,
      label: "Freelancer",
      badge: "New",
    },
    {
      href: "https://buymeacoffee.com/barkatzx",
      icon: <SiBuymeacoffee />,
      label: "Buy Me Coffee",
      badge: "Support",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/barkatzx",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/barkatzx",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://facebook.com/barkatzx",
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.youtube.com/@BarkatUllahzx",
      icon: <FaYoutube />,
      label: "YouTube",
    },
  ];

  // Liquid glass style utility
  const liquidGlassStyle = (opacity: number = 0.1) => ({
    background: `linear-gradient(135deg, 
      rgba(255, 255, 255, ${opacity}) 0%, 
      rgba(255, 255, 255, ${opacity * 0.5}) 50%, 
      rgba(255, 255, 255, ${opacity * 0.2}) 100%
    )`,
    backdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 4px 20px rgba(0, 0, 0, 0.15),
      0 1px 0 rgba(255, 255, 255, 0.05) inset,
      0 0 20px rgba(0, 168, 255, 0.05)
    `,
  });

  // Hover glass style
  const hoverGlassStyle = {
    background: `linear-gradient(135deg, 
      rgba(0, 168, 255, 0.15) 0%, 
      rgba(77, 195, 255, 0.1) 50%, 
      rgba(0, 168, 255, 0.05) 100%
    )`,
    backdropFilter: "blur(12px) saturate(200%)",
    border: "1px solid rgba(0, 168, 255, 0.2)",
    boxShadow: `
      0 8px 32px rgba(0, 168, 255, 0.15),
      0 2px 0 rgba(255, 255, 255, 0.1) inset,
      0 0 30px rgba(0, 168, 255, 0.1)
    `,
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-white/5 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00a8ff]/10 via-transparent to-[#00a8ff]/5 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#00a8ff]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#00a8ff]/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-block">
                <div className="relative group">
                  <div
                    className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(0,168,255,0.2) 0%, transparent 70%)",
                    }}
                  ></div>
                  <div className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={logo}
                          alt="Barkat Ullah Logo"
                          width={96}
                          height={60}
                          className="rounded-xl"
                          priority
                        />
                        <div className="absolute -inset-1 rounded-xl border border-[#00a8ff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed pl-4">
                Creating exceptional digital experiences with modern technology
                and innovative solutions. Let&apos;s build something amazing
                together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  {
                    href: "mailto:barkatullah.zx@gmail.com",
                    icon: <FaEnvelope />,
                    text: "barkatullah.zx@gmail.com",
                    label: "Email",
                  },
                  {
                    href: "tel:+8801989190199",
                    icon: <FaPhoneAlt />,
                    text: "+880 1989 190 199",
                    label: "Phone",
                  },
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-[#00a8ff]/20 to-[#00a8ff]/10">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        {contact.text}
                      </div>
                      <div className="text-white/50 text-xs">
                        {contact.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-[Recoleta] text-lg text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff]"></div>
                Quick Links
              </h3>
              <div className="">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:pl-4 group"
                  >
                    <div className="text-[#00a8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight className="text-xs" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hire Platforms */}
            <div>
              <h3 className="font-[Recoleta] text-lg text-white mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff]"></div>
                Hire Me On
              </h3>
              <div className="space-y-3">
                {hirePlatforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0"></div>
                    <div className="relative flex items-center justify-between p-4 transition-all duration-300 group-hover:scale-[1.01]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-[#00a8ff]/20 to-[#00a8ff]/10">
                          {platform.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            {platform.label}
                          </div>
                          {platform.badge && (
                            <div className="text-xs text-[#00a8ff] font-medium">
                              {platform.badge}
                            </div>
                          )}
                        </div>
                      </div>
                      <FaArrowRight className="text-white/40 group-hover:text-[#00a8ff] transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="font-[Recoleta] text-lg text-white flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff]"></div>
                Let&apos;s Connect
              </h3>

              <div className="p-4">
                <p className="text-white/70 text-lg mb-6">
                  Follow my journey and get in touch for collaborations or to
                  discuss your next project.
                </p>

                {/* Social Links Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl transition-all duration-300 hover:scale-[1.03]"
                      style={liquidGlassStyle(0.04)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-white/70 group-hover:text-[#00a8ff] transition-colors">
                          {social.icon}
                        </div>
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          ></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div
                className="inline-flex items-center gap-4 px-6 py-3 rounded-xl"
                style={liquidGlassStyle(0.08)}
              >
                <div className="text-white/70">
                  © {currentYear}{" "}
                  <span className="text-white font-medium">Barkat Ullah</span>.
                  All rights reserved.
                </div>
                <div className="hidden sm:block text-xs text-white/50">
                  Built with <span className="text-[#00a8ff]">Next.js</span> •
                  Powered by <span className="text-[#00a8ff]">Passion</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white transition-colors hover:bg-white/5"
            >
              <FaArrowRight className="transform rotate-90" />
              Back to Top
            </button>
          </div>

          {/* Signature Line */}
          <div className="text-center mt-8">
            <div className="inline-block px-4 py-2 rounded-lg">
              <div className="text-xs text-white/40">
                <span className="text-[#00a8ff]/60">✦</span> Crafting digital
                excellence
                <span className="text-[#00a8ff]/60"> ✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
