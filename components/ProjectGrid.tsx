import ProjectGridClient from "@/components/ProjectGridClient";
import { client } from "@/sanity/client";
import { projectsQuery } from "@/sanity/projectsQuery";

export default async function ProjectGrid() {
  const projects = await client.fetch(projectsQuery);

  return <ProjectGridClient projects={projects} />;
}
