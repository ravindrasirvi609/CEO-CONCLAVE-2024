"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EventDetail = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
    <div className="text-3xl text-[#E0A75E] mr-4">{icon}</div>
    <span className="text-lg text-[#6c0707]">{text}</span>
  </div>
);

const WelcomeSection: React.FC = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const detailsRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const details = detailsRef.current;
    const button = buttonRef.current;

    gsap.fromTo(
      section,
      { backgroundColor: "#F5E7B2" },
      {
        backgroundColor: "#F9D689",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      details,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      button,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.9,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Parallax effect
    gsap.to(title, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="py-20 px-4 md:px-0 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl font-bold text-[#6c0707] mb-6 leading-tight"
            >
              Welcome to <br />
              <span className="text-[#E0A75E]">CEO Conclave</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-2xl md:text-3xl text-[#6c0707] mb-8"
            >
              Nurturing the Future of the Pharmaceuticals Industry
            </p>
          </div>
          <div
            ref={detailsRef}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <EventDetail icon={<FaCalendarAlt />} text="October 19, 2024" />
            <EventDetail icon={<FaMapMarkerAlt />} text="DPU Pharmacy, Pune" />
            <EventDetail icon={<FaUsers />} text="250+ Industry Leaders" />
          </div>
          <div ref={buttonRef} className="text-center">
            <a
              href="#registration"
              className="bg-[#6c0707] text-[#F5E7B2] px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#E0A75E] hover:text-[#6c0707] transition duration-300 inline-block transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9D689] opacity-50"></div>
      </section>
    </>
  );
};

export default WelcomeSection;
