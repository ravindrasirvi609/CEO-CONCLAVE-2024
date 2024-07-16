"use client";
import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const YouTubeVideosSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (sectionRef.current && videoRefs.current) {
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

      videoRefs.current.forEach((ref, index) => {
        gsap.from(ref, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  const videoIds = ["kx5z0XNhVYk", "dTuHXUt1weQ", "ody2LBp7zP0"];

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-maroon text-center mb-12">
          Our Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoIds.map((videoId, index) => (
            <div
              key={videoId}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  videoRefs.current[index] = el;
                }
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <YouTube
                videoId={videoId}
                opts={{
                  width: "100%",
                  height: "auto",
                  playerVars: {
                    autoplay: 0,
                  },
                }}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideosSection;
