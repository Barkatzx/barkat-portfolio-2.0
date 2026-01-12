"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
  rating: number;
  project?: string;
  date?: string;
}

// Extracted constants for better maintainability
const DESIGN_CONSTANTS = {
  COLORS: {
    PRIMARY: "#00a8ff",
    PRIMARY_LIGHT: "#4dc3ff",
    PRIMARY_DARK: "#0097e6",
    WHITE: "#ffffff",
    BLACK: "#000000",
  },
  TRANSITIONS: {
    DURATION: 0.3,
    EASING: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1280,
  },
} as const;

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "GrowthTech Inc.",
      content:
        "Working with Barkat Ullah has been a game-changer for our business. His deep expertise in full-stack development and WordPress solutions enabled us to bring our vision to life faster and more efficiently than we ever thought possible.",
      avatar:
        "https://res.cloudinary.com/dnzvylpzu/image/upload/v1745678289/barkat-portfolio/psepga9cpbmqk26hqjm6.webp",
      rating: 5,
      project: "E-commerce Platform",
      date: "January 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Project Manager",
      company: "Tech Solutions Firm",
      content:
        "Barkat Ullah consistently delivers beyond expectations. His full-stack capabilities, combined with his mastery of WordPress, bring a rare blend of technical precision and creative innovation.",
      avatar:
        "https://res.cloudinary.com/dnzvylpzu/image/upload/v1745678288/barkat-portfolio/hyugchl4cujqxjkfjoyp.jpg",
      rating: 5,
      project: "Enterprise CMS",
      date: "November 2023",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Startup Founder",
      company: "Innovate Labs",
      content:
        "It has been a pleasure working with Barkat Ullah. His knowledge of both front-end and back-end technologies, alongside his WordPress expertise, resulted in a seamless development process.",
      avatar:
        "https://res.cloudinary.com/dnzvylpzu/image/upload/v1745678289/barkat-portfolio/l60pctadwpw2qjhbsxbe.jpg",
      rating: 5,
      project: "SaaS Application",
      date: "March 2024",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "CTO",
      company: "Digital Ventures",
      content:
        "Exceptional attention to detail and proactive problem-solving. The delivered solution exceeded our performance benchmarks.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      project: "Mobile Banking App",
      date: "February 2024",
    },
  ];

  // Liquid glass effect utility function
  const getLiquidGlassStyle = (opacity: number = 0.1) => ({
    background: `linear-gradient(135deg, rgba(255, 255, 255, ${opacity}) 0%, rgba(255, 255, 255, ${opacity * 0.5}) 100%)`,
    backdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.2),
      0 1px 0 rgba(255, 255, 255, 0.05) inset,
      0 0 40px rgba(0, 168, 255, 0.1)
    `,
  });

  const nextTestimonial = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Auto-rotation with pause on hover
  const startAutoRotate = useCallback(() => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }

    autoRotateRef.current = setInterval(() => {
      if (!isPaused) {
        nextTestimonial();
      }
    }, 5000);
  }, [isPaused, nextTestimonial]);

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [startAutoRotate]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Generate star rating component
  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"}`}
        />
      ))}
      <span className="ml-2 text-sm text-white/60">({rating}.0)</span>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-[#00a8ff]/5 via-transparent to-[#00a8ff]/3 blur-3xl"
        />
        <div className="absolute top-0 left-10 w-64 h-64 bg-[#00a8ff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#00a8ff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
            style={getLiquidGlassStyle(0.15)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00a8ff] rounded-full blur-lg opacity-50"></div>
              <div className="relative w-3 h-3 bg-[#00a8ff] rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm font-semibold text-[#00a8ff]">
              Client Testimonials
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-[Recoleta] text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white/80 bg-clip-text text-transparent">
              Trusted by Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00a8ff] via-[#4dc3ff] to-[#00a8ff] bg-clip-text text-transparent">
              Leaders
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Join hundreds of satisfied clients who&apos;ve transformed their
            digital presence with cutting-edge solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {[
              {
                value: "100%",
                label: "Client Satisfaction Rate",
                description: "Based on post-project surveys",
                icon: "⭐",
              },
              {
                value: "50+",
                label: "Projects Delivered",
                description: "Across various industries",
                icon: "🚀",
              },
              {
                value: "24/7",
                label: "Support Available",
                description: "Round-the-clock assistance",
                icon: "🛡️",
              },
              {
                value: "99.9%",
                label: "Uptime Guarantee",
                description: "Maximum reliability",
                icon: "⚡",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] group"
                style={getLiquidGlassStyle(0.1)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{stat.icon}</div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <div
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: DESIGN_CONSTANTS.COLORS.PRIMARY }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-white/90 font-semibold mt-1">
                      {stat.label}
                    </div>
                    <div className="text-white/60 text-sm mt-2">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Testimonial Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative">
              {/* Navigation Buttons - Desktop */}
              <div className="hidden lg:block absolute -left-20 top-1/2 transform -translate-y-1/2 z-10">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center group relative"
                  style={getLiquidGlassStyle(0.15)}
                  aria-label="Previous testimonial"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00a8ff]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <FaChevronLeft className="text-white/70 group-hover:text-[#00a8ff] text-xl transition-colors" />
                </motion.button>
              </div>

              <div className="hidden lg:block absolute -right-20 top-1/2 transform -translate-y-1/2 z-10">
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center group relative"
                  style={getLiquidGlassStyle(0.15)}
                  aria-label="Next testimonial"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-[#00a8ff]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <FaChevronRight className="text-white/70 group-hover:text-[#00a8ff] text-xl transition-colors" />
                </motion.button>
              </div>

              {/* Testimonial Card */}
              <div className="relative h-[550px] md:h-[500px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={testimonials[currentIndex].id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction === "right" ? 100 : -100,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="relative rounded-3xl p-8 md:p-10 h-full flex flex-col group"
                      style={getLiquidGlassStyle(0.15)}
                    >
                      {/* Quote Pattern Background */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#00a8ff] rounded-tl-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#00a8ff] rounded-br-3xl"></div>
                      </div>

                      {/* Quote Icon */}
                      <div className="absolute top-8 right-8">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#00a8ff] rounded-xl blur-lg opacity-20"></div>
                          <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#00a8ff]/20 to-transparent border border-[#00a8ff]/30">
                            <FaQuoteLeft className="text-4xl text-[#00a8ff] opacity-80" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="mb-6">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>

                        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed italic mb-8 font-light">
                          &ldquo;{testimonials[currentIndex].content}&rdquo;
                        </p>

                        {testimonials[currentIndex].project && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-gradient-to-r from-[#00a8ff]/10 to-transparent border border-[#00a8ff]/20">
                            <span className="text-sm font-medium text-[#00a8ff]">
                              Project: {testimonials[currentIndex].project}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full blur-xl"
                            style={{
                              background: `linear-gradient(135deg, ${DESIGN_CONSTANTS.COLORS.PRIMARY} 0%, ${DESIGN_CONSTANTS.COLORS.PRIMARY_LIGHT} 100%)`,
                              opacity: 0.3,
                            }}
                          ></div>
                          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#00a8ff]/50 transition-colors">
                            <Image
                              src={testimonials[currentIndex].avatar}
                              alt={testimonials[currentIndex].name}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                              priority={currentIndex === 0}
                              onError={(e) => {
                                // Fallback for image loading errors
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=00a8ff&color=fff&size=80`;
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex-grow">
                          <h4 className="font-[Recoleta] text-2xl font-bold text-white mb-1">
                            {testimonials[currentIndex].name}
                          </h4>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-[#00a8ff] font-semibold">
                              {testimonials[currentIndex].role}
                            </p>
                            {testimonials[currentIndex].company && (
                              <>
                                <span className="text-white/30">•</span>
                                <p className="text-white/70">
                                  {testimonials[currentIndex].company}
                                </p>
                              </>
                            )}
                          </div>
                          {testimonials[currentIndex].date && (
                            <p className="text-white/50 text-sm">
                              {testimonials[currentIndex].date}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-10 space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "w-10" : "bg-white/20 hover:bg-white/40"}`}
                    style={
                      index === currentIndex
                        ? {
                            background: `linear-gradient(135deg, ${DESIGN_CONSTANTS.COLORS.PRIMARY} 0%, ${DESIGN_CONSTANTS.COLORS.PRIMARY_LIGHT} 100%)`,
                          }
                        : {}
                    }
                    aria-label={`View testimonial from ${testimonials[index].name}`}
                  >
                    {index === currentIndex && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute inset-0 rounded-full bg-white/20"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex justify-center items-center mt-8 space-x-6">
                <motion.button
                  onClick={prevTestimonial}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center group"
                  style={getLiquidGlassStyle(0.15)}
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-white/70 group-hover:text-[#00a8ff] text-lg transition-colors" />
                </motion.button>

                <div className="text-white/60 text-sm">
                  {currentIndex + 1} / {testimonials.length}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center group"
                  style={getLiquidGlassStyle(0.15)}
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-white/70 group-hover:text-[#00a8ff] text-lg transition-colors" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
