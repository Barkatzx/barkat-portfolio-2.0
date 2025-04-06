"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  _id: string;
  photo: string;
  title: string;
  category: string;
  technology: string[];
  livelink: string;
  clientlink: string;
  serverlink: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "All" | "Full Stack" | "WordPress" | "Front-End"
  >("All");

  // Default project image
  const DEFAULT_PROJECT_IMAGE = "https://i.imgur.com/6QJjQMe.png";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://barkat-portfolio-server.vercel.app/project"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Full Stack") return project.category === "Full Stack";
    if (activeTab === "WordPress") return project.category === "WordPress";
    if (activeTab === "Front-End") return project.category === "Front-End";
    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="font-[Recoleta] text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works categorized by technology stack.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                activeTab === "All"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("Full Stack")}
              className={`px-4 py-2 text-sm font-medium border ${
                activeTab === "Full Stack"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Full Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("WordPress")}
              className={`px-4 py-2 text-sm font-medium border-t border-b ${
                activeTab === "WordPress"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              WordPress
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("Front-End")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                activeTab === "Front-End"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              Front-End
            </button>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f9f6f3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.photo || DEFAULT_PROJECT_IMAGE}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = DEFAULT_PROJECT_IMAGE;
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technology.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 text-sm text-gray-500 mb-4">
                    <p>* Project details available in GitHub repository</p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <a
                      href={project.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                    <div className="flex space-x-4">
                      <a
                        href={project.clientlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <FaGithub className="mr-1" /> Code
                      </a>
                      {project.serverlink && (
                        <a
                          href={project.serverlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          <FaGithub className="mr-1" /> API
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
