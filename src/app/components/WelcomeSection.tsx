"use client";

import React, { useRef } from "react";
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
  <div className="flex items-center bg-white bg-opacity-90 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
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
    <section
      ref={sectionRef}
      id="home"
      className="py-20 px-4 md:px-0 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/3_KhDq0Yx1I?si=pBSFmNjSb-jwhMJq&start=7&autoplay=1&mute=1&loop=1&controls=0&playlist=3_KhDq0Yx1I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-1/2 left-1/2 w-[390%] h-[300%] -translate-x-1/2 -translate-y-1/2 md:w-full md:h-full md:translate-x-0 md:translate-y-0 md:top-0 md:left-0"
          ></iframe>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Welcome to <br />
            <span className="text-[#E0A75E]">CEO Conclave</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-white mb-8"
          >
            Building a Culture of Innovation and Excellence
          </p>
        </div>
        <div
          ref={detailsRef}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        >
          <EventDetail icon={<FaCalendarAlt />} text="October 19, 2024" />
          <EventDetail icon={<FaMapMarkerAlt />} text="DPU Pharmacy, Pune" />
          <EventDetail icon={<FaUsers />} text="250+ Industry Leaders" />
        </div>
        <div ref={buttonRef} className="text-center">
          <a
            href="#registration"
            className="bg-[#E0A75E] text-[#6c0707] px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#6c0707] hover:text-[#E0A75E] transition duration-300 inline-block transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
