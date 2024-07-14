"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EventDetail = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
    <div className="text-3xl text-[#E0A75E] mr-4">{icon}</div>
    <span className="text-lg text-[#6c0707]">{text}</span>
  </div>
);

const WelcomeSection: React.FC = () => {
  return (
    <section id="home" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#6c0707] mb-6">
            Welcome to CEO Conclave
          </h1>
          <p className="text-xl md:text-2xl text-[#E0A75E] mb-8">
            Nurturing the Future of the Pharmaceuticals Industry
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <EventDetail icon={<FaCalendarAlt />} text="September 15-16, 2024" />
          <EventDetail
            icon={<FaMapMarkerAlt />}
            text="DPU Convention Center, Pune"
          />
          <EventDetail icon={<FaUsers />} text="500+ Industry Leaders" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="#registration"
            className="bg-[#6c0707] text-[#F5E7B2] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E0A75E] hover:text-[#6c0707] transition duration-300"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
