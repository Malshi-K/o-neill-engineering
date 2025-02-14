"use client";
import { usePathname } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import AboutSection from "@/components/home/AboutSection";
import CountingSection from "@/components/home/CountingSection";
import FAQ from "@/components/about/FAQ";
import TeamSection from "@/components/home/TeamSection";
import ProjectsSection from "@/components/gallery/ProjectsSection";

// Example About page
const GalleryPage = () => {
  const pathname = usePathname();

  return (
    <>
      <PageTitle title="Our Projects" currentPath={pathname} />
      <ProjectsSection />
    </>
  );
};

export default GalleryPage;