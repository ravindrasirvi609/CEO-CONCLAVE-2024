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
      src: "https://images.unsplash.com/photo-1720849644323-499c62694fbb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event 1",
    },
    {
      src: "https://images.unsplash.com/photo-1720999748915-ac0bfdbab7d5?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event 2",
    },
    {
      src: "https://images.unsplash.com/photo-1718554517649-ce6ed88a9a5d?q=80&w=2916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event 3",
    },
    {
      src: "https://images.unsplash.com/photo-1720986073460-d34ea04ac7bb?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event 4",
    },
    {
      src: "https://images.unsplash.com/photo-1718554517780-b9ca6513c4c3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event 5",
    },
    {
      src: "https://images.unsplash.com/photo-1720858187324-8bfd71b7929a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event 6",
    },
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
