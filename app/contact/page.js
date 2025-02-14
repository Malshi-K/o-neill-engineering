"use client";
import { usePathname } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/contact/ContactForm";

// Example About page
const ContactPage = () => {
  const pathname = usePathname();

  return (
    <>
      <PageTitle title="Contact Us" currentPath={pathname} />
      <ContactForm />
    </>
  );
};

export default ContactPage;