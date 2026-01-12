import Hero from "@/components/Hero";
import PricingComponent from "@/components/Pricing";
import Services from "@/components/Services";
import TestimonialSlider from "@/components/Testimonials";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <PricingComponent />
      <TestimonialSlider />
    </div>
  );
}
