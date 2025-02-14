"use client";
import { usePathname } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/testimonials/Testimonials";

// Example About page
const TestimonialsPage = () => {
  const pathname = usePathname();

  return (
    <>
      <PageTitle title="Testimonials" currentPath={pathname} />
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;