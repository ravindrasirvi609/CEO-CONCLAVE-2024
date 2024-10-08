"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const logos = [
  { src: "/chronicle.png", alt: "chronicle" },
  { src: "/infusion.jpeg", alt: "Infusion" },
  { src: "/fope.jpeg", alt: "FOPE" },
];
const CompanyLogosSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-maroon text-center mb-12">
          Our Esteemed Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full max-w-[200px] aspect-[3/2] relative group"
            >
              <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {isClient && (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
