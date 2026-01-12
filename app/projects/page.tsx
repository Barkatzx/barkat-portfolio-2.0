import { client } from "@/sanity/client";
import ProjectGridClient from "./ProjectGridClient";

interface Project {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  category: string;
  technology: string[];
  slug: { current: string };
  livelink?: string;
  clientlink?: string;
  serverlink?: string;
}

// Query to fetch all projects
const PROJECTS_QUERY = `*[
  _type == "project" && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  mainImage {
    asset->{
      url
    }
  },
  category,
  technology,
  slug,
  livelink,
  clientlink,
  serverlink
}`;

const options: { next: { revalidate: number } } = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
  try {
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY, {}, options);

    return <ProjectGridClient projects={projects} />;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Projects Loading Error
          </h1>
          <p className="text-white/70">
            Unable to load projects. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
