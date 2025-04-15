import PostsPage from "@/components/Blog";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectGrid />
      <PostsPage />
    </div>
  );
}
