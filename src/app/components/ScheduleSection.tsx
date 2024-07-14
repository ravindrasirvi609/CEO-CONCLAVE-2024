"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaUser } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ScheduleItem = ({
  time,
  title,
  speaker,
}: {
  time: string;
  title: string;
  speaker: string;
}) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md mb-4"
    variants={fadeIn}
  >
    <div className="flex items-center mb-2">
      <FaClock className="text-[#E0A75E] mr-2" />
      <span className="font-semibold text-[#6c0707]">{time}</span>
    </div>
    <h3 className="text-xl font-bold text-[#6c0707] mb-2">{title}</h3>
    <div className="flex items-center">
      <FaUser className="text-[#E0A75E] mr-2" />
      <span className="text-[#6c0707]">{speaker}</span>
    </div>
  </motion.div>
);

const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    {
      time: "09:00 AM - 10:00 AM",
      title: "Registration and Networking",
      speaker: "N/A",
    },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Keynote: The Future of Pharma",
      speaker: "Multiple Speakers, Announcing Soon",
    },
    {
      time: "11:45 AM - 01:00 PM",
      title: "Panel: Regulatory Challenges in 2024",
      speaker: "Multiple Speakers, Announcing Soon",
    },
    {
      time: "02:00 PM - 03:30 PM",
      title: "Workshop: AI in Drug Discovery",
      speaker: "Multiple Speakers, Announcing Soon",
    },
    {
      time: "03:45 PM - 05:00 PM",
      title: "Closing Remarks and Networking",
      speaker: "Organizing Committee",
    },
  ];

  return (
    <section id="schedule" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-[#6c0707] mb-12"
        >
          Event Schedule
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {scheduleItems.map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
