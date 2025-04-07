import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTimes } from "react-icons/fa";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  categories[]->{ title },
  mainImage
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const revalidate = 30;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: params.slug,
  });

  const mainImageUrl = post?.mainImage
    ? urlFor(post.mainImage)?.width(800).height(450).url()
    : null;

  // Default author name and image
  const defaultAuthor = "Barkat Ullah";
  const defaultAuthorImage =
    "https://res.cloudinary.com/dnzvylpzu/image/upload/v1742024549/profile_pictures/hzsppmii7ywypaqipvsv.png"; // Default Gravatar

  // Format published date
  const formattedDate = new Date(post?.publishedAt).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="flex flex-col">
      <div className="bg-[#f9f6f3] flex flex-col gap-4 px-5 md:px-20 py-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((cat: any, idx: number) => (
            <span
              key={idx}
              className="bg-blue-400 px-5 py-2 rounded-full text-lg font-semibold"
            >
              {cat.title}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="md:text-5xl text-3xl font-bold leading-tight font-[Recoleta]">
          {post.title}
        </h1>

        {/* Author + Date + Share */}
        <div className="flex flex-col lg:flex-row items-center text-xl font-bold mb-5 justify-between">
          {/* Author and Date */}
          <div className="flex flex-col lg:flex-row items-center gap-3 mb-4 lg:mb-0">
            <div className="flex items-center gap-3 ">
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

          {/* Share buttons */}
          <div className="flex items-center gap-4 text-lg mt-2 lg:mt-0">
            <h2 className="text-black">Share:</h2>{" "}
            {/* Only show 'Share' label on mobile */}
            <button className="bg-white p-2 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out text-black">
              <FaTimes />
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

        {/* Main Image */}
        {mainImageUrl && (
          <Image
            src={mainImageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-xl"
            unoptimized
          />
        )}
      </div>

      <div className="px-5 md:px-20 py-10">
        {/* Post Content */}
        <div className="prose lg:prose-xl dark:prose-invert mt-6 text-2xl">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </div>
    </main>
  );
}
