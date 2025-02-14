import AboutSection from "@/components/home/AboutSection";
import CardSection from "@/components/home/CardSection";
import CountingSection from "@/components/home/CountingSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import WatchUs from "@/components/home/WatchUs";

// app/page.jsx
export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CardSection />
      <AboutSection />
      <CountingSection />
      <ServicesSection />
      <WatchUs />
      <div className="relative bg-white/95">
        <TeamSection />
      </div>
      <TestimonialSlider />
    </main>
  );
}
