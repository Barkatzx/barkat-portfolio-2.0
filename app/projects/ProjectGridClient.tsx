"use client";

import { theme } from "@/components/lib/theme";
import Glass from "@/components/ui/Glass";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  category: string;
  technology: string[];
  slug: {
    current: string;
  };
  livelink?: string;
  clientlink?: string;
  serverlink?: string;
  description?: string;
}

interface ProjectGridClientProps {
  projects?: Project[];
}

// Icon components
const FaArrowRight = ({ className = "" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path
      fillRule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    />
  </svg>
);

const FaChevronLeft = ({ className = "" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

const FaChevronRight = ({ className = "" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const FaLayerGroup = ({ className = "" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-2zm1 .5v1h11v-1h-11zm-1 3A.5.5 0 0 1 2 5h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-2zm1 .5v1h11v-1h-11zm-1 3A.5.5 0 0 1 2 9h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-2zm1 .5v1h11v-1h-11z" />
  </svg>
);

export default function ProjectGridClient({
  projects = [],
}: ProjectGridClientProps) {
  const [activeTab, setActiveTab] = useState<
    "All Work" | "Digital Products" | "CMS Platforms" | "Mobile Experiences"
  >("All Work");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Map old category names to new ones
  const categoryMap: Record<string, string> = {
    "All Work": "All Work",
    "Digital Products": "Full Stack",
    "CMS Platforms": "WordPress",
    "Mobile Experiences": "Flutter Apps",
  };

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All Work") return true;
    if (!project.category) return false;
    const mappedCategory = categoryMap[activeTab];
    return project.category.toLowerCase() === mappedCategory.toLowerCase();
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleTabClick = (
    tab:
      | "All Work"
      | "Digital Products"
      | "CMS Platforms"
      | "Mobile Experiences"
  ) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const tabs: Array<
    "All Work" | "Digital Products" | "CMS Platforms" | "Mobile Experiences"
  > = ["All Work", "Digital Products", "CMS Platforms", "Mobile Experiences"];

  const urlFor = (mainImage: { asset: { url: string } }) => {
    return {
      width: (w: number) => ({
        height: (h: number) => ({
          url: () => {
            if (mainImage.asset.url.includes("cdn.sanity.io")) {
              const url = new URL(mainImage.asset.url);
              url.searchParams.set("w", w.toString());
              url.searchParams.set("h", h.toString());
              url.searchParams.set("fit", "crop");
              return url.toString();
            }
            return mainImage.asset.url;
          },
        }),
      }),
    };
  };

  const buttonStyle = {
    background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primaryLight} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: `0 8px 32px ${theme.primary}20, 0 2px 8px rgba(255, 255, 255, 0.1) inset`,
  };

  const truncateDescription = (desc: string = "", wordLimit: number = 100) => {
    const words = desc.split(" ");
    if (words.length <= wordLimit) return desc;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-20 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6 px-6 py-2 rounded-full">
            <span className="text-sm font-semibold text-[#00a8ff]">
              ✨ Digital Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Interactive Showcase
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore my complete portfolio featuring Full Stack applications,
            WordPress websites, and Flutter mobile applications
          </p>
        </motion.div>

        {/* Tabs with Liquid Glass Effect */}
        <div className="sticky top-4 z-10 mb-12">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex rounded-full p-1.5 md:p-2 backdrop-blur-sm w-full max-w-2xl">
              <Glass variant="blue" className="p-1 rounded-full">
                <div className="flex flex-nowrap overflow-x-auto w-full">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-2 text-xs md:text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center flex-shrink-0 mx-0.5 whitespace-nowrap ${
                        activeTab === tab
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                      style={
                        activeTab === tab
                          ? {
                              background: `linear-gradient(${theme.primary} 10%, ${theme.primaryDark} 80%)`,
                            }
                          : {}
                      }
                    >
                      {tab}
                    </motion.button>
                  ))}
                </div>
              </Glass>
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full animate-pulse" />
              <div className="absolute inset-8 rounded-full flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
            <p className="text-white/70 text-xl">
              No projects found in this category...
            </p>
            <button
              onClick={() => setActiveTab("All Work")}
              className="mt-6 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={buttonStyle}
            >
              View All Projects
            </button>
          </motion.div>
        ) : (
          <>
            {/* Project Grid - 3 columns on desktop, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Project Card with Liquid Glass Effect */}
                  <Glass variant="blue">
                    <div className="relative rounded-2xl md:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative overflow-hidden h-48 md:h-56">
                        {project.mainImage && (
                          <img
                            src={urlFor(project.mainImage)
                              .width(600)
                              .height(400)
                              .url()}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                          />
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-5 md:p-6 flex-1 flex flex-col">
                        {/* project category */}
                        <div className="flex gap-3 mb-3">
                          <Glass
                            variant="blue"
                            className="px-3 py-1 text-white rounded-full text-xs"
                          >
                            {" "}
                            {project.category}
                          </Glass>
                          {/* Technology Count */}
                          <Glass
                            variant="blue"
                            className="px-3 py-1 text-white rounded-full text-xs flex items-center space-x-1.5"
                          >
                            <FaLayerGroup className="w-3 h-3" />
                            <span>{project.technology?.length || 0} tech</span>
                          </Glass>
                        </div>
                        {/* Project Title */}
                        <h3 className="font-[Recoleta] text-2xl text-white mb-3">
                          {project.title}
                        </h3>

                        {/* Project Description */}
                        <div className="mb-4 flex-1">
                          <p className="text-white/80 text-sm leading-relaxed line-clamp-4">
                            {truncateDescription(
                              project.description || "No description available"
                            )}
                          </p>
                        </div>

                        {/* Technology Tags */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-1.5">
                            {project.technology?.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs text-white/80 font-medium rounded border border-white/10 hover:border-white/20 hover:text-white cursor-default transition-colors"
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technology &&
                              project.technology.length > 4 && (
                                <span className="px-2 py-1 text-xs text-white/70 font-medium rounded border border-white/10">
                                  +{project.technology.length - 4} more
                                </span>
                              )}
                          </div>
                        </div>

                        {/* View Project Details Button */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-auto"
                        >
                          <a href={`/projects/${project.slug.current}`}>
                            <button
                              className="w-full py-3 text-white font-semibold rounded-xl overflow-hidden group/btn relative"
                              style={buttonStyle}
                            >
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                View Project Details
                                <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#00a8ff] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                            </button>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </Glass>
                </motion.div>
              ))}
            </div>

            {/* Liquid Glass Pagination */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 md:mt-20"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg transform hover:-translate-x-1"
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
                  <FaChevronLeft className="w-4 h-4 mr-2" />
                  <span className="text-sm">Previous</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center justify-center rounded-xl p-2">
                  {totalPages <= 5 ? (
                    [...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 text-sm mx-1 ${
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
                    <>
                      {currentPage > 2 && (
                        <span className="text-white/50 px-2">...</span>
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
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 text-sm mx-1 ${
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
                        <span className="text-white/50 px-2">...</span>
                      )}
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg transform hover:translate-x-1"
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
                  <span className="text-sm">Next</span>
                  <FaChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Results Count */}
              <div className="text-center mt-6">
                <span className="text-white/70 text-sm">
                  Showing{" "}
                  {Math.min(
                    (currentPage - 1) * itemsPerPage + 1,
                    filteredProjects.length
                  )}
                  -
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredProjects.length
                  )}{" "}
                  of {filteredProjects.length} projects
                </span>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
