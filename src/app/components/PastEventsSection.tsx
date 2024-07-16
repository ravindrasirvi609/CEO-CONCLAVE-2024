"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface EventImage {
  src: string;
  alt: string;
}

const PastEventsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  // Replace these with your actual event images
  const eventImages: EventImage[] = [
    {
      src: "/image/097A3080.jpg",
      alt: "Event 1",
    },
    { src: "/image/097A3109.jpg", alt: "Event 3" },
    { src: "/image/097A3130.jpg", alt: "Event 4" },
    { src: "/image/097A3133.jpg", alt: "Event 5" },
    { src: "/image/097A3150.jpg", alt: "Event 6" },
    { src: "/image/097A3156.jpg", alt: "Event 7" },
    { src: "/image/097A3195.jpg", alt: "Event 8" },
    { src: "/image/097A3223.jpg", alt: "Event 9" },
    { src: "/image/097A3238.jpg", alt: "Event 10" },
    { src: "/image/097A3260.jpg", alt: "Event 11" },
    { src: "/image/097A3272.jpg", alt: "Event 12" },
    { src: "/image/097A3282.jpg", alt: "Event 13" },
    { src: "/image/097A3318.jpg", alt: "Event 14" },
    { src: "/image/04.jpg", alt: "Event 15" },
    { src: "/image/06.jpg", alt: "Event 16" },
  ];

  useGSAP(() => {
    if (sectionRef.current && imageRefs.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      imageRefs.current.forEach((ref, index) => {
        gsap.from(ref, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-light-gold">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-maroon text-center mb-12">
          Our Past Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {eventImages.map((image, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                imageRefs.current[index] = el as HTMLDivElement;
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
