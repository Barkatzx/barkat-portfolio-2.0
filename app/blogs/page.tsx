import { client } from "@/sanity/client";
import { ReactNode } from "react";
import PostsGrid from "./PostsGrid";

export interface Post {
  excerpt: ReactNode;
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: { asset: { url: string } };
  categories?: { title: string }[];
}

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage { asset-> { url } },
  categories[]-> { title }
}`;

export const revalidate = 30; // ISR for 30 seconds

export default async function PostsPage() {
  try {
    const posts: Post[] = await client.fetch(POSTS_QUERY);
    return <PostsGrid posts={posts} />;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <div className="text-red-500">Error loading posts</div>;
  }
}
