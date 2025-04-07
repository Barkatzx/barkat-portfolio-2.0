"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Post } from "./Blog";

// Pastel colors
const pastelColors = [
  "#cdb4db",
  "#bdb2ff",
  "#ffafcc",
  "#e4c1f9",
  "#a2d2ff",
  "#ccd5ae",
];

function getRandomColor() {
  const index = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[index];
}

interface PostGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: PostGridProps) {
  return (
    <main className="px-5 md:px-20 py-10">
      <h1 className="font-[Recoleta] text-2xl md:text-4xl font-bold text-center mb-8">
        📝 Thoughts & Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => {
          const [hoverColor, setHoverColor] = useState<string | null>(null);

          return (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={`/${post.slug.current}`} className="h-full block">
                <div
                  className="group relative rounded-xl overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-white h-full flex flex-col"
                  onMouseEnter={() => setHoverColor(getRandomColor())}
                >
                  {/* Random hover color */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      backgroundColor: hoverColor ?? "#fff",
                      zIndex: 0,
                    }}
                  ></div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Image */}
                    {post.mainImage?.asset?.url && (
                      <div className="aspect-video w-full relative">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="p-4 flex-1 flex flex-col">
                      {/* Category */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="inline-block bg-blue-200 text-sm px-3 py-1 rounded-full mb-2 text-gray-800 w-fit">
                          {post.categories[0].title || "Uncategorized"}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="font-[Recoleta] text-xl font-semibold flex-1">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
