import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            href={`/${post.slug.current}`}
            key={post._id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
          >
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
