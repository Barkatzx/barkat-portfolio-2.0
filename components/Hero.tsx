"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaAward,
  FaBolt,
  FaChartLine,
  FaChevronRight,
  FaGlobe,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Predefined positions for particles (same on server and client)
const PARTICLE_POSITIONS = [
  { left: "10%", top: "20%" },
  { left: "25%", top: "45%" },
  { left: "40%", top: "15%" },
  { left: "55%", top: "65%" },
  { left: "70%", top: "25%" },
  { left: "85%", top: "55%" },
  { left: "15%", top: "75%" },
  { left: "30%", top: "35%" },
  { left: "45%", top: "85%" },
  { left: "60%", top: "10%" },
  { left: "75%", top: "45%" },
  { left: "90%", top: "30%" },
  { left: "20%", top: "60%" },
  { left: "35%", top: "25%" },
  { left: "50%", top: "75%" },
  { left: "65%", top: "40%" },
  { left: "80%", top: "15%" },
  { left: "95%", top: "50%" },
  { left: "5%", top: "40%" },
  { left: "40%", top: "95%" },
];

// Counter component - Fixed to avoid hydration errors
function Counter({
  target,
  duration,
  delay = 0,
  children,
}: {
  target: number;
  duration: number;
  delay?: number;
  children: (value: number) => React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client
    if (!isClient) return;

    // Clean up any existing animation
    if (animationIdRef.current) {
      clearTimeout(animationIdRef.current);
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Reset state
    setCount(0);
    hasStartedRef.current = false;
    setIsAnimating(false);

    // Use IntersectionObserver to trigger animation when counter is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current && isClient) {
            hasStartedRef.current = true;
            setIsAnimating(true);

            // Start animation after delay
            animationIdRef.current = setTimeout(() => {
              let start = 0;
              const increment = target / (duration * 60);

              const animate = () => {
                start += increment;
                if (start >= target) {
                  setCount(target);
                  setIsAnimating(false);
                } else {
                  setCount(Math.floor(start));
                  animationFrameRef.current = requestAnimationFrame(animate);
                }
              };

              animationFrameRef.current = requestAnimationFrame(animate);
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (animationIdRef.current) {
        clearTimeout(animationIdRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, duration, delay, isClient]);

  // Always return children with count value
  // On server, it will be 0, on client it will be animated value
  return (
    <>
      {/* Hidden element for IntersectionObserver */}
      <div ref={counterRef} className="absolute opacity-0 w-0 h-0" />
      {/* Render children with current count */}
      {children(count)}
    </>
  );
}

export default function ModernHero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const mainGradientRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      controls.start("visible");
      hasAnimatedRef.current = true;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Simulate loading for animations
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [inView, controls]);

  // Reset animation tracking when component mounts
  useEffect(() => {
    hasAnimatedRef.current = false;
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Color scheme
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";
  const primaryColorDark = "#0097e6";

  // Liquid glass effect
  const liquidGlassStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    backdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.05) inset",
  };

  const buttonStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: `0 8px 32px ${primaryColor}20, 0 2px 8px rgba(255, 255, 255, 0.1) inset`,
  };

  return (
    <section className="relative container mx-auto flex items-center justify-center overflow-hidden bg-black py-5 rounded-3xl mt-5 md:mt-2">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main moving gradient - Fixed initial position */}
        <div
          ref={mainGradientRef}
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-[#00a8ff]/15 via-[#4dc3ff]/10 to-transparent blur-3xl"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating particles - Using predefined positions */}
        {PARTICLE_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00a8ff]/30 rounded-full"
            style={position}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.2,
            }}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#00a8ff]/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0097e6]/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 md:space-y-10"
            >
              {/* Badge with floating animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 hover:border-[#00a8ff]/50 transition-all duration-300 group"
                style={liquidGlassStyle}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#00a8ff] to-[#4dc3ff] rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-[#00a8ff] rounded-full animate-ping opacity-30" />
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">
                  Your vision. My code. Real results
                </span>
                <FaChevronRight className="w-3 h-3 text-[#00a8ff] transform group-hover:translate-x-1 transition-transform" />
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4 md:space-y-6">
                <h1 className="font-[Recoleta] text-4xl md:text-5xl lg:text-6xl">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/90">
                    Transforming Ideas Into
                  </span>
                  <span className="relative block mt-2 md:mt-3">
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#80d8ff]">
                      Digital Excellence
                    </span>
                    {/* Underline effect */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isLoaded ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-transparent rounded-full origin-left"
                    />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="text-xl text-white/80"
              >
                I architect and build high-performance web applications that
                drive business growth. With cutting-edge technology and
                user-centric design, I create digital experiences that not only
                look exceptional but deliver measurable results.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6"
              >
                {/* Primary Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 md:px-10 py-4 md:py-5 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300"
                  style={buttonStyle}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-base md:text-lg">
                    <Link href="/contact">Start Your Project</Link>
                    <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 md:px-10 py-4 md:py-5 text-white font-semibold rounded-xl border border-white/20 hover:border-[#00a8ff]/50 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Link href="/projects">
                      <span>View Portfolio</span>
                    </Link>
                    <FaChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/0 to-[#00a8ff]/0 group-hover:from-[#00a8ff]/10 group-hover:to-[#00a8ff]/5 transition-all duration-500" />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row items-center gap-6 pt-6 md:pt-8 border-t border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar
                        key={i}
                        className="w-4 h-4 text-[#00a8ff] fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm">Rated 5.0/5.0</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/10" />
                <div className="flex items-center gap-3">
                  <FaUsers className="w-4 h-4 text-[#00a8ff]" />
                  <span className="text-white/70 text-sm">
                    100+ Satisfied Clients
                  </span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/10" />
                <div className="flex items-center gap-3">
                  <FaAward className="w-4 h-4 text-[#00a8ff]" />
                  <span className="text-white/70 text-sm">Industry Awards</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Stats & Visuals - 5 columns */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="grid grid-cols-2 gap-4"
              >
                {/* Stat 1 - Experience */}
                <motion.div
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl border border-white/10 hover:border-[#00a8ff]/40 transition-all duration-500 overflow-hidden hover:shadow-2xl"
                  style={liquidGlassStyle}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                        <FaTrophy className="w-5 h-5 text-[#00a8ff]" />
                      </div>
                      <div className="text-xs font-medium text-white/60">
                        EXPERIENCE
                      </div>
                    </div>
                    <Counter target={5} duration={2} delay={0.2}>
                      {(value) => (
                        <div className="text-4xl font-bold text-white">
                          {value}+{" "}
                          <span className="text-lg text-[#00a8ff]">Years</span>
                        </div>
                      )}
                    </Counter>
                  </div>
                </motion.div>

                {/* Stat 2 - Projects */}
                <motion.div
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl border border-white/10 hover:border-[#00a8ff]/40 transition-all duration-500 overflow-hidden hover:shadow-2xl"
                  style={liquidGlassStyle}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                        <FaRocket className="w-5 h-5 text-[#00a8ff]" />
                      </div>
                      <div className="text-xs font-medium text-white/60">
                        PROJECTS
                      </div>
                    </div>
                    <Counter target={120} duration={2.5} delay={0.4}>
                      {(value) => (
                        <div className="text-4xl font-bold text-white">
                          {value}+{" "}
                          <span className="text-lg text-[#00a8ff]">
                            Delivered
                          </span>
                        </div>
                      )}
                    </Counter>
                  </div>
                </motion.div>

                {/* Stat 3 - Clients */}
                <motion.div
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl border border-white/10 hover:border-[#00a8ff]/40 transition-all duration-500 overflow-hidden hover:shadow-2xl"
                  style={liquidGlassStyle}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                        <FaGlobe className="w-5 h-5 text-[#00a8ff]" />
                      </div>
                      <div className="text-xs font-medium text-white/60">
                        CLIENTS
                      </div>
                    </div>
                    <Counter target={80} duration={2} delay={0.6}>
                      {(value) => (
                        <div className="text-4xl font-bold text-white">
                          {value}+{" "}
                          <span className="text-lg text-[#00a8ff]">Global</span>
                        </div>
                      )}
                    </Counter>
                  </div>
                </motion.div>

                {/* Stat 4 - Success Rate */}
                <motion.div
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl border border-white/10 hover:border-[#00a8ff]/40 transition-all duration-500 overflow-hidden hover:shadow-2xl"
                  style={liquidGlassStyle}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10">
                        <FaChartLine className="w-5 h-5 text-[#00a8ff]" />
                      </div>
                      <div className="text-xs font-medium text-white/60">
                        SUCCESS
                      </div>
                    </div>
                    <Counter target={98} duration={2} delay={0.8}>
                      {(value) => (
                        <div className="text-4xl font-bold text-white">
                          {value}%{" "}
                          <span className="text-lg text-[#00a8ff]">Rate</span>
                        </div>
                      )}
                    </Counter>
                  </div>
                </motion.div>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="space-y-4"
              >
                <div
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-[#00a8ff]/30 transition-all duration-300 group"
                  style={liquidGlassStyle}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10 group-hover:scale-110 transition-transform">
                    <FaBolt className="w-4 h-4 text-[#00a8ff]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Lightning Fast</p>
                    <p className="text-sm text-white/60">
                      90+ PageSpeed Scores
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-[#00a8ff]/30 transition-all duration-300 group"
                  style={liquidGlassStyle}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10 group-hover:scale-110 transition-transform">
                    <FaShieldAlt className="w-4 h-4 text-[#00a8ff]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">
                      Secure & Scalable
                    </p>
                    <p className="text-sm text-white/60">
                      Enterprise-grade Security
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-[#00a8ff]/30 transition-all duration-300 group"
                  style={liquidGlassStyle}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-[#4dc3ff]/10 group-hover:scale-110 transition-transform">
                    <FaHandshake className="w-4 h-4 text-[#00a8ff]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">Ongoing Support</p>
                    <p className="text-sm text-white/60">
                      24/7 Technical Assistance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Stack */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.5 }}
                className="relative p-4 rounded-2xl backdrop-blur-md"
                style={liquidGlassStyle}
              >
                <div className="text-center">
                  <p className="text-sm font-medium text-white/70 mb-3">
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "MongoDB",
                      "Firebase",
                      "Docker",
                      "Flutter",
                      "WordPress",
                      "Php",
                    ].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.6 + i * 0.1 }}
                        className="px-3 py-1.5 text-xs font-medium text-white/80 rounded-full border border-white/10 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 cursor-default"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-white/50 tracking-wider">
              SCROLL TO EXPLORE
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#00a8ff] via-[#4dc3ff] to-transparent animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
