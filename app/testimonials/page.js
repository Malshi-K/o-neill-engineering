"use client";
import { usePathname } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import TestimonialSlider from "@/components/home/TestimonialSlider";

// Example About page
const TestimonialsPage = () => {
  const pathname = usePathname();

  return (
    <>
      <PageTitle title="Testimonials" currentPath={pathname} />
      <TestimonialSlider />
    </>
  );
};

export default TestimonialsPage;