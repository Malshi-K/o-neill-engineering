"use client";
import { usePathname } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import AboutSection from "@/components/home/AboutSection";
import CountingSection from "@/components/home/CountingSection";
import FAQ from "@/components/about/FAQ";
import TeamSection from "@/components/home/TeamSection";

// Example About page
const AboutPage = () => {
  const pathname = usePathname();

  return (
    <>
      <PageTitle title="About Us" currentPath={pathname} />
      <AboutSection />
      <CountingSection />
      <TeamSection />
      <FAQ />
    </>
  );
};

export default AboutPage;