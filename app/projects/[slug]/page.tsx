import { client } from "@/sanity/client";
import { projectDetailQuery } from "@/sanity/projectsQuery";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

// Sanity image URL builder
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(
    `*[_type == "project"].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}
// TypeScript type for params
type tParams = Promise<{ slug: string }>;

export default async function ProjectPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const decodedSlug = decodeURIComponent(slug);

  if (!decodedSlug) return notFound();

  const project = await client.fetch<SanityDocument>(projectDetailQuery, {
    slug: decodedSlug,
  });
  if (!project) return notFound();

  const mainImageUrl = project.photo
    ? urlFor(project.photo)?.width(800).height(450).url()
    : null;

  const middleIndex = Math.ceil(project.feature.length / 2);
  const firstHalf = project.feature.slice(0, middleIndex);
  const secondHalf = project.feature.slice(middleIndex);

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
        {/* Featured Image */}
        {mainImageUrl && (
          <Image
            src={mainImageUrl}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-xl z-10"
            unoptimized
          />
        )}
      </div>

      {/* Post Body */}
      <div className="px-5 md:px-20 py-10 flex gap-10 items-start lg:flex-row flex-col">
        {/* Post Body - 70% on large screens */}
        <div className="mt-4 lg:w-[70%] w-full">
          <div className="text-2xl mb-5">
            <h2 className="font-bold mb-2 font-[Recoleta]">Description:</h2>
            {project.description}
          </div>
          <div className="text-2xl">
            <h2 className="font-bold mb-2 font-[Recoleta]">Key Features:</h2>
            <div className="grid md:grid-cols-2 gap-x-4 mb-4">
              {/* Left Column */}
              <ul className="list-disc list-inside space-y-2">
                {firstHalf.map((tech: string) => (
                  <li key={tech} className="text-2xl">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Right Column */}
              <ul className="list-disc list-inside space-y-2">
                {secondHalf.map((tech: string) => (
                  <li key={tech} className="text-2xl">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {/* // Technology Used Section */}
            <div className="mb-2">
              <h2 className="font-[Recoleta] text-2xl font-semibold mb-2">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technology?.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-rose-100 px-3 py-1 rounded-full text-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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
          </div>
        </div>

        {/* Barkat Div - 30% on large screens */}
        <div className="bg-[#f9f6f3] shadow-xl rounded-xl p-5 lg:w-[30%] w-full lg:sticky lg:top-20">
          <h1 className="font-[Recoleta] text-4xl font-bold">Barkat Ullah</h1>
          <p className="text-xl mt-2">
            Join me on YouTube as I explore the worlds of productivity,
            business, creativity, and lifelong learning. I share insights from
            the books I’m reading, lessons I’ve picked up along the way, and
            practical tips to help you grow. Every journey starts somewhere —
            let’s grow together, one video at a time. 🌱📚
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
