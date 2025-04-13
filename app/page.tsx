import PostsPage from "@/components/Blog";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ProjectGrid />
      {/* <Projects /> */}
      <PostsPage />
    </div>
  );
}
