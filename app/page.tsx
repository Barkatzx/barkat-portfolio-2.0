import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}
