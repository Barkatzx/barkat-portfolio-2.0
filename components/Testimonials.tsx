"use client";

import { motion } from "framer-motion";
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

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotation
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
          className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-white/20"}`}
        />
      ))}
      <span className="ml-2 text-sm text-white/60">({rating}.0)</span>
    </div>
  );

  // Glass effect styles
  const glassEffect = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  };

  const glassEffectHover = {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
  };

  const blueGlassEffect = {
    background: "rgba(59, 130, 246, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15)",
  };

  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Background Glass Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Label */}
          <motion.div
            style={glassEffect}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-sm" />
              <div className="relative w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <span className="text-sm font-medium text-blue-400">
              Client Testimonials
            </span>
          </motion.div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Industry Leaders
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Join hundreds of satisfied clients who&apos;ve transformed their
            digital presence with cutting-edge solutions
          </p>
        </motion.div>

        {/* Stats Grid with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            {
              value: "100%",
              label: "Client Satisfaction",
              color: "from-blue-500/20 to-blue-600/10",
            },
            {
              value: "50+",
              label: "Projects Delivered",
              color: "from-purple-500/20 to-purple-600/10",
            },
            {
              value: "24/7",
              label: "Support Available",
              color: "from-emerald-500/20 to-emerald-600/10",
            },
            {
              value: "99.9%",
              label: "Uptime Guarantee",
              color: "from-amber-500/20 to-amber-600/10",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              style={glassEffect}
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:border-blue-500/30"
            >
              <div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Slider */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial Card with Glass Effect */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={glassEffect}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/50 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/50 rounded-br-3xl" />
            </div>

            {/* Quote Icon */}
            <div className="absolute top-8 right-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md" />
                <div
                  style={blueGlassEffect}
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                >
                  <FaQuoteLeft className="text-2xl text-blue-400" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <p className="text-xl text-white/90 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              {/* Project Tag */}
              {testimonials[currentIndex].project && (
                <div className="inline-block mb-8">
                  <div
                    style={blueGlassEffect}
                    className="px-4 py-2 rounded-full"
                  >
                    <span className="text-sm font-medium text-blue-400">
                      Project: {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Author Info with Glass Effect */}
            <div
              style={glassEffect}
              className="mt-8 p-6 rounded-2xl flex items-center gap-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-sm" />
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=3b82f6&color=fff&size=80`;
                    }}
                  />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-blue-400 font-medium">
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
          </motion.div>

          {/* Navigation Controls with Glass Effect */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={index === currentIndex ? blueGlassEffect : glassEffect}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "scale-125" : ""
                  }`}
                  aria-label={`View testimonial from ${testimonials[index].name}`}
                />
              ))}
            </div>

            {/* Arrow Buttons with Glass Effect */}
            <div className="flex gap-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                style={glassEffect}
                className="w-14 h-14 rounded-2xl flex items-center justify-center hover:border-blue-500/30 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-white/70 hover:text-blue-400 transition-colors" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                style={glassEffect}
                className="w-14 h-14 rounded-2xl flex items-center justify-center hover:border-blue-500/30 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-white/70 hover:text-blue-400 transition-colors" />
              </motion.button>
            </div>
          </div>

          {/* Counter with Glass Effect */}
          <div className="text-center mt-8">
            <div
              style={glassEffect}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full"
            >
              <span className="text-white/90">
                <span className="text-blue-400 font-bold">
                  {currentIndex + 1}
                </span>
                <span className="text-white/50"> / {testimonials.length}</span>
              </span>
              <div className="text-white/50 text-sm">Testimonials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
