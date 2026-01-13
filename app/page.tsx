import FAQComponent from "@/components/FAQ";
import Hero from "@/components/Hero";
import PricingComponent from "@/components/Pricing";
import Services from "@/components/Services";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <PricingComponent />
      <FAQComponent />
    </div>
  );
}
