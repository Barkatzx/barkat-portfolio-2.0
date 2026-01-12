import { client } from "@/sanity/client";
import { components } from "@/sanity/portabletext";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// GROQ query for fetching post by slug
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  excerpt,
  categories[]->{ title },
  mainImage,
  estimatedReadingTime
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

// TypeScript type for params
type tParams = Promise<{ slug: string }>;

// Mobile detection helper
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
};

export default async function PostPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const decodedSlug = decodeURIComponent(slug);
  if (!decodedSlug) return notFound();

  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: decodedSlug,
  });
  if (!post) return notFound();

  // Optimize image size for mobile
  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(800).height(420).quality(85).url()
    : null;

  const defaultAuthor = "Barkat Ullah";
  const defaultAuthorImage =
    "https://res.cloudinary.com/dnzvylpzu/image/upload/v1742024549/profile_pictures/hzsppmii7ywypaqipvsv.png";

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Calculate reading time if not provided
  const readingTime =
    post.estimatedReadingTime ||
    Math.max(5, Math.ceil((post.body?.length || 0) / 1500));

  // New soothing blue color
  const primaryColor = "#00a8ff";
  const primaryColorLight = "#4dc3ff";

  // Optimized styles for mobile - removed backdrop-filter on mobile
  const liquidGlassStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  // Simple gradient for mobile, complex for desktop
  const buttonStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColorLight} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 12px rgba(0, 168, 255, 0.2)",
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-4 md:px-20 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {post.categories?.map((cat: { title: string }, idx: number) => (
              <span
                key={idx}
                className="px-3 md:px-4 py-1.5 md:py-2 font-medium rounded-full text-sm md:text-base"
                style={{
                  background: "rgba(0, 168, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#00a8ff",
                }}
              >
                {cat.title}
              </span>
            ))}
          </div>

          {/* Post Title */}
          <h1 className="font-[Recoleta] text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg md:text-2xl text-white/70 mb-6 md:mb-8 max-w-4xl leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Author & Meta Info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Author Info */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative">
                <Image
                  src={defaultAuthorImage}
                  alt={defaultAuthor}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white/20"
                  priority
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base md:text-lg">
                  {defaultAuthor}
                </h3>
                <div className="flex items-center gap-3 md:gap-4 text-white/60 text-xs md:text-sm mt-0.5">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#00a8ff]" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#4dc3ff]" />
                    {readingTime} min read
                  </span>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mt-4 sm:mt-0">
              <span className="text-white/80 font-medium text-sm md:text-base">
                Share:
              </span>
              <div className="flex gap-2 md:gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <FaXTwitter className="text-white/70 hover:text-[#00a8ff] transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <FaFacebook className="text-white/70 hover:text-[#00a8ff] transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <FaLinkedin className="text-white/70 hover:text-[#00a8ff] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {mainImageUrl && (
          <div className="px-4 md:px-20 mb-8 md:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={mainImageUrl}
                  alt={post.title}
                  width={800}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-20 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Post Content - Main Column */}
            <div className="lg:col-span-8">
              <article
                className="rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-10"
                style={liquidGlassStyle}
              >
                <div className="prose prose-sm md:prose-lg max-w-none text-white">
                  {Array.isArray(post.body) && (
                    <PortableText value={post.body} components={components} />
                  )}
                </div>

                {/* Article Footer */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={defaultAuthorImage}
                        alt={defaultAuthor}
                        width={40}
                        height={40}
                        className="rounded-full border border-white/20"
                        priority
                      />
                      <div>
                        <p className="font-semibold text-white text-sm md:text-base">
                          {defaultAuthor}
                        </p>
                        <p className="text-xs md:text-sm text-white/60">
                          Web Developer & Content Creator
                        </p>
                      </div>
                    </div>
                    <div>
                      <Link
                        href="/blogs"
                        className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 text-white font-medium rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base"
                        style={buttonStyle}
                      >
                        <FaBookOpen className="mr-2" />
                        View More Articles
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 md:top-24 space-y-6">
                {/* Author Card */}
                <div
                  className="rounded-xl md:rounded-2xl p-4 md:p-6"
                  style={liquidGlassStyle}
                >
                  <div className="text-center mb-4 md:mb-6">
                    <div className="relative inline-block mb-3 md:mb-4">
                      <Image
                        src={defaultAuthorImage}
                        alt={defaultAuthor}
                        width={60}
                        height={60}
                        className="rounded-full border-2 md:border-4 border-white/20"
                        priority
                      />
                    </div>
                    <h3 className="font-[Recoleta] text-xl md:text-2xl font-bold text-white">
                      {defaultAuthor}
                    </h3>
                    <p className="text-white/70 mt-1 md:mt-2 text-sm md:text-base">
                      Web Developer & Content Creator
                    </p>
                  </div>

                  <p className="text-white/70 mb-4 md:mb-6 text-center text-sm md:text-base">
                    Join me on YouTube as I explore productivity, business,
                    creativity, and lifelong learning. Let&apos;s grow together.
                  </p>

                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@BarkatUllahzx"
                    rel="noopener noreferrer"
                    className="block w-full py-3 md:py-4 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 md:gap-3"
                    style={buttonStyle}
                  >
                    <FaYoutube className="text-lg md:text-xl" />
                    Subscribe On YouTube
                  </Link>
                </div>

                {/* Reading Stats */}
                <div
                  className="rounded-xl md:rounded-2xl p-4 md:p-6"
                  style={liquidGlassStyle}
                >
                  <h4 className="font-[Recoleta] text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                    <FaBookOpen className="text-[#00a8ff]" />
                    Article Stats
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    <div
                      className="flex items-center justify-between p-2 md:p-3 rounded-lg md:rounded-xl"
                      style={{
                        background: "rgba(0, 168, 255, 0.1)",
                      }}
                    >
                      <span className="text-white/80 text-sm md:text-base">
                        Reading Time
                      </span>
                      <span className="font-semibold text-[#00a8ff] text-sm md:text-base">
                        {readingTime} min
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between p-2 md:p-3 rounded-lg md:rounded-xl"
                      style={{
                        background: "rgba(0, 168, 255, 0.1)",
                      }}
                    >
                      <span className="text-white/80 text-sm md:text-base">
                        Published
                      </span>
                      <span className="font-semibold text-[#00a8ff] text-sm md:text-base">
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div
                    className="rounded-xl md:rounded-2xl p-4 md:p-6"
                    style={liquidGlassStyle}
                  >
                    <h4 className="font-[Recoleta] text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                      Categories
                    </h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {post.categories.map(
                        (cat: { title: string }, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-medium rounded md:rounded-lg border border-white/10"
                            style={{
                              background: "rgba(0, 168, 255, 0.1)",
                              color: "#00a8ff",
                            }}
                          >
                            {cat.title}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 md:px-20 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12"
            style={liquidGlassStyle}
          >
            <h2 className="font-[Recoleta] text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg">
              Subscribe to my newsletter for more insights on web development,
              productivity, and creative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/blogs"
                className="px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base"
                style={buttonStyle}
              >
                Browse More Articles
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@BarkatUllahzx"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Visit YouTube Channel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
