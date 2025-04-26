"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

interface Project {
  _id: string;
  title: string;
  photo: {
    asset: {
      url: string;
    };
  };
  category: string;
  technology: string[];
  slug: string;
  livelink?: string;
  clientlink?: string;
  serverlink?: string;
}

interface ProjectGridClientProps {
  projects?: Project[];
}

export default function ProjectGridClient({
  projects = [],
}: ProjectGridClientProps) {
  const [activeTab, setActiveTab] = useState<
    "Full Stack" | "WordPress" | "Front-End"
  >("Full Stack");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cardBgColors, setCardBgColors] = useState<{ [key: string]: string }>(
    {}
  );

  const hoverColors = [
    "#cdb4db",
    "#bdb2ff",
    "#ffafcc",
    "#e4c1f9",
    "#a2d2ff",
    "#ccd5ae",
  ];

  const filteredProjects = projects.filter((project) => {
    if (!project.category) return false;
    return project.category.toLowerCase() === activeTab.toLowerCase();
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleTabClick = (tab: "Full Stack" | "WordPress" | "Front-End") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <section className="px-5 md:px-20 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="font-[Recoleta] text-2xl md:text-5xl font-bold mb-4">
            Explore My Digital Creations 🎨
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {["Full Stack", "WordPress", "Front-End"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  handleTabClick(
                    tab as "Full Stack" | "WordPress" | "Front-End"
                  )
                }
                className={`px-6 py-2 text-sm font-medium border ${
                  tab === "Full Stack"
                    ? "rounded-l-lg"
                    : tab === "Front-End"
                      ? "rounded-r-lg"
                      : ""
                } ${
                  activeTab === tab
                    ? "bg-[#9b5de5] text-white border-[#9b5de5]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No {activeTab.toLowerCase()} projects found.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProjects.map((project, index) => {
                const isHovered = hoveredCard === project._id;
                const bgColor = isHovered
                  ? cardBgColors[project._id]
                  : "#f9f6f3";

                return (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => {
                      const randomColor =
                        hoverColors[
                          Math.floor(Math.random() * hoverColors.length)
                        ];
                      setHoveredCard(project._id);
                      setCardBgColors((prev) => ({
                        ...prev,
                        [project._id]: randomColor,
                      }));
                    }}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Link href={`/projects/${project.slug}`} className="block">
                      {project.photo?.asset?.url && (
                        <div className="relative h-64 w-full">
                          <Image
                            src={project.photo.asset.url}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                    </Link>

                    <div className="p-4">
                      <Link href={`/projects/${project.slug}`}>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-[Recoleta] text-2xl hover:underline">
                            {project.title}
                          </h3>
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </Link>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technology.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white text-xs px-2 py-1 rounded shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        {project.livelink && (
                          <a
                            href={project.livelink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <FaExternalLinkAlt className="mr-1" /> Live Demo
                          </a>
                        )}
                        <div className="flex space-x-4">
                          {project.clientlink && (
                            <a
                              href={project.clientlink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                            >
                              <FaGithub className="mr-1" /> Client
                            </a>
                          )}
                          {project.serverlink && (
                            <a
                              href={project.serverlink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                            >
                              <FaGithub className="mr-1" /> Server
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-5 space-x-4">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="text-sm text-gray-700">Page {currentPage}</span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
