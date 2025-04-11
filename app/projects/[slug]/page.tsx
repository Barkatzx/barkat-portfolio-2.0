import { client } from "@/sanity/client";
import { projectDetailQuery } from "@/sanity/projectsQuery";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
// TypeScript interface for params
interface Params {
  slug: string;
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  if (!decodedSlug) return notFound();

  const project = await client.fetch<SanityDocument>(projectDetailQuery, {
    slug: decodedSlug,
  });
  if (!project) return notFound();

  const mainImageUrl = project.photo
    ? urlFor(project.photo)?.width(800).height(450).url()
    : null;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:underline flex items-center"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-video">
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

        <div>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{project.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technology?.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.livelink && (
              <Link
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
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
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                <FaGithub className="mr-2" />
                Server Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
