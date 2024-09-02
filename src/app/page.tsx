import React from "react";
import { Metadata } from "next";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import ScheduleSection from "./components/ScheduleSection";
import RegistrationSection from "./components/RegistrationSection";
import ContactSection from "./components/ContactSection";
import OrganizationsSection from "./components/OrganizationsSection";
import YouTubeVideosSection from "./components/YouTubeVideosSection";
import PastEventsSection from "./components/PastEventsSection";
import SpeakersSection from "./components/SpeakerSection";

export const metadata: Metadata = {
  title: "CEO Conclave 2024: Shaping the Future of Pharmaceuticals",
  description:
    "Join industry leaders at the CEO Conclave 2024 to explore innovation, excellence, and the future of the pharmaceutical industry. Register now for insights, networking, and growth opportunities.",
  openGraph: {
    title: "CEO Conclave 2024: Shaping the Future of Pharmaceuticals",
    description:
      "Join industry leaders at the CEO Conclave 2024 to explore innovation, excellence, and the future of the pharmaceutical industry. Register now for insights, networking, and growth opportunities.",
  },
  twitter: {
    title: "CEO Conclave 2024: Shaping the Future of Pharmaceuticals",
    description:
      "Join industry leaders at the CEO Conclave 2024 to explore innovation, excellence, and the future of the pharmaceutical industry. Register now for insights, networking, and growth opportunities.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5E7B2]">
      <WelcomeSection />
      <AboutSection />
      <SpeakersSection />
      <OrganizationsSection />
      <ScheduleSection />
      <PastEventsSection />
      <RegistrationSection />
      <YouTubeVideosSection />
      <ContactSection />
    </div>
  );
}
