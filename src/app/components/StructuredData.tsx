import Script from "next/script";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "CEO Conclave 2024: Nurturing Future of the Pharmaceuticals Industry",
    description:
      "Join the CEO Conclave organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation to shape the future of the pharmaceuticals industry.",
    organizer: {
      "@type": "Organization",
      name: "DPU of Pharmacy",
    },
    location: {
      "@type": "Place",
      name: "Dr. D. Y. Patil Vidyapeeth",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sant Tukaram Nagar, Pimpri Colony, Pimpri-Chinchwad",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411018",
        addressCountry: "India",
      },
    },
    startDate: "2024-07-14T09:00",
    endDate: "2024-07-14T18:00",
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export default StructuredData;
