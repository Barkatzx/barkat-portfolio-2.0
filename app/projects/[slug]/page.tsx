import ImageGallery from "@/components/Gallery";
import { client } from "@/sanity/client";
import { projectDetailQuery } from "@/sanity/projectsQuery";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

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

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#f9f6f3] flex flex-col gap-4 px-5 md:px-20 py-10">
        <div
          className="absolute inset-0 bg-[url('/img/wave.png')] bg-cover opacity-60 z-0"
          aria-hidden="true"
        />

        {/* Categories */}
        <div>
          <span className="bg-violet-300 px-5 py-2 rounded-full text-xl">
            {project.category}
          </span>
        </div>

        {/* Post Title */}
        <h1 className="md:text-7xl text-5xl leading-tight font-[Recoleta] z-10">
          {project.title}
        </h1>

        {/* Image Gallery */}
        {project.photos?.length > 0 && (
          <div className="z-10">
            <ImageGallery photos={project.photos} />
          </div>
        )}
      </div>

      {/* Post Body */}
      <div className="px-5 md:px-20 py-10 flex gap-10 items-start lg:flex-row flex-col">
        {/* Main Content - 70% width */}
        <div className="mt-4 lg:w-[70%] w-full">
          {/* Description */}
          <div className="text-2xl mb-10">
            <h2 className="font-bold mb-2 font-[Recoleta]">Description:</h2>
            <p className="whitespace-pre-line">{project.description}</p>
          </div>

          {/* Key Features */}
          {project.feature?.length > 0 && (
            <div className="text-2xl mb-10">
              <h2 className="font-bold mb-2 font-[Recoleta]">Key Features:</h2>
              <div className="grid md:grid-cols-2 gap-x-4 mb-4">
                <ul className="list-disc list-inside space-y-2">
                  {firstHalf.map((tech: string) => (
                    <li key={tech} className="text-2xl">
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  {secondHalf.map((tech: string) => (
                    <li key={tech} className="text-2xl">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Technology Used */}
          {project.technology?.length > 0 && (
            <div className="mb-10">
              <h2 className="font-[Recoleta] text-2xl font-semibold mb-2">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-rose-100 px-3 py-1 rounded-full text-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mt-5 text-sm">
            {project.livelink && (
              <Link
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 bg-violet-400 text-white rounded-lg hover:bg-violet-700 transition font-[Recoleta]"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </Link>
            )}
            {project.clientlink && (
              <Link
                href={project.clientlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-[Recoleta]"
              >
                <FaGithub className="mr-2" />
                Client Code
              </Link>
            )}
            {project.serverlink && (
              <Link
                href={project.serverlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-[Recoleta]"
              >
                <FaGithub className="mr-2" />
                Server Code
              </Link>
            )}
          </div>
        </div>

        {/* Author Bio - 30% width */}
        <div className="bg-[#f9f6f3] shadow-xl rounded-xl p-5 lg:w-[30%] w-full lg:sticky lg:top-20">
          <h1 className="font-[Recoleta] text-4xl font-bold">Barkat Ullah</h1>
          <p className="text-xl mt-2">
            Join me on YouTube as I explore the worlds of productivity,
            business, creativity, and lifelong learning. I share insights from
            the books I&#39;m reading, lessons I&#39;ve picked up along the way,
            and practical tips to help you grow. Every journey starts somewhere
            — let&#39;s grow together, one video at a time. 🌱📚
          </p>
          <Link
            target="_blank"
            href="https://www.youtube.com/@BarkatUllahzx"
            rel="noopener noreferrer"
          >
            <button className="bg-white p-5 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out text-black mt-4 flex items-center gap-2 text-lg">
              <FaYoutube className="text-red-700" />
              Subscribe On Youtube
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
