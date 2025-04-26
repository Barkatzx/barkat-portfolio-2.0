"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "A Satisfied Client",
      content:
        "Working with Barkat Ullah has been a game-changer for our business. His deep expertise in full-stack development and WordPress solutions enabled us to bring our vision to life faster and more efficiently than we ever thought possible.",
      avatar:
        "https://res.cloudinary.com/dnzvylpzu/image/upload/v1745678289/barkat-portfolio/psepga9cpbmqk26hqjm6.webp",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Project Manager, Tech Solutions Firm",
      content:
        "Barkat Ullah consistently delivers beyond expectations. His full-stack capabilities, combined with his mastery of WordPress, bring a rare blend of technical precision and creative innovation.",
      avatar:
        "https://res.cloudinary.com/dnzvylpzu/image/upload/v1745678288/barkat-portfolio/hyugchl4cujqxjkfjoyp.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Startup Founder",
      content:
        "It has been a pleasure working with Barkat Ullah. His knowledge of both front-end and back-end technologies, alongside his WordPress expertise, resulted in a seamless development process.",
      avatar:
        "https://res.cloudinary.com/dnzvylpzu/image/upload/v1745678289/barkat-portfolio/l60pctadwpw2qjhbsxbe.jpg",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl font-[Recoleta] text-center mb-8 sm:mb-10">
        Our Clients Speak
      </h2>

      <div className="relative h-[400px] sm:h-[350px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={testimonials[currentIndex].id}
            custom={direction}
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="bg-[#f9f6f3] rounded-2xl shadow-xl p-6 sm:p-8 h-full flex flex-col">
              <FaQuoteLeft className="text-indigo-500 text-2xl sm:text-3xl mb-3 sm:mb-4" />

              <p className="text-xl mb-4 sm:mb-6 flex-grow">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    priority={currentIndex === 0}
                  />
                </div>

                <div>
                  <h4 className="font-[Recoleta] text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-indigo-500 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${index === currentIndex ? "bg-indigo-600" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
