import React from "react";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import ScheduleSection from "./components/ScheduleSection";
import RegistrationSection from "./components/RegistrationSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5E7B2]">
      <WelcomeSection />
      <AboutSection />
      <ScheduleSection />
      <RegistrationSection />
      <ContactSection />
    </div>
  );
}
