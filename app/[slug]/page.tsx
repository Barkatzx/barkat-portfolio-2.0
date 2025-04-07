import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// GROQ query for fetching post by slug
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  categories[]->{ title },
  mainImage
}`;

// Sanity image URL builder
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// ISR (revalidation time in seconds)
export const revalidate = 30;

// Generate static paths
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(`*[_type == "post"].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params object
  const decodedSlug = decodeURIComponent(slug);

  if (!decodedSlug) return notFound();

  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: decodedSlug,
  });
  if (!post) return notFound();

  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(800).height(450).url()
    : null;

  const defaultAuthor = "Barkat Ullah";
  const defaultAuthorImage =
    "https://res.cloudinary.com/dnzvylpzu/image/upload/v1742024549/profile_pictures/hzsppmii7ywypaqipvsv.png";

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#f9f6f3] flex flex-col gap-4 px-5 md:px-20 py-10">
        <div
          className="absolute inset-0 bg-[url('/img/wave.png')] bg-cover opacity-60 z-0"
          aria-hidden="true"
        />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 z-10">
          {post.categories?.map((cat: { title: string }, idx: number) => (
            <span
              key={idx}
              className="bg-blue-400 px-5 py-2 rounded-full text-lg font-semibold"
            >
              {cat.title}
            </span>
          ))}
        </div>

        {/* Post Title */}
        <h1 className="md:text-7xl text-3xl font-bold leading-tight font-[Recoleta] z-10">
          {post.title}
        </h1>

        {/* Author Info + Share */}
        <div className="flex flex-col lg:flex-row items-center text-xl font-bold mb-5 justify-between z-10">
          <div className="flex flex-col lg:flex-row items-center gap-3 mb-4 lg:mb-0">
            <div className="flex items-center gap-3">
              <Image
                src={defaultAuthorImage}
                alt={defaultAuthor}
                width={40}
                height={40}
                className="rounded-full"
                unoptimized
              />
              <span>{defaultAuthor}</span>
              <span className="lg:mx-2">/</span>
              <span>{formattedDate}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-lg mt-2 lg:mt-0 z-10">
            <h2 className="text-black">Share:</h2>
            <button className="bg-white p-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out text-black">
              <FaXTwitter />
            </button>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="bg-white p-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out text-black">
                <FaFacebook />
              </button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="bg-white p-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out text-black">
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>

        {/* Featured Image */}
        {mainImageUrl && (
          <Image
            src={mainImageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-xl z-10"
            unoptimized
          />
        )}
      </div>

      {/* Post Body */}
      <div className="px-5 md:px-20 py-10">
        <div className="prose lg:prose-xl dark:prose-invert mt-6 text-2xl">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </div>
    </main>
  );
}
