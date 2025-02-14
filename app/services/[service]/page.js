// app/services/[service]/page.tsx
import ExpandableContent from "@/components/services/ExpandableContent";
import Section1 from "@/components/services/Section1";

export default function ServicePage({ params }) {
  // Extract the service parameter from the URL
  const { service } = params;  // Note: changed from serviceId to service to match route param

  return (
    <>
      <Section1 />
      <ExpandableContent serviceId={service} />
    </>
  );
}