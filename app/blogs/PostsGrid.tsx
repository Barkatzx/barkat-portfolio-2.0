"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Post } from "./page";

interface PostGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: PostGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemsPerPage = 6;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handlePageClick = (page: number) => setCurrentPage(page);

  // New soothing blue color
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";

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
    <section className="px-4 md:px-8 py-12 md:py-20 relative overflow-hidden bg-black">
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
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center justify-center mb-6 px-6 py-2 rounded-full"
            style={liquidGlassStyle}
          >
            <span className="text-sm font-semibold text-[#00a8ff]">
              ✨ Blog & Insights
            </span>
          </div>
          <h2 className="font-[Recoleta] text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Thoughts & Stories
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Insights, tutorials, and reflections from my journey in web
            development and design
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                }}
              />
              <div
                className="absolute inset-8 rounded-full flex items-center justify-center"
                style={liquidGlassStyle}
              >
                <span className="text-6xl">📝</span>
              </div>
            </div>
            <p className="text-white/70 text-xl">Writing in progress...</p>
          </motion.div>
        ) : (
          <>
            {/* Blog Posts Grid - One Column */}
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {paginatedPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Post Card with Liquid Glass Effect */}
                  <div
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                    style={liquidGlassStyle}
                  >
                    {/* Blue Gradient Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#00a8ff]/10 via-transparent to-transparent rounded-bl-full" />

                    {/* Flex container for mobile (stacked) / desktop (side by side) */}
                    <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6 lg:gap-8">
                      {/* LEFT SIDE - Post Info (2/3 space on desktop) */}
                      <div className="lg:w-2/3">
                        {/* Post Categories and Meta Info - Mobile optimized */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                          {/* Categories Badge */}
                          {post.categories && post.categories.length > 0 ? (
                            <span
                              className="px-3 py-1 md:px-4 md:py-1.5 text-white font-semibold rounded-full text-xs md:text-sm backdrop-blur-sm"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(0, 168, 255, 0.2) 0%, rgba(0, 168, 255, 0.1) 100%)",
                              }}
                            >
                              {post.categories[0].title}
                            </span>
                          ) : (
                            <span
                              className="px-3 py-1 md:px-4 md:py-1.5 text-white/90 font-semibold rounded-full text-xs md:text-sm backdrop-blur-sm"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                              }}
                            >
                              Blog Post
                            </span>
                          )}

                          {/* Categories Count */}
                          <span
                            className="px-3 py-1 md:px-4 md:py-1.5 text-white/90 font-semibold rounded-full text-xs md:text-sm flex items-center space-x-1.5 md:space-x-2 backdrop-blur-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                            }}
                          >
                            <span className="text-xs">📚</span>
                            <span>
                              {post.categories?.length || 0} category
                              {(post.categories?.length || 0) !== 1
                                ? "ies"
                                : "y"}
                            </span>
                          </span>
                        </div>

                        {/* Post Title - Mobile optimized */}
                        <Link href={`/blogs/${post.slug.current}`}>
                          <h3 className="font-[Recoleta] text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 hover:text-[#00a8ff] transition-colors duration-300">
                            {post.title}
                          </h3>
                        </Link>

                        {/* Categories Tags - Mobile optimized */}
                        <div className="mb-4 md:mb-6">
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                            {post.categories?.slice(0, 3).map((cat, i) => (
                              <motion.span
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm text-white/90 font-medium rounded-lg border border-white/10 hover:border-[#00a8ff]/30 hover:text-white cursor-default hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                                }}
                              >
                                {cat.title}
                              </motion.span>
                            ))}
                            {post.categories && post.categories.length > 3 && (
                              <span className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm text-white/70 font-medium rounded-lg border border-white/10">
                                +{post.categories.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Excerpt if available */}
                        {post.excerpt && (
                          <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}

                        {/* Read Article Button - Mobile optimized */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative px-4 py-2.5 md:px-6 md:py-3 text-white font-semibold rounded-lg md:rounded-xl overflow-hidden group/btn w-full md:w-auto"
                          style={buttonStyle}
                        >
                          <Link href={`/blogs/${post.slug.current}`}>
                            <span className="relative z-10 flex items-center justify-center md:justify-start gap-1.5 md:gap-2 text-sm md:text-base">
                              Read Article
                              <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#00a8ff] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                        </motion.button>
                      </div>

                      {/* RIGHT SIDE - Post Image (1/3 space on desktop) */}
                      <div className="lg:w-1/3">
                        <div className="relative overflow-hidden rounded-xl md:rounded-2xl h-48 md:h-64 lg:h-56 group/image">
                          {post.mainImage?.asset?.url && (
                            <Image
                              src={post.mainImage.asset.url}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                            />
                          )}
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover/image:opacity-80 transition-opacity duration-500" />

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#00a8ff]/10 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Liquid Glass Pagination - Mobile optimized (3 buttons in one row) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 md:mt-20"
            >
              <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 flex-1 max-w-[120px] md:max-w-none ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg transform hover:-translate-x-0.5 md:hover:-translate-x-1"
                  }`}
                  style={
                    currentPage === 1
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.3)",
                        }
                      : {
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.9)",
                        }
                  }
                >
                  <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Prev</span>
                </button>

                {/* Page Numbers - Center section */}
                <div
                  className="flex items-center justify-center space-x-1 md:space-x-2 rounded-xl md:rounded-2xl p-1.5 md:p-2 flex-1"
                  style={liquidGlassStyle}
                >
                  {totalPages <= 5 ? (
                    // Show all pages if 5 or less
                    [...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handlePageClick(i + 1)}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl font-bold transition-all duration-300 text-xs md:text-sm ${
                          currentPage === i + 1
                            ? "text-white shadow-lg scale-110"
                            : "text-white/70 hover:text-white hover:scale-105"
                        }`}
                        style={
                          currentPage === i + 1
                            ? buttonStyle
                            : {
                                background:
                                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                              }
                        }
                      >
                        {i + 1}
                      </button>
                    ))
                  ) : (
                    // Show limited pages with ellipsis for many pages
                    <>
                      {currentPage > 2 && (
                        <span className="text-white/50 px-1">...</span>
                      )}
                      {[
                        Math.max(1, currentPage - 1),
                        currentPage,
                        Math.min(totalPages, currentPage + 1),
                      ]
                        .filter(
                          (page, index, array) => array.indexOf(page) === index
                        )
                        .map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageClick(page)}
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl font-bold transition-all duration-300 text-xs md:text-sm ${
                              currentPage === page
                                ? "text-white shadow-lg scale-110"
                                : "text-white/70 hover:text-white hover:scale-105"
                            }`}
                            style={
                              currentPage === page
                                ? buttonStyle
                                : {
                                    background:
                                      "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                                  }
                            }
                          >
                            {page}
                          </button>
                        ))}
                      {currentPage < totalPages - 1 && (
                        <span className="text-white/50 px-1">...</span>
                      )}
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center space-x-2 px-4 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 flex-1 max-w-[120px] md:max-w-none ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg transform hover:translate-x-0.5 md:hover:translate-x-1"
                  }`}
                  style={
                    currentPage === totalPages
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.3)",
                        }
                      : {
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.9)",
                        }
                  }
                >
                  <span className="text-xs md:text-sm">Next</span>
                  <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

              {/* Current Page Indicator - Mobile only */}
              <div className="mt-4 text-center md:hidden">
                <span className="text-white/70 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              {/* Page Info - Desktop */}
              <div className="text-center mt-4 md:mt-6">
                <p className="text-white/70 text-sm">
                  Showing {(currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(currentPage * itemsPerPage, posts.length)} of{" "}
                  {posts.length} articles
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
