"use client";

import logo from "@/public/img/logo.png";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Liquid glass animation variants
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      filter: "blur(10px)",
    },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
  ];

  const socialLinks = [
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
      icon: <FaTwitter />,
      href: "https://twitter.com/barkatzx",
      label: "Twitter",
    },
  ];

  // New soothing blue color
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";
  const primaryColorDark = "#0097e6";

  // Liquid glass effect with black background compatibility
  const liquidGlassStyle = {
    background: scrolled
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)"
      : "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
    backdropFilter: scrolled
      ? "blur(20px) saturate(180%)"
      : "blur(16px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: scrolled
      ? "0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
      : "0 4px 24px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255, 255, 255, 0.08) inset",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  // All buttons use new soothing blue color
  const buttonStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: `0 8px 32px ${primaryColor}20, 0 2px 8px rgba(255, 255, 255, 0.1) inset`,
  };

  return (
    <>
      {/* Desktop Header with Liquid Glass Effect */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 container mx-auto px-4"
        style={{
          ...liquidGlassStyle,
          borderRadius: "20px",
          width: "calc(100% - 2rem)",
          maxWidth: "calc(7xl - 2rem)",
        }}
      >
        {/* Animated liquid background */}
        <div className="relative z-10 mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with Glass Effect */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/10 to-[#00a8ff]/5 blur-lg group-hover:blur-2xl transition-all duration-500 rounded-2xl" />
                  <Image
                    src={logo}
                    alt="Barkat Ullah"
                    width={96}
                    height={48}
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - White background on hover */}
            <nav className="flex items-center">
              <div className="flex items-center gap-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl px-2 py-2 border border-white/10 shadow-lg shadow-black/10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={navItemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-5 py-2.5 text-white/90 hover:text-white rounded-xl transition-all duration-300 group"
                    >
                      <span className="relative">{item.label}</span>
                      {/* White background on hover for desktop */}
                      <span className="absolute inset-0 transition-all duration-300" />
                      {/* Blue underline effect */}
                      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#00a8ff] group-hover:w-3/5 transition-all duration-300 rounded-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Right Side - Social & CTA with Glass Effect */}
            <div className="flex items-center gap-3">
              {/* Social Links with Glass Bubbles */}
              <motion.div
                className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center group overflow-hidden"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* Blue bubble effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00a8ff]/0 to-[#00a8ff]/0 group-hover:from-[#00a8ff]/20 group-hover:to-[#00a8ff]/10 transition-all duration-300" />
                    <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-300 rounded-xl" />

                    <span className="relative text-white/70 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Button with soothing blue color */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/contact">
                  <button
                    className="relative px-6 py-3 text-white font-semibold rounded-xl overflow-hidden group"
                    style={buttonStyle}
                  >
                    {/* Animated blue background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#00a8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <span className="font-[Recoleta] relative z-10 flex items-center gap-2">
                      Get In Touch
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.span>
                    </span>

                    {/* Blue border animation */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header with Liquid Glass */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="md:hidden fixed top-4 left-4 right-4 z-50"
        style={{
          ...liquidGlassStyle,
          borderRadius: "20px",
        }}
      >
        <div className="relative z-10 px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="" />
                <Image
                  src={logo}
                  alt="Barkat Ullah"
                  width={96}
                  height={40}
                  className="relative rounded-xl"
                  priority
                />
              </Link>
            </motion.div>

            {/* Mobile Menu Button with Liquid Effect */}
            <motion.button
              onClick={toggleMenu}
              className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden group"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              style={buttonStyle}
            >
              {/* Blue liquid background */}

              {isMenuOpen ? (
                <FiX className="relative text-white" size={24} />
              ) : (
                <FiMenu className="relative text-white" size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay with Liquid Glass */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Liquid Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 z-40"
              />

              {/* Mobile Menu Panel with Improved Visibility */}
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-4 right-4 z-50 overflow-hidden mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
                }}
              >
                {/* Blue overlay for liquid effect */}
                <div className="absolute inset-0 bg-[#000000]/50" />

                {/* Animated liquid background - Blue theme */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#00a8ff]/10 to-[#00a8ff]/5 animate-pulse"
                    style={{
                      left: `${mousePosition.x * 0.03}px`,
                      top: `${mousePosition.y * 0.03}px`,
                      filter: "blur(80px)",
                    }}
                  />
                </div>

                {/* Menu Items with Better Contrast */}
                <nav className="relative z-10 py-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      variants={navItemVariants}
                      custom={i}
                      className="px-6"
                      whileHover={{ x: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-4 group relative"
                      >
                        {/* Blue hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/10 to-[#00a8ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                        <span className="relative text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                        <FiArrowRight className="relative text-white/60 group-hover:text-[#00a8ff] transform group-hover:translate-x-2 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Section with Blue theme */}
                <div className="relative z-10 p-6 bg-gradient-to-br from-black/80 to-black/60 border-t border-white/10">
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mb-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden group"
                        whileTap={{ scale: 0.95 }}
                        style={buttonStyle}
                      >
                        {/* Blue hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00a8ff]/0 to-[#00a8ff]/0 group-hover:from-[#00a8ff]/40 group-hover:to-[#00a8ff]/20 transition-all duration-300" />
                        <span className="relative text-white/70 group-hover:text-white transition-colors">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Contact Button with soothing blue color */}
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-xl font-[Recoleta]"
                  >
                    <Link href="/contact" onClick={closeMenu}>
                      <button
                        className="w-full py-4 text-white font-semibold flex items-center justify-center gap-2 relative overflow-hidden"
                        style={buttonStyle}
                      >
                        {/* Blue shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                        Contact Me
                        <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}
