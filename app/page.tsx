import PostsPage from "@/components/Blog";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import TestimonialSlider from "@/components/Testimonials";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectGrid />
      <PostsPage />
      <TestimonialSlider />
    </div>
  );
}
