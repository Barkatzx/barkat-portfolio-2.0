import ImageGallery from "@/components/Gallery";
import { client } from "@/sanity/client";
import { projectDetailQuery } from "@/sanity/projectsQuery";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaServer,
  FaYoutube,
} from "react-icons/fa";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "project"]{ "slug": slug.current }`
  );
  return projects.map((project) => ({ slug: project.slug }));
}

// TypeScript type for params
type tParams = Promise<{ slug: string }>;

export default async function ProjectPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const decodedSlug = decodeURIComponent(slug);
  const project = await client.fetch<SanityDocument>(projectDetailQuery, {
    slug: decodedSlug,
  });

  if (!project) return notFound();

  const middleIndex = Math.ceil(project.feature?.length / 2) || 0;
  const firstHalf = project.feature?.slice(0, middleIndex) || [];
  const secondHalf = project.feature?.slice(middleIndex) || [];

  // New soothing blue color
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";
  const primaryColorDark = "#0097e6";

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
    <main className="min-h-screen bg-black rounded-3xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-5 md:px-20 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span
              className="inline-flex items-center px-4 py-2 font-medium rounded-full backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#00a8ff",
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="font-[Recoleta] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-tight">
            {project.title}
          </h1>

          {/* Project Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            {project.publishedAt && (
              <div className="flex items-center gap-2 text-white/70">
                <FaCalendarAlt className="text-[#00a8ff]" />
                <span className="font-medium">
                  {new Date(project.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 text-white/70">
              <FaCode className="text-[#4dc3ff]" />
              <span className="font-medium">
                {project.technology?.length || 0} Technologies
              </span>
            </div>
            {project.estimatedTime && (
              <div className="flex items-center gap-2 text-white/70">
                <FaClock className="text-[#80d4ff]" />
                <span className="font-medium">{project.estimatedTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {project.photos?.length > 0 && (
        <div className="px-5 md:px-20 mb-12">
          <div className="max-w-6xl mx-auto">
            <ImageGallery photos={project.photos} />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="px-5 md:px-20 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-8">
              {/* Project Description */}
              <div
                className="rounded-2xl p-6 md:p-8 lg:p-10 mb-8"
                style={liquidGlassStyle}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                    }}
                  >
                    <FaBookOpen className="text-white text-xl" />
                  </div>
                  <h2 className="font-[Recoleta] text-3xl font-bold text-white">
                    Project Overview
                  </h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.feature?.length > 0 && (
                <div
                  className="rounded-2xl p-6 md:p-8 lg:p-10 mb-8"
                  style={liquidGlassStyle}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                      }}
                    >
                      <FaGlobe className="text-white text-xl" />
                    </div>
                    <h2 className="font-[Recoleta] text-3xl font-bold text-white">
                      Key Features
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-4">
                      {firstHalf.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                              }}
                            ></div>
                          </div>
                          <span className="text-white/70 text-lg">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-4">
                      {secondHalf.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                              }}
                            ></div>
                          </div>
                          <span className="text-white/70 text-lg">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              {project.technology?.length > 0 && (
                <div
                  className="rounded-2xl p-6 md:p-8 lg:p-10"
                  style={liquidGlassStyle}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                      }}
                    >
                      <FaCode className="text-white text-xl" />
                    </div>
                    <h2 className="font-[Recoleta] text-3xl font-bold text-white">
                      Technology Stack
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.technology.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2.5 text-white/80 font-medium rounded-xl border border-white/10 hover:border-[#00a8ff]/30 hover:text-white hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Project Links Card */}
                <div className="rounded-2xl p-6" style={liquidGlassStyle}>
                  <h3 className="font-[Recoleta] text-2xl font-bold text-white mb-6">
                    Project Links
                  </h3>
                  <div className="space-y-4">
                    {project.livelink && (
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-[#00a8ff]/30 hover:shadow-lg transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                            }}
                          >
                            <FaExternalLinkAlt className="text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">
                              Live Demo
                            </p>
                            <p className="text-sm text-white/50">
                              Visit the live website
                            </p>
                          </div>
                        </div>
                        <FaArrowLeft className="transform rotate-180 text-white/40 group-hover:text-[#00a8ff] group-hover:translate-x-1 transition-all" />
                      </a>
                    )}
                    {project.clientlink && (
                      <a
                        href={project.clientlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                            <FaGithub className="text-white/70" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">
                              Client Code
                            </p>
                            <p className="text-sm text-white/50">
                              Frontend repository
                            </p>
                          </div>
                        </div>
                        <FaArrowLeft className="transform rotate-180 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                      </a>
                    )}
                    {project.serverlink && (
                      <a
                        href={project.serverlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                            <FaServer className="text-white/70" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">
                              Server Code
                            </p>
                            <p className="text-sm text-white/50">
                              Backend repository
                            </p>
                          </div>
                        </div>
                        <FaArrowLeft className="transform rotate-180 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category Card */}
                <div className="rounded-2xl p-6" style={liquidGlassStyle}>
                  <h3 className="font-[Recoleta] text-xl font-bold text-white mb-4">
                    Project Type
                  </h3>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0.05) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
                      }}
                    ></div>
                    <span className="font-semibold text-[#00a8ff]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Author Card */}
                <div className="rounded-2xl p-6" style={liquidGlassStyle}>
                  <div className="text-center mb-6">
                    <h3 className="font-[Recoleta] text-2xl font-bold text-white mb-3">
                      About the Developer
                    </h3>
                    <p className="text-white/70">
                      Full Stack Developer specializing in modern web
                      technologies
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/70 text-center">
                      Join me on YouTube for insights on web development,
                      productivity, and creative projects.
                    </p>

                    <a
                      target="_blank"
                      href="https://www.youtube.com/@BarkatUllahzx"
                      rel="noopener noreferrer"
                      className="block w-full py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                      style={buttonStyle}
                    >
                      <FaYoutube className="text-xl" />
                      Subscribe On YouTube
                      <FaArrowLeft className="transform rotate-180 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects CTA */}
          <div className="mt-16 text-center">
            <div
              className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/10 shadow-lg max-w-2xl mx-auto"
              style={liquidGlassStyle}
            >
              <div className="text-center">
                <h3 className="font-[Recoleta] text-2xl font-bold text-white mb-2">
                  Like What You See?
                </h3>
                <p className="text-white/70">
                  Check out more of my projects or let&apos;s discuss your next
                  big idea.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={buttonStyle}
                >
                  View All Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 text-white font-semibold rounded-xl hover:from-white/20 hover:to-white/10 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
